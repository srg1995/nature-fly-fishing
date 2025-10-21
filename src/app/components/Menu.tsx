"use client";
import React, { JSX, useState } from "react";
import ButtonSecondary from "@/app/components/ButtonSecondary";
import LinkPrimary from "@/app/components/LinkPrimary";
import LinkButton from "@/app/components/LinkButton";
import LoginModal from "@/app/components/login";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu(): JSX.Element {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-secondary bg-background/80 sticky top-0 z-50 border-b px-6 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        {/* Logo */}
        <div className="text-primary flex items-center gap-3">
          <div className="size-5">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <LinkPrimary href="/" text="Nature Fly Fishing" />
        </div>

        {/* Desktop menu */}
        <div className="hidden flex-1 justify-end gap-8 md:flex">
          <nav className="flex items-center gap-8">
            <LinkPrimary href="/" text="Inicio" />
            <LinkPrimary href="/products" text="Tienda" />
            <LinkPrimary href="/blog" text="Blog" />
            <LinkPrimary href="/contact" text="Contacto" />
          </nav>

          <div className="flex items-center gap-2">
            <ButtonSecondary
              text="Iniciar sesión"
              onClick={() => setIsLoginModalOpen((v) => !v)}
            />
            {isLoginModalOpen && (
              <LoginModal onClose={() => setIsLoginModalOpen(false)} />
            )}

            <LinkButton href="/payment">
              <div className="text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
                </svg>
              </div>
            </LinkButton>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <div className="flex items-center gap-2">
            <ButtonSecondary
              text="Iniciar sesión"
              onClick={() => setIsLoginModalOpen((v) => !v)}
            />
            {isLoginModalOpen && (
              <LoginModal onClose={() => setIsLoginModalOpen(false)} />
            )}

            <LinkButton href="/payment">
              <div className="text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
                </svg>
              </div>
            </LinkButton>
            <button
              className="text-primary focus:outline-none md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-secondary bg-background overflow-hidden border-t px-6 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <LinkPrimary href="/" text="Inicio" />
              <LinkPrimary href="/products" text="Tienda" />
              <LinkPrimary href="/blog" text="Blog" />
              <LinkPrimary href="/contact" text="Contacto" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
