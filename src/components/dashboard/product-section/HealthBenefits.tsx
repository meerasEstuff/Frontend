import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

const fullBenefits = [
  "Rich source of Biotin & Vitamin B7",
  "Improves blood supply & Iron levels",
  "Enhances cognition & memory",
  "Aids liver detoxification",
  "Stabilize blood glucose naturally",
  "Strengthens nail & hair growth",
];

export const HealthBenefits = () => (
  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
    <div className="flex flex-col items-center text-center mb-10">
      <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl mb-4">
        <Sparkles className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-black text-gray-900 tracking-tight">
        Scientifically Proven Benefits
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fullBenefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all"
        >
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span className="text-sm font-bold text-gray-700">{benefit}</span>
        </motion.div>
      ))}
    </div>
  </div>
);
