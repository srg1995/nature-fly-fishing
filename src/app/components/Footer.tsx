import React from "react";

export default function Footer() {
  return (
    <footer className="border-accent/30 bg-background/10 shadow-accent mt-4 flex justify-center border-t shadow-2xl">
      <div className="flex max-w-[1280px] flex-1 flex-col">
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
  );
}
