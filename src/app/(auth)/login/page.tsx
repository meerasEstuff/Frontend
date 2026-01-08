"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, User, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { loginWithCustomerIdAndPhone } from "@/services/authService";
import { useAuthStore } from "@/app/store/userStore";
import { useEffect, useState } from "react";
import { getErrorMessage } from "@/utils/error";

interface LoginFormInputs {
  customerId: string;
  phoneNumber: string;
}

export default function LoginPage() {
  const router = useRouter();
  const clearUser = useAuthStore((state) => state.clearUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearUser();
  }, [clearUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    const sanitizedData = {
      customerId: data.customerId.trim(),
      phoneNumber: data.phoneNumber.trim(),
    };
    try {
      const user = await loginWithCustomerIdAndPhone(
        sanitizedData.customerId,
        sanitizedData.phoneNumber
      );
      useAuthStore.getState().setUser(user);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (err: unknown) {
      toast.error(getErrorMessage(err));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] font-sans antialiased p-4">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-teal-100/40 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[440px]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="w-20 h-20 bg-white rounded-[2rem] shadow-xl border border-gray-50 flex items-center justify-center mb-4"
          >
            <Image
              src="/meeras-logo.jpg"
              alt="Logo"
              width={52}
              height={52}
              className="rounded-2xl"
            />
          </motion.div>
          <div className="flex items-center space-x-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Secure Access</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            MeerasEstuff
          </h1>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-1">
              Please enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Customer ID */}
            <div className="group">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">
                Partner ID
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  {...register("customerId", {
                    required: "Partner ID is required",
                  })}
                  className={`w-full bg-gray-50/50 border-2 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:outline-none transition-all duration-300 ${
                    errors.customerId
                      ? "border-red-100 focus:border-red-400"
                      : "border-gray-100 focus:border-emerald-500"
                  }`}
                  placeholder="e.g. MS-12345"
                />
              </div>
              {errors.customerId && (
                <p className="text-red-500 text-[10px] font-bold mt-2 ml-1 uppercase">
                  {errors.customerId.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="group">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">
                Registered Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid number",
                    },
                  })}
                  className={`w-full bg-gray-50/50 border-2 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:outline-none transition-all duration-300 ${
                    errors.phoneNumber
                      ? "border-red-100 focus:border-red-400"
                      : "border-gray-100 focus:border-emerald-500"
                  }`}
                  placeholder="10-digit mobile"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-[10px] font-bold mt-2 ml-1 uppercase">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-gray-100 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center group"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </div>

        {/* Navigation back to landing */}
        <p className="text-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="text-gray-400 hover:text-emerald-600 text-sm font-bold transition-colors inline-flex items-center"
          >
            Go back to Home
          </button>
        </p>
      </motion.div>
    </div>
  );
}
