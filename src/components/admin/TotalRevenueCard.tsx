"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react"; // Icon for Total Revenue (Indian Rupee)

interface TotalRevenueCardProps {
  totalRevenue: number; // Prop to receive the total revenue
}

export default function TotalRevenueCard({
  totalRevenue,
}: TotalRevenueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
    >
      <IndianRupee className="w-8 h-8 text-fuchsia-600 mb-3" />{" "}
      {/* Icon color matching image */}
      <h3 className="text-lg font-semibold text-gray-700 mb-1">
        Total Revenue
      </h3>
      <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
        Rs. {totalRevenue.toLocaleString("en-IN")}{" "}
        {/* Dynamic value, formatted for Indian Rupees */}
      </p>
      <p className="text-sm text-gray-500 mt-1">Lifetime earnings (approx)</p>
    </motion.div>
  );
}
