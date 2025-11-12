"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Heart,
  Package,
  IndianRupee,
  Leaf,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

export const ProductSection = () => {
  const [isMainProductDescriptionOpen, setIsMainProductDescriptionOpen] =
    useState(false);

  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Cashew Nut",
      image: "/adImg4.jpg",
      price: 749,
      unit: "250 gm",
      isMain: true,
      description: `Hand-selected premium cashew nuts, roasted to perfection with a delightful crunch and rich, buttery taste. Our cashews are sourced from the finest orchards and carefully processed to preserve their natural goodness.`,
      healthBenefits: [
        {
          title: "Rich in Antioxidants",
          description: "Fights free radicals and reduces oxidative stress",
        },
        {
          title: "Heart Health",
          description: "Supports cardiovascular health with healthy fats",
        },
        {
          title: "Energy Booster",
          description: "Provides sustained energy throughout the day",
        },
        {
          title: "Digestive Support",
          description: "Promotes healthy digestion and gut health",
        },
        {
          title: "Immunity Enhancement",
          description: "Strengthens immune system naturally",
        },
        {
          title: "Vitamin-Rich",
          description: "Natural source of essential vitamins and minerals",
        },
      ],
      nutritionFacts: [
        { label: "Calories", value: "180 kcal" },
        { label: "Protein", value: "6g" },
        { label: "Carbs", value: "9g" },
        { label: "Fat", value: "14g" },
      ],
    },
    {
      id: 2,
      name: "Honey Soaked Mixed Nuts",
      image: "/adImg5.jpg",
      price: 1099,
      unit: "400 gm",
      isMain: false,
      description:
        "Indulge in Meeras’ Premium Honey Soaked Mixed Nuts — a wholesome blend of almonds, cashews, and walnuts soaked in pure honey. Naturally sweet, nutrient-rich, and bursting with flavor, it’s the perfect healthy treat for families, gifting, or daily snacking.",
      healthBenefits: [
        {
          title: "Rich in Antioxidants",
          description:
            "Protects your cells from oxidative stress and boosts immunity",
        },
        {
          title: "Natural Energy Booster",
          description:
            "A perfect mix of protein, healthy fats, and natural sugars for sustained energy",
        },
        {
          title: "Supports Heart Health",
          description:
            "Loaded with heart-friendly nutrients from nuts and honey",
        },
        {
          title: "Improves Digestion",
          description: "Honey aids digestion and promotes gut health naturally",
        },
        {
          title: "Promotes Glowing Skin",
          description:
            "Vitamin E and antioxidants help nourish and rejuvenate skin",
        },
        {
          title: "Strengthens Immunity",
          description:
            "Natural nutrients help enhance the body’s defense system",
        },
      ],
      nutritionFacts: [
        { label: "Calories", value: "336 kcal" },
        { label: "Protein", value: "9.6g" },
        { label: "Carbs", value: "28.8g" },
        { label: "Fat", value: "22.4g" },
        { label: "Sugar (Natural)", value: "16g" },
      ],
      highlights: [
        "100% Natural Ingredients",
        "Premium Honey Blend",
        "No Added Sugar or Preservatives",
        "Perfect for Family Snacking or Gifting",
      ],
    },
  ];

  const mainProduct = products.find((product) => product.isMain);
  const futureProducts = products.filter((product) => !product.isMain);

  // Default nutrition facts in case mainProduct is undefined
  const defaultNutritionFacts = [
    { label: "Calories", value: "180 kcal" },
    { label: "Protein", value: "6g" },
    { label: "Carbs", value: "9g" },
    { label: "Fat", value: "14g" },
  ];

  // Default health benefits in case mainProduct is undefined
  const defaultHealthBenefits = [
    {
      title: "Rich in Antioxidants",
      description: "Fights free radicals and reduces oxidative stress",
    },
    {
      title: "Heart Health",
      description: "Supports cardiovascular health with healthy fats",
    },
  ];

  if (!mainProduct) {
    return (
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">
            No products available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section
        id="products"
        className="py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 p-4 sm:p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="text-center mb-8 md:mb-16 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl md:rounded-2xl shadow-xl mb-4 md:mb-6">
                <Package className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-3 md:mb-4">
                Our Culinary Creations
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Premium quality products crafted with tradition and excellence
              </p>
            </div>

            {/* Main Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-16"
            >
              <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl border border-amber-100/50 relative">
                {/* Featured Badge */}
                <div className="absolute top-3 left-3 md:top-6 md:left-6 z-20">
                  <span className="inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold shadow-2xl backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></span>
                    Featured Product
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Product Image */}
                  <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[400px] lg:min-h-[600px] overflow-hidden">
                    <Image
                      src={mainProduct.image}
                      alt={mainProduct.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500 ease-out "
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallback = target.parentElement?.querySelector(
                          ".fallback-placeholder"
                        );
                        if (fallback) fallback.classList.remove("hidden");
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 hidden fallback-placeholder">
                      <Package className="w-12 h-12 md:w-16 md:h-16 text-amber-500" />
                      <p className="text-gray-600 mt-2 text-sm">
                        Image not available
                      </p>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                      {mainProduct.name}
                    </h3>

                    {/* Price and Unit */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="flex items-center bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-amber-100">
                        <IndianRupee className="w-6 h-6 md:w-8 md:h-8 mr-1.5 md:mr-2 text-amber-600" />
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                          {mainProduct.price}
                        </span>
                      </div>
                      {mainProduct.unit && (
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg">
                          <span className="text-sm md:text-lg font-semibold">
                            {mainProduct.unit}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                      {mainProduct.description}
                    </p>

                    {/* Nutrition Facts - Compact on Mobile */}
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                        <Leaf className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                        Nutrition Facts
                      </h4>
                      <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4">
                        <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs sm:text-sm">
                          {(
                            mainProduct.nutritionFacts || defaultNutritionFacts
                          ).map((fact, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-1"
                            >
                              <span className="text-gray-600">
                                {fact.label}
                              </span>
                              <span className="font-semibold text-gray-900">
                                {fact.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Health Benefits */}
                    <div className="mb-6 md:mb-8">
                      <button
                        onClick={() =>
                          setIsMainProductDescriptionOpen(
                            !isMainProductDescriptionOpen
                          )
                        }
                        className="w-full flex items-center justify-between text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group"
                      >
                        <span className="flex items-center gap-2">
                          <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                          Health Benefits
                          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                        </span>
                        {isMainProductDescriptionOpen ? (
                          <ChevronUp className="w-5 h-5 text-amber-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-amber-600" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isMainProductDescriptionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-3 md:space-y-4">
                              {(
                                mainProduct.healthBenefits ||
                                defaultHealthBenefits
                              ).map((benefit, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 md:p-4 border border-rose-100 hover:shadow-md transition-shadow"
                                >
                                  <div className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                                        {benefit.title}
                                      </h5>
                                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                        {benefit.description}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Quick Preview when collapsed */}
                      {!isMainProductDescriptionOpen && (
                        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                          {(mainProduct.healthBenefits || defaultHealthBenefits)
                            .slice(0, 4)
                            .map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700 bg-rose-50 rounded-lg p-2"
                              >
                                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                                <span className="truncate">
                                  {benefit.title}
                                </span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* Usage Tips */}
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                        Usage Tips
                      </h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                        Perfect for cooking, baking, or direct consumption.
                        Store in a cool, dry place. Best consumed within 3
                        months of opening.
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => router.push("/login")}
                      className="w-full flex items-center justify-center space-x-2 md:space-x-3 px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl md:rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="text-sm sm:text-base md:text-lg">
                        Check Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Future Products Grid - Now with same detailed design */}
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {futureProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl border border-emerald-100/50 relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[400px] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback = target.parentElement?.querySelector(
                            ".fallback-placeholder"
                          );
                          if (fallback) fallback.classList.remove("hidden");
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 hidden fallback-placeholder">
                        <Package className="w-12 h-12 md:w-16 md:h-16 text-emerald-500" />
                        <p className="text-gray-600 mt-2 text-sm">
                          Image not available
                        </p>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                        {product.name}
                      </h3>

                      {/* Price and Unit */}
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-emerald-100">
                          <IndianRupee className="w-6 h-6 md:w-8 md:h-8 mr-1.5 md:mr-2 text-emerald-600" />
                          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            {product.price}
                          </span>
                        </div>
                        {product.unit && (
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg">
                            <span className="text-sm md:text-lg font-semibold">
                              {product.unit}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        {product.description}
                      </p>

                      {/* Nutrition Facts */}
                      <div className="mb-6 md:mb-8">
                        <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                          <Leaf className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                          Nutrition Facts
                        </h4>
                        <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4">
                          <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs sm:text-sm">
                            {(
                              product.nutritionFacts || defaultNutritionFacts
                            ).map((fact, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center py-1"
                              >
                                <span className="text-gray-600">
                                  {fact.label}
                                </span>
                                <span className="font-semibold text-gray-900">
                                  {fact.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Health Benefits Preview */}
                      <div className="mb-6 md:mb-8">
                        <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                          <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-500" />
                          Health Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                          {(product.healthBenefits || defaultHealthBenefits)
                            .slice(0, 4)
                            .map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700 bg-emerald-50 rounded-lg p-2"
                              >
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                <span className="truncate">
                                  {benefit.title}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      {product.highlights && (
                        <div className="mb-6 md:mb-8">
                          <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                            Product Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1.5 rounded-lg text-xs font-medium border border-amber-200"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notify Button */}
                      <button
                        onClick={() => router.push("/login")}
                        className="w-full flex items-center justify-center space-x-2 md:space-x-3 px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl md:rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="text-sm sm:text-base md:text-lg">
                          Check Now
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
