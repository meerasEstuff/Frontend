import { supabase } from "@/lib/supabase";

export async function loginWithCustomerIdAndPhone(
  customerId: string,
  phone: string
) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("customer_id", customerId)
    .eq("phone", phone)
    .single();

  if (error || !data) {
    throw new Error("Invalid customer ID or phone number");
  }

  return data; // You can use this to store in Zustand or Context
}
