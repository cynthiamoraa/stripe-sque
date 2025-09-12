import { WavyBackground } from "@/components/ui/shadcn-io/wavy-background";
export default function ContactSection() {
  return (
    <WavyBackground
      backgroundFill="#f9fafb"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9"]}
      waveWidth={50}
      blur={10}
      speed="fast"
      waveOpacity={0.5}
      containerClassName="h-full w-full"
      className="flex items-center p-20 w-full justify-center px-4 lg:px-22 "
    >
      <div className="max-w-7xl py-16 mx-auto sm:px-6 lg:px-8 text-center border-gray-600 border-l-2 border-r-2 w-full ">
        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-700">
          Ready to Stop Revenue Leaks?
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Create an account instantly to get started or contact us
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 h-12 bg-blue-600 text-white rounded-xl font-medium shadow hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="px-6 h-12 bg-white text-blue-600 border border-blue-600 rounded-xl font-medium shadow hover:bg-blue-50 transition">
            Book Strategy Call
          </button>
        </div>
      </div>
    </WavyBackground>
  );
}
