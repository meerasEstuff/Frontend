"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OpenInBrowser() {
  useEffect(() => {
    const url = "https://meerasestuff.com/onboard";
    window.location.href = url;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <Image
          src="/meeras-logo.jpg"
          alt="MeerasEstuff Logo"
          width={100}
          height={100}
          priority
          className="rounded-full shadow-md"
        />
      </motion.div>

      {/* Animated Spinner and Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex items-center space-x-3"
      >
        <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-700 text-lg font-medium">
          Redirecting you to MeerasEstuff...
        </p>
      </motion.div>
    </div>
  );
}
