import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, // ✅ Same Supabase URL
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ✅ Service Role key (NOT the anon key)
);
