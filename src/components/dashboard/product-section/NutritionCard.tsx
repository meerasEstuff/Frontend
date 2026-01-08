import React from "react";

export const NutritionCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 text-center group hover:bg-white hover:shadow-md transition-all duration-300">
    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
      {label}
    </p>
    <p className="text-lg font-black text-gray-900 tracking-tight">{value}</p>
  </div>
);
