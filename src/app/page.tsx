"use client";

import React, { useState, useEffect } from "react";
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
  Star,
  Award,
  Shield,
  Zap,
  Heart,
  Phone,
  Menu,
  X,
  Package,
  Info,
  ChevronDown,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  Camera,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfessionalLandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMainProductDescriptionOpen, setIsMainProductDescriptionOpen] =
    useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel data
  const heroImages = [
    {
      src: "/CompanyImg.jpeg",
      alt: "MeerasEstuff Company",
      title: "Premium Quality Products",
    },
    {
      src: "/CompanyImg3.jpeg",
      alt: "MeerasEstuff Products",
      title: "Artisanal Excellence",
    },
  ];

  const AdditionalImg = [
    { src: "/adImg1.jpg" },
    { src: "/adImg2.jpg" },
    { src: "/adImg3.jpg" },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMainProductDescription = () => {
    setIsMainProductDescriptionOpen(!isMainProductDescriptionOpen);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  // Product data
  const products = [
    {
      id: 1,
      name: "Cashew Nut",
      image: "/img1.jpg",
      price: 499,
      unit: "250 gm",
      isMain: true,
      description: `Hand-selected premium cashew nuts, roasted to perfection with a delightful crunch and rich, buttery taste`,
    },
    {
      id: 2,
      name: "Prawn Roast",
      image: "/Mainimg.jpg",
      price: 499,
      unit: "175 gm",
      isMain: false,
      description:
        "Savor our Prawn Roast Combo Pack, featuring perfectly seasoned and slow-roasted prawns. Rich, aromatic, and spicy, it's crafted with fresh ingredients for a quick gourmet meal or special gathering. Enjoy authentic coastal flavors in every bite.",
    },
  ];

  const mainProduct = products.find((product) => product.isMain);
  const futureProducts = products.filter((product) => !product.isMain);

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

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans antialiased">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
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

        {/* Enhanced Hero Section with Image Carousel */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ">
          {/* Enhanced Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-40"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9">
            <div className="text-center space-y-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 space-y-8 mt-9">
                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center lg:justify-start"
                  >
                    <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-700">
                        Trusted by 1000+ Customers
                      </span>
                    </div>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left"
                  >
                    Transform Your Life with
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                      Premium Quality Products
                    </span>
                  </motion.h1>

                  {/* Subheadline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-gray-600 leading-relaxed text-center lg:text-left"
                  >
                    Build your business with just{" "}
                    <span className="font-semibold text-emerald-600">
                      ₹1499 ID activations
                    </span>{" "}
                    — you earn{" "}
                    <span className="font-semibold text-emerald-600">
                      ₹1000 per referral
                    </span>{" "}
                    on premium pickles & dry nuts.
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center justify-center lg:justify-start mt-8"
                  >
                    <button
                      onClick={() => router.push("/login")}
                      className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Start Your Journey</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>

                {/* Right Column - Enhanced Image Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2 flex justify-center items-center"
                >
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          <Image
                            src={heroImages[currentImageIndex].src}
                            alt={heroImages[currentImageIndex].alt}
                            width={500}
                            height={600}
                            className="w-full max-w-md h-auto object-cover transition-transform duration-700 hover:scale-105"
                          />

                          {/* Image Overlay with Title */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-white text-xl font-bold text-center"
                            >
                              {heroImages[currentImageIndex].title}
                            </motion.h3>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-emerald-600 scale-110"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      <Award className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
                Experience Our Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the passion and craftsmanship behind every product we
                create
              </p>
            </motion.div>

            {/* Main Gallery Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              {/* First Image - Large Featured */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 relative group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-2">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={AdditionalImg[0].src}
                      alt="Featured Gallery Image"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Floating Info Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-gray-800 font-semibold text-sm">
                        Premium Quality
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second and Third Images - Stacked */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative group flex-1"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-2 h-full">
                    <div className="relative overflow-hidden rounded-2xl h-full aspect-[4/3]">
                      <Image
                        src={AdditionalImg[1].src}
                        alt="Gallery Image 2"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Corner Badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative group flex-1"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-2 h-full">
                    <div className="relative overflow-hidden rounded-2xl h-full min-h-[190px] sm:min-h-[240px] lg:min-h-[290px]">
                      <Image
                        src={AdditionalImg[2].src}
                        alt="Gallery Image 3"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Corner Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-gray-800 font-medium text-xs">
                          Handcrafted
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats/Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully selected ingredients for the finest taste
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fresh & Natural
                </h3>
                <p className="text-gray-600">
                  Made with fresh, natural ingredients daily
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Made with Love
                </h3>
                <p className="text-gray-600">
                  Traditional recipes crafted with care and passion
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Section */}
        <section
          id="products"
          className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full blur-3xl"></div>

              <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
                  Our Culinary Creations
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover our featured delight and upcoming flavors!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative z-10">
                {/* Left Column: Main Product */}
                {mainProduct && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl border border-white/50 flex flex-col group relative"
                  >
                    {/* Floating Featured Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-sm">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Featured
                      </span>
                    </div>

                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={mainProduct.image}
                        alt={mainProduct.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          target.parentElement
                            ?.querySelector(".fallback-placeholder")
                            ?.classList.remove("hidden");
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 hidden fallback-placeholder">
                        <Package className="w-16 h-16 text-emerald-500" />
                        <p className="text-gray-600 mt-2 text-sm">
                          Image not available
                        </p>
                      </div>

                      {/* Minimal Gradient Overlay - Only at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    {/* Product Info Section - Separated from image */}
                    <div className="p-8 lg:p-10 bg-gradient-to-br from-white to-gray-50">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {mainProduct.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 rounded-2xl shadow-lg border border-emerald-100">
                          <IndianRupee className="w-8 h-8 mr-2 text-emerald-600" />
                          <span className="text-4xl font-bold text-gray-900">
                            {mainProduct.price}
                          </span>
                        </div>
                        {mainProduct.unit && (
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow-lg">
                            <span className="text-lg font-semibold">
                              {mainProduct.unit}
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={toggleMainProductDescription}
                        className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
                      >
                        <Info className="w-6 h-6" />
                        <span className="text-lg">
                          {isMainProductDescriptionOpen
                            ? "Hide Details"
                            : "Show More"}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-300 ${
                            isMainProductDescriptionOpen
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isMainProductDescriptionOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-8 lg:p-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-t border-emerald-100">
                            <p className="text-gray-700 leading-relaxed text-lg lg:text-xl font-medium">
                              {mainProduct.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* Right Column: Future Products */}
                <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                  {futureProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="bg-gradient-to-br from-white to-gray-50/80 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 flex flex-col border border-white/60 group transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm"
                    >
                      <div className="relative w-full aspect-[4/5] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            target.parentElement
                              ?.querySelector(".fallback-placeholder")
                              ?.classList.remove("hidden");
                          }}
                        />
                        <div className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 hidden fallback-placeholder">
                          <Package className="w-12 h-12 text-emerald-500" />
                          <p className="text-gray-600 mt-2 text-xs">
                            Image not available
                          </p>
                        </div>

                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* Hover Effect Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      <div className="p-8 flex-grow flex flex-col bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 relative">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-base mb-6 flex-grow leading-relaxed">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-2 rounded-xl shadow-inner">
                              <IndianRupee className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-3xl font-bold text-gray-800 ml-3">
                              {product.price}
                            </span>
                          </div>

                          {product.unit && (
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow-lg">
                              <span className="text-sm font-bold">
                                {product.unit}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
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
