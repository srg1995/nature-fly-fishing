"use client";
import React, { JSX, Suspense, useEffect, useMemo, useState } from "react";
import { Product, Size, Type } from "@/app/models/Product";
import CheckboxGroup from "@/app/products/components/CheckboxGroup";
import BadgeGroup from "@/app/products/components/BadgeGroup";
import Skeleton from "@/app/products/components/Skeleton";
import Items from "@/app/products/components/Items";
import Select from "@/app/components/Select";
import Range from "@/app/products/components/Range";
import ButtonSecondary from "@/app/components/ButtonSecondary";
import Pagination from "@/app/products/components/Pagination";

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

  const [filtersOpen, setFiltersOpen] = useState(false);

  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    [products],
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

  const cleanFilters = () => {
    setCategoriesData((prev) => prev.map((c) => ({ ...c, active: false })));
    setSizesData((prev) => prev.map((s) => ({ ...s, active: false })));
  };

  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="relative flex flex-1 justify-center gap-1 px-6 py-5">
        {/* ------------------- FILTROS MOBILE ------------------- */}
        <button
          className="bg-accent fixed right-4 bottom-4 z-50 rounded-full p-4 text-white shadow-lg md:hidden"
          onClick={() => setFiltersOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>

        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
            filtersOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setFiltersOpen((prev) => !prev)}
        ></div>

        <div
          className={`fixed top-0 left-0 z-50 h-full w-72 transform bg-white shadow-xl transition-transform duration-300 md:hidden ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-bold">Filtros</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setFiltersOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-primary text-lg font-bold">Tipo de Mosca</h3>
            <CheckboxGroup
              filters={categoriesData}
              onChangeFilters={setCategoriesData}
            />

            <h3 className="text-primary text-lg font-bold">Tamaño</h3>
            <BadgeGroup filters={sizesData} onChangeFilters={setSizesData} />

            <h3 className="text-primary text-lg font-bold">Precio</h3>
            <Range filters={maxPrice} />

            <ButtonSecondary text="Limpiar Filtros" onClick={cleanFilters} />
          </div>
        </div>

        {/* ------------------- FILTROS DESKTOP ------------------- */}
        <div className="hidden w-80 flex-col gap-4 px-4 md:flex">
          <h3 className="text-primary text-lg font-bold">Filtrar</h3>
          <h3 className="text-primary text-lg font-bold">Tipo de Mosca</h3>
          <CheckboxGroup
            filters={categoriesData}
            onChangeFilters={setCategoriesData}
          />
          <h3 className="text-primary text-lg font-bold">Tamaño</h3>
          <BadgeGroup filters={sizesData} onChangeFilters={setSizesData} />
          <h3 className="text-primary text-lg font-bold">Precio</h3>
          <Range filters={maxPrice} />
          <ButtonSecondary text="Limpiar Filtros" onClick={cleanFilters} />
        </div>

        {/* ------------------- PRODUCTOS ------------------- */}
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
          <Pagination totalPages={1} currentPage={1} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  );
}
