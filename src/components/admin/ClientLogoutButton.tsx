"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ClientLogoutButton() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleAdminLogout = async () => {
    await supabase.auth.signOut(); // Clears the auth cookie
    console.log("Admin logged out");
    router.push("/adminAuth");
  };

  return (
    <button
      onClick={handleAdminLogout}
      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center space-x-2"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </button>
  );
}
