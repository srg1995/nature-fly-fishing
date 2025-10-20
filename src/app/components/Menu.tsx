"use client";
import React, { JSX } from "react";
import ButtonSecondary from "./ButtonSecondary";
import LinkPrimary from "./LinkPrimary";
import LinkButton from "./LinkButton";
import LoginModal from "./login";

export default function Menu(): JSX.Element {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

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
        <LinkPrimary href="/" text="Nature Fly Fishing" />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <LinkPrimary href="/" text="Inicio" />
          <LinkPrimary href="/products" text="Tienda" />
          <LinkPrimary href="/blog" text="Blog" />
          <LinkPrimary href="/contact" text="Contacto" />
        </div>
        <div className="flex gap-2">
          <ButtonSecondary
            text="Iniciar sesión"
            onClick={() => setIsLoginModalOpen((value) => !value)}
          />
          {isLoginModalOpen && (
            <LoginModal onClose={() => setIsLoginModalOpen(false)} />
          )}
          <LinkButton href="/payment">
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
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
