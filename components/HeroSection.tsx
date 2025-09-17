

function Hero() {

  return (
    <section>
      <div className="w-full grid lg:grid-cols-4 items-stretch h-full   pb-8  px-4 lg:pl-22 lg:pr-0 ">
        <section className="col-span-4 md:col-span-2 flex flex-col gap-6 p-2  ">
          <div>
            <span className="bg-black/10 p-1 px-2 rounded-full">2025</span>
          </div>
          <header className="">
            <h1 className="text-black opacity-[3] font-bold md:font-black  font-serif text-6xl md:text-7xl  ">
              Stop Losing Billable Time You've Already Earned
            </h1>
          </header>
          <div>
            <h1 className="text-black font-sans font-normal text-2xl">
              Sque is the Legal Revenue & Operating System — it captures work
              automatically and runs billing as your system of record.
            </h1>
            <h1 className="mt-6">
              First invoice in 48 hours • Audit-ready proof in 14 days • 0
              rejected e-bills
            </h1>
          </div>
          <footer className="p-3 block md:flex justify-between gap-4">
            <button className=" h-16  rounded-xl  px-4 py-3 bg-indigo-600 text-white font-[600] md:font-medium shadow hover:bg-indigo-700 transition">
              Calculate My Revenue Recovery
            </button>
            <button className="px-4  py-3 h-16  mt-6 md:mt-0 bg-white rounded-xl hover:bg-gray-50  transition font font-medium border">
              Start Free Trial
            </button>
          </footer>
        </section>
        <div
          className="hidden lg:block bg-cover col-span-5 md:col-span-2"
          style={{ backgroundImage: "url('/images/sque.png')" }}
        ></div>
      </div>
    </section>
  );
}

export default Hero;
