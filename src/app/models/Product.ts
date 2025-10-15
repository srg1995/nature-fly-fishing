import { ProductSize } from "@/app/models/ProductSize";
import { Type } from "@/app/models/type";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category_id: number;
  category: Type;
  product_sizes: ProductSize[];
}
