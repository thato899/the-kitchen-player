create type verification_status as enum ('pending', 'verified', 'rejected');
create type booking_status as enum ('draft', 'submitted', 'quoted', 'payment_pending', 'paid', 'cancelled');
create type payment_status as enum ('created', 'paid', 'failed', 'cancelled');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  verification_status verification_status not null default 'pending',
  role text not null default 'client',
  created_at timestamptz not null default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references profiles(id),
  event_type text not null,
  audience text not null,
  event_size text not null,
  location text not null,
  theme text,
  cooking_menu text not null,
  equipment text,
  venue_size text not null,
  organizer_email text not null,
  organizer_phone text not null,
  status booking_status not null default 'submitted',
  deposit_amount_cents integer not null default 0,
  created_at timestamptz not null default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id),
  paylink_id text,
  external_transaction_id text not null unique,
  amount_cents integer not null,
  status payment_status not null default 'created',
  raw_payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table gallery_albums (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  story text not null,
  price_tag text,
  cover_image_url text not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table expenses (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id),
  title text not null,
  amount_cents integer not null,
  spent_at date not null default current_date,
  created_at timestamptz not null default now()
);
