// app/contact-us/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Phone, Clock, MessageSquare } from "lucide-react"; // Import necessary icons

function ContactUsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans">
      {/* Back Button Section */}
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.back()} // Go back to the previous page
          className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 mb-4 md:mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back</span>
        </motion.button>
      </div>

      {/* Main Content */}
      <main className="flex-grow pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            📞 Contact Us
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            If you have any questions or concerns, feel free to reach out:
          </p>

          <section className="space-y-6">
            <div className="flex items-center justify-center sm:justify-start space-x-4 text-gray-700">
              <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:meerasestuff1974@gmail.com"
                className="text-emerald-600 hover:underline break-all"
              >
                meerasestuff1974@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-4 text-gray-700">
              <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:+919744698259" // Added tel: link for direct call on mobile
                className="text-emerald-600 hover:underline"
              >
                9744 698 259
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-4 text-gray-700">
              <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="font-semibold">Support Hours:</span>
              <span>10 AM – 6 PM, Monday to Saturday</span>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer - Replicated for consistent look */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
            {/* Company Logo and Name */}
            <div className="flex flex-col items-center md:items-start space-y-3 mb-8 md:mb-0">
              <div className="flex items-center space-x-3">
                <Image
                  src="/meeras-logo.jpg"
                  alt="MeerasEstuff_Logo"
                  width={34}
                  height={34}
                  className="rounded-full shadow-md"
                />
                <Link
                  href="/"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-50 to-white bg-clip-text text-transparent"
                >
                  MeerasEstuff
                </Link>
              </div>
              {/* Copyright */}
              <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-0">
                © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
              </p>
            </div>

            {/* Contact & Legal Links Container */}
            <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-8 sm:space-y-0 w-full md:w-auto md:ml-auto md:pr-4">
              {/* Existing Contact Links (WhatsApp, Email) */}
              <div className="flex flex-col items-center sm:items-start space-y-4">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  Contact Us
                </h4>
                <a
                  href="https://wa.me/9744 698 259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:contact@meerasestuff.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@meerasestuff.com</span>
                </a>
              </div>

              {/* Legal Links Section */}
              <div className="flex flex-col items-center sm:items-start space-y-4 mt-8 sm:mt-0">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  Legal
                </h4>
                <button
                  onClick={() => router.push("/privacy-policy")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm sm:text-base focus:outline-none"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => router.push("/terms-and-conditions")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm sm:text-base focus:outline-none"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => router.push("/cancellation-and-refund")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm sm:text-base focus:outline-none"
                >
                  Cancellation & Refund
                </button>
                <button
                  onClick={() => router.push("/shipping-and-delivery")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm sm:text-base focus:outline-none"
                >
                  Shipping & Delivery
                </button>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm sm:text-base focus:outline-none"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUsPage;
