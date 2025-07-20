"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  Package, // Import Package icon
  Info, // Import Info icon
  ChevronDown, // Import ChevronDown icon
  IndianRupee, // Import IndianRupee icon
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfessionalLandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMainProductDescriptionOpen, setIsMainProductDescriptionOpen] =
    useState(false); // State for main product description

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMainProductDescription = () => {
    setIsMainProductDescriptionOpen(!isMainProductDescriptionOpen);
  };

  // Your provided product data
  const products = [
    {
      id: 1,
      name: "Prawn Roast",
      image: "/Mainimg.jpg",
      price: 750,
      isMain: true,
      description: `Indulge in our exquisite Prawn Roast Combo Pack, a culinary delight for seafood lovers. This pack features perfectly seasoned and slow-roasted prawns, offering a rich, aromatic, and spicy experience. Made with fresh, high-quality ingredients, it's ideal for a quick, gourmet meal or entertaining guests. Each bite promises a burst of authentic flavors, bringing the taste of traditional coastal cuisine right to your home. Enjoy the perfect blend of spices and tender prawns in every serving.`,
    },
    {
      id: 2,
      name: "Dates Pickle",
      image: "/img1.jpg", // Using existing placeholder images
      price: 750,
      unit: "per 1 kg",
      isMain: false,
      description:
        "a flavorful Pickle made with dates and spices, and can be sweat,sour ,tangy or spicy",
    },
    {
      id: 3,
      name: "Garlic Pickle",
      image: "/img3.jpg",
      price: 750,
      unit: "per 1 kg",
      isMain: false,
      description:
        "Garlic Pickle,a flavorful and tangy condiment that add a burst of zest to any meal",
    },
  ];

  // Derive mainProduct and futureProducts from the 'products' array
  const mainProduct = products.find((product) => product.isMain);
  const futureProducts = products.filter((product) => !product.isMain);

  return (
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
                href="#products" // Added products section link
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
                    href="#products" // Added products section link
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Enhanced Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center lg:text-left"
                ></motion.div>

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
                  Join thousands of entrepreneurs earning{" "}
                  <span className="font-semibold text-emerald-600">
                    40% and above commission
                  </span>{" "}
                  while delivering premium pickles & dry nuts directly to
                  customers
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

              {/* Right Column Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full lg:w-1/2 flex justify-center items-center"
              >
                <div className="relative">
                  <Image
                    src="/CompanyImg.jpeg"
                    alt="MeerasEstuff Company"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-md h-auto object-cover"
                  />
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
      {/* Product Section */}
      <section id="products" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 mt-6"
          >
            <div className="text-center mb-8">
              <Package className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Our Products
              </h2>
              <p className="text-gray-600">
                Discover our main offering and upcoming delights!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Main Product */}
              {mainProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col relative"
                >
                  <div className="relative h-96 w-full flex-grow">
                    <Image
                      src={mainProduct.image}
                      alt={mainProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement
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
                    {/* Overlay for details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="text-3xl font-bold mb-1">
                        {mainProduct.name}
                        <span className="ml-2 text-base bg-emerald-500 text-white px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </h3>
                      <p className="text-4xl font-bold mb-4 flex items-center">
                        <IndianRupee className="w-8 h-8 mr-1" />
                        {mainProduct.price}
                      </p>
                      <button
                        onClick={toggleMainProductDescription}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        <Info className="w-5 h-5" />
                        <span>
                          {isMainProductDescriptionOpen
                            ? "Hide Details"
                            : "Show More"}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isMainProductDescriptionOpen
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Description dropdown (conditionally rendered outside the image div) */}
                  {isMainProductDescriptionOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-700 text-sm p-6 bg-gray-50 rounded-b-md"
                    >
                      {mainProduct.description}
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* Right Column: Future Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {futureProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement
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
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                          <IndianRupee className="w-5 h-5 mr-1" />
                          {product.price}{" "}
                          {product.unit ? ` ${product.unit}` : ""}
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MeerasEstuff?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine quality products with a proven business model to create
              opportunities for financial independence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
                title: "40% above Commission Rate",
                description:
                  "Earn substantial income with our industry-leading commission structure on every referral",
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
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
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
                    href="#products" // Added products section link
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
  );
}
