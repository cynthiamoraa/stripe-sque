"use client";

import React, { useState } from "react";

// Map statuses to colors
const statusColors: Record<string, string> = {
  Now: "bg-green-100 text-green-700",
  Pro: "bg-purple-100 text-purple-700",
  "Pro Early Access": "bg-purple-100 text-purple-700",
  "Early Access": "bg-yellow-100 text-yellow-700",
  Roadmap: "bg-orange-100 text-orange-700",
  "Enterprise Early Access": "bg-blue-100 text-blue-700",
  "Now / Early Access": "bg-green-100 text-green-700",
};

export default function PracticeSection() {
  const tabs = [
    "Practice",
    "Use Cases",
    "Firm Size",
    "Roles",
    "What Sque Does",
  ];

  // Different content per tab
  const tabContent: Record<
    string,
    {
      pain?: string;
      sque?: string[];
      proof?: string;
      tags?: string[];
      sections?: any[];
    }
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
      tags: ["Solo", "Team (5)", "Mid (25)", "BigLaw (100)", "Mega (250)"],
    },
    Roles: {
      pain: "You want revenue integrity, standardization, proof.",
      sque: [
        "Time captured +10–25%, policy approvals, Evidence Packs. First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
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
    "What Sque Does": {
      sections: [
        {
          section: "Billing & Revenue Protection",
          items: [
            {
              title: "Invoice creation & delivery",
              status: "Now",
              description:
                "Create professional invoices and deliver them automatically with your branding.",
            },
            {
              title: "Manual time & expenses",
              status: "Now",
              description:
                "Track hours and expenses with clear categories and matter assignment.",
            },
            {
              title: "Collections reminders & payment tracking",
              status: "Pro",
              description:
                "Automated follow-ups for overdue invoices and payment status tracking.",
            },
            {
              title: "Online payments (card/ACH)",
              status: "Roadmap",
              description:
                "Accept secure online payments directly through invoices.",
            },
          ],
        },
        {
          section: "AI Assistance",
          items: [
            {
              title: "AI redlining suggestions",
              status: "Now",
              description:
                "Intelligent document review and redline suggestions.",
            },
            {
              title: "Billing checks (client rules)",
              status: "Early Access",
              description:
                "Automated validation of entries against client billing rules.",
            },
            {
              title: "Time-entry suggestions",
              status: "Roadmap",
              description:
                "Recommendations from calendar, email, and document activity.",
            },
          ],
        },
        {
          section: "Compliance & Proof",
          items: [
            {
              title: "Activity log export",
              status: "Early Access",
              description: "Exportable logs for reviews and audits.",
            },
            {
              title: "Signed logs (tamper-evident)",
              status: "Pro Early Access",
              description:
                "Cryptographically signed, tamper-evident activity trails.",
            },
          ],
        },
        {
          section: "Integrations & Security",
          items: [
            {
              title: "Microsoft 365 & Google Workspace",
              status: "Now",
              description: "Email, calendar, and document connections.",
            },
            {
              title: "CSV/e-billing exports",
              status: "Now / Early Access",
              description:
                "CSV available now; e-billing export in Early Access.",
            },
            {
              title: "SSO/SCIM, advanced logging & DLP",
              status: "Enterprise Early Access",
              description:
                "Enterprise authentication, provisioning, and data controls.",
            },
          ],
        },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("Practice");

  return (
    <section
      id="features"
      className="relative px-4 lg:px-22 py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-18">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            Built for Your Practice, Use Case, and Team
          </h2>
          <p className="mt-9 text-lg text-center text-slate-600">
            Sque adapts to how your firm works — and stays audit-ready by
            design.
          </p>
        </header>

        {/* Tab Buttons */}
        <div className="flex flex-wrap w-fit  mx-auto justify-center gap-3 mb-8 border border-gray-400 p-1 rounded-full ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border text-sm shadow-sm transition ${
                activeTab === tab
                  ? "bg-blue-700 text-white border-blue-700 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:shadow-md"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tags */}
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

        {/* Content for Practice / Use Cases / Firm Size / Roles */}
        {activeTab !== "What Sque Does" && (
          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white border-t-10 border-t-blue-700 rounded-2xl p-6 py-18 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Your pain
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {tabContent[activeTab].pain}
              </p>
            </article>

            <article className="bg-white  border-t-10 border-t-blue-700 rounded-2xl p-6 py-18 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                What Sque does
              </h4>
              <ul className="text-sm text-slate-700 space-y-2 leading-relaxed list-disc pl-5">
                {tabContent[activeTab].sque?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="bg-white  border-t-10 border-t-blue-700 rounded-2xl p-6 py-18 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Proof
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {tabContent[activeTab].proof}
              </p>
            </article>
          </div>
        )}

        {/* Content for What Sque Does */}
        {activeTab === "What Sque Does" && (
          <>
            <div className="space-y-10 grid grid-cols-2 gap-10 pb-16">
              {tabContent["What Sque Does"].sections!.map((section) => (
                <div
                  key={section.section}
                  className="border-gray-50 p-6 rounded-2xl bg-white shadow-lg "
                >
                  <h3 className="text-lg font-bold  text-center mb-4">
                    {section.section}
                  </h3>
                  <div className="space-y-3 ">
                    {section.items.map((item: any) => (
                      <div
                        key={item.title}
                        className=" p-4 border-b border-gray-400 "
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{item.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              statusColors[item.status] ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700">
                Start Free Trial
              </button>
              <p className="text-sm text-gray-500 mt-2">
                No credit card required • Setup in minutes • Cancel anytime
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
