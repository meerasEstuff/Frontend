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

export async function getReferralsByUserId(referrerId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("id, username, created_at") // select the fields you want
    .eq("referred_by", referrerId); // assuming you have a 'referred_by' column

  if (error) {
    throw new Error("Failed to fetch referrals");
  }

  return data;
}
