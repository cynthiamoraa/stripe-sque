import HomepageHeroGradient from "./HomepageHeroGradient";
import FloatingCards from "./FloatingCards";

function Hero() {
  return (
    <section className="pt-20">
      <div>
        <div>
          <div>
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 items-stretch">
                <section className="col-span-1 lg:col-span-2 flex flex-col gap-6 p-2 ">
                  <header className="">
                    <div className="text-[#3a3a3a] opacity-[3] font-bold md:font-extrabold  font-serif text-6xl md:text-7xl  ">
                      Estimate your savings in 10 seconds
                    </div>
                  </header>
                  <div>
                    <h1 className="text-[#425466] font-sans font-normal text-2xl">
                      Sque is the Legal Revenue & Compliance OS. Turn it off and
                      invoices stop, audit trails break, and revenue leaks
                      return.
                    </h1>
                  </div>
                  <footer className="p-3 block md:flex justify-between gap-4">
                    <button className="px-4 h-12 bg-blue-400 rounded-xl text-white">
                      Calculate My Revenue Recovery
                    </button>
                    <button className="px-4 h-12  mt-6 md:mt-0 bg-white rounded-xl border">
                      Start Free Trial
                    </button>
                  </footer>
                </section>
                <div className="hidden  md:block bg-cover  col-span-1 lg:col-span-2">
                  <FloatingCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
