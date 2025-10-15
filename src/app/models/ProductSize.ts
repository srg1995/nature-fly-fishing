import { Size } from "@/app/models/size";

export interface ProductSize {
  id: number;
  size: Size;
  size_id: number;
  product_id: number;
  stock: number;
}
