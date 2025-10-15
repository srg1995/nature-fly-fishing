import React, { JSX, use } from "react";
import { getCategories, getProducts, getSizes } from "@/app/services/products";
import Products from "@/app/products/components/Products";

export default function Articles(): JSX.Element {
  const products = use(getProducts());
  const options = ["Más relevantes", "Menor precio", "Mayor precio"];
  const sizes = use(getSizes());
  const categories = use(getCategories());

  return (
    <Products
      products={products}
      categories={categories}
      sizes={sizes}
      options={options}
    />
  );
}
