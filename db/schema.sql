create table public.categories (
  id serial not null,
  name text not null,
  description text null,
  constraint categories_pkey primary key (id),
  constraint categories_name_key unique (name)
) TABLESPACE pg_default;

create table public.order_items (
  id serial not null,
  order_id integer null,
  product_size_id integer null,
  quantity integer not null,
  price numeric(10, 2) not null,
  constraint order_items_pkey primary key (id),
  constraint order_items_order_id_fkey foreign KEY (order_id) references orders (id) on delete CASCADE,
  constraint order_items_product_size_id_fkey foreign KEY (product_size_id) references product_sizes (id)
) TABLESPACE pg_default;

create table public.orders (
  id serial not null,
  user_id uuid null,
  total numeric(10, 2) not null,
  status text null default 'pending' :: text,
  created_at timestamp without time zone null default now(),
  constraint orders_pkey primary key (id),
  constraint orders_user_id_fkey foreign KEY (user_id) references auth.users (id)
) TABLESPACE pg_default;

create table public.product_images (
  id serial not null,
  product_id integer null,
  type character varying(10) not null,
  url text not null,
  constraint product_images_pkey primary key (id),
  constraint product_images_product_id_fkey foreign KEY (product_id) references products (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.product_sizes (
  id serial not null,
  product_id integer null,
  size_id integer null,
  stock integer null default 0,
  price numeric(10, 2) null,
  constraint product_sizes_pkey primary key (id),
  constraint product_sizes_product_id_fkey foreign KEY (product_id) references products (id) on delete CASCADE,
  constraint product_sizes_size_id_fkey foreign KEY (size_id) references sizes (id)
) TABLESPACE pg_default;

create table public.products (
  id serial not null,
  name text not null,
  description text null,
  category_id integer null,
  price_base numeric(10, 2) not null,
  image_url text null,
  constraint products_pkey primary key (id),
  constraint products_category_id_fkey foreign KEY (category_id) references categories (id)
) TABLESPACE pg_default;

create table public.sizes (
  id serial not null,
  label text not null,
  constraint sizes_pkey primary key (id),
  constraint sizes_label_key unique (label)
) TABLESPACE pg_default;