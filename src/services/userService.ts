import { supabase } from "@/lib/supabase";

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
    .select("id,customer_id, username, created_at")
    .eq("referred_by_id", referrerId)
    .range(from, to); // 👈 Pagination logic

  if (error) {
    console.error("Error fetching referrals:", error.message, error.details);
    throw new Error("Failed to fetch referrals");
  }

  return data;
}
