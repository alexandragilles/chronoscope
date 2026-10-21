/* PONT SUPABASE : fournit au jeu la même interface que dans Claude (db, user), plus la connexion et les notifications */
(function () {
  'use strict';
  const CFG = window.CHRONO_CONFIG || {};
  const ok = CFG.supabaseUrl && CFG.supabaseKey && window.supabase && window.supabase.createClient;
  const sb = ok ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true } }) : null;
  window.CHRONO_SB = sb;

  let sessionP = null;
  function session() {
    if (!sb) return Promise.resolve(null);
    if (!sessionP) sessionP = sb.auth.getSession().then(r => (r.data && r.data.session) || null).catch(() => null);
    return sessionP;
  }

  function colOf(path) { const p = path.split('/'); p.pop(); return p.join('/'); }
  function snapDoc(row, path) { return { id: path.split('/').pop(), exists: !!row, data: () => (row ? row.data : undefined) }; }

  function makeDb(uid) {
    function docRef(path) {
      return {
        id: path.split('/').pop(), path: path,
        get: async () => {
          const r = await sb.from('docs').select('data').eq('path', path).maybeSingle();
          if (r.error) throw { code: 'unavailable', message: r.error.message };
          return snapDoc(r.data, path);
        },
        set: async (data) => {
          const r = await sb.from('docs').upsert({ path: path, col: colOf(path), data: data, owner: uid, updated_at: new Date().toISOString() });
          if (r.error) throw { code: 'invalid_argument', message: r.error.message };
        },
        update: async (data) => {
          const cur = await docRef(path).get();
          return docRef(path).set(Object.assign({}, cur.exists ? cur.data() : {}, data));
        },
        delete: async () => { await sb.from('docs').delete().eq('path', path); },
        onSnapshot: (next, err) => watch(colOf(path), rows => { const r = rows.find(x => x.path === path); next(snapDoc(r, path)); }, err)
      };
    }
    function query(col, ord, lim) {
      const q = {
        orderBy: (f, dir) => query(col, { f: f, d: dir || 'asc' }, lim),
        limit: n => query(col, ord, n),
        doc: id => docRef(col + '/' + (id || rid())),
        add: async data => { const ref = docRef(col + '/' + rid()); await ref.set(data); return ref; },
        get: async () => { const rows = await fetchCol(col); return { docs: shape(rows, ord, lim) }; },
        onSnapshot: (next, err) => watch(col, rows => next({ docs: shape(rows, ord, lim) }), err)
      };
      return q;
    }
    function shape(rows, ord, lim) {
      let r = rows.slice();
      if (ord) r.sort((a, b) => { const x = a.data && a.data[ord.f], y = b.data && b.data[ord.f]; return (x > y ? 1 : x < y ? -1 : 0) * (ord.d === 'desc' ? -1 : 1); });
      if (lim) r = r.slice(0, lim);
      return r.map(row => ({ id: row.path.split('/').pop(), data: () => row.data }));
    }
    async function fetchCol(col) {
      const r = await sb.from('docs').select('path,data').eq('col', col).limit(1000);
      if (r.error) throw { code: 'unavailable', message: r.error.message };
      return r.data || [];
    }
    function watch(col, cb, err) {
      let alive = true, t = null;
      const load = () => fetchCol(col).then(rows => { if (alive) cb(rows); }).catch(e => { if (err) err(e); });
      load();
      const ch = sb.channel('c-' + col + '-' + rid()).on('postgres_changes', { event: '*', schema: 'public', table: 'docs', filter: 'col=eq.' + col }, () => { clearTimeout(t); t = setTimeout(load, 250); }).subscribe();
      const iv = setInterval(load, 60000);
      return () => { alive = false; clearInterval(iv); sb.removeChannel(ch); };
    }
    return { doc: docRef, collection: c => query(c, null, null) };
  }
  function rid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }

  window.claude = {
    use: async (name) => {
      const s = await session();
      if (!s) return null;
      const uid = s.user.id;
      if (name === 'db') return makeDb(uid);
      if (name === 'user') return { id: async () => uid, isOwner: () => false, canEdit: () => false, can: () => true };
      return null;
    }
  };

  /* ---------- connexion par code reçu par e-mail ---------- */
  window.CHRONO_AUTH = {
    available: !!sb,
    session: session,
    signUp: async (email, pass) => { const r = await sb.auth.signUp({ email: email, password: pass }); if (r.error) throw r.error; sessionP = null; return r.data; },
    signIn: async (email, pass) => { const r = await sb.auth.signInWithPassword({ email: email, password: pass }); if (r.error) throw r.error; sessionP = null; return r.data; },
    sendCode: async (email) => { const r = await sb.auth.signInWithOtp({ email: email, options: { shouldCreateUser: true } }); if (r.error) throw r.error; },
    verify: async (email, code) => { const r = await sb.auth.verifyOtp({ email: email, token: code, type: 'email' }); if (r.error) throw r.error; return r.data; },
    signOut: async () => { await sb.auth.signOut(); },
    email: async () => { const s = await session(); return s ? s.user.email : null; }
  };

  /* ---------- notifications ---------- */
  function b64ToU8(b) { const p = '='.repeat((4 - b.length % 4) % 4); const s = atob((b + p).replace(/-/g, '+').replace(/_/g, '/')); const o = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) o[i] = s.charCodeAt(i); return o; }
  window.CHRONO_PUSH = {
    supported: () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window,
    standalone: () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true,
    state: () => ('Notification' in window ? Notification.permission : 'unsupported'),
    enable: async () => {
      const s = await session(); if (!s) throw new Error('login');
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') throw new Error('denied');
      const reg = await navigator.serviceWorker.ready;
      let sub = await reg.pushManager.getSubscription();
      if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToU8(CFG.vapidPublicKey) });
      const j = sub.toJSON();
      const r = await sb.from('push_subs').upsert({ endpoint: j.endpoint, user_id: s.user.id, sub: j });
      if (r.error) throw r.error;
      return true;
    },
    isOn: async () => { try { if (!('serviceWorker' in navigator)) return false; const reg = await navigator.serviceWorker.ready; return !!(await reg.pushManager.getSubscription()) && Notification.permission === 'granted'; } catch (e) { return false; } }
  };

  if ('serviceWorker' in navigator) window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
})();
