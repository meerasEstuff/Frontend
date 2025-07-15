"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const signInAdmin = async (email: string, password: string) => {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};
