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
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))] gap-6">
      {data?.map((product) => (
        <div
          key={product.id}
          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          <Image
            width={220}
            height={220}
            src="/images/bg-header.png"
            alt={product.description}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:group-hover:scale-105"
          />

          <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/50 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 md:flex">
            <h3 className="mb-2 text-center text-xl font-semibold text-white">
              {product.description}
            </h3>
            <p className="truncate px-4 text-center text-sm text-gray-200">
              {product.description}
            </p>
            <p className="text-tertiary text-xl leading-normal font-bold">
              Desde {product.price} €
            </p>
          </div>

          <div className="absolute right-2 bottom-2 left-2 block rounded bg-black/60 p-2 text-center md:hidden">
            <h3 className="truncate text-lg font-semibold text-white">
              {product.description}
            </h3>
            <p className="truncate text-sm text-gray-200">
              {product.description}
            </p>
            <p className="text-tertiary text-base font-bold">
              Desde {product.price} €
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
