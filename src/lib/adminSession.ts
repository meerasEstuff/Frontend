import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getAdminSession() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { user, error };
}
