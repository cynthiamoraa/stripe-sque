"use client";

import ProductFeatureCard from "./FeatureCard";

const features = [
  {
    title: "Signed Activity Logs",
    description:
      "Cryptographically recorded and tamper-evident audit trails. Timestamped entries with digital signatures for verifiable billing proof.",
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80",
  },
  {
    title: "Billing Checks",
    description:
      "Automated validation against client billing rules. Prevent rejections and write-downs with detailed compliance reports.",
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80",
  },
  {
    title: "Access Controls",
    description:
      "Enterprise security with SSO/SCIM integration and role-based permissions. Audit-ready access management and data controls.",
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" px-4 lg:px-22 py-20 bg-gradient-to-br from-blue-300 via-purple-300 to-fuchsia-200 clip-section-bottom ">
      <div className="py-16  ">
        <h1 className="text-center p-4 font-bold text-3xl mb-6">
          Trust, Evidence, and Control
        </h1>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ProductFeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
        <div className="pt-9  flex justify-center items-center ">
          <button className="px-4 py-2 bg-blue-500 text-white font-[600] md:font-medium rounded-xl shadow hover:bg-blue-600 transition">
            Open Evidence Pack Sample
          </button>
        </div>
      </div>
    </section>
  );
}
