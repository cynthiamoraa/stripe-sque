import AskCard from "./AskCard";
import SecurityCard from "./SecurityCard";

export default function ProductFeatureCard() {
  return (
    <section className=" px-4 lg:px-22  bg-gray-50">
      <div className="max-w-7xl mx-auto p-4  ">
        <div className="grid md:grid-cols-2 gap-8 py-20">
          {/* Left Card */}
          <SecurityCard />

          {/* Right Card */}
          <AskCard />
        </div>
      </div>
    </section>
  );
}