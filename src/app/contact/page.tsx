"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { JSX } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

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
  });
  const [messageCharacters, setMessageCharacters] = React.useState(0);

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 300));

    const body = encodeURIComponent(
      `Hola mi nombre es ${data.name} y tengo la siguiente consulta:\n\n${data.message}`,
    );

    window.location.href = `mailto:contacto@natureflyfishing.com?subject=${data.subject}&body=${body}`;
    setMessageCharacters(0);
    reset();
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <div className="flex min-w-40 flex-1 flex-col">
                  <label className="text-primary pb-2 text-base leading-normal font-semibold">
                    Nombre
                  </label>
                  <input
                    placeholder="Tu nombre"
                    id="name"
                    {...register("name")}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  />
                  {errors.name && (
                    <span
                      className="text-xs text-red-500"
                      aria-invalid={!!errors.name}
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <div className="flex min-w-40 flex-1 flex-col">
                  <label className="text-primary pb-2 text-base leading-normal font-semibold">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    placeholder="Asunto de tu consulta"
                    {...register("subject")}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  />
                  {errors.subject && (
                    <span
                      className="text-xs text-red-500"
                      aria-invalid={!!errors.subject}
                    >
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <div className="flex min-w-40 flex-1 flex-col">
                  <label className="text-primary pb-2 text-base leading-normal font-semibold">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Tu mensaje"
                    id="message"
                    {...register("message", {
                      onChange: (e) =>
                        setMessageCharacters(e.target.value.length),
                    })}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="text-xs"
                    aria-invalid={!!errors.message}
                  >
                    {messageCharacters}/500
                  </label>
                  {errors.message && (
                    <span className="text-xs text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-start px-4 py-3">
                <button
                  disabled={isSubmitting}
                  className="text-primary bg-accent flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em]"
                  type="submit"
                >
                  <span className="truncate">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </span>
                </button>
              </div>
            </form>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Información de contacto
            </h2>
            <p className="text-primary px-4 pt-1 pb-3 text-base leading-normal font-normal">
              Correo electrónico:
              <span className="font-semibold">
                contacto@natureflyfishing.com
              </span>
            </p>

            <div className="flex px-4 py-3">
              <div className="aspect-video w-full rounded-lg bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat object-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
