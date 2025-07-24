import { redirect } from "next/navigation";
import Head from "next/head";
import { getAdminSession } from "@/lib/adminSession";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

import { fetchAllUsersWithReferralCount } from "@/services/admin";

export default async function AdminDashboardPage() {
  const { user } = await getAdminSession();
  if (!user) redirect("/adminAuth");

  const { users, totalUsers, totalRevenue } =
    await fetchAllUsersWithReferralCount();

  // console.log("Users with referral data:", users);
  return (
    <>
      <Head>
        <title>Your Dashboard | MeerasEstuff</title>
        <meta name="robots" content="noindex" />
      </Head>
      <AdminDashboardClient
        user={user}
        totalUsers={totalUsers}
        totalRevenue={totalRevenue}
        users={users}
      />
    </>
  );
}
