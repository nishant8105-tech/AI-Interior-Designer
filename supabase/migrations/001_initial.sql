-- RoomIQ Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null default 'Untitled Room',
  room_type text not null default 'living_room',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Room analyses table
create table if not exists room_analyses (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade not null,
  image_url text,
  design_score int not null default 0,
  layout_score int not null default 0,
  lighting_score int not null default 0,
  storage_score int not null default 0,
  style_score int not null default 0,
  space_utilization_score int not null default 0,
  visual_balance_score int not null default 0,
  findings jsonb not null default '[]'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- Design reports table
create table if not exists design_reports (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade not null,
  analysis_id uuid references room_analyses(id) on delete set null,
  design_goal text not null default '',
  style text not null default '',
  summary text not null default '',
  improvements jsonb not null default '[]'::jsonb,
  budget_estimates jsonb not null default '{}'::jsonb,
  shopping_suggestions jsonb not null default '[]'::jsonb,
  new_score int not null default 0,
  created_at timestamptz not null default now()
);

-- Design DNA table
create table if not exists design_dna (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique not null,
  style_breakdown jsonb not null default '{}'::jsonb,
  preferred_colors jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Row Level Security policies
alter table projects enable row level security;
alter table room_analyses enable row level security;
alter table design_reports enable row level security;
alter table design_dna enable row level security;

-- Projects policies
create policy "Users can view their own projects"
  on projects for select
  using (auth.uid() = user_id);

create policy "Users can create their own projects"
  on projects for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own projects"
  on projects for update
  using (auth.uid() = user_id);

create policy "Users can delete their own projects"
  on projects for delete
  using (auth.uid() = user_id);

-- Room analyses policies
create policy "Users can view their own analyses"
  on room_analyses for select
  using (
    exists (
      select 1 from projects
      where projects.id = room_analyses.project_id
      and projects.user_id = auth.uid()
    )
  );

create policy "Users can create analyses for their projects"
  on room_analyses for insert
  with check (
    exists (
      select 1 from projects
      where projects.id = room_analyses.project_id
      and projects.user_id = auth.uid()
    )
  );

-- Design reports policies
create policy "Users can view their own reports"
  on design_reports for select
  using (
    exists (
      select 1 from projects
      where projects.id = design_reports.project_id
      and projects.user_id = auth.uid()
    )
  );

create policy "Users can create reports for their projects"
  on design_reports for insert
  with check (
    exists (
      select 1 from projects
      where projects.id = design_reports.project_id
      and projects.user_id = auth.uid()
    )
  );

-- Design DNA policies
create policy "Users can view their own design DNA"
  on design_dna for select
  using (auth.uid() = user_id);

create policy "Users can create their own design DNA"
  on design_dna for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own design DNA"
  on design_dna for update
  using (auth.uid() = user_id);

-- Indexes for performance
create index if not exists projects_user_id_idx on projects(user_id);
create index if not exists room_analyses_project_id_idx on room_analyses(project_id);
create index if not exists design_reports_project_id_idx on design_reports(project_id);
create index if not exists design_dna_user_id_idx on design_dna(user_id);
