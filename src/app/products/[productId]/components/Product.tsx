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

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(parseInt(e.target.value));
    setQuantity(1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
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

    //si el eleento ya existe en el carrito, actualizar la cantidad y si no lo añade normal
    const existingIndex = shoppingCart.findIndex(
      (item) => item.product === product?.name && item.size === sizeProduct,
    );
    console.log(product);
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
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-6 md:flex-row">
      <div className="flex-1">
        <Image
          width={220}
          height={220}
          src="/images/bg-header.png"
          alt="Mosca Adams"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-3xl font-bold">{product?.name}</h1>
        <p className="text-gray-600">{product?.description}</p>
        <p className="text-xl font-semibold">{product?.price.toFixed(2)} €</p>

        <div>
          <Select>
            {sizeOptions &&
              sizeOptions.map((s) => (
                <option key={s.id} value={s.size.id}>
                  {s.size.label} ({s.stock} disponibles)
                </option>
              ))}
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <InputNumber
            label="Cantidad:"
            value={quantity.toString()}
            onChange={handleQuantityChange}
            min={1}
            max={
              sizeOptions?.find((s) => s.size.id === selectedSize)?.stock || 1
            }
          />
        </div>

        <ButtonFull
          onClick={handleAddToCart}
          disabled={sizeOptions?.length === 0}
          text="Añadir al carrito"
        />
      </div>
    </div>
  );
}
