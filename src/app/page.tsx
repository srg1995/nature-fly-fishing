import Link from "next/link";
import { JSX } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import ButtonSecondary from "@/app/components/ButtonSecondary";

export default function Home(): JSX.Element {
  const products = [
    {
      title: "Caña de pescar de alta calidad",
      desc: "Diseñada para lanzamientos precisos y suaves.",
    },
    {
      title: "Carrete de pesca duradero",
      desc: "Construido para resistir las condiciones más duras.",
    },
    {
      title: "Línea de pesca de alto rendimiento",
      desc: "Ofrece una excelente sensibilidad y resistencia.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex flex-1 flex-col">
        <section className="flex justify-center px-4 py-5 sm:px-8 md:px-16 xl:px-30">
          <div className="flex w-full flex-col">
            <div className="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-lg bg-[url('/images/bg-header.jpg')] bg-cover bg-center bg-no-repeat p-6 text-center sm:p-8 md:p-12">
              <h1 className="text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
                Equípate para tu próxima aventura
              </h1>
              <h2 className="max-w-[600px] text-sm text-white sm:text-base">
                Encuentra todo lo que necesitas para una experiencia inolvidable
                de pesca con mosca.
              </h2>
              <Link
                href="/products"
                className="bg-accent text-primary mt-2 flex h-11 items-center justify-center rounded-lg px-6 text-sm font-bold tracking-[0.015em] transition hover:scale-105 sm:text-base"
              >
                Comprar ahora
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 md:px-16 xl:px-30">
          <h2 className="text-primary pt-5 pb-3 text-xl font-bold sm:text-2xl">
            Productos destacados
          </h2>

          <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-1 lg:max-w-max lg:grid-cols-3">
            {products.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-lg">
                <div className="aspect-video w-full rounded-lg bg-[url('/images/section.jpg')] bg-cover bg-center" />
                <div>
                  <p className="text-primary truncate text-base font-medium">
                    {item.title}
                  </p>
                  <p className="text-tertiary truncate text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-8 md:px-16 xl:px-30">
          <h2 className="text-primary pt-6 pb-3 text-xl font-bold sm:text-2xl">
            Novedades
          </h2>

          <div className="flex flex-col items-stretch gap-4 rounded-lg p-4 md:flex-row">
            <div className="flex flex-[2] flex-col gap-3">
              <p className="text-tertiary text-sm">Nuevo</p>
              <p className="text-primary text-lg font-bold">
                Nueva colección de moscas
              </p>
              <p className="text-tertiary text-sm">
                Descubre nuestra última selección de moscas artesanales,
                perfectas para atraer a una variedad de peces.
              </p>
              <div>
                <ButtonPrimary text="Ver colección" />
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-[url('/images/fly.jpg')] bg-cover bg-center md:w-1/2" />
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-4 rounded-lg p-4 md:flex-row">
            <div className="flex flex-[2] flex-col gap-3">
              <p className="text-tertiary text-sm">Blog</p>
              <p className="text-primary text-lg font-bold">
                Consejos para principiantes
              </p>
              <p className="text-tertiary text-sm">
                Aprende los conceptos básicos de la pesca con mosca, desde el
                equipo esencial hasta las técnicas de lanzamiento.
              </p>
              <div>
                <ButtonSecondary text="Leer artículo" />
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-[url('/images/fly.jpg')] bg-cover bg-center md:w-1/2" />
          </div>
        </section>
      </div>
    </div>
  );
}
