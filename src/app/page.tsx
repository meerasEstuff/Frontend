"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  ShoppingCart,
  TrendingUp,
  Target,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-inter antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-32">
        {/* Background Pattern - Enhanced for better visual depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-emerald-500 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-teal-500 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-12"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-3 mb-4"
            >
              {/* Replaced ShoppingCart icon with img tag for company logo */}
              <Image
                src="/newLog.jpg" // ✅ must include extension and match filename
                alt="MeerasEstuff_Logo"
                width={64}
                height={64}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                MeerasEstuff
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Discover Quality
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                Pickles & Dry Nuts
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            >
              MeerasEstuff brings you a wide range of quality products directly
              to your door, offering{" "}
              <span className="font-bold text-teal-700">
                profitable opportunities
              </span>{" "}
              through our direct selling model. Earn{" "}
              <span className="font-bold text-emerald-700">
                up to 50% income
              </span>{" "}
              on every referral and more incentives!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 md:mt-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/signup")}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                aria-label="Sign up now"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  router.push("/login");
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                aria-label="Login"
              >
                Login
              </motion.button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 md:mt-16 px-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-xl mb-4 shadow-md">
                  <TrendingUp className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Up to 50%</h3>
                <p className="text-gray-600 text-base">Referral Income</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-4 shadow-md">
                  <Users className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
                <p className="text-gray-600 text-base">Satisfied Customers</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-xl mb-4 shadow-md">
                  <ShoppingCart className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Premium</h3>
                <p className="text-gray-600 text-base">Pickles & Dry Nuts</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-11 border-2 border-emerald-600 rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-emerald-600 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Purpose & Goals
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We aim to deliver the best products directly to customers and
              ensure profitable opportunities. Our goals include:{" "}
              <span className="font-semibold text-emerald-600">
                Enhanced Lifestyle
              </span>
              ,
              <span className="font-semibold text-emerald-600">
                {" "}
                High-Quality Products
              </span>
              , and a
              <span className="font-semibold text-emerald-600">
                {" "}
                Business Opportunity for Financial Freedom
              </span>
              .
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mr-4 shadow-md">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed flex-grow">
                  To design and modernize our direct selling shopping models
                  with the times, paving a smooth path of success for our
                  program partners and customers.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl mr-4 shadow-md">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed flex-grow">
                  Your dream, our design – Empowering people to enhance their
                  lives by helping them achieve their ambitions through our
                  unique direct selling model.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-0">
              © {new Date().getFullYear()} MeerasEstuff. Quality pickles & dry
              nuts with rewarding opportunities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
