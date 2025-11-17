"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Package,
  IndianRupee,
  Star,
  Heart,
  Zap,
  Award,
  Leaf,
} from "lucide-react";

export const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Cashew Nut",
      image: "/adImg4.jpg",
      price: 749,
      unit: "250 gm",
      isMain: true,
      description: `Hand-selected premium cashew nuts, roasted to perfection with a delightful crunch and rich, buttery taste.`,
      healthBenefits: [
        "Rich in Antioxidants",
        "Heart Health Support",
        "Energy Booster",
        "Digestive Support",
      ],
      nutritionFacts: [
        { label: "Calories", value: "180 kcal" },
        { label: "Protein", value: "6g" },
        { label: "Carbs", value: "9g" },
        { label: "Fat", value: "14g" },
      ],
      highlights: [
        "Premium Quality",
        "Natural Ingredients",
        "Freshly Roasted",
        "Rich in Nutrients",
      ],
    },
    {
      id: 2,
      name: "Honey Soaked Mixed Nuts",
      image: "/adImg5.jpg",
      price: 749,
      unit: "400 gm",
      isMain: false,
      description:
        "Indulge in Meeras' Premium Honey Soaked Mixed Nuts — a wholesome blend of white cashews, raisins, dates, and peanuts enriched with pure honey. Naturally sweet, energy-packed, and perfect for daily snacking or gifting.",
      healthBenefits: [
        "Rich in Antioxidants",
        "Natural Energy Booster",
        "Supports Heart Health",
        "Improves Digestion",
        "Boosts Immunity",
      ],
      nutritionFacts: [
        { label: "Calories", value: "340 kcal" },
        { label: "Protein", value: "10g" },
        { label: "Carbs", value: "30g" },
        { label: "Fat", value: "20g" },
        { label: "Natural Sugar", value: "15g" },
      ],
      highlights: [
        "Made with Cashews, Raisins, Dates & Peanuts",
        "Sweetened with Pure Honey",
        "No Added Sugar or Preservatives",
        "Perfect for Family Snacking or Gifting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
            <Package className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Premium Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted with the finest ingredients for your wellness
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Image Section - Fixed to show full image */}
                <div className="relative w-full h-80 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                        product.isMain
                          ? "bg-emerald-500 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {product.isMain ? (
                        <Star className="w-3 h-3 fill-current" />
                      ) : (
                        <Heart className="w-3 h-3 fill-current" />
                      )}
                      <span>{product.isMain ? "Featured" : "Popular"}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  {/* Header with Price */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <div className="flex items-center text-2xl font-bold text-gray-900">
                        <IndianRupee className="w-5 h-5" />
                        {product.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.unit}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Nutrition Facts */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      Nutrition Facts
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {product.nutritionFacts.map((fact) => (
                        <div
                          key={fact.label}
                          className="bg-gray-50 rounded-lg p-3 text-center"
                        >
                          <div className="text-sm text-gray-600 mb-1">
                            {fact.label}
                          </div>
                          <div className="font-semibold text-gray-900">
                            {fact.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Health Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-500" />
                      Health Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.healthBenefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Product Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Award,
              title: "Premium Quality",
              description: "Carefully selected ingredients for superior taste",
            },
            {
              icon: Leaf,
              title: "100% Natural",
              description: "No artificial additives or preservatives",
            },
            {
              icon: Heart,
              title: "Health Focused",
              description: "Nutrition-packed for your wellness journey",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
