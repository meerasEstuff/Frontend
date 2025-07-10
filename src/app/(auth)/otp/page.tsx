"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the Zod schema for form validation
const otpSchema = z.object({
  otp: z
    .string()
    .min(1, { message: "OTP is required" })
    .length(4, { message: "OTP must be 4 digits" })
    .regex(/^\d{4}$/, { message: "OTP must be numeric" }),
});

// Define the type for the form data based on the schema
type OtpFormData = z.infer<typeof otpSchema>;

function OtpVerificationPage() {
  const router = useRouter();

  // Initialize React Hook Form with Zod resolver
  const {
    handleSubmit,
    setValue, // Use setValue to manually update the form value
    formState: { errors },
    reset,
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
  });

  // Refs for individual OTP input fields
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // State to manage individual OTP digits
  const [otpDigits, setOtpDigits] = React.useState<string[]>(["", "", "", ""]);

  // Effect to update react-hook-form's 'otp' value when otpDigits change
  useEffect(() => {
    setValue("otp", otpDigits.join(""));
  }, [otpDigits, setValue]);

  // Function to handle input change for each OTP box
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    // Allow only one digit per input
    if (value.length > 1) {
      return;
    }

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);

    // Move focus to the next input if a digit is entered and it's not the last input
    if (value && index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  // Function to handle backspace and navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      // If backspace is pressed and current input is empty, move focus to previous input
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Function to handle form submission
  const onSubmit = (data: OtpFormData) => {
    console.log("OTP submitted:", data);
    // Here you would typically send a request to your backend to verify the OTP
    // For demonstration, we'll just log and reset the form
    reset(); // Clear the form after successful submission
    setOtpDigits(["", "", "", ""]); // Clear individual input boxes
    // You might want to show a success message or navigate to a password reset page
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
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Forgot Password</span>
        </motion.button>

        {/* OTP Verification Card */}
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
              Verify OTP
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-600"
            >
              Enter the 4-digit code sent to your email.
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
            {/* OTP Fields */}
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-semibold text-gray-700 mb-1 text-center"
              >
                Verification Code (OTP)
              </label>
              <div className="flex justify-center space-x-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    className={`w-12 h-12 text-center text-xl font-bold bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 ${
                      errors.otp
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-emerald-500 focus:bg-white"
                    }`}
                    // Ensure react-hook-form registers the combined OTP string
                    // This input is controlled manually and its value is set via setValue
                    // No direct 'name' or 'register' on individual inputs
                  />
                ))}
              </div>
              {errors.otp && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 text-center"
                >
                  {errors.otp.message}
                </motion.p>
              )}
            </div>

            {/* Resend OTP Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  console.log("Resend OTP clicked"); /* Logic to resend OTP */
                }}
                className="text-emerald-600 text-xs font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
              >
                Resend OTP
              </button>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={() => router.push("/passwordReset")}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span>Verify OTP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>

          {/* Back to Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-4"
          >
            <p className="text-gray-600 text-sm">
              <button
                onClick={() => router.push("/login")}
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
              >
                Back to Login
              </button>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OtpVerificationPage;
