import { supabase } from "@/app/lib/supabaseClient";

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select(`
    *,
    category:categories(*),
    product_sizes:product_sizes(*, size:sizes(*))
  `);
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
