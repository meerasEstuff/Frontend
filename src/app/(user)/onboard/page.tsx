"use client";
import React from "react"; // useState is no longer needed as customerId is generated on submit
import { motion } from "framer-motion";
import {
  ShoppingCart,
  User,
  Phone,
  Mail,
  ArrowLeft,
  PlusCircle, // Icon for Add Referral
} from "lucide-react"; // RefreshCcw icon is no longer needed
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the Zod schema for form validation
const newReferralSchema = z.object({
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
  // customerId is no longer part of the form input, it's generated on submit
});

// Define the type for the form data based on the schema
type NewReferralFormData = z.infer<typeof newReferralSchema>;

function AddReferralPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewReferralFormData>({
    resolver: zodResolver(newReferralSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  // Function to handle form submission (e.g., adding new referral)
  const onSubmit = (data: NewReferralFormData) => {
    // Simulate payment confirmation
    const confirmPayment = window.confirm(
      "Please confirm to pay Rs. 1000 to add this referral."
    );

    if (confirmPayment) {
      // Simulate successful payment and then generate customer ID
      const prefix = "CUST-";
      const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
      const generatedCustomerId = `${prefix}${new Date().getFullYear()}-${randomNum}`;

      console.log("New referral data submitted:", {
        ...data,
        customerId: generatedCustomerId,
      });
      // In a real application, you would send this data to your backend
      // and handle success/error feedback.
      alert(
        `Payment successful! New referral added: ${data.username} with Customer ID: ${generatedCustomerId}`
      ); // Using alert for demonstration
      router.push("/dashboard"); // Redirect back to dashboard after submission
    } else {
      alert("Referral creation cancelled. Payment not confirmed.");
    }
  };

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

        {/* Add New Referral Card */}
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
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                MeerasEstuff
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
            >
              Add New Referral
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-600"
            >
              Enter details for the new customer.
            </motion.p>
            {/* Added payment mention */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm text-red-600 font-semibold mt-2"
            >
              (A payment of Rs. 1000 is required upon &quot;Add Referral &quot;
              to generate Customer ID)
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
                  placeholder="Enter username"
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
                  placeholder="Enter email"
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
                  {...register("phone")}
                  className={`w-full pl-10 pr-3 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-sm ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-emerald-500 focus:bg-white"
                  }`}
                  placeholder="Enter phone number"
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

            {/* Customer ID Field and Generate Button are removed from here */}
            {/* The Customer ID will be generated upon successful submission (simulating payment) */}

            {/* Submit Button (Add Referral) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={() => router.push("GenerateCustomerIdPage")}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span>Add Referral</span>
              <PlusCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AddReferralPage;
