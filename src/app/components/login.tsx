"use client";
import React, { JSX, use, useState } from "react";
import { createPortal } from "react-dom";
import { useUserContext } from "../context/userContext";
import ButtonSecondary from "./ButtonSecondary";
import { supabase } from "../lib/supabaseClient";

interface LoginModalProps {
  onClose: () => void;
}
export default function LoginModal({ onClose }: LoginModalProps): JSX.Element {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      if (data?.user && data?.session) {
        setUser({
          email: data.user.email ?? "",
          id: Number(data.user.id ?? 0),
          token: data.session.access_token ?? "",
        });
      }

      console.log("Usuario autenticado:", data.user);
      console.log("Token:", data.session?.access_token);
    }
  };

  // 🔹 Contenido del modal (con Tailwind)
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-80 rounded-2xl bg-white p-6 shadow-lg">
        {/* Botón cerrar */}
        <button
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="mb-4 text-center text-xl font-semibold">
          {user ? `Bienvenido, ${user.email}` : "Iniciar sesión"}
        </h2>

        {!user ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMsg && (
              <p className="text-center text-sm text-red-600">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Iniciando..." : "Entrar"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-600">
              ¿Quieres cerrar sesión?
            </p>
            <ButtonSecondary
              text="Cerrar sesión"
              onClick={() => {
                setUser(null);
                onClose();
              }}
            />
          </div>
        )}
        <div className="mt-4 text-center text-sm text-gray-600">
          ¿Eres nuevo?{" "}
          <a href="#" className="text-blue-600">
            Regístrate aquí.
          </a>
        </div>
      </div>
    </div>,
    document.body, // 👈 aquí está el portal
  );
}
