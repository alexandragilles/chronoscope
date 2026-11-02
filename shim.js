/* PONT SUPABASE : fournit au jeu la même interface que dans Claude (db, user), plus la connexion et les notifications */
(function () {
  'use strict';
  const CFG = window.CHRONO_CONFIG || {};
  const ok = CFG.supabaseUrl && CFG.supabaseKey && window.supabase && window.supabase.createClient;
  const sb = ok ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true } }) : null;
  const H = location.hash || '';
  let REC = /type=recovery/.test(H), LERR = '';
  try { if (REC) sessionStorage.setItem('chrono.recovery', '1'); else if (sessionStorage.getItem('chrono.recovery')) REC = true; } catch (e) { /* ignoré */ }
  if (/error_code=|error=/.test(H)) { const m = H.match(/error_description=([^&]*)/); LERR = m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : 'lien invalide'; }
  window.CHRONO_SB = sb;
  if (sb) sb.auth.onAuthStateChange(ev => { if (ev === 'PASSWORD_RECOVERY') { window.CHRONO_RECOVERY = true; window.dispatchEvent(new Event('chrono-recovery')); } });

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
    sendReset: async (email) => { const r = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname }); if (r.error) throw r.error; },
    setPassword: async (pass) => { const r = await sb.auth.updateUser({ password: pass }); if (r.error) throw r.error; },
    checkPassword: async (pass) => { const s = await session(); const em = s && s.user && s.user.email; if (!em) throw new Error('session'); const r = await sb.auth.signInWithPassword({ email: em, password: pass }); if (r.error) throw r.error; },
    deleteAccount: async () => { const r = await sb.rpc('delete_my_account'); if (r.error) throw r.error; await sb.auth.signOut(); },
    recovery: REC,
    linkError: LERR,
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
  /* mise à jour automatique : si une nouvelle version est publiée, on recharge */
  function checkUpdate() {
    const cur = (document.querySelector('script[src^="app.js"]') || {}).getAttribute && document.querySelector('script[src^="app.js"]').getAttribute('src');
    fetch('index.html?u=' + Date.now(), { cache: 'no-store' }).then(r => r.text()).then(t => {
      const m = t.match(/src="(app\.js\?v=[^"]+)"/);
      if (m && cur && m[1] !== cur && !REC && !/access_token|type=recovery/.test(location.hash)) {
        const reg = navigator.serviceWorker && navigator.serviceWorker.getRegistration ? navigator.serviceWorker.getRegistration() : Promise.resolve(null);
        reg.then(g => g && g.update()).catch(() => {}).then(() => { try { if (sessionStorage.getItem('chrono.upd') === m[1]) return; sessionStorage.setItem('chrono.upd', m[1]); } catch (e) { return; } location.reload(); });
      }
    }).catch(() => {});
  }
  window.addEventListener('load', () => setTimeout(checkUpdate, 1500));
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkUpdate(); });
})();
