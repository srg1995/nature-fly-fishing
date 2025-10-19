import { supabase } from "../lib/supabaseClient";

interface AuthCredentials {
  email: string;
  password: string;
}

export const AuthService = async ({ email, password }: AuthCredentials) => {
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
