"use client";

import React, { useState } from "react";

export default function PracticeSection() {
  const tabs = ["Practice", "Use Cases", "Firm Size", "Roles"];

  // Different content per tab
  const tabContent: Record<
    string,
    { pain: string; sque: string[]; proof: string; tags?: string[] }
  > = {
    Practice: {
      pain: "Billable work hides in email, calls, and review — hours go unbilled. Approvals stall and narratives lack the detail clients expect. Client billing rule rejections create write-downs and back-and-forth.",
      sque: [
        "Auto-finds billable work and drafts clear entries.",
        "One-click approvals with clear categories and an activity log.",
        "Pre-submission checks to prevent rejected e-bills.",
      ],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Litigation",
        "Corporate/Transactional",
        "Immigration",
        "Family",
        "PI/Contingency",
        "Healthcare/Insurance Defense",
      ],
    },
    "Use Cases": {
      pain: "Hidden work; inconsistent narratives; month-end scramble.",
      sque: [
        "Auto-finds work, drafts clear narratives, pushes to invoice with proof.",
      ],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Time Capture & Revenue",
        "Approvals & Disputes",
        "Client Billing Rules",
        "Drafting & Redlining",
        "Collections & Retainers",
        "Evidence & Audits",
      ],
    },
    "Firm Size": {
      pain: "Admin drain; forget work; want simple.",
      sque: ["Finds work; one-click invoice; value in days."],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Solo",
        "Team (5)",
        "Mid (25)",
        "BigLaw (100)",
        "Mega (250)",
        "Evidence & Audits",
      ],
    },
    Roles: {
      pain: "You want revenue integrity, standardization, proof.",
      sque: [
        "Time captured +10–25%, policy approvals, Evidence Packs.First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      ],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Managing Partner",
        "Billing/Finance",
        "Legal Ops",
        "Attorney/Associate",
        "Paralegal",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("Practice");

  return (
    <section className=" relative px-4 lg:px-22 py-26 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="text-center  mb-18 ">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            Built for Your Practice, Use Case, and Team
          </h2>
          <p className="mt-9 text-lg text-center text-slate-600 ">
            Sque adapts to how your firm works — and stays audit-ready by
            design.
          </p>
        </header>

        {/* Tab Buttons */}
        <div className="flex flex-wrap w-fit mx-auto justify-center gap-3 mb-8  border p-1 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border text-sm shadow-sm transition   ${
                activeTab === tab
                  ? "bg-blue-400 text-white border-blue-400 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:shadow-md"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {tabContent[activeTab].tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabContent[activeTab].tags!.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-slate-50 text-slate-700 rounded-full border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Dynamic Content */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Pain */}
          <article className="bg-white border-t-10 border-t-blue-600 rounded-2xl p-6 py-18 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              Your pain
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {tabContent[activeTab].pain}
            </p>
          </article>

          {/* What Sque does */}
          <article className="bg-white  border-t-10 border-t-blue-600  rounded-2xl p-6 py-18 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              What Sque does
            </h4>
            <ul className="text-sm text-slate-700 space-y-2 leading-relaxed list-disc pl-5">
              {tabContent[activeTab].sque.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </article>

          {/* Proof */}
          <article className="bg-white  border-t-10 border-t-blue-600  rounded-2xl p-6 py-18 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Proof</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {tabContent[activeTab].proof}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
