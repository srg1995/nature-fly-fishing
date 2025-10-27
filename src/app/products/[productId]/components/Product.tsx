"use client";
import React, { useState, JSX } from "react";
import { Product } from "@/app/models/Product";
import Image from "next/image";
import ButtonFull from "@/app/components/ButtonFull";
import InputNumber from "@/app/components/InputNumber";
import Select from "@/app/components/Select";
import { useUserContext } from "@/app/context/userContext";
import Toast from "@/app/components/Toast";

interface ProductImage {
  type: "Full" | "R" | "L" | "F" | "B";
  url: string;
}

interface ProductProps {
  product: Product & { images: ProductImage[] };
}

export default function ProductItem({ product }: ProductProps): JSX.Element {
  const { shoppingCart, setShoppingCart } = useUserContext();
  const [selectedSize, setSelectedSize] = useState(
    product?.product_sizes[0]?.size.id || 0,
  );
  const [price, setPrice] = useState<number>(
    product?.product_sizes[0]?.price || 0,
  );
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Imagen principal que se muestra
  const [mainImage, setMainImage] = useState<string>(
    product?.images?.find((img) => img.type === "Full")?.url ||
      "/placeholder.png",
  );

  const sizeOptions = product?.product_sizes?.filter((s) => s.stock > 0);

  const handleSizeChange = (value: number) => {
    setSelectedSize(value);
    setPrice(
      product.product_sizes.find((ps) => ps.size.id === value)?.price || 0,
    );
    setQuantity(1);
  };

  const handleQuantityChange = (value: number) => {
    const maxStock =
      product?.product_sizes.find((s) => s.size.id === selectedSize)?.stock ||
      1;
    setQuantity(Math.min(Math.max(value, 1), maxStock));
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
    setShowToast(true);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  };

  return (
    <>
      {showToast && (
        <Toast
          message="✅ Producto añadido al carrito"
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 p-4 sm:p-6 md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-md">
            <Image
              src={mainImage}
              alt={product?.name || "Producto"}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-150"
            />
          </div>

          <div className="mt-4 flex w-full flex-nowrap justify-center gap-4">
            {product.images.map((img) => (
              <div
                key={img.type}
                className="relative h-20 w-20 cursor-pointer overflow-hidden rounded-2xl shadow-md"
                onMouseEnter={() => setMainImage(img.url)}
                onClick={() => setMainImage(img.url)}
              >
                <Image
                  src={img.url}
                  alt={`${product.name} ${img.type}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-5">
          <div>
            <h1 className="text-primary text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              {product?.name}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
              {product?.description}
            </p>
          </div>

          <p className="text-tertiary text-2xl font-semibold">
            {price.toFixed(2)} €
          </p>

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

          <div className="mt-4">
            <ButtonFull
              onClick={handleAddToCart}
              disabled={sizeOptions?.length === 0}
              text="Añadir al carrito"
            />
          </div>
        </div>
      </div>
    </>
  );
}
