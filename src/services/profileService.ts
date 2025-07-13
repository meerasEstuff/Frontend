import { supabase } from "@/lib/supabase";

export async function updateUserProfile(
  userId: string,
  data: {
    username: string;
    email: string;
    phone: string;
  }
) {
  const { error } = await supabase.from("users").update(data).eq("id", userId);

  if (error) {
    console.error("Supabase update error:", error);
    throw new Error("Failed to update profile");
  }
}
