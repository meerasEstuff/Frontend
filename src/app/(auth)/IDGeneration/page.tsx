"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  ArrowLeft,
  Award, // Icon for referral benefits
  CheckCircle, // Icon for success/ID generated
} from "lucide-react";
import { useRouter } from "next/navigation";

function CustomerIDGenerationPage() {
  const router = useRouter();
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCustomerID = () => {
    setIsGenerating(true);
    // Simulate API call or ID generation process
    setTimeout(() => {
      const newId = `CUST-${Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")}`;
      setGeneratedId(newId);
      setIsGenerating(false);
    }, 1500); // Simulate 1.5 seconds generation time
  };

  const handleContinueToDashboard = () => {
    router.push("/dashboard"); // Navigate to the dashboard page
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
        {/* Back Button (optional, can be removed if this is a mandatory step after signup) */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => router.back()} // Goes back to the previous page (e.g., signup)
          className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Signup</span>
        </motion.button>

        {/* Customer ID Generation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="text-center mb-6">
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
              Your Journey Begins!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-600"
            >
              Generate your unique Customer ID to get started.
            </motion.p>
          </div>

          {/* ID Generation Section */}
          <div className="text-center my-8">
            {!generatedId ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateCustomerID}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <span>Generate My Customer ID</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  Your Customer ID:
                </p>
                <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  {generatedId}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinueToDashboard}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <span>Continue to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Referral Program Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 mt-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Award className="w-6 h-6 text-teal-600" />
            <span>MeerasEstuff Referral Program</span>
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            MeerasEstuff is a direct selling company distributing quality pickle
            and dry nuts products. Our aim is to deliver the best products
            directly to customers and ensure profitable opportunities.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Goals:
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
            <li>Enhanced lifestyle</li>
            <li>High quality products</li>
            <li>Business opportunity that gives you financial freedom.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Vision:
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            &quot;Your dream, our design&quot; - Empowering people to enhance
            their lives by helping them achieve their ambition.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Mission:
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            To design and modernize our direct selling shopping models with
            times and to pave a smooth path of success for our programme
            partners.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Earn More:
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>YOU CAN GET UP TO 50% INCOME ON EVERY REFERRAL</li>
            <li>YOU CAN GET RS 1000/- INCENTIVE ON EVERY 100/- REFERRAL</li>
            <li>
              YOU CAN GET RS 25/- INCENTIVE ON EVERY REFERRAL PRODUCT HANDLING.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CustomerIDGenerationPage;
