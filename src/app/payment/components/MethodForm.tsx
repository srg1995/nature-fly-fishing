import InputText from "@/app/components/InputText";
import RadioGroup from "@/app/components/RadioGroup";
import { RadioGroupPaymentOption } from "@/app/models/form";
import React from "react";

export default function MethodForm() {
  const paymentOptions: RadioGroupPaymentOption[] = [
    { id: "bizum", label: "Bizum" },
    { id: "paypal", label: "PayPal" },
    { id: "card", label: "Tarjeta de Crédito/Débito" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <RadioGroup options={paymentOptions} />
      <InputText label="Número de Tarjeta" placeholder="Tu número de tarjeta" />
      <InputText label="Fecha de Expiración" placeholder="MM/AA" />
      <InputText label="CVC" placeholder="CVC" />
      <InputText
        label="Nombre en la Tarjeta"
        placeholder="Nombre como aparece en la tarjeta"
      />

      <div className="col-span-3 mt-4 flex justify-center">
        <button className="bg-accent text-primary flex h-12 max-w-[480px] min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 text-base leading-normal font-bold tracking-[0.015em]">
          <span className="truncate">Realizar Pedido</span>
        </button>
      </div>
    </div>
  );
}
