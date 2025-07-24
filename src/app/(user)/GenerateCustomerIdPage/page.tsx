"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ShoppingCart, House, Copy, Check, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { generateCustomerId } from "@/utils/idGenerator";
import { useOnboardingStore } from "@/app/store/onboardingStore";
import { insertNewUser } from "@/services/userService";
import { useProtectPage } from "@/lib/useProtectPage";

function GenerateCustomerIdPage() {
  const user = useProtectPage();
  const router = useRouter();
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let hasSaved = false;

    const saveUser = async (newId: string) => {
      setCustomerId(newId);
      setIsLoading(false);

      if (hasSaved) return; // ✅ Prevent double call
      hasSaved = true;

      const { username, email, phone, referredById, reset } =
        useOnboardingStore.getState();

      try {
        await insertNewUser({
          customer_id: newId,
          username,
          email,
          phone,
          referred_by_id: referredById,
        });

        reset();
        // ❌ Removed router.push() here to give user time
      } catch (error) {
        console.error("❌ Error inserting user:", error);
      }
    };

    setIsLoading(true);
    setTimeout(() => {
      const newId = generateCustomerId();
      saveUser(newId);
    }, 1500);

    // Optional: cleanup
    return () => {
      hasSaved = true;
    };
  }, []);

  const copyCustomerId = async () => {
    if (customerId) {
      try {
        await navigator.clipboard.writeText(customerId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Clipboard copy failed. Falling back:", err);
        const el = document.createElement("textarea");
        el.value = customerId;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const shareCustomerId = () => {
    if (customerId) {
      const shareText = `Check out this new Customer ID: ${customerId} on MeerasEstuff!`;

      if (navigator.share) {
        navigator
          .share({
            title: "MeerasEstuff Customer ID",
            text: shareText,
          })
          .catch((error) => {
            if (error.name !== "AbortError") {
              console.error("Share failed:", error);
              copyCustomerId();
              alert("Failed to share. Customer ID copied to clipboard.");
            }
          });
      } else {
        copyCustomerId();
        alert("Share not available. Customer ID copied to clipboard.");
      }
    }
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Your Dashboard | MeerasEstuff</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4 font-sans">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 text-center"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center space-x-3 mb-4"
              >
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r text-gray-900">
                  MeerasEstuff
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
              >
                Customer ID Generated!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-600"
              >
                Share this unique ID with your new referral.
              </motion.p>
            </div>

            <div className="my-8">
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="text-3xl font-bold text-gray-400"
                >
                  Generating...
                </motion.div>
              ) : (
                <motion.p
                  key={customerId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent break-words"
                >
                  {customerId}
                </motion.p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={copyCustomerId}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Copy ID</span>
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={shareCustomerId}
                disabled={isLoading}
                className="flex-1 bg-white text-gray-800 border-2 border-gray-200 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Share2 className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Share ID</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/dashboard")}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <House className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default GenerateCustomerIdPage;
