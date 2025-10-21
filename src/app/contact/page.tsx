"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { JSX } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import InputText from "@/app/components/InputText";
import Textarea from "@/app/components/Textarea";

const schema = z.object({
  name: z.string().min(4, "El nombre debe tener al menos 4 caracteres"),
  subject: z.string().min(6, "El Asunto debe tener al menos 6 caracteres"),
  message: z
    .string()
    .min(20, "El mensaje debe tener mínimo 20 caracteres")
    .max(500, "El mensaje debe tener máximo 500 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Contact(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 300));
    const body = encodeURIComponent(
      `Hola mi nombre es ${data.name} y tengo la siguiente consulta:\n\n${data.message}`,
    );
    window.location.href = `mailto:contacto@natureflyfishing.com?subject=${data.subject}&body=${body}`;
    reset();
  };

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl space-y-4 rounded-xl p-6 sm:p-10"
        >
          <InputText
            label="Nombre"
            placeholder="Tu nombre"
            id="name"
            register={register("name")}
            error={errors.name?.message}
          />
          <InputText
            label="Asunto"
            placeholder="Asunto de tu consulta"
            id="subject"
            register={register("subject")}
            error={errors.subject?.message}
          />
          <Textarea
            label="Mensaje"
            placeholder="Tu mensaje"
            id="message"
            register={register("message")}
            error={errors.message?.message}
          />

          <div className="mt-4 flex justify-end">
            <button
              disabled={isSubmitting}
              type="submit"
              className="transform rounded-lg bg-green-500 px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-green-600 disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>

        <div className="mt-10 w-full max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Información de contacto
          </h2>
          <p className="text-gray-700">
            Correo electrónico:{" "}
            <span className="font-semibold text-gray-900">
              contacto@natureflyfishing.com
            </span>
          </p>

          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/bg-header.png"
              alt="Pesca con mosca"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
