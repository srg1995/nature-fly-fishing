import React, { JSX } from "react";

import InputText from "@/app/components/InputText";

interface RangeProps {
  filters: number;
}
export default function Range({ filters }: RangeProps): JSX.Element {
  return (
    <div className="flex flex-nowrap gap-2">
      <InputText label="Desde" placeholder="0€" />
      <InputText label="Hasta" placeholder={`${filters}€`} />
    </div>
  );
}
