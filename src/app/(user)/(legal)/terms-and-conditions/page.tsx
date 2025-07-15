// app/terms-and-conditions/page.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowLeft } from "lucide-react"; // Import ArrowLeft for the back button
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TermsAndConditionsPage() {
  const router = useRouter();

  const today = new Date();
  const effectiveDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 font-sans">
      {/* Back Button Section - NEW ADDITION */}
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

      {/* Main Content - Adjusted padding top because of the back button */}
      <main className="flex-grow pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            📜 Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Effective Date: {effectiveDate}
          </p>

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              By accessing or using MeerasEstuff, you agree to the following
              terms:
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Eligibility:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                You must be 18 years or older to register and make payments.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Referral Program:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>You earn ₹400 for each successful referral.</li>
              <li>Referral payments are credited after verification.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              One-Time Payment:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                ₹1000 is a one-time onboarding charge to receive products and
                join the platform.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No Refunds:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once a Customer ID is generated, the payment is final and
              non-refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Misuse of Platform:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend accounts involved in fraudulent
              referrals or fake entries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Modification:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these terms at any time. Continued use indicates
              acceptance.
            </p>
          </section>
        </motion.div>
      </main>

      {/* Footer - Replicated from Dashboard for consistent look */}
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
              {/* Copyright - Moved here for better mobile grouping with logo */}
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
              </div>

              {/* Legal Links Section (Using router.push instead of href) */}
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

export default TermsAndConditionsPage;
