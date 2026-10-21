-- Le Chronoscope : base de données. À coller dans Supabase > SQL Editor > New query, puis Run.

create table if not exists public.docs (
  path text primary key,
  col text not null,
  data jsonb not null,
  owner uuid not null default auth.uid(),
  updated_at timestamptz not null default now()
);
create index if not exists docs_col_idx on public.docs (col);
alter table public.docs enable row level security;

-- Lecture : tout joueur connecté lit les données communes ; la progression privée n'est lisible que par son propriétaire.
drop policy if exists docs_read on public.docs;
create policy docs_read on public.docs for select to authenticated
  using (col not like 'data/users/%' or col = 'data/users/' || auth.uid()::text);

-- Écriture : chacun n'écrit que ses propres documents.
drop policy if exists docs_insert on public.docs;
create policy docs_insert on public.docs for insert to authenticated
  with check (
    owner = auth.uid() and (
      (col = 'players' and path = 'players/' || auth.uid()::text) or
      (col = 'scores'  and path = 'scores/'  || auth.uid()::text) or
      (col = 'duels' and path like 'duels/%') or
      (col = 'data/users/' || auth.uid()::text and path like 'data/users/' || auth.uid()::text || '/%')
    )
  );
drop policy if exists docs_update on public.docs;
create policy docs_update on public.docs for update to authenticated
  using (owner = auth.uid())
  with check (
    owner = auth.uid() and (
      (col = 'players' and path = 'players/' || auth.uid()::text) or
      (col = 'scores'  and path = 'scores/'  || auth.uid()::text) or
      (col = 'duels' and path like 'duels/%') or
      (col = 'data/users/' || auth.uid()::text and path like 'data/users/' || auth.uid()::text || '/%')
    )
  );
drop policy if exists docs_delete on public.docs;
create policy docs_delete on public.docs for delete to authenticated using (owner = auth.uid());

-- Abonnements aux notifications
create table if not exists public.push_subs (
  endpoint text primary key,
  user_id uuid not null default auth.uid(),
  sub jsonb not null,
  created_at timestamptz not null default now()
);
alter table public.push_subs enable row level security;
drop policy if exists push_own on public.push_subs;
create policy push_own on public.push_subs for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Mises à jour en direct (classement, défis)
alter publication supabase_realtime add table public.docs;
