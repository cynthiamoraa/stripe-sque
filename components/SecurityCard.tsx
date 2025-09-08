"use client";

import { CheckCircle } from "lucide-react";

export default function SecurityCard() {
  const features = [
    "Private by design",
    "Defense-grade security",
    "Full audit trail & access logs",
    "Role-based permissions",
    "SSO + MFA (Google & Microsoft)",
    "SOC Ready, Data retention & export controls",
  ];

  return (
    <div
      className="relative rounded-2xl bg-white shadow-xl overflow-hidden p-8 border border-gray-200"
      style={{
        ["--primaryAccent" as any]: "#4F46E5", // Indigo
        ["--secondaryAccent" as any]: "#14B8A6", // Teal
      }}
    >
      {/* Background gradient layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="800"
          height="600"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="gradient1" cx="0" cy="0" r="1">
              <stop offset="0.2" stopColor="var(--primaryAccent)" />
              <stop
                offset="1"
                stopColor="var(--primaryAccent)"
                stopOpacity="0"
              />
            </radialGradient>
            <radialGradient id="gradient2" cx="0" cy="0" r="1">
              <stop stopColor="var(--secondaryAccent)" />
              <stop
                offset="1"
                stopColor="var(--secondaryAccent)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <circle
            cx="400"
            cy="300"
            r="250"
            fill="url(#gradient1)"
            opacity="0.5"
          />
          <circle
            cx="500"
            cy="350"
            r="300"
            fill="url(#gradient2)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Card content */}
      <div className="relative z-10 space-y-6">
        {/* Badge */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Security
          </span>
        </div>

        {/* Title + Description */}
        <header>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Confidential. Compliant. <br /> In Your Control.
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-lg">
            Sque replaces risky tools and manual chaos with a secure legal
            platform built for privilege, client trust, and auditability.
          </p>
        </header>

        {/* Features list */}
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow hover:bg-indigo-700 transition">
            Learn more about Security
          </button>
        </div>
      </div>
    </div>
  );
}
