create table if not exists public.admins (user_id uuid primary key);
alter table public.admins enable row level security;

drop policy if exists admins_read on public.admins;
create policy admins_read on public.admins for select to authenticated using (true);

insert into public.admins (user_id)
  select id from auth.users where email = 'alexandragilles02@gmail.com'
  on conflict do nothing;

drop policy if exists docs_insert on public.docs;
create policy docs_insert on public.docs for insert to authenticated
  with check (
    owner = auth.uid() and (
      (col = 'players' and path = 'players/' || auth.uid()::text) or
      (col = 'scores'  and path = 'scores/'  || auth.uid()::text) or
      (col = 'votes'   and path = 'votes/'   || auth.uid()::text) or
      (col = 'duels' and path like 'duels/%') or
      (col = 'ideas' and path like 'ideas/%') or
      (col = 'admin' and exists (select 1 from public.admins a where a.user_id = auth.uid())) or
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
      (col = 'votes'   and path = 'votes/'   || auth.uid()::text) or
      (col = 'duels' and path like 'duels/%') or
      (col = 'ideas' and path like 'ideas/%') or
      (col = 'admin' and exists (select 1 from public.admins a where a.user_id = auth.uid())) or
      (col = 'data/users/' || auth.uid()::text and path like 'data/users/' || auth.uid()::text || '/%')
    )
  );
