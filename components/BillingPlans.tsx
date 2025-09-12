"use client";

import { CheckCircle2 } from "lucide-react";

type BillingCardProps = {
  title: string;
  subtitle?: string;
  price: string;
  suffix?: string;
  badge?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

function BillingCard({
  title,
  subtitle,
  price,
  
  badge,
  features,
  cta,
  highlight,
}: BillingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 shadow-sm overflow-hidden transition hover:shadow-md ${
        highlight ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
      }`}
    >
      {/* Title + Badge */}
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {badge && (
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
            {badge}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-1 text-sm text-gray-500 font-medium">{subtitle}</p>
      )}

      {/* Price */}
      <div className="mt-3 text-2xl font-extrabold text-gray-900">{price}</div>

      {/* CTA */}
      <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
        {cta}
      </button>

      {/* Feature list */}
      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-gray-800">
          This includes:
        </p>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function BillingPlans() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <BillingCard
        title="Starter"
        subtitle="(annual)"
        price="$79/user/mo"
        badge="Early Access"
        cta="Start Free Trial"
        features={[
          "50 Automation Actions (Overage $0.10–$0.25)",
          "AI Redlining",
          "Microsoft 365 / Google",
          "CSV / E-Billing Export",
        ]}
      />

      <BillingCard
        title="Pro"
        subtitle="(annual)"
        price="$149/user/mo"
        badge="Early Access"
        cta="Start Free Trial"
        highlight
        features={[
          "200 Automation Actions",
          "Approvals & Disputes",
          "Retainers & Collections",
          "Signed Activity Logs + Billing Checks",
        ]}
      />

      <BillingCard
        title="Enterprise"
        subtitle="(Early Access)"
        price="Custom"
        cta="Book Strategy Call"
        features={[
          "SSO / SCIM",
          "Compliance Pack",
          "Drafting+",
          "Advanced Logging / DLP",
          "1,000 Automation Actions",
        ]}
      />
    </div>
  );
}
