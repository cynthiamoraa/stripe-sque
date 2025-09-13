import BillingPlans from "./BillingPlans";

export default function BillingSection() {
  return (
    <div id="pricing" className="bg-gray-50 ">
      <section className=" px-4 lg:px-22 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20  pb-40  ">
          <h1 className="text-3xl text-center mb-8 font-bold text-gray-900">
            Simple Plans
          </h1>
          <div className="grid lg:grid-cols-4 gap-8 items-start md:items-stretch">
            {/* Left Side (takes only the space it needs) */}
            <div className="max-w-md col-span-4   lg:col-span-1 flex flex-col items-center justify-center text-center  h-full mx-auto">
              <h1 className="text-xl font-normal  text-gray-900">
                Adopt the Operating System in Stages
              </h1>
              <p className="mt-auto text-gray-700 text-sm leading-relaxed">
                Guarantee: 14-Day Activation + 30/60-Day ROI Money-Back.
                <br />
                (30 days for Starter/Pro; 60 days for Enterprise or teams with
                strict client billing rules.)
              </p>
            </div>

            {/* Right Side (expands to fill remaining space) */}
            <div className="col-span-4 md:col-span-3">
              <BillingPlans />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
