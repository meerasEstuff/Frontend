// app/privacy-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react"; // Import ArrowLeft for the back button
import Image from "next/image";
import { useRouter } from "next/navigation";

function PrivacyPolicyPage() {
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
          onClick={() => router.push("/dashboard")} // Go back to the previous page
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
            📜 Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Effective Date: {effectiveDate}
          </p>

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              MeerasEstuff (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              respects your privacy and is committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use, and
              safeguard your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information We Collect:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Full Name, Email, Phone Number during onboarding</li>
              <li>Referral details and payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why We Collect It:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To generate a unique Customer ID</li>
              <li>To manage referrals and rewards</li>
              <li>To fulfill legal, financial, and operational obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Data Sharing:
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We do not sell your personal information. Your data may be shared
              with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Payment gateway partners (e.g., Razorpay)</li>
              <li>Courier services for shipping</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Data Protection:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement strict security practices and access controls to
              protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Rights:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may contact us at{" "}
              <a
                href="mailto:meerasestuff1974@gmail.com"
                className="text-emerald-600 hover:underline font-medium"
              >
                meerasestuff1974@gmail.com
              </a>{" "}
              to request deletion or modification of your data.
            </p>
          </section>
        </motion.div>
      </main>

      {/* Footer - Replicated from Dashboard for consistent look */}
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

export default PrivacyPolicyPage;
