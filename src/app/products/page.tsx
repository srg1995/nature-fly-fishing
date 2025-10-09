import React, { JSX, Suspense, use } from "react";
import { getProducts } from "../services/products";
import Skeleton from "./components/Skeleton";
import Items from "./components/Items";
import Input from "../components/Input";
import PriceRange from "../components/PriceRange";
import Badge from "../components/Badge";
import Select from "../components/Select";

export default function Articles(): JSX.Element {
  const products = use(getProducts());
  const options = ["Más relevantes", "Menor precio", "Mayor precio"];
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
          <div className="flex flex-col gap-2 px-4">
            <Input text="Efemeras" />
            <Input text="Perdigones" />
            <Input text="Ninfas" />
          </div>
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Tamaño
          </h3>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <Badge text="#8" />
            <Badge text="#10" />
            <Badge text="#12" />
            <Badge text="#14" />
            <Badge text="#16" />
            <Badge text="#18" />
          </div>
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Precio
          </h3>
          <div className="@container">
            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
              <div className="flex h-[38px] w-full pt-1.5">
                <PriceRange min={0} max={100} step={1} />
              </div>
            </div>
          </div>
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
            <Items data={products} />
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
