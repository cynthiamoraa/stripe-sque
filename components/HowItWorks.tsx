"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Step 1 — Find Work You Already Did",
    description:
      "Connect Google/Microsoft. Sque surfaces billable work from email, calendar, files, and call notes — with clear narratives.",
    visual: "🔍", // Placeholder, later replace with animation (e.g. Lottie, SVG, canvas)
  },
  {
    id: 2,
    title: "Step 2 — Approve & Check",
    description:
      "Review drafts, apply categories, and approve in one flow. Automated checks catch issues before you send.",
    visual: "✅",
  },
  {
    id: 3,
    title: "Step 3 — Invoice & Collect",
    description:
      "Send invoices with a downloadable proof bundle. Track payments and reduce days-to-cash by 7–12 days.",
    visual: "💳",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative  px-4 lg:px-22 bg-gray-50">
      <div className="max-w-7xl  py-20 mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center border-l-2 border-r-2">
        {/* Left: Steps */}
        <div className="space-y-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            How Sque Works
          </h2>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-6 rounded-2xl cursor-pointer transition ${
                activeStep === step.id
                  ? "bg-white shadow-lg border border-blue-200"
                  : "hover:bg-white/60"
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Visual/Animation */}
        <div className="relative h-[400px] flex items-center justify-center bg-white rounded-2xl shadow-lg border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="text-7xl"
            >
              {steps.find((s) => s.id === activeStep)?.visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
