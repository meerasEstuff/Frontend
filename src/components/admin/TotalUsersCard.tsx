"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react"; // Icon for Total Users

interface TotalUsersCardProps {
  totalUsers: number; // Prop to receive the total number of users
}

export default function TotalUsersCard({ totalUsers }: TotalUsersCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
    >
      <Users className="w-8 h-8 text-indigo-600 mb-3" />{" "}
      {/* Icon color matching image */}
      <h3 className="text-lg font-semibold text-gray-700 mb-1">Total Users</h3>
      <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
        {totalUsers} {/* Dynamic value */}
      </p>
      <p className="text-sm text-gray-500 mt-1">Registered accounts</p>
    </motion.div>
  );
}
