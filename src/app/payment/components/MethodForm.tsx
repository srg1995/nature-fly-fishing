"use client";
import InputText from "@/app/components/InputText";
import RadioGroup from "@/app/components/RadioGroup";
import { RadioGroupOption } from "@/app/models/form";
import React, { useState } from "react";

export default function MethodForm() {
  const paymentOptions: RadioGroupOption[] = [
    { id: 0, label: "Bizum" },
    { id: 1, label: "PayPal" },
    { id: 2, label: "Tarjeta de Crédito/Débito", disabled: true },
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number>(1);

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <RadioGroup
        options={paymentOptions}
        selectedOption={selectedPaymentMethod}
        onChange={setSelectedPaymentMethod}
      />

      <div className="col-span-3 mt-4 flex justify-center">
        <button className="bg-accent text-primary flex h-12 max-w-[480px] min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 text-base leading-normal font-bold tracking-[0.015em]">
          <span className="truncate">Realizar Pedido</span>
        </button>
      </div>
    </div>
  );
}
