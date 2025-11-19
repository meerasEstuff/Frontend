"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import {
  ArrowRight,
  Users,
  ShoppingCart,
  TrendingUp,
  Target,
  Eye,
  Shield,
  Zap,
  Heart,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductSection } from "@/components/ProductSection";
// import { AdditionalGallerySection } from "@/components/AdditionalGallerySection";

export default function ProfessionalLandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>MeerasEstuff | Buy & Refer Premium Pickles & Dry Fruits</title>
        <meta
          name="description"
          content="Buy premium quality pickles and dry fruits. Earn ₹160 per referral. Start your entrepreneurship journey with MeerasEstuff."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MeerasEstuff" />
        <meta
          property="og:description"
          content="Buy and refer pickles and dry fruits. Earn commissions with every referral."
        />
        <meta
          property="og:image"
          content="https://meerasestuff.com/og-image.jpg"
        />
        <meta property="og:url" content="https://meerasestuff.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br bg-white/90 font-sans antialiased">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90  ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Company Name */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <Image
                  src="/meeras-logo.jpg"
                  alt="MeerasEstuff Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border-2 border-emerald-200"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">
                    MeerasEstuff
                  </span>
                  <span className="text-xs text-emerald-600 font-medium italic">
                    Your dream, our design
                  </span>
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-emerald-600 transition-colors p-2 rounded-md hover:bg-gray-100"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-white border-t border-gray-200"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#features"
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                    >
                      Features
                    </a>
                    <a
                      href="#products"
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                    >
                      Products
                    </a>
                    <a
                      href="#about"
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#contact"
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Enhanced Hero Section with Single Featured Image */}
        {/* Hero Section - Redesigned */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6 text-center lg:text-left"
              >
                {/* Trust Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600" />
                  <span className="text-xs sm:text-sm font-semibold text-primary-700">
                    Trusted by 1000+ Customers
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your Life
                  <br />
                  <span className="text-gray-900">with Premium</span>
                  <br />
                  <span className="text-gray-900">Quality Products</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Build your business with just{" "}
                  <span className="inline-flex items-center bg-primary-100 text-primary-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg font-bold text-sm sm:text-base">
                    ₹999 ID activation
                  </span>{" "}
                  — you earn{" "}
                  <span className="inline-flex items-center bg-primary-100 text-primary-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg font-bold text-sm sm:text-base">
                    ₹400 per referral
                  </span>{" "}
                  on premium pickles & dry nuts.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => router.push("/login")}
                    className="bg-gradient-to-r from-gray-600 via-emerald-700 to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-primary-100">
                  <Image
                    src="/cpmImg.jpg"
                    alt="Premium Products"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Gallery Section */}
        {/* <AdditionalGallerySection /> */}

        {/* Product Section */}
        <ProductSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose MeerasEstuff?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine quality products with a proven business model to
                create opportunities for financial independence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
                  title: "Maximum Earnings",
                  description:
                    "Maximize Your Income Keep the majority of every sale you generate with our high-paying referral program",
                },
                {
                  icon: <ShoppingCart className="w-8 h-8 text-teal-600" />,
                  title: "Premium Products",
                  description:
                    "Curated selection of high-quality pickles and dry nuts that customers love",
                },
                {
                  icon: <Users className="w-8 h-8 text-emerald-600" />,
                  title: "Proven Support System",
                  description:
                    "Comprehensive training and ongoing support to ensure your success",
                },
                {
                  icon: <Zap className="w-8 h-8 text-teal-600" />,
                  title: "Fast Delivery",
                  description:
                    "Reliable logistics network ensuring quick delivery to customers nationwide",
                },
                {
                  icon: <Shield className="w-8 h-8 text-emerald-600" />,
                  title: "Quality Guarantee",
                  description:
                    "100% satisfaction guarantee on all products with easy returns",
                },
                {
                  icon: <Heart className="w-8 h-8 text-teal-600" />,
                  title: "Customer First",
                  description:
                    "Dedicated customer service team ensuring exceptional experience",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Join a thriving community of successful entrepreneurs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1,000+", label: "Active Members" },
                { number: "₹50k+", label: "Monthly Earnings" },
                { number: "99%", label: "Customer Satisfaction" },
                { number: "500+", label: "Cities Covered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-emerald-100 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering dreams through quality products and sustainable
                business opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize direct selling by providing premium quality
                  products and creating sustainable income opportunities for
                  entrepreneurs across India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become India&apos;s most trusted direct selling company,
                  empowering millions to achieve financial freedom through our
                  innovative business model.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who have transformed their lives
                with MeerasEstuff
              </p>
              <button
                onClick={() => router.push("/login")}
                className="bg-accent-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
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

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/login")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal */}
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
                  <li>
                    <button
                      onClick={() => router.push("/contact-us")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Contact Us
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
