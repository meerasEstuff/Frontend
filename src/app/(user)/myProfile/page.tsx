"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  User,
  Phone,
  Mail,
  ArrowLeft,
  Save,
  ShieldCheck,
  Fingerprint,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuthStore } from "@/app/store/userStore";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/error";
import { useProtectPage } from "@/lib/useProtectPage";

const profileSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phone: z.string(), // Keep it in schema but read-only in UI
});

type ProfileFormData = z.infer<typeof profileSchema>;

function MyProfilePage() {
  const router = useRouter();
  const user = useProtectPage();
  const { setUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      if (!user?.customer_id || !user?.phone) return;
      setLoading(true);
      const res = await fetch("/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_id: user.customer_id,
          phone: user.phone,
          username: data.username,
          email: data.email,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to update");

      setUser({ ...user, ...data });
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {/* Sidebar / Status Column */}
        <div className="lg:col-span-4 space-y-6">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 font-bold text-xs uppercase tracking-widest transition-all mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Dashboard</span>
          </button>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500 opacity-20" />
            </div>

            <div className="w-24 h-24 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-emerald-200">
              <User className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-xl font-black text-gray-900 leading-tight mb-1">
              {user.username}
            </h2>
            <div className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6">
              <Award className="w-3 h-3" />
              <span>Verified Partner</span>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-50 text-left">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Partner ID
                </p>
                <p className="font-mono font-bold text-gray-900 flex items-center justify-between">
                  {user.customer_id}
                  <Fingerprint className="w-4 h-4 text-emerald-500" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                Account Settings
              </h1>
              <p className="text-gray-500 font-medium mt-1">
                Keep your professional partner details up to date.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("username")}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-bold text-gray-900"
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-widest">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("email")}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-bold text-gray-900"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-widest">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone (Read Only) */}
              <div className="space-y-2 opacity-80">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                  Registered Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={user.phone}
                    disabled
                    className="w-full pl-12 pr-4 py-4 bg-gray-100 border-2 border-gray-100 rounded-2xl font-bold text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-10 py-5 bg-gray-900 text-white rounded-[1.5rem] font-black transition-all hover:bg-emerald-600 active:scale-95 shadow-lg shadow-gray-200 disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Save Changes</span>
                      <Save className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MyProfilePage;
