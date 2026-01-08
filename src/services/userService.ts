import { supabase } from "@/lib/supabase";
import { NewUserPayload } from "@/types/types";

export async function getTotalReferralsCount(userId: string) {
  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("referred_by_id", userId);

  if (error) {
    console.error("Error fetching referrals:", error);
    return 0;
  }

  return count ?? 0;
}

export async function getReferralsByUserId(
  referrerId: string,
  page = 1,
  pageSize = 5
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from("users")
    .select("id, customer_id, username, created_at, phone")
    .eq("referred_by_id", referrerId)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching referrals:", error.message, error.details);
    throw new Error("Failed to fetch referrals");
  }

  return data;
}

export async function getUserById(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("id, username") // Select only what you need
    .eq("id", userId)
    .single(); // Use .single() to get one record

  if (error) {
    console.error("Error fetching user:", error.message);
    throw new Error("Failed to fetch user details");
  }

  return data;
}

export async function insertNewUser(user: NewUserPayload) {
  // 1. Check for existing user
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("customer_id", user.customer_id)
    .single();

  if (existingUser) return existingUser;

  // 2. Properly sanitize the payload
  const payload = {
    customer_id: user.customer_id,
    username: user.username,
    phone: user.phone,
    referred_by_id: user.referred_by_id,
    payment_amount: user.payment_amount,
    customer_type: user.customer_type,
    email: user.email && user.email.trim() !== "" ? user.email : null,
  };

  const { data, error } = await supabase
    .from("users")
    .insert([payload])
    .select();

  if (error) {
    // IMPORTANT: Uncomment this to see the actual database error in your console!
    console.error(
      "❌ Supabase Error Details:",
      error.message,
      error.details,
      error.hint
    );
    throw new Error(`Could not insert new user: ${error.message}`);
  }

  return data;
}
