import Link from "next/link";

export default function Home() {
  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-gradient-to-b bg-[url('/images/bg-header.png')] from-black/10 to-black/40 bg-cover bg-center bg-no-repeat p-4 @[480px]:gap-8 @[480px]:rounded-lg">
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-4xl leading-tight font-black tracking-[-0.033em] text-white @[480px]:text-5xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em]">
                      Equípate para tu próxima aventura
                    </h1>
                    <h2 className="text-sm leading-normal font-normal text-white @[480px]:text-base @[480px]:leading-normal @[480px]:font-normal">
                      Encuentra todo lo que necesitas para una experiencia
                      inolvidable de pesca con mosca.
                    </h2>
                  </div>
                  <Link
                    href="articles"
                    className="text-primary bg-accent flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em] transition hover:scale-105 @[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:leading-normal @[480px]:font-bold @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Comprar ahora</span>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Productos destacados
            </h2>
            <div className="[&amp;::-webkit-scrollbar]:hidden flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none]">
              <div className="flex items-stretch gap-3 p-4">
                <div className="flex h-full min-w-60 flex-1 flex-col gap-4 rounded-lg">
                  <div className='aspect-video w-full flex-1 rounded-lg bg-[url("/images/section.png")] bg-cover bg-center bg-no-repeat'></div>
                  <div>
                    <p className="text-primary text-base leading-normal font-medium">
                      Caña de pescar de alta calidad
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Diseñada para lanzamientos precisos y suaves.
                    </p>
                  </div>
                </div>
                <div className="flex h-full min-w-60 flex-1 flex-col gap-4 rounded-lg">
                  <div className='aspect-video w-full flex-1 rounded-lg bg-[url("/images/section.png")] bg-cover bg-center bg-no-repeat'></div>
                  <div>
                    <p className="text-primary text-base leading-normal font-medium">
                      Carrete de pesca duradero
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Construido para resistir las condiciones más duras.
                    </p>
                  </div>
                </div>
                <div className="flex h-full min-w-60 flex-1 flex-col gap-4 rounded-lg">
                  <div className='aspect-video w-full flex-1 rounded-lg bg-[url("/images/section.png")] bg-cover bg-center bg-no-repeat'></div>
                  <div>
                    <p className="text-primary text-base leading-normal font-medium">
                      Línea de pesca de alto rendimiento
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Ofrece una excelente sensibilidad y resistencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Novedades
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Nuevo
                    </p>
                    <p className="text-primary text-base leading-tight font-bold">
                      Nueva colección de moscas
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Descubre nuestra última selección de moscas artesanales,
                      perfectas para atraer a una variedad de peces.
                    </p>
                  </div>
                  <button className="text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium">
                    <span className="truncate">Ver colección</span>
                  </button>
                </div>
                <div className='aspect-video w-full flex-1 rounded-lg bg-[url("/images/fly.png")] bg-cover bg-center bg-no-repeat'></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Blog
                    </p>
                    <p className="text-primary text-base leading-tight font-bold">
                      Consejos para principiantes
                    </p>
                    <p className="text-tertiary text-sm leading-normal font-normal">
                      Aprende los conceptos básicos de la pesca con mosca, desde
                      el equipo esencial hasta las técnicas de lanzamiento.
                    </p>
                  </div>
                  <button className="text-primary bg-secondary flex h-8 w-fit max-w-[480px] min-w-[84px] cursor-pointer flex-row-reverse items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-medium">
                    <span className="truncate">Leer artículo</span>
                  </button>
                </div>
                <div className='aspect-video w-full flex-1 rounded-lg bg-[url("/images/fly.png")] bg-cover bg-center bg-no-repeat'></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="@container flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a
                  className="text-tertiary min-w-40 text-base leading-normal font-normal"
                  href="#"
                >
                  Política de privacidad
                </a>
                <a
                  className="text-tertiary min-w-40 text-base leading-normal font-normal"
                  href="#"
                >
                  Términos de servicio
                </a>
                <a
                  className="text-tertiary min-w-40 text-base leading-normal font-normal"
                  href="#"
                >
                  Contacto
                </a>
              </div>
              <p className="text-tertiary text-base leading-normal font-normal">
                © 2024 Nature Fly Fishing. Todos los derechos reservados.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
