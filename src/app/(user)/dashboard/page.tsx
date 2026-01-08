"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import {
  User,
  LogOut,
  Share2,
  Users,
  LinkIcon,
  ArrowRight,
  ShoppingCart,
  ChevronDown,
  Phone,
  IndianRupee,
  Sparkles,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/userStore";
import { getTotalReferralsCount } from "@/services/userService";
import { getTotalReferralReward } from "@/services/rewardService";
import { getReferralsByUserId } from "@/services/userService";
import { getGreeting } from "@/utils/greeting";
import { handleShareCustomerId } from "@/utils/shareUtils";
import { useProtectPage } from "@/lib/useProtectPage";
import Image from "next/image";
import { ProductSection } from "@/components/dashboard/product-section/ProdcutSection";

function DashboardPage() {
  const router = useRouter();
  const user = useProtectPage();
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [referrals, setReferrals] = useState<
    { id: string; customer_id: string; username: string; created_at: string }[]
  >([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

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

  const [isUserProfileDropdownOpen, setIsUserProfileDropdownOpen] =
    useState(false);
  const [isReferralListDropdownOpen, setIsReferralListDropdownOpen] =
    useState(false);
  const userProfileDropdownRef = useRef<HTMLDivElement>(null);

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

  if (!user) return null;

  const handleLogout = () => {
    useAuthStore.getState().clearUser();
    router.push("/login");
  };

  const handleAddNewReferral = () => {
    router.push("/onboard");
  };

  const toggleReferralList = () => {
    setIsReferralListDropdownOpen(!isReferralListDropdownOpen);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Your Dashboard | MeerasEstuff</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl px-6 py-3 flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/meeras-logo.jpg"
                  alt="MeerasEstuff_Logo"
                  width={32}
                  height={32}
                  className="rounded-full shadow-sm"
                />
                <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  MeerasEstuff
                </span>
              </div>

              {/* Profile/User Section */}
              <div className="relative" ref={userProfileDropdownRef}>
                <button
                  onClick={() =>
                    setIsUserProfileDropdownOpen(!isUserProfileDropdownOpen)
                  }
                  className="flex items-center space-x-2 p-1 pr-3 bg-gray-50 rounded-full border border-gray-100 hover:bg-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                  aria-expanded={isUserProfileDropdownOpen}
                  aria-haspopup="true"
                >
                  {/* Avatar Icon */}
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {user?.username ? (
                      user.username.charAt(0).toUpperCase()
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      isUserProfileDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isUserProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl py-2 z-10 border border-gray-100 p-1.5"
                    >
                      <button
                        onClick={() => {
                          router.push("/myProfile");
                          setIsUserProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl flex items-center space-x-3 transition-colors duration-200"
                      >
                        <div className="p-1.5 bg-emerald-100 rounded-lg">
                          <User className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span>My Profile</span>
                      </button>

                      <div className="h-px bg-gray-100 my-1 mx-2" />

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl flex items-center space-x-3 transition-colors duration-200"
                      >
                        <div className="p-1.5 bg-red-100 rounded-lg">
                          <LogOut className="w-4 h-4 text-red-600" />
                        </div>
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.nav>

        <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            {/* Modern Sub-header badge */}
            <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Personal Dashboard</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">
              {getGreeting()},{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                {user?.username}!
              </span>
            </h1>

            <p className="text-gray-500 font-medium max-w-xs sm:max-w-none">
              Here&apos;s a look at your network and performance today.
            </p>
          </motion.div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Customer ID Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className="bg-gray-50 p-4 rounded-2xl mb-4 group-hover:bg-emerald-50 transition-colors duration-300">
                <ShoppingCart className="w-6 h-6 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Customer ID
              </h3>
              <p className="text-2xl font-black text-gray-900 tracking-tight">
                {user?.customer_id}
              </p>
              <p className="text-[10px] text-emerald-600 font-bold mt-2 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                Verified Account
              </p>
            </motion.div>

            {/* Total Referrals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={toggleReferralList}
              className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center cursor-pointer hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="bg-emerald-50 p-4 rounded-2xl mb-4 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Total Referrals
              </h3>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                {totalReferrals}
              </p>
              <div className="flex items-center text-[10px] font-bold text-gray-400 mt-3 group-hover:text-emerald-600 transition-colors">
                View Network{" "}
                <ChevronDown
                  className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                    isReferralListDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </motion.div>

            {/* Total Reward Card (The "Wallet" Look) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="bg-white/10 p-4 rounded-2xl mb-4 text-emerald-400 inline-block">
                  <IndianRupee className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Total Earnings
                </h3>
                <p className="text-4xl font-black text-white tracking-tight">
                  ₹{totalRewardEarned.toLocaleString("en-IN")}
                </p>
                <p className="text-[10px] text-emerald-400 font-medium mt-3 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                  Lifetime Balance
                </p>
              </div>
            </motion.div>
          </div>

          {/* Referral List Dropdown */}
          <AnimatePresence>
            {isReferralListDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[2rem] shadow-2xl shadow-emerald-900/5 border border-gray-100 p-6 md:p-8 mt-6 overflow-hidden relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-gray-900 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-emerald-600" />
                    My Network
                  </h3>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {totalReferrals} Members
                  </span>
                </div>

                {referrals.length === 0 ? (
                  <div className="py-10 text-center">
                    <p className="text-gray-400 font-medium">
                      No referrals found yet.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                      {referrals.map((referral) => (
                        <motion.div
                          key={referral.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="group bg-gray-50/50 hover:bg-white hover:shadow-md border border-transparent hover:border-emerald-100 p-4 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 relative"
                        >
                          {/* User Info Section */}
                          <div className="flex items-center space-x-4 w-full sm:w-auto">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                              {referral.username.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 leading-tight">
                                {referral.username}
                              </p>
                              <p className="text-[10px] text-gray-400 font-medium flex items-center mt-1">
                                <Calendar className="w-3 h-3 mr-1" />
                                Joined{" "}
                                {new Date(
                                  referral.created_at
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>

                          {/* ID & Share Section */}
                          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                            <div className="bg-white border border-gray-100 px-3 py-2 rounded-lg">
                              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter mb-0.5">
                                ID Number
                              </p>
                              <p className="text-sm font-mono font-bold text-gray-700">
                                {referral.customer_id}
                              </p>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShareCustomerId(
                                  referral.customer_id,
                                  referral.username,
                                  setCopiedMessageId
                                );
                              }}
                              className="p-3 bg-white hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 rounded-xl border border-gray-100 transition-all active:scale-95 relative"
                            >
                              <Share2 className="w-4 h-4" />
                              {copiedMessageId === referral.customer_id && (
                                <motion.span
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg"
                                >
                                  Copied!
                                </motion.span>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Improved Pagination */}
                    {totalReferrals > pageSize && (
                      <div className="flex justify-center items-center space-x-6 mt-8 pt-6 border-t border-gray-50">
                        <button
                          onClick={() =>
                            setPage((prev) => Math.max(prev - 1, 1))
                          }
                          disabled={page === 1}
                          className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 disabled:opacity-30 disabled:hover:bg-gray-50 transition-colors"
                        >
                          <ChevronDown className="w-6 h-6 rotate-90" />
                        </button>

                        <div className="text-sm font-bold text-gray-500">
                          Page <span className="text-gray-900">{page}</span> of{" "}
                          <span className="text-gray-900">
                            {Math.ceil(totalReferrals / pageSize)}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            const maxPage = Math.ceil(
                              totalReferrals / pageSize
                            );
                            if (page < maxPage) setPage(page + 1);
                          }}
                          disabled={
                            page >= Math.ceil(totalReferrals / pageSize)
                          }
                          className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 disabled:opacity-30 disabled:hover:bg-gray-50 transition-colors"
                        >
                          <ChevronDown className="w-6 h-6 -rotate-90" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Add New Referral Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 mt-10 mb-16 overflow-hidden group text-center"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors duration-500" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl group-hover:bg-teal-100 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon with Ring Effect */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-emerald-200 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-emerald-50 w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-emerald-600">
                  <LinkIcon className="w-8 h-8" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">
                Grow Your Network
              </h2>
              <p className="text-gray-500 font-medium max-w-sm mx-auto mb-8 leading-relaxed">
                Easily onboard new customers or students to your network and
                start earning rewards instantly.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddNewReferral}
                className="w-full max-w-xs bg-gray-900 text-white py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-gray-200 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center group/btn"
              >
                <span>Add New Referral</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>

              <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Earn up to ₹299 per referral
              </p>
            </div>
          </motion.div>

          {/* --- */}
          {/* Our Products Section */}
          <ProductSection />

          {/* --- */}
        </main>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/meeras-logo.jpg"
                    alt="MeerasEstuff_Logo"
                    width={34}
                    height={34}
                    className="rounded-full shadow-md"
                  />
                  <span className="text-2xl font-bold">MeerasEstuff</span>
                </div>
                <p className="text-lg text-emerald-100 italic mb-2">
                  Your dream, our design
                </p>
                <p className="text-gray-400 mb-6 max-w-md">
                  Empowering entrepreneurs with quality products and sustainable
                  income opportunities through our innovative direct selling
                  model.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="tel:+919744698259"
                    className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 9744 698 259</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => router.push("/contact-us")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => router.push("/privacy-policy")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/terms-and-conditions")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Terms & Conditions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/cancellation-and-refund")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Cancellation & Refund
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/shipping-and-delivery")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Shipping & Delivery
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default DashboardPage;
