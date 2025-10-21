"use client";
import React, { JSX, useState } from "react";
import { Product } from "@/app/models/Product";
import Image from "next/image";
import ButtonFull from "@/app/components/ButtonFull";
import InputNumber from "@/app/components/InputNumber";
import Select from "@/app/components/Select";
import { useUserContext } from "@/app/context/userContext";

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps): JSX.Element {
  const { shoppingCart, setShoppingCart } = useUserContext();
  const [selectedSize, setSelectedSize] = useState(
    product?.product_sizes[0]?.size.id || 0,
  );
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = product?.product_sizes.filter((s) => s.stock > 0);

  const handleSizeChange = (value: number) => {
    setSelectedSize(value);
    setQuantity(1);
  };

  const handleQuantityChange = (value: number) => {
    const maxStock =
      product?.product_sizes.find((s) => s.size.id === selectedSize)?.stock ||
      1;
    if (value > maxStock) setQuantity(maxStock);
    else if (value < 1) setQuantity(1);
    else setQuantity(value);
  };

  const handleAddToCart = () => {
    const sizeProduct =
      product?.product_sizes.find((s) => s.size.id === selectedSize)?.size
        .label || "";

    const priceProduct =
      product.product_sizes.find((ps) => ps.size.id === selectedSize)?.price ||
      0;

    const existingIndex = shoppingCart.findIndex(
      (item) => item.product === product?.name && item.size === sizeProduct,
    );

    if (existingIndex >= 0) {
      const updatedCart = [...shoppingCart];
      updatedCart[existingIndex].quantity += quantity;
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([
        ...shoppingCart,
        {
          product: product?.name || "",
          size: sizeProduct,
          quantity,
          price: priceProduct,
        },
      ]);
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 p-4 sm:p-6 md:flex-row">
      {/* Imagen del producto */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-md">
          <Image
            width={600}
            height={600}
            src="/images/bg-header.png"
            alt={product?.name || "Producto"}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Detalles del producto */}
      <div className="flex flex-1 flex-col justify-center gap-5">
        <div>
          <h1 className="text-primary text-2xl font-bold sm:text-3xl md:text-4xl">
            {product?.name}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
            {product?.description}
          </p>
        </div>

        <p className="text-tertiary text-2xl font-semibold">
          {product?.price.toFixed(2)} €
        </p>

        {/* Selector de tamaño */}
        <div className="flex flex-col gap-2">
          <label className="text-primary text-sm font-medium">Tamaño</label>
          <Select onChange={handleSizeChange}>
            {sizeOptions &&
              sizeOptions.map((s) => (
                <option key={s.id} value={s.size.id}>
                  {s.size.label} ({s.stock} disponibles)
                </option>
              ))}
          </Select>
        </div>

        {/* Cantidad */}
        <div className="flex flex-col gap-2">
          <InputNumber
            label="Cantidad"
            value={quantity.toString()}
            onChange={handleQuantityChange}
            min={1}
            max={
              sizeOptions?.find((s) => s.size.id === selectedSize)?.stock || 1
            }
          />
        </div>

        {/* Botón */}
        <div className="mt-4">
          <ButtonFull
            onClick={handleAddToCart}
            disabled={sizeOptions?.length === 0}
            text="Añadir al carrito"
          />
        </div>
      </div>
    </div>
  );
}
