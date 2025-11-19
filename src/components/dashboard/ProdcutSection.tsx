"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IndianRupee,
  Heart,
  Zap,
  Award,
  Leaf,
  Sparkles,
  Brain,
  Shield,
  Droplets,
  Scale,
  Eye,
  Gem,
  CheckCircle,
} from "lucide-react";

// Health Benefits Component
const HealthBenefitsHighlight = () => {
  const benefits = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Rich in Biotin & Vitamin B7",
      description: "Essential for hair growth, skin health, and nail strength",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Enhances Brain Function",
      description: "Improves cognition, memory, and overall brain health",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Liver Detox & Hormone Health",
      description: "Aids in natural detoxification and hormonal balance",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Blood Glucose Control",
      description: "Helps stabilize blood sugar levels naturally",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Cardiovascular Support",
      description: "Promotes heart health and improves blood circulation",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Anti-inflammatory Protection",
      description:
        "Resveratrol content protects against inflammatory conditions",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100/50"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Science-Backed Health Benefits
        </h3>
        <p className="text-gray-600 text-lg">
          A powerhouse of nutrition for complete wellness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-amber-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                <div className="text-white">{benefit.icon}</div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Comprehensive Benefits List Component
const ComprehensiveBenefits = () => {
  const fullBenefits = [
    "Rich source of Biotin, Vitamin B7, Vitamin E, Iron & dietary fibre",
    "Improves blood supply and helps prevent Anaemia",
    "Enhances cognition, memory and overall brain health",
    "Aids liver detoxification and balances hormone health",
    "Resveratrol content protects against inflammatory conditions",
    "Helps stabilize blood glucose levels naturally",
    "Supports healthy weight management",
    "Promotes cardiovascular and skin health",
    "Strengthens nail & hair growth",
    "Aids smooth digestion and gut health",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-4">
          <Gem className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Complete Wellness Benefits
        </h3>
        <p className="text-gray-600 text-lg">
          Your daily dose of health and vitality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fullBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300"
          >
            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm md:text-base">
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const ProductSection = () => {
  const product = {
    id: 1,
    name: "Honey Soaked Mixed Nuts",
    image: "/adImg5.jpg",
    price: 799,
    unit: "500 gm",
    description:
      "Meeras E Stuff brings you the ultimate energiser - a spoonful gives you the kick start of the day. Packed with minerals, vitamins, proteins, and fibres. We've combined liquid gold (organic honey) with finest quality nuts, creating a superfood with highest antioxidants and anti-inflammatory properties.",
    healthBenefits: [
      "Anaemia prevention & improved blood supply",
      "Enhanced cognition and brain health",
      "Liver detoxification & hormone balance",
      "Blood glucose stabilization",
      "Healthy weight management",
      "Cardiovascular & skin health",
      "Nail & hair growth support",
      "Smooth digestion aid",
    ],
    nutritionFacts: [
      { label: "Calories", value: "425 kcal" },
      { label: "Protein", value: "12.5g" },
      { label: "Carbs", value: "37.5g" },
      { label: "Fat", value: "25g" },
      { label: "Fiber", value: "10g" },
      { label: "Natural Sugar", value: "18.75g" },
    ],
    highlights: [
      "Organic Honey & Premium Nuts",
      "Highest Antioxidants",
      "Anti-inflammatory Properties",
      "No Added Sugar",
      "Rich in Vitamins & Minerals",
      "Daily Energy Booster",
    ],
    keyNutrients: [
      "Biotin & Vitamin B7",
      "Vitamin E & Iron",
      "Dietary Fibre",
      "Good Fats",
      "Resveratrol",
      "Essential Minerals",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl border border-amber-100 mb-8"
          >
            <Sparkles className="w-10 h-10 text-amber-600" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Premium Honey Soaked Mixed Nuts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nature&apos;s ultimate energizer - packed with vitamins, minerals,
            and antioxidants for your complete wellness journey
          </p>
        </motion.div>

        {/* Main Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Section - Updated with clean rounded image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-amber-100/50 overflow-hidden">
              {/* Clean image container without outer box */}
              <div className="relative w-full h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-3xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-amber-100/50 p-10">
              {/* Header with Price */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-amber-600 font-semibold text-lg">
                    {product.unit}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-4xl font-bold text-gray-900">
                    <IndianRupee className="w-7 h-7" />
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Inclusive of all taxes
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Key Nutrients */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-3 text-xl">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  Key Nutrients
                </h4>
                <div className="flex flex-wrap gap-3">
                  {product.keyNutrients.map((nutrient) => (
                    <span
                      key={nutrient}
                      className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-4 py-3 rounded-xl text-base font-semibold border border-emerald-200"
                    >
                      {nutrient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Facts */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-5 flex items-center gap-3 text-xl">
                  <Zap className="w-6 h-6 text-amber-600" />
                  Nutrition Facts (per serving)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.nutritionFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 text-center border border-amber-100"
                    >
                      <div className="text-sm text-amber-800 mb-2 font-medium">
                        {fact.label}
                      </div>
                      <div className="font-bold text-gray-900 text-xl">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Highlights */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-3 text-xl">
                  <Award className="w-6 h-6 text-amber-600" />
                  Product Highlights
                </h4>
                <div className="flex flex-wrap gap-3">
                  {product.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-xl text-sm font-semibold border border-amber-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Health Benefits Section */}
        <div className="mb-20">
          <HealthBenefitsHighlight />
        </div>

        {/* Comprehensive Benefits */}
        <div className="mb-20">
          <ComprehensiveBenefits />
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Award,
              title: "Premium Quality",
              description:
                "Finest organic honey and carefully selected nuts for superior quality",
            },
            {
              icon: Shield,
              title: "100% Natural",
              description:
                "No artificial additives, preservatives, or added sugars",
            },
            {
              icon: Zap,
              title: "Daily Energy Booster",
              description:
                "Perfect natural energizer to start your day with vitality",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-3xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
