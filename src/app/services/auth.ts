import { supabase } from "../lib/supabaseClient";

export const AuthService = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "usuario@ejemplo.com",
    password: "123456",
  });

  if (error) {
    console.error("Error al iniciar sesión:", error.message);
  } else {
    console.log("Usuario autenticado:", data.user);
    console.log("Token:", data.session.access_token);
  }
};
