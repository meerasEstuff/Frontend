"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";
import AdminNavbar from "./AdminNavbar";
import TotalUsersCard from "./TotalUsersCard";
import TotalRevenueCard from "./TotalRevenueCard";
import UserList from "./UserList";

interface UserRow {
  id: string;
  email: string;
  phone: string;
  customer_id: string;
  Joined: string;
  Referrals: number;
  username: string;
}

interface AdminDashboardClientProps {
  user: User;
  totalUsers: number;
  totalRevenue: number;
  users: UserRow[];
}

export default function AdminDashboardClient({
  user,
  totalUsers,
  totalRevenue,
  users,
}: AdminDashboardClientProps) {
  const allUsers = users; // Use as base list
  const [filteredUsers, setFilteredUsers] = useState<UserRow[]>(users);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const results = allUsers.filter(
      (u) =>
        u.username.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.customer_id.toLowerCase().includes(q) ||
        u.phone.includes(q)
    );
    setFilteredUsers(results);
  };

  const handleFilter = (filter: string) => {
    const now = new Date();
    let monthsAgo = 0;

    switch (filter) {
      case "Last 1 Month":
        monthsAgo = 1;
        break;
      case "Last 3 Months":
        monthsAgo = 3;
        break;
      case "Last 6 Months":
        monthsAgo = 6;
        break;
      case "Last 8 Months":
        monthsAgo = 8;
        break;
      case "Last 12 Months":
        monthsAgo = 12;
        break;
      default:
        setFilteredUsers(allUsers);
        return;
    }

    const fromDate = new Date();
    fromDate.setMonth(now.getMonth() - monthsAgo);

    const results = allUsers.filter((u) => {
      const joinedDate = new Date(u.Joined);
      return joinedDate >= fromDate;
    });

    setFilteredUsers(results);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50 font-sans">
      <AdminNavbar userEmail={user.email || "Admin"} />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Welcome, {user.email} — Overview of your MeerasEstuff platform.
          </p>
        </motion.div>

        {/* Metric Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TotalUsersCard totalUsers={totalUsers} />
          <TotalRevenueCard totalRevenue={totalRevenue} />
        </div>

        {/* User List Table */}
        <UserList
          users={filteredUsers}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />
      </main>
    </div>
  );
}
