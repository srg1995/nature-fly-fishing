import PriceRange from "@/app/components/PriceRange";
import React from "react";

export default function Range() {
  return (
    <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
      <div className="flex h-[38px] w-full pt-1.5">
        <PriceRange min={0} max={100} step={1} />
      </div>
    </div>
  );
}
