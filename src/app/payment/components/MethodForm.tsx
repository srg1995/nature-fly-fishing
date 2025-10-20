import React from "react";

export default function MethodForm() {
  return (
    <form>
      <div className="flex flex-col gap-3 p-4">
        <label className="border-accent flex items-center gap-4 rounded-lg border border-solid p-[15px]">
          <input
            type="radio"
            className="checked:border-tertiary checked:focus:border-tertiary border-accent h-5 w-5 border-2 bg-transparent text-transparent checked:bg-[image:--radio-dot-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
            name="81ba45c3-86a4-492f-8b3f-c7704e5cf154"
            checked
          />
          <div className="flex grow flex-col">
            <p className="text-primary text-sm leading-normal font-medium">
              Tarjeta de Crédito
            </p>
          </div>
        </label>
        <label className="border-accent flex items-center gap-4 rounded-lg border border-solid p-[15px]">
          <input
            type="radio"
            className="checked:border-tertiary checked:focus:border-tertiary border-accent h-5 w-5 border-2 bg-transparent text-transparent checked:bg-[image:--radio-dot-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
            name="81ba45c3-86a4-492f-8b3f-c7704e5cf154"
          />
          <div className="flex grow flex-col">
            <p className="text-primary text-sm leading-normal font-medium">
              PayPal
            </p>
          </div>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
            Número de Tarjeta
          </p>
          <input className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0" />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
            Fecha de Expiración
          </p>
          <input className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0" />
        </label>
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
            CVC
          </p>
          <input className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0" />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
            Nombre en la Tarjeta
          </p>
          <input className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0" />
        </label>
      </div>
      <div className="flex px-4 py-3">
        <button className="bg-accent text-primary flex h-12 max-w-[480px] min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-5 text-base leading-normal font-bold tracking-[0.015em]">
          <span className="truncate">Realizar Pedido</span>
        </button>
      </div>
    </form>
  );
}
