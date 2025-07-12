import { supabase } from "@/lib/supabase";

export async function getTotalReferralReward(referrerId: string) {
  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("referred_by_id", referrerId);

  if (error) {
    console.error("Error calculating reward:", error);
    return 0;
  }

  // Assuming ₹400 reward per referral
  return (count ?? 0) * 400;
}
