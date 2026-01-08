"use client";

import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { MissionVision } from "@/components/landing/MissionVision";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { ProductSection } from "@/components/ProductSection";

export default function ProfessionalLandingPage() {
  return (
    <>
      <Head>
        <title>MeerasEstuff | Buy & Refer Premium Pickles & Dry Fruits</title>
        <meta
          name="description"
          content="Buy premium quality pickles and dry fruits. Earn ₹160 per referral."
        />
      </Head>

      <div className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <ProductSection />
          <Features />
          <Stats />
          <MissionVision />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
