"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Step 1 — Find Work You Already Did",
    description:
      "Connect Google/Microsoft. Sque surfaces billable work from email, calendar, files, and call notes — with clear narratives.",
    visual: "🔍",
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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(steps[index].id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative px-4 lg:px-22 bg-gradient-to-br from-blue-300 via-purple-300 to-fuchsia-200  ">
      <section className=" text-white py-20 px-2">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}

          <h2 className="text-3xl  md:text-4xl font-bold mb-4">
            How Sque Works
          </h2>
          <p className="text-white/80 mb-20 max-w-2xl mx-auto">
            Refine, Adjust, Perfect: Craft your ideal workflow output with
            intuitive steps. Achieve clarity, stability, and efficiency—tailored
            precisely to your needs.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg  text-left flex flex-col"
              >
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
