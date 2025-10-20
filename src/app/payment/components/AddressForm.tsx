import InputText from "@/app/components/InputText";
import React from "react";

export default function AddressForm() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="col-span-1">
        <InputText label="Nombre" placeholder="Tu nombre" />
      </div>
      <div className="col-span-2">
        <InputText label="Apellidos" placeholder="Tus apellidos" />
      </div>

      <div className="col-span-2">
        <InputText
          label="Correo Electrónico"
          placeholder="Tu correo electrónico"
        />
      </div>
      <div className="col-span-1">
        <InputText label="Teléfono" placeholder="Tu teléfono" />
      </div>

      <div className="col-span-3">
        <InputText label="Dirección" placeholder="Tu dirección" />
      </div>
      <InputText label="Ciudad" placeholder="Tu ciudad" />

      <InputText label="Código Postal" placeholder="Tu código postal" />

      <InputText label="País" placeholder="Tu país" />

      <div className="col-span-3">
        <label className="flex flex-row gap-x-3 py-3">
          <input
            type="checkbox"
            className="text-tertiary checked:bg-tertiary checked:border-tertiary border-accent focus:border-accent h-5 w-5 rounded border-2 bg-transparent checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
          />
          <p className="text-primary text-base leading-normal font-normal">
            La dirección de facturación es la misma que la de envío
          </p>
        </label>
      </div>
    </div>
  );
}
