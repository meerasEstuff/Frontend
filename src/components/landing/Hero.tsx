import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Trusted by 1000+ Customers
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
              Transform Your Life
              <span className="block text-emerald-600">with Premium</span>
              Quality Products
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Build your business with just{" "}
              <span className="font-bold text-gray-900 underline decoration-emerald-400">
                ₹899 ID activation
              </span>
              — you earn{" "}
              <span className="font-bold text-gray-900 underline decoration-emerald-400">
                ₹300 per referral
              </span>
              on premium pickles & dry nuts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => router.push("/login")}
                className="bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Changed border-white to a larger value or added padding to prevent clipping */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <Image
                src="/cpmImg.jpg"
                alt="Premium Products"
                fill
                className="object-contain p-4" // Use object-contain and padding to show the full image content
                priority
              />
            </div>

            {/* Floating Payout Card remains same */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block z-20">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
                Weekly Payout
              </p>
              <p className="text-2xl font-black text-emerald-600">₹12,450.00</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
