"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DOMPurify from "dompurify";
import Nav from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import HomepageHeroGradient from "@/components/HomepageHeroGradient";
import  Footer from "@/components/Footer";
import EstimateRevenue from "@/components/EstimateRevenue";
import ProductFeatureCard from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import EnterpriseSection from "@/components/EnterpriseSection";
import FeaturesSection from "@/components/FeaturesSection";
import BillingSection from "@/components/BillingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/Contact";
import ProgressSteps from "@/components/ProgressSteps";
import AnimatedGradient from "@/components/AnimatedGradient";
import GridLayout from "@/components/GridLayout";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
function GradientBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ring-1 ring-white/15 bg-white/5 backdrop-blur">
      <Sparkles className="h-4 w-4" />
      <span>New: Agent Hand‑offs</span>
    </span>
  );
}




export default function Page() {
  return (
    <main className="">
      <GridLayout>
        <>
          <AuroraBackground>
            <Nav />
            <Hero />
          </AuroraBackground>
          <EstimateRevenue />
          <ProductFeatureCard />
          <HowItWorks />
          <ProgressSteps />
          <EnterpriseSection />
          <FeaturesSection />
          <BillingSection />
          <FAQSection />
          <ContactSection />
          
          <Footer />
        </>
      </GridLayout>
    </main>
  );
}
