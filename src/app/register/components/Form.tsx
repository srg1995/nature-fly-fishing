"use client";
import ButtonSecondary from "@/app/components/ButtonSecondary";
import InputText from "@/app/components/InputText";
import { supabase } from "@/app/lib/supabaseClient";
import { SignUpAuthService } from "@/app/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.string().email("Debe ser un email válido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(10, "La contraseña debe tener máximo 8 caracteres"),
});
type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [message, setMessage] = useState("");

  const handleSignup = async (dataForm: FormData) => {
    const { data, error } = await SignUpAuthService({
      email: dataForm.email,
      password: dataForm.password,
    });

    if (error) {
      setMessage("Error al crear el usuario: " + error.message);
    } else {
      setMessage(
        "Usuario creado correctamente. Por favor verifica tu email en " +
          data?.user?.email,
      );
      reset();
    }
  };

  return (
    <>
      {message ? (
        <p className="mt-2 text-center">{message}</p>
      ) : (
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="mx-auto mt-10 flex max-w-sm flex-col gap-2"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="rounded border p-2"
          />
          {errors.email && (
            <span
              className="text-xs text-red-500"
              aria-invalid={!!errors.email}
            >
              {errors.email.message}
            </span>
          )}
          <InputText />
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            className="rounded border p-2"
          />
          {errors.password && (
            <span
              className="text-xs text-red-500"
              aria-invalid={!!errors.password}
            >
              {errors.password.message}
            </span>
          )}
          <ButtonSecondary disabled={isSubmitting} text="Registrarse" />
        </form>
      )}
    </>
  );
}
