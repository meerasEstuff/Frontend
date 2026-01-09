"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IndianRupee,
  Zap,
  Shield,
  Award,
  Leaf,
  GraduationCap,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Sub-components
import { NutritionCard } from "./NutritionCard";

export const ProductSection = () => {
  const router = useRouter();

  const products = [
    {
      id: "prawn-masala",
      name: "Premium Prawn Masala Mix",
      tagline: "Student's Nutrition Choice",
      price: 149,
      unit: "100 Grams Pack",
      image: "/prawn-masala 2.jpg",
      description:
        "Designed specifically for busy students and hostelers. A high-protein, easy-to-cook masala mix that brings the taste of home to your dorm while fueling your brain for study sessions.",
      nutrition: [
        { label: "Protein", value: "28g" },

        { label: "Shelf Life", value: "6 Months" },
        { label: "Cook Style", value: "Instant" },
      ],
      tags: [
        {
          icon: GraduationCap,
          text: "Hostel Friendly",
          color: "text-blue-600",
          bg: "bg-blue-50",
        },
        {
          icon: UtensilsCrossed,
          text: "Easy Prep",
          color: "text-orange-600",
          bg: "bg-orange-50",
        },
      ],
    },
    {
      id: "honey-nuts",
      name: "Honey Soaked Mixed Nuts",
      tagline: "Premium Daily Energizer",
      price: 899,
      unit: "500 Grams Pack",
      image: "/adImg5.jpg",
      description:
        "A spoonful gives you the kick start of the day. We combine organic liquid gold with the finest quality nuts to create a superfood powerhouse for your daily wellness.",
      nutrition: [
        { label: "Calories", value: "425 kcal" },
        { label: "Protein", value: "12.5g" },
        { label: "Carbs", value: "37.5g" },
        { label: "Fat", value: "25g" },
      ],
      tags: [
        {
          icon: Shield,
          text: "100% Organic",
          color: "text-emerald-600",
          bg: "bg-emerald-50",
        },
        {
          icon: Zap,
          text: "Energy Booster",
          color: "text-amber-600",
          bg: "bg-amber-50",
        },
      ],
    },
  ];

  return (
    <div className="space-y-16 mb-20">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
          Discover Our Superfoods
        </h2>
        <p className="text-gray-500 font-medium mt-2 text-sm uppercase tracking-widest">
          Handpicked for your health
        </p>
      </div>

      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Product Image Column */}
          <div
            className={`lg:col-span-5 relative h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-50 ${
              index % 2 !== 0 ? "lg:order-last" : ""
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/20">
              <p
                className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  index === 0 ? "text-emerald-600" : "text-blue-600"
                }`}
              >
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Product Info Column */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-50 flex flex-col justify-between hover:shadow-2xl hover:border-emerald-100 transition-all duration-500">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {product.unit}
                  </p>
                </div>
                <div className="flex items-center text-4xl font-black text-gray-900">
                  <IndianRupee className="w-6 h-6" /> {product.price}
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Nutrition Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {product.nutrition.map((item) => (
                  <NutritionCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-gray-50">
              {/* Tags Area */}
              <div className="flex flex-wrap gap-6">
                {product.tags.map((tag, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${tag.bg}`}>
                      <tag.icon className={`w-4 h-4 ${tag.color}`} />
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => router.push(`/products/${product.id}`)}
                className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-emerald-600 shadow-xl shadow-gray-200"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Shared Trust Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        {[
          {
            icon: Award,
            title: "Premium Quality",
            color: "text-amber-500",
            bg: "bg-amber-50",
          },
          {
            icon: Shield,
            title: "100% Organic",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
          },
          {
            icon: Leaf,
            title: "Authentic Taste",
            color: "text-teal-500",
            bg: "bg-teal-50",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col items-center text-center group hover:bg-gray-50/50 transition-all"
          >
            <div className={`p-4 rounded-[1.2rem] ${f.bg} ${f.color} mb-4`}>
              <f.icon className="w-6 h-6" />
            </div>
            <h4 className="font-black text-gray-900 tracking-tight">
              {f.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
