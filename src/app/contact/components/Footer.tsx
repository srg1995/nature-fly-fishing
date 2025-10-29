"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { JSX } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import InputText from "@/app/components/InputText";
import Textarea from "@/app/components/Textarea";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(4, "El nombre debe tener al menos 4 caracteres"),
  subject: z.string().min(6, "El Asunto debe tener al menos 6 caracteres"),
  message: z
    .string()
    .min(20, "El mensaje debe tener mínimo 20 caracteres")
    .max(500, "El mensaje debe tener máximo 500 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Form(): JSX.Element {
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
        <Image
          src="/images/bg-header.png"
          alt="Pesca con mosca"
          className="h-64 w-full object-cover"
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
}
