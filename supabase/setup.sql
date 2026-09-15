-- Run once in the Supabase SQL Editor for the NanyVet project.
create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- The web app uses the server-only service-role key. No browser policy is needed.
revoke all on table public.site_content from anon, authenticated;

insert into storage.buckets (id, name, public)
values ('nanyvet', 'nanyvet', true)
on conflict (id) do update set public = true;

-- Image writes happen only through the protected server route, using the service-role key.
drop policy if exists "Public can view NanyVet images" on storage.objects;
create policy "Public can view NanyVet images"
on storage.objects for select
to public
using (bucket_id = 'nanyvet');
