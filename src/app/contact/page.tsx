"use client";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const handleSubmit = () => {
    const body = encodeURIComponent(
      `Hola mi nombre es ${form.name} y tengo la siguiente consulta:\n\n${form.message}`,
    );

    window.location.href = `mailto:tuemail@dominio.com?subject=${form.subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
            <form action={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex min-w-40 flex-1 flex-col">
                  <p className="text-primary pb-2 text-base leading-normal font-semibold">
                    Nombre
                  </p>
                  <input
                    placeholder="Tu nombre"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex min-w-40 flex-1 flex-col">
                  <p className="textprimaryy pb-2 text-base leading-normal font-semibold">
                    Asunto
                  </p>
                  <input
                    name="subject"
                    placeholder="Asunto"
                    onChange={handleChange}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex min-w-40 flex-1 flex-col">
                  <p className="text-primary pb-2 text-base leading-normal font-semibold">
                    Mensaje
                  </p>
                  <textarea
                    placeholder="Tu mensaje"
                    name="message"
                    onChange={handleChange}
                    className="form-input text-tertiary placeholder:text-tertiary border-accent focus:border-accent flex min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border p-[15px] text-base leading-normal font-normal focus:ring-0 focus:outline-0"
                  ></textarea>
                </label>
              </div>
              <div className="flex justify-start px-4 py-3">
                <button
                  className="text-primary bg-accent flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em]"
                  type="submit"
                >
                  <span className="truncate">Enviar</span>
                </button>
              </div>
            </form>
            <h2 className="text-primary px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
              Información de contacto
            </h2>
            <p className="text-primary px-4 pt-1 pb-3 text-base leading-normal font-normal">
              Correo electrónico:{" "}
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
};

export default Contact;
