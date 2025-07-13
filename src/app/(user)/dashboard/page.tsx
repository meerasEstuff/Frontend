"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  LogOut,
  Share2,
  Users,
  Link,
  ShoppingCart,
  ChevronDown,
  Mail,
  MessageSquare,
  IndianRupee, // Icon for Total Reward Earned
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/userStore";
import { getTotalReferralsCount } from "@/services/userService";
import { getTotalReferralReward } from "@/services/rewardService";
import { getReferralsByUserId } from "@/services/userService";
import { getGreeting } from "@/utils/greeting";

function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const [totalReferrals, setTotalReferrals] = useState(0);

  const [referrals, setReferrals] = useState<
    { id: string; customer_id: string; username: string; created_at: string }[]
  >([]);

  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    async function fetchReferralsList() {
      if (user?.id) {
        try {
          const result = await getReferralsByUserId(user.id, page, pageSize);
          setReferrals(result);
        } catch (err) {
          console.error("Error fetching referrals:", err);
        }
      }
    }

    fetchReferralsList();
  }, [user?.id, page]);

  useEffect(() => {
    async function fetchReferrals() {
      if (user?.id) {
        const count = await getTotalReferralsCount(user.id);
        setTotalReferrals(count);
      }
    }

    fetchReferrals();
  }, [user?.id]);

  const [totalRewardEarned, setTotalRewardEarned] = useState(0);

  useEffect(() => {
    async function fetchReward() {
      if (user?.id) {
        const reward = await getTotalReferralReward(user.id);
        setTotalRewardEarned(reward);
      }
    }

    fetchReward();
  }, [user?.id]);

  // State for dropdown visibility for user profile in navbar
  // THESE MUST BE DECLARED AT THE TOP LEVEL BEFORE ANY CONDITIONAL RENDERING
  const [isUserProfileDropdownOpen, setIsUserProfileDropdownOpen] =
    useState(false);
  // State for dropdown visibility for referrals list
  const [isReferralListDropdownOpen, setIsReferralListDropdownOpen] =
    useState(false);

  useEffect(() => {
    // Add 'router' to the dependency array
    if (!user) {
      router.push("/login");
    }
  }, [user, router]); // Added router to dependency array

  // This conditional return is fine AFTER all hooks are declared
  if (!user) return null;

  const handleLogout = () => {
    console.log("User logged out");
    useAuthStore.getState().clearUser();
    router.push("/login");
  };

  const handleAddNewReferral = () => {
    router.push("/onboard"); // Navigate to a new page for adding referrals
  };

  const toggleReferralList = () => {
    setIsReferralListDropdownOpen(!isReferralListDropdownOpen);
  };

  return (
    // Added flex flex-col to the root div to push the footer to the bottom
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans">
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
              onClick={() =>
                setIsUserProfileDropdownOpen(!isUserProfileDropdownOpen)
              }
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
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
                <button
                  onClick={() => {
                    router.push("/myProfile");
                    setIsUserProfileDropdownOpen(false); // Close dropdown after click
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

      {/* Added flex-grow to main to push the footer down */}
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {getGreeting()}, {user?.username}!
          </h1>
          <p className="text-lg text-gray-600">
            Here&apos;s your dashboard overview.
          </p>
        </motion.div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {" "}
          {/* Changed to 3 columns */}
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
              {user?.customer_id}
            </p>
            <p className="text-sm text-gray-500 mt-1">Your unique identifier</p>
          </motion.div>
          {/* Total Referrals Card (now clickable for dropdown) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-shadow duration-200"
            onClick={toggleReferralList}
          >
            <Users className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Total Referrals
            </h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {totalReferrals}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Click to view your referred customers
            </p>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 mt-2 transition-transform ${
                isReferralListDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </motion.div>
          {/* Total Reward Earned Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <IndianRupee className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Total Reward Earned
            </h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {totalRewardEarned}
            </p>
            <p className="text-sm text-gray-500 mt-1">Lifetime earnings</p>
          </motion.div>
        </div>

        {/* Referral List Dropdown */}
        {isReferralListDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 mt-6 overflow-hidden"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Your Referred Customers
            </h3>
            {referrals.length === 0 ? (
              <p className="text-gray-600 text-center">
                No referrals yet. Add new referrals to start earning!
              </p>
            ) : (
              <>
                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                  <ul className="space-y-3">
                    {referrals.map((referral) => (
                      <li
                        key={referral.id}
                        // Adjusted classes for mobile-first responsiveness
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-3 rounded-lg shadow-sm text-center sm:text-left"
                      >
                        <span className="font-medium text-gray-800 mb-1 sm:mb-0">
                          {referral.username}
                        </span>
                        <p className="text-sm text-gray-500 mb-1 sm:mb-0 break-all w-full sm:w-auto min-w-0">
                          {" "}
                          {/* Added w-full sm:w-auto min-w-0 */}
                          Customer ID:{" "}
                          <span className="font-mono">
                            {referral.customer_id}
                          </span>
                        </p>
                        <span className="text-sm text-gray-500">
                          Joined:{" "}
                          {new Date(referral.created_at).toLocaleDateString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Pagination buttons ONLY when referrals exist */}
                {totalReferrals > 5 && (
                  <div className="flex justify-center items-center space-x-4 mt-4">
                    <button
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="text-gray-700 font-medium">
                      Page {page}
                    </span>
                    <button
                      onClick={() => {
                        const maxPage = Math.ceil(totalReferrals / pageSize);
                        if (page < maxPage) setPage(page + 1);
                      }}
                      disabled={page >= Math.ceil(totalReferrals / pageSize)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}

        {/* Add New Referral Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 mt-6 flex flex-col items-center text-center"
        >
          <Link className="w-8 h-8 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Add New Referral
          </h3>
          <p className="text-gray-600 mb-4">
            Easily add new customers to your network.
          </p>
          <button
            onClick={handleAddNewReferral}
            className="w-full max-w-xs flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span>Add Referral</span>
            <Share2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </main>

      {/* New Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-md">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                MeerasEstuff
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 md:mt-0">
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contact@meerasestuff.com" // Replace with actual email
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>contact@meerasestuff.com</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-0">
              © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DashboardPage;
