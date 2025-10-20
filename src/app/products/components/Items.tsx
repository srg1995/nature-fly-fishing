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
          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
          onClick={() => {
            router.push(`/products/${product.id}`);
          }}
        >
          <Image
            width={220}
            height={220}
            src="/images/bg-header.png"
            alt="Mosca Adams"
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <h3 className="mb-2 text-center text-xl font-semibold text-white">
              {product.description}
            </h3>
            <p className="px-4 text-center text-sm text-gray-200">
              {product.description}
            </p>
            <p className="text-tertiary text-xl leading-normal font-bold">
              Desde {product.price} €
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
