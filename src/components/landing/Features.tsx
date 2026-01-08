import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp />,
    title: "Maximum Earnings",
    desc: "Maximize Your Income Keep the majority of every sale you generate with our high-paying referral program",
  },
  {
    icon: <ShoppingCart />,
    title: "Premium Products",
    desc: "Curated selection of high-quality pickles and dry nuts that customers love",
  },
  {
    icon: <Users />,
    title: "Proven Support System",
    desc: "Comprehensive training and ongoing support to ensure your success",
  },
  {
    icon: <Zap />,
    title: "Fast Delivery",
    desc: "Reliable logistics network ensuring quick delivery to customers nationwide",
  },
  {
    icon: <Shield />,
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all products with easy returns",
  },
  {
    icon: <Heart />,
    title: "Customer First",
    desc: "Dedicated customer service team ensuring exceptional experience",
  },
];

export const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Why Choose MeerasEstuff?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          We combine quality products with a proven business model to create
          opportunities for financial independence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-white transition-all duration-300"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-emerald-600">
              {f.icon}
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
