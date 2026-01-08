import { motion } from "framer-motion";

const stats = [
  { number: "1,000+", label: "Active Members" },
  { number: "₹50k+", label: "Monthly Earnings" },
  { number: "99%", label: "Customer Satisfaction" },
  { number: "500+", label: "Cities Covered" },
];

export const Stats = () => (
  <section className="py-24 bg-gray-900 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px]" />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="text-4xl md:text-6xl font-black text-white mb-2">
              {stat.number}
            </div>
            <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
