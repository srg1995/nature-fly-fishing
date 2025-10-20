import { getProductById } from "@/app/services/products";
import React, { JSX, use } from "react";
import ProductItem from "./components/Product";

interface ProductIdProps {
  params: {
    productId: string;
  };
}

export default async function Product({
  params,
}: ProductIdProps): Promise<JSX.Element> {
  const { productId } = await params;
  //no puedo usar use porque no funciona con async/await
  const product = await getProductById(parseInt(productId));

  return (
    <div>
      <ProductItem product={product} />
    </div>
  );
}
