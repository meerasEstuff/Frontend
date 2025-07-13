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
    .select("id, customer_id, username, created_at")
    .eq("referred_by_id", referrerId)
    .order("created_at", { ascending: false }) // 👈 Sort by most recent first
    .range(from, to);

  if (error) {
    console.error("Error fetching referrals:", error.message, error.details);
    throw new Error("Failed to fetch referrals");
  }

  return data;
}

export async function insertNewUser(user: NewUserPayload) {
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("customer_id", user.customer_id)
    .single();

  if (existingUser) {
    console.warn("User already exists. Skipping insert.");
    return existingUser;
  }

  const { data, error } = await supabase.from("users").insert([user]);

  if (error) {
    console.error("❌ Failed to insert user:", error.message);
    throw new Error("Could not insert new user.");
  }

  return data;
}
