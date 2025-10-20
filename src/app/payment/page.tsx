"use client";
import React, { JSX } from "react";
import ShoppingCard from "./components/ShoppingCard";

export default function Payment(): JSX.Element {
  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex w-[512px] max-w-[960px] flex-1 flex-col py-5">
            <ShoppingCard />
            <h2 className="text-primary tracking-light px-4 pt-5 pb-3 text-left text-[28px] leading-tight font-bold">
              Información de Envío
            </h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Nombre
                </p>
                <input
                  placeholder="Tu nombre"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Dirección
                </p>
                <input
                  placeholder="Tu dirección"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Ciudad
                </p>
                <input
                  placeholder="Tu ciudad"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Código Postal
                </p>
                <input
                  placeholder="Tu código postal"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  País
                </p>
                <input
                  placeholder="Tu país"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Correo Electrónico
                </p>
                <input
                  placeholder="Tu correo electrónico"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                  Teléfono
                </p>
                <input
                  placeholder="Tu teléfono"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="px-4">
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
            <h2 className="text-primary tracking-light px-4 pt-5 pb-3 text-left text-[28px] leading-tight font-bold">
              Método de Pago
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
