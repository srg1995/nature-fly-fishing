import React, { JSX } from "react";
import PriceRange from "@/app/components/PriceRange";

interface RangeProps {
  filters: number;
}
export default function Range({ filters }: RangeProps): JSX.Element {
  return (
    <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
      <div className="flex h-[38px] w-full pt-1.5">
        <PriceRange min={0} max={filters} step={1} />
      </div>
      <div className="flex w-full justify-between">
        <span>min 0€</span> <span>max {filters}€</span>
      </div>
    </div>
  );
}
