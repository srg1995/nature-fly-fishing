"use client";
import { Product } from "@/app/models/Product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { JSX } from "react";

interface ProductProps {
  data: Product[];
}

export default function Items({ data }: ProductProps): JSX.Element {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((product) => (
        <div
          key={product.id}
          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          <div className="relative aspect-square w-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={product?.image_url || "/images/fly.png"}
              alt={product.description}
              className="transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/50 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 md:flex">
            <h3 className="mb-2 overflow-hidden text-center text-3xl font-semibold text-white">
              {product.name}
            </h3>

            <p className="text-tertiary text-xl leading-normal font-bold">
              A partir de {product.price_base}€
            </p>
          </div>

          <div className="absolute right-2 bottom-2 left-2 block rounded bg-black/60 p-2 text-center md:hidden">
            <h3 className="truncate text-2xl font-semibold text-white">
              {product.name}
            </h3>
            <p className="text-tertiary text-base font-bold">
              Desde {product.price_base}€
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
