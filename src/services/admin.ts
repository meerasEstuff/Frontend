// file: /services/admin.ts
import { supabase } from "@/lib/supabase";

export async function fetchAllUsersWithReferralCount() {
  // 1. Fetch all users with essential fields
  const { data: users, error: userError } = await supabase
    .from("users")
    .select("id, email, phone, customer_id, created_at");

  if (userError || !users) {
    console.error("Error fetching users:", userError);
    return { users: [], totalUsers: 0, totalRevenue: 0 };
  }

  // 2. Fetch all referred_by_id values to count referrals
  const { data: referrals, error: referralError } = await supabase
    .from("users")
    .select("referred_by_id");

  if (referralError || !referrals) {
    console.error("Error fetching referrals:", referralError);
    return { users: [], totalUsers: 0, totalRevenue: 0 };
  }

  // 3. Create referral count map
  const referralCountMap = referrals.reduce((map, row) => {
    const refId = row.referred_by_id;
    if (refId) {
      map[refId] = (map[refId] || 0) + 1;
    }
    return map;
  }, {} as Record<string, number>);

  // 4. Combine into final shape
  const usersWithReferralData = users.map((u) => ({
    id: u.id,
    email: u.email,
    phone: u.phone,
    customer_id: u.customer_id,
    Joined: new Date(u.created_at).toISOString().split("T")[0],
    Referrals: referralCountMap[u.id] || 0,
  }));

  return {
    users: usersWithReferralData,
    totalUsers: usersWithReferralData.length,
    totalRevenue: usersWithReferralData.length * 600,
  };
}
