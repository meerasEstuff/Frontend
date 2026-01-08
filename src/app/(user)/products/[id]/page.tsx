"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  Shield,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Rocket,
  HandCoins,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import { NutritionCard } from "@/components/dashboard/product-section/NutritionCard";
import { HealthBenefits } from "@/components/dashboard/product-section/HealthBenefits";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  const productData = {
    "honey-nuts": {
      name: "Honey Soaked Mixed Nuts",
      tagline: "The Ultimate Daily Energizer",
      price: 899,
      image: "/adImg5.jpg",
      description:
        "A powerhouse of nutrition combining premium nuts with organic liquid gold. Designed for immunity, vitality, and long-term wellness.",
      nutrition: [
        { label: "Calories", value: "425 kcal" },
        { label: "Protein", value: "12.5g" },
        { label: "Carbs", value: "37.5g" },
        { label: "Fat", value: "25g" },
      ],
      highlights: [
        { icon: Heart, title: "Heart Health", desc: "Omega-3 rich nuts" },
        { icon: Shield, title: "Immunity", desc: "Anti-inflammatory honey" },
        { icon: Zap, title: "Natural Energy", desc: "No sugar spikes" },
      ],
      showScientificBenefits: true,
      themeColor: "emerald",
      ctaText: "Start Now",
      ctaSub: "Investment",
    },
    "prawn-masala": {
      name: "Premium Prawn Pickle",
      tagline: "Partner & Entrepreneur Program",
      price: 149,
      unit: "100 Grams Pack",
      image: "/prawn-masala.jpg",
      description:
        "Join our exclusive Student Partner Network. Enjoy premium home-style flavors while building your professional marketing skills and earning rewards for every member you bring into the community.",
      nutrition: [
        { label: "Reward", value: "High" },
        { label: "Skill", value: "Marketing" },
        { label: "Network", value: "Verified" },
        { label: "Status", value: "Partner" },
      ],
      highlights: [
        {
          icon: HandCoins,
          title: "Immediate Rewards",
          desc: "High success margin for every referral",
        },
        {
          icon: ShieldCheck,
          title: "Verified Identity",
          desc: "Professional Customer ID for every partner",
        },
        {
          icon: Rocket,
          title: "Skill Growth",
          desc: "Learn real-world sales and networking",
        },
      ],
      showScientificBenefits: false,
      themeColor: "blue",
      ctaText: "Apply as Partner",
      ctaSub: "Membership Value",
    },
  };

  const product = productData[productId as keyof typeof productData];

  if (!product)
    return <div className="p-20 text-center font-bold">Product not found.</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto p-6 flex items-center">
        <button
          onClick={() => router.back()}
          className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform" />
        </button>
        <span className="ml-4 font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">
          Product Details & Partnership
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div
              className={`inline-flex items-center space-x-2 bg-${product.themeColor}-50 text-${product.themeColor}-600 px-4 py-2 rounded-full mb-6 w-fit`}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {product.tagline}
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {product.nutrition.map((n) => (
                <NutritionCard key={n.label} {...n} />
              ))}
            </div>

            <div className="flex items-center justify-between p-8 bg-gray-900 rounded-[2.5rem] text-white shadow-2xl">
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  {product.ctaSub}
                </p>
                <div className="flex items-center text-3xl font-black text-emerald-400">
                  <span className="text-xl mr-1 opacity-50 text-white">₹</span>
                  {product.price}
                </div>
              </div>
              <button
                onClick={() => router.push("/onboard")}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-2xl font-black transition-all flex items-center space-x-2 group shadow-lg shadow-emerald-500/20"
              >
                <span>{product.ctaText}</span>
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="space-y-12">
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center text-center group hover:border-emerald-100 transition-all duration-300"
              >
                <div className="p-4 bg-gray-50 rounded-2xl mb-4 group-hover:bg-emerald-50 transition-colors">
                  <h.icon className="w-6 h-6 text-gray-700 group-hover:text-emerald-600" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">{h.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{h.desc}</p>
              </div>
            ))}
          </div>

          {product.showScientificBenefits ? (
            <HealthBenefits />
          ) : (
            /* PARTNERSHIP MODEL (OPTIMISTIC) */
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-4xl font-black mb-10 leading-tight">
                    Empowering Students to <br /> Lead and Earn.
                  </h2>
                  <div className="space-y-10">
                    <div className="flex items-start space-x-6">
                      <div className="p-3 bg-blue-600/20 rounded-2xl text-blue-400">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-1">
                          Community Onboarding
                        </p>
                        <p className="text-gray-400 text-sm">
                          Help your friends access premium quality products
                          through our verified network at a standard value of
                          ₹149.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="p-3 bg-emerald-600/20 rounded-2xl text-emerald-400">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-1">
                          Instant Partner Benefits
                        </p>
                        <p className="text-gray-400 text-sm">
                          Our platform recognizes your effort immediately. For
                          every successful verified registration, you unlock a
                          reward of ₹49 directly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="p-3 bg-purple-600/20 rounded-2xl text-purple-400">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-1">
                          Sustainable Growth
                        </p>
                        <p className="text-gray-400 text-sm">
                          The flat ₹100 covers the platform logistics and ID
                          generation, ensuring your business stays professional
                          and scalable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10">
                  <h3 className="text-xl font-black mb-6 text-center text-gray-400 uppercase tracking-[0.2em] text-xs">
                    Growth Roadmap
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-blue-500">
                      <span className="block text-[10px] font-black text-blue-400 uppercase mb-1">
                        Phase 1
                      </span>
                      <p className="font-bold">Register as a Student Partner</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-emerald-500">
                      <span className="block text-[10px] font-black text-emerald-400 uppercase mb-1">
                        Phase 2
                      </span>
                      <p className="font-bold">Verify Community Members</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-amber-500">
                      <span className="block text-[10px] font-black text-amber-400 uppercase mb-1">
                        Phase 3
                      </span>
                      <p className="font-bold">
                        Earn Rewards & Build Authority
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push("/onboard")}
                    className="w-full mt-10 bg-emerald-500 text-white py-5 rounded-2xl font-black hover:bg-emerald-400 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Claim Partner Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
