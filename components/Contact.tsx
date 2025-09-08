export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-900">
          Ready to Stop Revenue Leaks?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
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
    </section>
  );
}
