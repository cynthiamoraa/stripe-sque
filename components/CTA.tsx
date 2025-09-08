import AskCard from "./AskCard";
import SecurityCard from "./SecurityCard";

export default function ProductFeatureCard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <SecurityCard />

          {/* Right Card */}
          <AskCard />
        </div>
      </div>
    </section>
  );
}