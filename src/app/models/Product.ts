export interface Product {
  id: number;
  name: string;
  description: string;
  price_base: number;
  image_url: string;
  category_id: number;
  category: Type;
  product_sizes: ProductSize[];
}

export interface ProductSize {
  id: number;
  size: Size;
  size_id: number;
  product_id: number;
  stock: number;
  price: number;
}
export interface Size {
  id: number;
  label: string;
  active: boolean;
}
export interface ProductSelected {
  product: string;
  size: string;
  quantity: number;
  price: number;
  image?: string;
}
export interface Type {
  id: number;
  name: string;
  description: string;
  active: boolean;
}
