import InputCheckbox from "@/app/components/InputCheckbox";
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
        <InputCheckbox
          text="La dirección de facturación es la misma que la de envío"
          checked={true}
        />
      </div>
    </div>
  );
}
