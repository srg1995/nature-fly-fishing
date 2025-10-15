"use client";
import React, { JSX, Suspense, useEffect, useState } from "react";
import { Product } from "@/app/models/Product";
import { Size } from "@/app/models/size";
import { Type } from "@/app/models/type";
import CheckboxGroup from "@/app/products/components/CheckboxGroup";
import BadgeGroup from "@/app/products/components/BadgeGroup";
import Skeleton from "@/app/products/components/Skeleton";
import Items from "@/app/products/components/Items";
import Select from "@/app/components/Select";
import Range from "@/app/products/components/Range";
interface ProductsProps {
  products: Product[];
  categories: Type[];
  sizes: Size[];
  options: string[];
}
export default function Products({
  products,
  categories,
  sizes,
  options,
}: ProductsProps): JSX.Element {
  const [productsData, setProductsData] = useState<Product[]>(products);
  const [categoriesData, setCategoriesData] = useState<Type[]>(() =>
    categories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      active: false,
    })),
  );

  const [sizesData, setSizesData] = useState<Size[]>(() =>
    sizes.map((size) => ({
      id: size.id,
      label: size.label,
      active: false,
    })),
  );
  useEffect(() => {
    const filtered = products.filter((p) => {
      const activeCategories = categoriesData
        .filter((c) => c.active)
        .map((c) => c.name);

      const activeSizes = sizesData.filter((s) => s.active).map((s) => s.label);

      if (activeCategories.length === 0 && activeSizes.length === 0)
        return true;

      const matches = p.product_sizes.some(
        (ps) =>
          (activeSizes.length === 0 || activeSizes.includes(ps.size.label)) &&
          (activeCategories.length === 0 ||
            activeCategories.includes(p.category?.name)),
      );

      return matches;
    });

    setProductsData(filtered);
  }, [categoriesData, sizesData, products]);

  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 justify-center gap-1 px-6 py-5">
        <div className="layout-content-container flex w-80 flex-col">
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Filtrar
          </h3>
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Tipo de Mosca
          </h3>
          <CheckboxGroup
            filters={categoriesData}
            onChangeFilters={setCategoriesData}
          />
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Tamaño
          </h3>
          <BadgeGroup filters={sizesData} onChangeFilters={setSizesData} />
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Precio
          </h3>

          <Range />
        </div>
        <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="tracking-light text-primary min-w-72 text-[32px] leading-tight font-bold">
              Moscas, Ninfas y Ahogadas
            </p>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <Select options={options} />
          </div>

          <Suspense fallback={<Skeleton />}>
            <Items data={productsData} />
          </Suspense>
          <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
              <div
                className="text-primary"
                data-icon="CaretLeft"
                data-size="18px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </div>
            </a>
            <a
              className="bg-secondary text-primary flex size-10 items-center justify-center rounded-full text-sm leading-normal font-bold tracking-[0.015em]"
              href="#"
            >
              1
            </a>
            <a
              className="text-primary flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal"
              href="#"
            >
              2
            </a>
            <a
              className="text-primary flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal"
              href="#"
            >
              3
            </a>
            <span className="text-primary flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal">
              ...
            </span>
            <a
              className="text-primary flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal"
              href="#"
            >
              10
            </a>
            <a href="#" className="flex size-10 items-center justify-center">
              <div
                className="text-primary"
                data-icon="CaretRight"
                data-size="18px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
