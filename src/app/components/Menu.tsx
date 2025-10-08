import Link from "next/link";
import React, { JSX } from "react";

export default function Menu(): JSX.Element {
  return (
    <header className="border-b-secondary flex items-center justify-between border-b border-solid px-10 py-3 whitespace-nowrap">
      <div className="text-primary flex items-center gap-4">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <Link
          href="/"
          className="text-primary text-lg leading-tight font-bold tracking-[-0.015em]"
        >
          Nature Fly Fishing
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-primary hover:text-tertiary text-sm leading-normal font-bold transition hover:scale-105"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-primary hover:text-tertiary text-sm leading-normal font-bold transition hover:scale-105"
            href="products"
          >
            Tienda
          </Link>
          <Link
            className="text-primary hover:text-tertiary text-sm leading-normal font-bold transition hover:scale-105"
            href="blog"
          >
            Blog
          </Link>
          <Link
            className="text-primary hover:text-tertiary text-sm leading-normal font-bold transition hover:scale-105"
            href="contact"
          >
            Contacto
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="bg-secondary hover:bg-accent text-primary flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em] transition hover:scale-105">
            <span className="truncate">Iniciar sesión</span>
          </button>

          <Link
            href="payment"
            className="bg-secondary hover:bg-accent text-primary flex h-10 max-w-[480px] min-w-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-2.5 text-sm leading-normal font-bold tracking-[0.015em] transition hover:scale-105"
          >
            <div
              className="text-primary"
              data-icon="ShoppingBag"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
