"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  Leaf,
  Droplets,
} from "lucide-react";

export const HealthBenefitsHighlight = () => {
  const benefitGroups = [
    {
      title: "Vitality & Energy",
      benefits: [
        {
          icon: <Zap />,
          label: "Instant Energy",
          desc: "Natural sugars from honey",
        },
        {
          icon: <Activity />,
          label: "Stamina",
          desc: "Complex carbs from nuts",
        },
      ],
    },
    {
      title: "Body Defense",
      benefits: [
        {
          icon: <Shield />,
          label: "Immunity",
          desc: "Pure honey antioxidants",
        },
        {
          icon: <Heart />,
          label: "Heart Health",
          desc: "Nut-based healthy fats",
        },
      ],
    },
    {
      title: "Cognitive Power",
      benefits: [
        {
          icon: <Brain />,
          label: "Mental Clarity",
          desc: "Omega-3 fatty acids",
        },
        { icon: <Eye />, label: "Vision Care", desc: "Vitamin E protection" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Nutritional Synergy
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Science in every <span className="text-amber-500">Spoonful.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side Benefits */}
          <div className="space-y-12 order-2 lg:order-1">
            {benefitGroups.slice(0, 2).map((group, gIdx) => (
              <div key={gIdx} className="space-y-6">
                <h4 className="text-gray-400 font-black uppercase text-[10px] tracking-widest ml-2">
                  {group.title}
                </h4>
                {group.benefits.map((benefit, bIdx) => (
                  <motion.div
                    whileHover={{ x: 10 }}
                    key={bIdx}
                    className="flex items-center space-x-6 p-6 rounded-[2rem] bg-amber-50/50 border border-amber-100/50 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                      {benefit.icon}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-sm">
                        {benefit.label}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Center Product Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Animated Glow Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="w-[300px] h-[300px] border-2 border-dashed border-amber-200 rounded-full opacity-50"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity }}
                className="w-[400px] h-[400px] border border-emerald-100 rounded-full opacity-30"
              />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="relative z-10 w-72 h-96"
            >
              <Image
                src="/adImg5.jpg"
                alt="Honey Soaked Nuts"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(251,191,36,0.3)]"
              />

              {/* Ingredient Callouts */}
              <div className="absolute -top-4 -right-8 bg-white shadow-xl p-3 rounded-2xl border border-gray-100 flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-black uppercase">
                  Pure Forest Honey
                </span>
              </div>
              <div className="absolute -bottom-4 -left-8 bg-white shadow-xl p-3 rounded-2xl border border-gray-100 flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase">
                  Premium White Cashews
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Benefits */}
          <div className="space-y-12 order-3">
            <div className="space-y-6">
              <h4 className="text-gray-400 font-black uppercase text-[10px] tracking-widest ml-2">
                Internal Support
              </h4>
              {[
                {
                  icon: <Bone />,
                  label: "Bone Strength",
                  desc: "Magnesium & Calcium",
                },
                {
                  icon: <Scale />,
                  label: "Weight Control",
                  desc: "High fiber satiety",
                },
                {
                  icon: <Sun />,
                  label: "Glowing Skin",
                  desc: "Vitamin E rich",
                },
                {
                  icon: <Sparkles />,
                  label: "Anti-Aging",
                  desc: "Oxidative stress reduction",
                },
              ].map((benefit, idx) => (
                <motion.div
                  whileHover={{ x: -10 }}
                  key={idx}
                  className="flex items-center space-x-6 p-6 rounded-[2rem] bg-emerald-50/50 border border-emerald-100/50 group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    {benefit.icon}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">
                      {benefit.label}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Nutritional Science Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full" />
          <h4 className="text-2xl font-black mb-4 relative z-10">
            The Synergistic Power of Honey & Nuts
          </h4>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10">
            When pure forest honey is combined with premium nuts, it creates a
            &apos;pre-digestion&apos; effect where the honey&apos;s enzymes help
            your body absorb the minerals from the nuts faster. This combination
            provides a sustained energy release that is scientifically superior
            to consuming nuts or honey alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
