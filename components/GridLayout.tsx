export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen  mx-4 lg:mx-22 ">
      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 h-full">
          {/* Internal dashed columns */}
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-l border-dashed border-gray-300" />
          ))}
        </div>

        {/* Left solid border */}
        <div className="absolute left-0 top-0 h-full border-l border-gray-300" />
        {/* Right solid border */}
        <div className="absolute right-0 top-0 h-full border-r border-gray-300" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-4 gap-6  ">
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
}
