-- Añadir un nuevo producto
INSERT INTO
  products (
    "name",
    "description",
    "category_id",
    "price_base",
    "image_url"
  )
VALUES
  (
    'Nombre_MOSCA',
    'Descripcion_MOSCA',
    '1',
    '1.50',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01R.JPG'
  );

-- Añadir a un producto los tamaños y precios correspondientes
INSERT INTO
  product_sizes ("product_id", "size_id", "stock", "price")
VALUES
  ('product_id', '1', '10', '1.50'),
  ('product_id', '2', '10', '1.50'),
  ('product_id', '3', '10', '1.50'),
  ('product_id', '4', '10', '1.75'),
  ('product_id', '5', '10', '1.75'),
  ('product_id', '6', '10', '2.00'),
  ('product_id', '7', '10', '2.00'),
  ('product_id', '8', '10', '2.00');

-- Añadir las imágenes de un producto
INSERT INTO
  product_images ("product_id", "type", "url")
VALUES
  (
    'product_id',
    'Full',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01Full.JPG'
  ),
  (
    'product_id',
    'R',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01R.JPG'
  ),
  (
    'product_id',
    'L',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01L.JPG'
  ),
  (
    'product_id',
    'F',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01F.JPG'
  ),
  (
    'product_id',
    'B',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/Mosca/Mosca01B.JPG'
  );