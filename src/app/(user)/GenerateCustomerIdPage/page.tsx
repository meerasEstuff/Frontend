"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, Copy, Check, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

function GenerateCustomerIdPage() {
  const router = useRouter();
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Simulate API call or complex generation process
    const generateId = () => {
      setIsLoading(true);
      setTimeout(() => {
        const prefix = "CUST-";
        const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
        const newId = `${prefix}${new Date().getFullYear()}-${randomNum}`;
        setCustomerId(newId);
        setIsLoading(false);
      }, 1500); // Simulate loading time for animation
    };

    generateId();
  }, []); // Empty dependency array means this runs once on mount

  const copyCustomerId = () => {
    if (customerId) {
      const el = document.createElement("textarea");
      el.value = customerId;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset feedback after 2 seconds
    }
  };

  const shareCustomerId = () => {
    if (customerId) {
      // In a real application, you might use navigator.share or a custom share modal
      // For this environment, we'll just alert the user about sharing.
      alert(
        `Simulating share of Customer ID: ${customerId}\n(In a real app, this would open a share dialog or copy to clipboard.)`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-auto"
      >
        {/* Back Button at the top removed */}

        {/* Customer ID Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 text-center"
        >
          {/* Header */}
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
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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

          {/* Generated Customer ID Display */}
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
                key={customerId} // Key to trigger re-animation on ID change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent break-words"
              >
                {customerId}
              </motion.p>
            )}
          </div>

          {/* Action Buttons */}
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
              onClick={() => router.push("/dashboard")} // Navigate back to dashboard
              className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <ArrowLeft className="w-5 h-5" /> {/* Only the icon */}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GenerateCustomerIdPage;
