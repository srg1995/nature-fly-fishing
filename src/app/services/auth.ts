import { supabase } from "@/app/lib/supabaseClient";
import { AuthCredentials } from "@/app/models/User";

export const SignInAuthService = async ({
  email,
  password,
}: AuthCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { data: null, error };
  } else {
    return { data, error: null };
  }
};

export const SignUpAuthService = async ({
  email,
  password,
}: AuthCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      return {
        data: null,
        error: { message: "El correo ya está registrado." },
      };
    }
    return { data: null, error };
  } else {
    if (data.user && data.user.identities?.length === 0) {
      return {
        data: null,
        error: {
          message: "⚠️ Este correo ya está registrado",
        },
      };
    } else {
      return { data, error: null };
    }
  }
};
