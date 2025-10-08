import React, { JSX } from "react";

export default function Blog(): JSX.Element {
  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="tracking-light text-primary min-w-72 text-[32px] leading-tight font-bold">
                Blog de Pesca con Mosca
              </p>
            </div>
            <div className="px-4 py-3">
              <label className="flex h-12 w-full min-w-40 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div
                    className="text-tertiary bg-secondary flex items-center justify-center rounded-l-lg border-r-0 border-none pl-4"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Buscar en el blog"
                    className="form-input text-primary placeholder:text-tertiary bg-secondary flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none px-4 pl-2 text-base leading-normal font-normal focus:border-none focus:ring-0 focus:outline-0"
                  />
                </div>
              </label>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Artículos Recientes
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Técnicas Avanzadas de Lanzamiento
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Aprende técnicas avanzadas para mejorar tu precisión y
                      distancia en el lanzamiento.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Selección de Moscas para Diferentes Condiciones
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Guía completa sobre cómo elegir las moscas adecuadas según
                      el clima y el tipo de agua.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Experiencias de Pesca en Ríos Patagónicos
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Relatos de pescadores sobre sus aventuras en los ríos de
                      la Patagonia, con consejos y recomendaciones.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Categorías
            </h2>
            <div className="flex flex-wrap gap-3 p-3 pr-4">
              <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4">
                <p className="text-primary text-sm leading-normal font-medium">
                  Técnicas
                </p>
              </div>
              <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4">
                <p className="text-primary text-sm leading-normal font-medium">
                  Noticias
                </p>
              </div>
              <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4">
                <p className="text-primary text-sm leading-normal font-medium">
                  Consejos
                </p>
              </div>
              <div className="bg-secondary flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pr-4 pl-4">
                <p className="text-primary text-sm leading-normal font-medium">
                  Experiencias
                </p>
              </div>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Artículos Destacados
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Conservación de Ríos y Ecosistemas
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Importancia de la conservación para la pesca sostenible y
                      cómo puedes contribuir.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Equipamiento Esencial para Principiantes
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Guía sobre el equipo básico que todo principiante necesita
                      para empezar a pescar con mosca.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-base leading-tight font-bold">
                      Entrevistas con Expertos Pescadores
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Entrevistas con pescadores experimentados que comparten
                      sus conocimientos y secretos.
                    </p>
                  </div>
                  <button className="hover:bg-accent text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium transition hover:scale-105">
                    <span className="truncate">Leer más</span>
                  </button>
                </div>
                <div className="aspect-video w-full flex-1 rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
