"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Heart,
  Leaf,
  ChevronDown,
  ChevronUp,
  Brain,
  Shield,
  Bone,
  Activity,
  ArrowRight,
  Flame,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { HealthBenefitsHighlight } from "./HealthBenefitsHighlight";

export const ProductSection = () => {
  const router = useRouter();
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 2,
      name: "Honey Soaked Mixed Nuts",
      image: "/adImg5.jpg",
      price: 899,
      unit: "500 gm",
      theme: "amber",
      description:
        "Indulge in Meeras' Premium Honey Soaked Mixed Nuts — a wholesome blend of white cashews, raisins, dates, and peanuts enriched with pure honey. Naturally sweet, energy-packed, and bursting with nutrition, it's the perfect healthy treat for everyone.",
      healthBenefits: [
        {
          title: "Sustained Energy",
          icon: <Zap className="w-4 h-4" />,
          description: "Provides long-lasting energy without crashes.",
        },
        {
          title: "Cognitive Boost",
          icon: <Brain className="w-4 h-4" />,
          description: "Supports brain health and mental clarity.",
        },
        {
          title: "Immune Shield",
          icon: <Shield className="w-4 h-4" />,
          description: "Antioxidants strengthen natural defenses.",
        },
        {
          title: "Bone Vitality",
          icon: <Bone className="w-4 h-4" />,
          description: "Rich in minerals for skeletal strength.",
        },
        {
          title: "Digestive Health",
          icon: <Heart className="w-4 h-4" />,
          description: "Natural fibers promote gut wellness.",
        },
        {
          title: "Overall Vitality",
          icon: <Activity className="w-4 h-4" />,
          description: "Complete nutritional profile for body functions.",
        },
      ],
      nutritionFacts: [
        { label: "Calories", value: "340 kcal" },
        { label: "Protein", value: "10g" },
        { label: "Fiber", value: "8g" },
        { label: "Sugar", value: "15g (Nat)" },
      ],
      highlights: ["No Added Sugar", "100% Natural", "Energy Booster"],
    },
    {
      id: 3,
      name: "Premium Prawn Masala Mix",
      image: "/prawn-masala.jpg",
      price: 149,
      unit: "100 Grams Pack",
      theme: "blue",
      description:
        "A perfect blend of traditional coastal spices and premium prawns. This masala mix brings authentic flavors to your table while providing the high-protein fuel your body needs for an active day.",
      healthBenefits: [
        {
          title: "High Protein",
          icon: <Activity className="w-4 h-4" />,
          description: "Essential for muscle recovery and growth.",
        },
        {
          title: "Rich in Selenium",
          icon: <Shield className="w-4 h-4" />,
          description: "Powerful mineral for immune support.",
        },
        {
          title: "Omega-3 Source",
          icon: <Heart className="w-4 h-4" />,
          description: "Heart-healthy fats from premium prawns.",
        },
        {
          title: "Metabolism Boost",
          icon: <Flame className="w-4 h-4" />,
          description: "Natural spices like turmeric and pepper.",
        },
        {
          title: "Zero Preservatives",
          icon: <Leaf className="w-4 h-4" />,
          description: "Clean label, home-style preparation.",
        },
        {
          title: "Vitamin B12",
          icon: <Zap className="w-4 h-4" />,
          description: "Supports nerve function and energy.",
        },
      ],
      nutritionFacts: [
        { label: "Protein", value: "24g" },
        { label: "Calories", value: "180 kcal" },
        { label: "Iron", value: "15%" },
        { label: "Reward", value: "₹49 Value" },
      ],
      highlights: ["Coastal Spices", "Partner Choice", "Keto Friendly"],
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <section id="products" className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Our Premium Collection
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
            Wellness in <span className="text-emerald-600">Every Bite.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From energy-packed nuts to protein-rich coastal delicacies, we bring
            nature&apos;s finest directly to your doorstep.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex flex-col group"
            >
              {/* Image Header - Tagline Removed */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-12 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                  <div
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl font-black text-lg md:text-xl whitespace-nowrap ${
                      product.theme === "amber"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    ₹{product.price}
                  </div>
                </div>

                <p className="text-gray-500 text-sm md:text-base font-medium mb-6 md:mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Nutrition Grid - Optimized for Mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10">
                  {product.nutritionFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-2.5 md:p-3 rounded-xl md:rounded-2xl border border-gray-100"
                    >
                      <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">
                        {fact.label}
                      </p>
                      <p className="font-bold text-gray-900 text-xs md:text-sm">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Expandable Benefits */}
                <div className="mb-6 md:mb-8 flex-1">
                  <button
                    onClick={() =>
                      setExpandedProduct(
                        expandedProduct === product.id ? null : product.id
                      )
                    }
                    className="flex items-center space-x-2 text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 hover:text-emerald-600 transition-colors mb-4"
                  >
                    <span>Health & Wellness Benefits</span>
                    {expandedProduct === product.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedProduct === product.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-3 overflow-hidden"
                      >
                        {product.healthBenefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100"
                          >
                            <div
                              className={`p-1.5 md:p-2 rounded-lg text-white shrink-0 ${
                                product.theme === "amber"
                                  ? "bg-amber-500"
                                  : "bg-blue-500"
                              }`}
                            >
                              {benefit.icon}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-xs md:text-sm">
                                {benefit.title}
                              </p>
                              <p className="text-[10px] md:text-xs text-gray-500 font-medium mt-1">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 md:pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="hidden sm:flex flex-wrap gap-2">
                    {product.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[9px] md:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full sm:w-auto bg-gray-900 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black flex items-center justify-center space-x-3 hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
                  >
                    <span className="text-sm md:text-base">Get Pack</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <HealthBenefitsHighlight />
    </div>
  );
};
