import React, { JSX, Suspense, use } from "react";
import { getProducts } from "../services/products";
import Skeleton from "../components/Skeleton";
import Items from "../components/Items";

export default function Articles(): JSX.Element {
  const products = use(getProducts());

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
          <div className="px-4">
            <label className="flex flex-row gap-x-3 py-3">
              <input
                type="checkbox"
                className="border-secondary text-accent checked:border-accent checked:bg-accent focus:border-secondary h-5 w-5 appearance-none rounded border-2 bg-transparent checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
              />
              <p className="text-primary text-base leading-normal font-normal">
                Efímeras
              </p>
            </label>
            <label className="flex flex-row gap-x-3 py-3">
              <input
                type="checkbox"
                className="border-secondary text-accent checked:border-accent checked:bg-accent focus:border-secondary h-5 w-5 rounded border-2 bg-transparent checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
              />
              <p className="text-primary text-base leading-normal font-normal">
                Perdigones
              </p>
            </label>
            <label className="flex flex-row gap-x-3 py-3">
              <input
                type="checkbox"
                className="border-secondary text-accent checked:border-accent checked:bg-accent focus:border-secondary h-5 w-5 rounded border-2 bg-transparent checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
              />

              <p className="text-primary text-base leading-normal font-normal">
                Ninfas
              </p>
            </label>
          </div>
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Tamaño
          </h3>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
              <p className="text-primary text-sm leading-normal font-medium">
                #12
              </p>
            </div>
            <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
              <p className="text-primary text-sm leading-normal font-medium">
                #14
              </p>
            </div>
            <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
              <p className="text-primary text-sm leading-normal font-medium">
                #16
              </p>
            </div>
            <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
              <p className="text-primary text-sm leading-normal font-medium">
                #18
              </p>
            </div>
            <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4 transition hover:scale-105">
              <p className="text-primary text-sm leading-normal font-medium">
                #20
              </p>
            </div>
          </div>
          <h3 className="text-primary px-4 pt-4 pb-2 text-lg leading-tight font-bold tracking-[-0.015em]">
            Precio
          </h3>
          <div className="@container">
            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
              <p className="text-primary w-full shrink-[3] text-base leading-normal font-medium">
                Rango de precios
              </p>
              <div className="flex h-[38px] w-full pt-1.5">
                <div className="bg-secondary flex h-1 w-full rounded-sm pr-[15%] pl-[60%]">
                  <div className="relative">
                    <div className="absolute -top-1.5 -left-3 flex flex-col items-center gap-1">
                      <div className="bg-accent size-4 rounded-full"></div>
                      <p className="text-primary text-sm leading-normal font-normal">
                        0
                      </p>
                    </div>
                  </div>
                  <div className="bg-accent h-1 flex-1 rounded-sm"></div>
                  <div className="relative">
                    <div className="absolute -top-1.5 -left-3 flex flex-col items-center gap-1">
                      <div className="bg-accent size-4 rounded-full"></div>
                      <p className="text-primary text-sm leading-normal font-normal">
                        100
                      </p>
                    </div>
                  </div>
                </div>
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
            <label className="flex min-w-40 flex-1 flex-col">
              <select className="form-input text-primary placeholder:text-secondary border-secondary focus:border-secondary flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border bg-[#f8fbfa] bg-[image:--select-button-svg] p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0">
                <option value="one">Ordenar por: Popularidad</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </label>
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
