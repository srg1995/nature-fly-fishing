import { supabase } from "../lib/supabaseClient";

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data;
};
export const getSizes = async () => {
  const { data, error } = await supabase.from("sizes").select("*");
  if (error) throw error;
  return data;
};
export const getCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw error;
  return data;
};
