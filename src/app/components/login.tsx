"use client";
import React, { JSX, useState } from "react";
import { createPortal } from "react-dom";
import { useUserContext } from "../context/userContext";
import LinkPrimary from "./LinkPrimary";
import { SignInAuthService } from "../services/auth";
import ButtonFull from "./ButtonFull";
import InputText from "./InputText";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface LoginModalProps {
  onClose: () => void;
}
const schema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
type FormData = z.infer<typeof schema>;

export default function LoginModal({ onClose }: LoginModalProps): JSX.Element {
  const { user, setUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (formData: FormData) => {
    setErrorMsg("");

    const { data, error } = await SignInAuthService({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      if (data?.user && data?.session) {
        setUser({
          email: data.user.email ?? "",
          id: Number(data.user.id ?? 0),
          token: data.session.access_token ?? "",
        });
        reset();
        onClose();
      }
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-80 rounded-2xl bg-white p-6 shadow-lg">
        <button
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="mb-4 text-center text-xl font-semibold">
          {user ? `Hola, ${user.email}` : "Iniciar sesión"}
        </h2>

        {!user ? (
          <>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-3"
            >
              <InputText
                label="Correo electrónico"
                type="email"
                register={register("email")}
                error={errors.email?.message}
              />

              <InputText
                label="Contraseña"
                type="password"
                register={register("password")}
                error={errors.password?.message}
              />

              <div className="flex justify-center">
                <ButtonFull
                  disabled={isSubmitting}
                  text={isSubmitting ? "Iniciando..." : "Entrar"}
                />
              </div>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              ¿Eres nuevo?
              <LinkPrimary href="/register" onClick={onClose}>
                Regístrate aquí.
              </LinkPrimary>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-600">
              ¿Quieres cerrar sesión?
            </p>
            <ButtonFull
              text="Cerrar sesión"
              onClick={() => {
                setUser(null);
                onClose();
              }}
            />
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
