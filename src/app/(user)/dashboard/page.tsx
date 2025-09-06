"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  User,
  LogOut,
  Share2,
  Users,
  Link,
  ShoppingCart,
  ChevronDown,
  Phone,
  IndianRupee,
  Package,
  Info,
  Star,
  Sparkles,
  Heart,
  Leaf,
  Award,
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
  // Changed to a single boolean, as only the main product will have a togglable description
  const [isMainProductDescriptionOpen, setIsMainProductDescriptionOpen] =
    useState(false);

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

  const toggleMainProductDescription = () => {
    setIsMainProductDescriptionOpen(!isMainProductDescriptionOpen);
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
          className=" backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image
                src="/meeras-logo.jpg"
                alt="MeerasEstuff_Logo"
                width={34}
                height={34}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r text-gray-900">
                MeerasEstuff
              </span>
            </div>

            <div className="relative" ref={userProfileDropdownRef}>
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
                      setIsUserProfileDropdownOpen(false);
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
              <p className="text-sm text-gray-500 mt-1">
                Your unique identifier
              </p>
            </motion.div>
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
                          className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-3 rounded-lg shadow-sm text-center sm:text-left relative"
                        >
                          <span className="font-medium text-gray-800 mb-1 sm:mb-0">
                            {referral.username}
                          </span>

                          <div className="flex items-center gap-2 mb-1 sm:mb-0 flex-wrap justify-center sm:justify-start">
                            <p className="text-sm text-gray-500 break-all min-w-0">
                              Customer ID:{" "}
                              <span className="font-mono">
                                {referral.customer_id}
                              </span>
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShareCustomerId(
                                  referral.customer_id,
                                  referral.username,
                                  setCopiedMessageId
                                );
                              }}
                              className="p-1 rounded-full text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 flex-shrink-0"
                              aria-label="Share Customer ID"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>

                          <span className="text-sm text-gray-500">
                            Joined:{" "}
                            {new Date(referral.created_at).toLocaleDateString()}
                          </span>
                          {copiedMessageId === referral.customer_id && (
                            <motion.span
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full shadow-md z-10 whitespace-nowrap"
                            >
                              Copied!
                            </motion.span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            transition={{ duration: 0.6, delay: 1.2 }}
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

          {/* --- */}
          {/* Our Products Section */}
          <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  Our Products
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Discover our premium collection of carefully crafted products,
                  each made with the finest ingredients!
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Cashew Nuts Product (Featured) */}
                <div className="relative">
                  <div className="bg-white backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group relative h-full">
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">
                          Featured Product
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      {/* Image Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 h-96 lg:h-[450px] ">
                        <div className="relative h-full">
                          <Image
                            src="/img1.jpg" // Cashew image
                            alt="Premium Cashew Nuts"
                            fill
                            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                            priority
                          />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-emerald-500" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Cashew Nut
                          </h2>

                          <div className="flex items-center mb-6">
                            <div className="flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-xl">
                              <IndianRupee className="w-6 h-6 text-emerald-600 mr-2" />
                              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                499
                              </span>
                            </div>
                            <span className="ml-3 text-gray-500 font-medium">
                              250 gm
                            </span>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-6">
                            Hand-selected premium cashew nuts, roasted to
                            perfection with a delightful crunch and rich,
                            buttery taste
                          </p>
                        </div>

                        <button className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 shadow-lg hover:shadow-xl group/btn transform hover:-translate-y-1 self-start">
                          <Info className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          <span>Learn More</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prawn Roast Product */}
                <div className="relative">
                  <div className="bg-white backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group relative h-full">
                    {/* Popular Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                        <Heart className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">
                          Customer Favorite
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      {/* Image Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 h-96 lg:h-[450px]">
                        <div className="relative h-full">
                          <Image
                            src="/Mainimg.jpg" // Prawn image
                            alt="Premium Prawn Roast"
                            fill
                            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                            priority
                          />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-orange-500" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Prawn Roast
                          </h2>

                          <div className="flex items-center mb-6">
                            <div className="flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-xl">
                              <IndianRupee className="w-6 h-6 text-orange-600 mr-2" />
                              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                499
                              </span>
                            </div>
                            <span className="ml-3 text-gray-500 font-medium">
                              175 gm
                            </span>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-6">
                            Savor our Prawn Roast Combo Pack, featuring
                            perfectly seasoned and slow-roasted prawns. Rich,
                            aromatic, and spicy.
                          </p>
                        </div>

                        <button
                          onClick={toggleMainProductDescription}
                          className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg hover:shadow-xl group/btn transform hover:-translate-y-1 self-start"
                        >
                          <Info className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          <span>
                            {isMainProductDescriptionOpen
                              ? "Show Less"
                              : "Learn More"}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isMainProductDescriptionOpen
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        {/* Expandable Description */}
                        {isMainProductDescriptionOpen && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                            <p className="text-gray-700 leading-relaxed text-sm">
                              Crafted with fresh ingredients for a quick gourmet
                              meal or special gathering. Enjoy authentic coastal
                              flavors in every bite.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Our Premium Products?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Premium Quality
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Carefully selected ingredients for the finest taste
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Fresh & Natural
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Made with fresh, natural ingredients daily
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Made with Love
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Traditional recipes crafted with care and passion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
