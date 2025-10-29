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
    'MoscaXX',
    'Descripcion_MOSCA',
    '1',
    '1.50',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01R.JPG'
  );

-- Obtener el id del producto recién creado
SELECT
  id,
  name
FROM
  products
WHERE
  name ILIKE 'MoscaXX';

-- Añadir a un producto los tamaños y precios correspondientes
INSERT INTO
  product_sizes ("product_id", "size_id", "stock", "price")
VALUES
  ('product_idXX', '1', '10', '1.50'),
  ('product_idXX', '2', '10', '1.50'),
  ('product_idXX', '3', '10', '1.50'),
  ('product_idXX', '4', '10', '1.75'),
  ('product_idXX', '5', '10', '1.75'),
  ('product_idXX', '6', '10', '2.00'),
  ('product_idXX', '7', '10', '2.00'),
  ('product_idXX', '8', '10', '2.00');

-- Añadir las imágenes de un producto
INSERT INTO
  product_images ("product_id", "type", "url")
VALUES
  (
    'product_idXX',
    'Full',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01Full.JPG'
  ),
  (
    'product_idXX',
    'R',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01R.JPG'
  ),
  (
    'product_idXX',
    'L',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01L.JPG'
  ),
  (
    'product_idXX',
    'F',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01F.JPG'
  ),
  (
    'product_idXX',
    'B',
    'https://ymdxxiwcvufgtxcxwppe.supabase.co/storage/v1/object/public/products/MoscaXX/MoscaXX01B.JPG'
  );

-- Verificar que se insertó correctamente el producto, sus tallas y sus imágenes
SELECT
  p.id AS product_id,
  p.name AS product_name,
  p.description,
  p.price_base,
  p.image_url AS main_image,
  c.name AS category_name,
  json_agg(
    DISTINCT jsonb_build_object(
      'size_id',
      ps.size_id,
      'stock',
      ps.stock,
      'price',
      ps.price
    )
  ) AS sizes,
  json_agg(
    DISTINCT jsonb_build_object('type', pi.type, 'url', pi.url)
  ) AS images
FROM
  products p
  LEFT JOIN categories c ON p.category_id = c.id
  LEFT JOIN product_sizes ps ON ps.product_id = p.id
  LEFT JOIN product_images pi ON pi.product_id = p.id
WHERE
  p.id = product_idXX
GROUP BY
  p.id,
  c.name
ORDER BY
  p.id;