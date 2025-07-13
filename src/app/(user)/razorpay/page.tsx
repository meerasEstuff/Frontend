"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/app/store/onboardingStore";

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme?: {
    color: string;
  };
  modal?: {
    ondismiss: () => void;
  };
};

interface RazorpayInstance {
  open(): void;
}
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

const RazorpayPage = () => {
  const router = useRouter();
  const { username, email, phone } = useOnboardingStore();

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  useEffect(() => {
    const startPayment = async () => {
      const res = await fetch("/api/create-order", { method: "POST" });
      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "MeerasEstuff",
        description: "Customer ID Generation",
        order_id: order.id,
        handler: function (response: unknown) {
          console.log("✅ Razorpay Payment Success:", response);
          router.push("/GenerateCustomerIdPage");
        },
        prefill: {
          name: username,
          email,
          contact: phone,
        },
        theme: {
          color: "#10B981",
        },
        modal: {
          ondismiss: function () {
            console.warn("❌ Razorpay payment cancelled or failed");
            router.push("/onboard"); // 👈 Redirect back to onboard
          },
        },
      };
      const rzp = new window.Razorpay(options as RazorpayOptions);
      rzp.open();
    };

    // Trigger payment only after Razorpay script is loaded
    if (window.Razorpay) {
      startPayment();
    } else {
      const interval = setInterval(() => {
        if (window.Razorpay) {
          clearInterval(interval);
          startPayment();
        }
      }, 300);
    }
  }, [username, email, phone, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting to Razorpay...</p>
    </div>
  );
};

export default RazorpayPage;
