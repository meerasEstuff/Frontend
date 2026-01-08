import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  ShieldCheck,
  Sparkles,
  Flame,
  Droplets,
} from "lucide-react";

export const ProductHighlights = () => {
  const highlights = [
    {
      title: "Organic Honey & Nuts",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Highest Antioxidants",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Anti-inflammatory",
      icon: <Droplets className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "No Added Sugar",
      icon: <CheckCircle className="w-5 h-5 text-teal-500" />,
    },
    {
      title: "Rich in Vitamins",
      icon: <Flame className="w-5 h-5 text-orange-500" />,
    },
    {
      title: "Daily Energy Booster",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100"
    >
      <div className="mb-8">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">
          Why MeerasEstuff?
        </h3>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          Product Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-4 bg-gray-50/50 p-5 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-300"
          >
            <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-50">
              {item.icon}
            </div>
            <span className="text-sm font-bold text-gray-700 tracking-tight">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
