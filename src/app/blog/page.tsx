import React, { JSX, use } from "react";
import InputSearch from "@/app/components/InputSearch";

import Badge from "@/app/components/Badge";

import { getItemsBlog } from "@/app/services/blog";
import Items from "@/app/blog/components/Items";
import FeaturedItems from "@/app/blog/components/FeaturedItems";

export default function Blog(): JSX.Element {
  const options = ["Todos", "Técnicas", "Noticias", "Consejos", "Experiencias"];
  const articles = use(getItemsBlog());

  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="tracking-light text-primary min-w-72 text-[32px] leading-tight font-bold">
                Blog de Pesca con Mosca
              </p>
            </div>
            <div className="px-4 py-3">
              <label className="flex h-12 w-full min-w-40 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div
                    className="text-tertiary bg-secondary flex items-center justify-center rounded-l-lg border-r-0 border-none pl-4"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <InputSearch text="Buscar artículos..." />
                </div>
              </label>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Artículos Recientes
            </h2>
            <Items articles={articles} />

            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Categorías
            </h2>

            <div className="flex flex-wrap gap-3 p-3 pr-4">
              {options.map((option, index) => (
                <Badge key={index} text={option} />
              ))}
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Artículos Destacados
            </h2>
            <FeaturedItems articles={articles} />
          </div>
        </div>
      </div>
    </div>
  );
}
