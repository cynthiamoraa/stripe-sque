"use client";

import { HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How fast will we see ROI?",
    answer:
      "Most teams start seeing measurable ROI within the first 30–60 days, depending on adoption and use case.",
  },
  {
    question: "Does Sque replace our practice management system?",
    answer:
      "No — Sque integrates seamlessly with your existing practice management system to enhance workflows, not replace them.",
  },
  {
    question: "What about data security?",
    answer:
      "We use enterprise-grade encryption and comply with industry standards to ensure your data is always safe and secure.",
  },
  {
    question: "Do you integrate with QuickBooks/Xero?",
    answer:
      "Yes, we offer direct integrations with QuickBooks and Xero for smooth financial syncing.",
  },
  {
    question: "Can we try before committing?",
    answer:
      "Absolutely! You can start with a free trial before deciding on a paid plan.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-700 text-center">
          Here are some common questions about Sque.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="border border-gray-300 p-1 ">
                  <HelpCircle className="h-6 w-6  text-blue-600 shrink-0" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
              </div>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
