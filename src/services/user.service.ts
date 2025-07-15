import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getAllUsers() {
  const supabase = createServerComponentClient({ cookies });

  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }

  return users;
}
