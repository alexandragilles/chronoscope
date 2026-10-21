// Envoie une notification au joueur visé par un défi personnel.
// Déclenchée par un Database Webhook sur l'insertion dans public.docs.
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2.117.2";

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

Deno.serve(async (req) => {
  if (req.headers.get("x-webhook-secret") !== Deno.env.get("WEBHOOK_SECRET")) return new Response("unauthorized", { status: 401 });
  const body = await req.json().catch(() => ({}));
  const rec = body.record;
  if (!rec || rec.col !== "duels" || !rec.data || !rec.data.to || body.type !== "INSERT") return new Response("ignored");
  const env = Deno.env.toObject();
  let key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY || "";
  if (!key && env.SUPABASE_SECRET_KEYS) { try { const o = JSON.parse(env.SUPABASE_SECRET_KEYS); key = Object.values(o)[0] as string; } catch (_e) { /* format inconnu */ } }
  if (!key) return new Response("missing service key", { status: 500 });
  const sb = createClient(env.SUPABASE_URL, key);
  const { data: player } = await sb.from("docs").select("data").eq("path", "players/" + rec.data.by).maybeSingle();
  const name = String(player?.data?.name || "Un joueur").slice(0, 24);
  const act = ROMAN[Number(rec.data.act) || 0] || "";
  const { data: subs } = await sb.from("push_subs").select("endpoint, sub").eq("user_id", rec.data.to);
  webpush.setVapidDetails(Deno.env.get("VAPID_SUBJECT")!, Deno.env.get("VAPID_PUBLIC_KEY")!, Deno.env.get("VAPID_PRIVATE_KEY")!);
  const payload = JSON.stringify({ title: "Nouveau défi !", body: `${name} te lance un défi sur l'acte ${act}. À toi de jouer !`, url: "./#arena", tag: "defi-" + rec.path });
  let sent = 0;
  for (const s of subs || []) {
    try { await webpush.sendNotification(s.sub, payload); sent++; }
    catch (e) { const code = (e as { statusCode?: number }).statusCode; if (code === 404 || code === 410) await sb.from("push_subs").delete().eq("endpoint", s.endpoint); }
  }
  return new Response(JSON.stringify({ sent }), { headers: { "content-type": "application/json" } });
});
