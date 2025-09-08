import HomepageHeroGradient from "./HomepageHeroGradient";

function Hero() {

  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <div className="grid md:grid-cols-4 items-stretch min-h-full pb-26 pt-16 lg:pt-68">
                <section className="col-span-4 md:col-span-2 flex flex-col gap-6 p-2  ">
                  <div>
                    <h1 className="">2025</h1>
                  </div>
                  <header className="">
                    <h1 className="text-[#3a3a3a] opacity-[3] font-bold md:font-extrabold  font-serif text-6xl md:text-7xl  ">
                      Stop Losing Billable Time You've Already Earned
                    </h1>
                  </header>
                  <div>
                    <h1 className="text-[#425466] font-sans font-normal text-2xl">
                      Sque is the Legal Revenue & Operating System — it captures
                      work automatically and runs billing as your system of
                      record.
                      <h1 className="mt-6">
                        First invoice in 48 hours • Audit-ready proof in 14 days
                        • 0 rejected e-bills
                      </h1>
                    </h1>
                  </div>
                  <footer className="block md:flex justify-between">
                    <button className="p-2 bg-blue-400 px-2 rounded-xl">
                      Calculate My Revenue Recovery
                    </button>
                    <button className="p-2 mt-6 md:mt-0 bg-white px-2 rounded-xl">
                      Start Free Trial
                    </button>
                  </footer>
                </section>
                <div
                  className="hidden md:block bg-cover col-span-5 md:col-span-2"
                  style={{ backgroundImage: "url('/images/sque.png')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
