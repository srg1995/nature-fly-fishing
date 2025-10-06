import React from "react";

const Contact = () => {
  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="tracking-light text-primary min-w-72 text-[32px] leading-tight font-bold">
                Contáctanos
              </p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="text-primary pb-2 text-base leading-normal font-semibold">
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
                  Correo electrónico
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
                  Asunto
                </p>
                <input
                  placeholder="Asunto"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="text-primary pb-2 text-base leading-normal font-semibold">
                  Mensaje
                </p>
                <textarea
                  placeholder="Tu mensaje"
                  className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-start px-4 py-3">
              <button className="text-primary flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#38e07b] px-4 text-sm leading-normal font-bold tracking-[0.015em]">
                <span className="truncate">Enviar</span>
              </button>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Información de contacto
            </h2>
            <p className="textprimaryy px-4 pt-1 pb-3 text-base leading-normal font-normal">
              Correo electrónico: contacto@natureflyfishing.com
            </p>
            <p className="textprimaryy px-4 pt-1 pb-3 text-base leading-normal font-normal">
              Teléfono: +34 912 345 678
            </p>
            <div className="flex px-4 py-3">
              <div className="aspect-video w-full rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat object-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
