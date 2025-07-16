// app/contact-us/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Phone, Clock } from "lucide-react"; // Import necessary icons

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
          onClick={() => router.push("/dashboard")} // Go back to the previous page
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
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/meeras-logo.jpg"
                  alt="MeerasEstuff_Logo"
                  width={34}
                  height={34}
                  className="rounded-full shadow-md"
                />
                <span className="text-2xl font-bold">MeerasEstuff</span>
              </div>
              <p className="text-lg text-emerald-100 italic mb-2">
                Your dream, our design
              </p>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering entrepreneurs with quality products and sustainable
                income opportunities through our innovative direct selling
                model.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:+919744698259"
                  className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9744 698 259</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => router.push("/privacy-policy")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/terms-and-conditions")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/cancellation-and-refund")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Cancellation & Refund
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/shipping-and-delivery")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Shipping & Delivery
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUsPage;
