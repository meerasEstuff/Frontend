// import { supabase } from "@/lib/supabase";

// export async function getTotalReferralReward(referrerId: string) {
//   const { count, error } = await supabase
//     .from("users")
//     .select("*", { count: "exact", head: true })
//     .eq("referred_by_id", referrerId);

//   if (error) {
//     console.error("Error calculating reward:", error);
//     return 0;
//   }

//   // Assuming ₹250 reward per referral
//   // Assuming ₹160 reward per referral
//   // Assuming ₹1000 reward per referral
//   return (count ?? 0) * 900;
// }

import { supabase } from "@/lib/supabase";

export async function getTotalReferralReward(referrerId: string) {
  // We fetch only the customer_type column for all users referred by this parent
  const { data, error } = await supabase
    .from("users")
    .select("customer_type")
    .eq("referred_by_id", referrerId);

  if (error) {
    console.error("Error calculating reward:", error);
    return 0;
  }

  if (!data) return 0;

  // Define your reward logic
  const REWARD_CONFIG = {
    standard: 300,
    student: 49,
  };

  // Calculate the sum
  const totalReward = data.reduce((acc, user) => {
    const amount =
      REWARD_CONFIG[user.customer_type as keyof typeof REWARD_CONFIG] || 0;
    return acc + amount;
  }, 0);

  return totalReward;
}
