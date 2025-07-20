"use client";
import React, { useState } from "react"; // Removed useState as it's no longer needed for password visibility
import { motion } from "framer-motion";
import {
  Loader2,
  User,
  Phone,
  Mail,
  ArrowLeft,
  Save, // Icon for Save button
} from "lucide-react"; // Removed Eye and EyeOff icons
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuthStore } from "@/app/store/userStore";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/error";
import { useProtectPage } from "@/lib/useProtectPage";
import Image from "next/image";

// Define the Zod schema for form validation
const profileSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit phone number",
    }),
});

// Define the type for the form data based on the schema
type ProfileFormData = z.infer<typeof profileSchema>;

function MyProfilePage() {
  const router = useRouter();

  const user = useProtectPage();

  // const user = useAuthStore((state) => state.user);
  const { setUser } = useAuthStore();

  const [loading, setLoading] = useState(false);

  // Initialize React Hook Form with Zod resolver and default values
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
    }, // Pre-fill form with dummy data
  });

  // Function to handle form submission (e.g., saving profile changes)
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

      if (!res.ok) {
        throw new Error(result.error || "Failed to update");
      }

      // Update Zustand store
      setUser({ ...user, ...data });

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-auto"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => router.push("/dashboard")} // Navigate back to dashboard
          className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </motion.button>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-3 mb-4"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image
                  src="/meeras-logo.jpg" // Corrected to .png based on your file structure in the screenshot.
                  alt="MeerasEstuff_Logo"
                  width={34}
                  height={34}
                  className="rounded-full shadow-md"
                />
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r text-gray-900">
                  MeerasEstuff
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
            >
              My Profile
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-600"
            >
              View and manage your account details.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  className={`w-full pl-10 pr-3 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-sm ${
                    errors.username
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-emerald-500 focus:bg-white"
                  }`}
                />
              </div>
              {errors.username && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.username.message}
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full pl-10 pr-3 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-sm ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-emerald-500 focus:bg-white"
                  }`}
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  disabled
                  {...register("phone")}
                  className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-sm
                    +         ${
                      errors.phone
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200"
                    }
                    +         disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300 disabled:shadow-inner disabled:cursor-not-allowed
                    +         focus:border-emerald-500 focus:bg-white`}
                />
              </div>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.phone.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button (Save Changes) */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-base shadow-xl flex items-center justify-center space-x-2 group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
    hover:shadow-2xl hover:brightness-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100`}
            >
              <span>{loading ? "Saving..." : "Save Changes"}</span>
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyProfilePage;
