"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // For linking back to the dashboard/home
import { User, ChevronDown } from "lucide-react"; // Icons for user and dropdown

import ClientLogoutButton from "@/components/admin/ClientLogoutButton"; // Your separate logout button

interface AdminNavbarProps {
  userEmail: string; // Pass the admin's email to display
}

export default function AdminNavbar({ userEmail }: AdminNavbarProps) {
  const [isUserProfileDropdownOpen, setIsUserProfileDropdownOpen] =
    useState(false);
  const userProfileDropdownRef = useRef<HTMLDivElement>(null);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userProfileDropdownRef.current &&
        !userProfileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserProfileDropdownOpen(false);
      }
    }

    if (isUserProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserProfileDropdownOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Company Icon & Admin Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/meeras-logo.jpg" // Ensure this path is correct for your logo
            alt="MeerasEstuff_Logo"
            width={34}
            height={34}
            className="rounded-full shadow-md"
          />
          <Link
            href="/admin" // Link back to the admin dashboard
            // Changed gradient colors to match the provided image (blue/purple to pink/red)
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent"
          >
            MeerasEstuff
          </Link>
        </div>

        {/* Right: User Profile Icon with Dropdown */}
        <div className="relative" ref={userProfileDropdownRef}>
          <button
            onClick={() =>
              setIsUserProfileDropdownOpen(!isUserProfileDropdownOpen)
            }
            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            aria-expanded={isUserProfileDropdownOpen}
            aria-haspopup="true"
          >
            <User className="w-6 h-6" />
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isUserProfileDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isUserProfileDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-100"
            >
              <div className="px-4 py-2 text-sm text-gray-600 truncate">
                {userEmail}
              </div>
              <hr className="my-1 border-gray-100" />
              {/* You can add more admin-specific links here, e.g., to a profile page */}
              {/* <button
                onClick={() => {
                  router.push("/admin/profile"); // Example admin profile page
                  setIsUserProfileDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>My Profile</span>
              </button> */}
              <ClientLogoutButton /> {/* Your separate logout button */}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
