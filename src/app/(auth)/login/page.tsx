"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { LogIn, Phone, User, Loader2 } from "lucide-react"; // Importing icons for inputs
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { loginWithCustomerIdAndPhone } from "@/services/authService";
import { useAuthStore } from "@/app/store/userStore";
import { useEffect, useState } from "react";
import { getErrorMessage } from "@/utils/error";

// Define the form data type
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

  // Handle form submission
  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      const user = await loginWithCustomerIdAndPhone(
        data.customerId,
        data.phoneNumber
      );

      // Store user in Zustand
      useAuthStore.getState().setUser(user);

      toast.success("Login successful");
      router.push("/dashboard");
    } catch (err: unknown) {
      toast.error(getErrorMessage(err));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-inter antialiased p-4">
      {/* Background Pattern - Consistent with marketing page */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-emerald-500 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-teal-500 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/30"
      >
        <div className="text-center mb-8">
          {/* Logo/Brand - Consistent with marketing page */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/meeras-logo.jpg" // Corrected to .png based on your file structure in the screenshot.
              alt="MeerasEstuff_Logo"
              width={64}
              height={64}
              className="rounded-full shadow-md"
            />
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r text-gray-900 ">
              MeerasEstuff
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-lg">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer ID Input */}
          <div>
            <label
              htmlFor="customerId"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Customer ID
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                id="customerId"
                {...register("customerId", {
                  required: "Customer ID is required",
                })}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                  errors.customerId ? "border-red-500" : "border-gray-200"
                } focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1 outline-none transition-all duration-200 shadow-sm`}
                placeholder="Enter your customer ID"
                aria-invalid={errors.customerId ? "true" : "false"}
              />
            </div>
            {errors.customerId && (
              <p role="alert" className="text-red-500 text-xs mt-1">
                {errors.customerId.message}
              </p>
            )}
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel" // Use type="tel" for phone numbers
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/, // Basic pattern for 10-15 digits
                    message: "Invalid phone number format",
                  },
                })}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-200"
                } focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1 outline-none transition-all duration-200 shadow-sm`}
                placeholder="Enter your phone number"
                aria-invalid={errors.phoneNumber ? "true" : "false"}
              />
            </div>
            {errors.phoneNumber && (
              <p role="alert" className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            disabled={loading} // Disable the button when loading is true
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" /> // Show spinner when loading
            ) : (
              <LogIn className="w-5 h-5" /> // Show Login icon when not loading
            )}
            <span>Login</span>
          </motion.button>
        </form>

        {/* Optional: Link to marketing page if needed */}
        <p className="text-center text-gray-600 text-sm mt-6">
          New to MeerasEstuff?{" "}
          <button
            onClick={() => router.push("/")}
            className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors duration-200"
          >
            Learn more
          </button>
        </p>
      </motion.div>
    </div>
  );
}
