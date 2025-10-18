import ButtonSecondary from "@/app/components/ButtonSecondary";
import { BlogItem } from "@/app/models/blog";
import React, { JSX } from "react";
interface ItemProps {
  article: BlogItem;
}
export default function Item({ article }: ItemProps): JSX.Element {
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-primary text-base leading-tight font-bold">
              {article.title}
            </p>
            <p className="text-tertiary text-sm leading-normal font-normal">
              {article.summary}
            </p>
          </div>
          <ButtonSecondary text="Leer más" />
        </div>
        <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}
