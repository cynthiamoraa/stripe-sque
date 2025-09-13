"use client";

import { useState, useEffect, useRef } from "react";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const steps = [
  {
    id: 1,
    title: "Smart To-Do List",
    description: [
      "Review Johnson contract amendments",
      "prepare discovery documents for Smith case",
      "follow up with client regarding settlement offer",
      "draft response to opposing counsel",
    ],
    button: "Add Task",
    
  },
  {
    id: 2,
    title: "Your Calendar",
    description: [
      "Client meeting - Johnson Corp",
      " Court hearing - Smith v. Jones",
      " Team strategy session",
      " Deposition prep with witness",
    ],
    button: "Add Event",
    
  },
  {
    id: 3,
    title: "State of the Business",
    type: "stats",
    stats: [
      { label: "Revenue", value: "$145.0k" },
      { label: "Total Hours", value: "320.0h" },
    ],
    button: "Add Case",
    
  },
];

const data = [
  { name: "Jan", revenue: 20 },
  { name: "Feb", revenue: 35 },
  { name: "Mar", revenue: 50 },
  { name: "Apr", revenue: 30 },
];

export default function MissionControl() {
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
    <section
      className="relative px-4 lg:px-22 py-30  bg-gradient-to-br from-blue-300 via-purple-300 to-fuchsia-200  clip-section-top"
    >
      <section className="  text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}

          <h2 className="text-3xl  md:text-4xl font-bold mb-4">
            Mission Control
          </h2>
          <p className="text-black/80 mb-12 max-w-2xl mx-auto">
            Find Work — Time captured: +10–25% typical Approve & Check — Proof
            coverage: on the majority of entries by Day 30 Invoice & Collect —
            Days-to-cash: −7 to −12.
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-12 text-center shadow-2xl shadow-purple-300 bg-gray-50 rounded-md ">
          {/* Section Header */}

          <h2 className="text-3xl  md:text-4xl font-bold mb-4">
            Your Legal Mission Control
          </h2>
          <p className="text-black mb-12 max-w-2xl mx-auto">
            This is your operating system for legal revenue: Find → Approve →
            Invoice → Collect — with proof.
          </p>

          <div className="w-full flex justify-center mb-16">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="ask Sage anything"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border-[0.1] border-black/10 
                       text-gray placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.65 6.65a7.5 7.5 0 016.5 9.5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  {step.title}
                </h3>

                {step.type === "stats" ? (
                  <>
                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {step.stats?.map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-2 bg-gray-50/50 rounded "
                        >
                          <div className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e5e7eb"
                          />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#3b82f6" }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </>
                ) : (
                  <ul className="flex-1 space-y-2 text-gray-600 list-inside list-disc pl-3 text-left">
                    {step.description?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                <button className="mt-6 px-4 py-2 text-sm font-[600] md:font-medium rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition">
                  {step.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
