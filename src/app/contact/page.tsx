import React, { JSX } from "react";
import Form from "@/app/contact/components/Form";
import { Metadata } from "next";
import Footer from "@/app/contact/components/Footer";
export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contact(): JSX.Element {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contáctanos
        </h1>
        <p className="mb-8 max-w-xl text-center text-gray-600">
          ¿Tienes alguna pregunta o necesitas asistencia? Completa el formulario
          y nos pondremos en contacto contigo lo antes posible.
        </p>
        <Form />
        <Footer />
      </div>
    </div>
  );
}
