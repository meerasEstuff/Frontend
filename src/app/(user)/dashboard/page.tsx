"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  LogOut,
  Share2,
  Users,
  Link,
  ShoppingCart, // Company icon
  Copy,
  Check,
  TrendingUp, // For Growth metric
  ChevronDown, // For dropdown indicator
} from "lucide-react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();

  // Dummy Data
  const customerId = "CUST-2024-001337";
  const referralCode = "https://meerasestuff.com/ref/user-share-5A2B9C"; // Full dummy link
  const totalReferrals = 8;
  const growthPercentage = "+12%"; // Dummy growth
  const userName = "User"; // Placeholder for logged-in user's name

  const [copied, setCopied] = useState(false); // State for copy feedback
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const handleLogout = () => {
    console.log("User logged out");
    // Implement actual logout logic here (e.g., clear tokens, redirect to login)
    router.push("/login");
  };

  const copyReferralLink = () => {
    const el = document.createElement("textarea");
    el.value = referralCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset feedback after 2 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Company Icon & Name */}
          <div className="flex items-center space-x-3">
            <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MeerasEstuff
            </span>
          </div>
          {/* Right: User Profile Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <User className="w-6 h-6" />
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-100"
              >
                <button
                  onClick={() => {
                    router.push("/myProfile");
                    setIsDropdownOpen(false);
                    // router.push("/my-profile"); // Uncomment and add your profile page route
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}!
          </h1>
          <p className="text-lg text-gray-600">
            Here&quot;s your dashboard overview and referral information.
          </p>
        </motion.div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Customer ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <ShoppingCart className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Customer ID
            </h3>
            <p className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {customerId}
            </p>
            <p className="text-sm text-gray-500 mt-1">Your unique identifier</p>
          </motion.div>

          {/* Total Referrals Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <Users className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Total Referrals
            </h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {totalReferrals}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Total sign-ups from your link
            </p>
          </motion.div>

          {/* Growth Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Growth</h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {growthPercentage}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              This month's performance
            </p>
          </motion.div>
        </div>

        {/* Referral Program Section (now full width on larger screens) */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Referral Link Generation/Copy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6"
          >
            <div className="flex items-center mb-4">
              <Share2 className="w-8 h-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Referral Program
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Share your link and earn rewards:
            </p>

            <label
              htmlFor="referral-link"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Referral Link
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="referral-link"
                type="text"
                readOnly
                value={referralCode}
                className="flex-grow bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-gray-800 text-sm focus:outline-none focus:border-emerald-500 transition-colors duration-300"
              />
              <button
                onClick={copyReferralLink}
                className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 flex items-center space-x-2"
                aria-label="Copy referral link"
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
                <span className="hidden sm:inline">
                  {copied ? "Copied!" : "Copy Link"}
                </span>
              </button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-2 text-center"
              >
                Link copied to clipboard!
              </motion.p>
            )}

            {/* CTA Button */}
            <button
              onClick={() => {
                /* Implement share referral logic, e.g., open share dialog */
              }}
              className="w-full mt-6 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span>Invite Friends</span>
              <Link className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Link className="w-6 h-6 text-teal-600 mr-2" /> How it Works
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Share your unique referral link with friends.</li>
            <li>They sign up using your link.</li>
            <li>
              You both earn rewards when they complete their first action.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}

export default DashboardPage;
