"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Brain,
  Activity,
  Eye,
  Bone,
  Sparkles,
  Zap,
  Sun,
  Scale,
} from "lucide-react";

export const HealthBenefitsHighlight = () => {
  const healthBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Immunity Boost",
      description:
        "Rich in antioxidants from nuts and honey that help strengthen your immune system and protect against infections",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Anti-Aging Properties",
      description:
        "Packed with antioxidants that combat free radicals, reducing oxidative stress and promoting youthful skin",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Skin Radiance",
      description:
        "Vitamin E from nuts and antioxidants from honey promote glowing skin and protect against environmental damage",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-800",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heart Health",
      description:
        "Healthy fats from nuts support cardiovascular function and help maintain optimal cholesterol levels",
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      textColor: "text-rose-800",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Brain Function",
      description:
        "Omega-3 fatty acids and antioxidants enhance cognitive function, memory, and mental clarity",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Energy & Stamina",
      description:
        "Natural sugars from honey and complex carbs from nuts provide sustained energy throughout the day",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-800",
    },
    {
      icon: <Bone className="w-6 h-6" />,
      title: "Bone Strength",
      description:
        "Calcium, magnesium, and phosphorus from nuts contribute to strong bones and teeth",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-800",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Weight Management",
      description:
        "High fiber content promotes satiety, helping control appetite and support healthy weight maintenance",
      color: "from-lime-500 to-green-600",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-200",
      textColor: "text-lime-800",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Eye Health",
      description:
        "Vitamin E and antioxidants protect eye cells from damage and support long-term vision health",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-800",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digestive Health",
      description:
        "Dietary fiber from nuts and prebiotic properties of honey support healthy digestion and gut flora",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-xl mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-700 bg-clip-text text-transparent mb-4">
            Science-Backed Health Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the remarkable health advantages of our honey-soaked mixed
            nuts, backed by nutritional science and traditional wisdom
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {healthBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className={`${benefit.bgColor} border ${benefit.borderColor} rounded-2xl p-6 text-center group cursor-default hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{benefit.icon}</div>
              </div>

              {/* Title */}
              <h3 className={`font-bold text-lg mb-3 ${benefit.textColor}`}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`w-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scientific Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto">
            <h4 className="font-semibold text-gray-900 text-lg mb-2">
              Nutritional Science Behind Our Blend
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Our honey-soaked mixed nuts combine the nutritional power of
              cashews (rich in copper and magnesium), raisins (packed with iron
              and potassium), dates (high in fiber and natural sugars), peanuts
              (excellent protein source), and pure honey (natural antioxidants
              and enzymes). This synergistic combination provides comprehensive
              health benefits that are both delicious and scientifically
              validated.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Compact version for use in product pages
export const CompactHealthBenefits = () => {
  const quickBenefits = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Immunity",
      color: "text-green-600",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Anti-Aging",
      color: "text-purple-600",
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Skin Health",
      color: "text-amber-600",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Heart Care",
      color: "text-rose-600",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Brain Boost",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-amber-500" />
        Key Health Benefits
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {quickBenefits.map((benefit, index) => (
          <div key={index} className="text-center group cursor-default">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-2 group-hover:bg-gradient-to-br group-hover:from-gray-100 group-hover:to-gray-200 transition-colors duration-200`}
            >
              <div className={benefit.color}>{benefit.icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
