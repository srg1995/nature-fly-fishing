import ButtonSecondary from "@/app/components/ButtonSecondary";
import { BlogItem } from "@/app/models/blog";
import React, { JSX, useMemo } from "react";
interface FeaturedItemsProps {
  articulos: BlogItem[];
}
export default function FeaturedItems({
  articulos,
}: FeaturedItemsProps): JSX.Element {
  const articulosDestacados = useMemo(() => articulos.slice(0, 3), [articulos]);
  return (
    <>
      {articulosDestacados.map((articulo) => (
        <div className="p-4" key={articulo.id}>
          <div className="flex items-stretch justify-between gap-4 rounded-lg">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-primary text-base leading-tight font-bold">
                  {articulo.title}
                </p>
                <p className="text-tertiary text-sm leading-normal font-normal">
                  {articulo.summary}
                </p>
              </div>
              <ButtonSecondary text="Leer más" />
            </div>
            <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </div>
      ))}
    </>
  );
}
