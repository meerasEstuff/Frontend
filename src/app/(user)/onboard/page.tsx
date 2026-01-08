"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Users,
  IndianRupee,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useProtectPage } from "@/lib/useProtectPage";
import { useOnboardingStore } from "@/app/store/onboardingStore";
import Image from "next/image";

const newReferralSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit phone number",
    }),
});

type NewReferralFormData = z.infer<typeof newReferralSchema>;

function AddReferralPage() {
  const router = useRouter();
  const user = useProtectPage();
  const setOnboardingData = useOnboardingStore(
    (state) => state.setOnboardingData
  );

  const [selectedType, setSelectedType] = useState<"standard" | "student">(
    "standard"
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewReferralFormData>({
    resolver: zodResolver(newReferralSchema),
    defaultValues: { username: "", phone: "" },
  });

  const onSubmit = (data: NewReferralFormData) => {
    setOnboardingData({
      username: data.username,
      phone: data.phone,
      referredById: user?.id,
      customer_type: selectedType,
    });
    router.push("/razorpay");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 font-sans selection:bg-emerald-100">
      {/* Soft Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-100/50 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 px-2">
          <button
            onClick={() => router.push("/dashboard")}
            className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="text-right">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Step 01/02
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Customer Details
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 p-8 sm:p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <Image
                src="/meeras-logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-xl shadow-sm"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              New Referral
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Register a new user to your network
            </p>
          </div>

          {/* Type Toggle - Animated Slider */}
          <div className="bg-gray-100/80 p-1.5 rounded-2xl flex relative mb-8">
            <motion.div
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              layoutId="type-bg"
              className="absolute inset-y-1.5 rounded-xl bg-white shadow-sm border border-gray-200/50"
              style={{
                left: selectedType === "standard" ? "6px" : "50%",
                width: "calc(50% - 6px)",
              }}
            />
            <button
              onClick={() => setSelectedType("standard")}
              className={`flex-1 flex items-center justify-center py-2.5 relative z-10 transition-colors duration-300 ${
                selectedType === "standard"
                  ? "text-emerald-700 font-bold"
                  : "text-gray-500 font-medium"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Standard
            </button>
            <button
              onClick={() => setSelectedType("student")}
              className={`flex-1 flex items-center justify-center py-2.5 relative z-10 transition-colors duration-300 ${
                selectedType === "student"
                  ? "text-emerald-700 font-bold"
                  : "text-gray-500 font-medium"
              }`}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Student
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Username Input */}
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 mb-2 block tracking-wider">
                  Customer Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    {...register("username")}
                    placeholder="Enter full name"
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-2 ml-1 font-medium">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 mb-2 block tracking-wider">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="10-digit mobile"
                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-2 ml-1 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-emerald-50/60 rounded-2xl p-5 flex items-center justify-between border border-emerald-100 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl text-white shadow-md">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-emerald-600 tracking-widest mb-0.5">
                    Referral Reward
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    You will earn for this{" "}
                    {selectedType === "standard" ? "Customer" : "Student"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-emerald-700">
                  ₹{selectedType === "standard" ? "299" : "49"}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-gray-200 flex items-center justify-center group hover:bg-emerald-600 transition-colors duration-300"
            >
              <span>
                {isSubmitting ? "Processing..." : "Proceed to Payment"}
              </span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default AddReferralPage;
