export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 ">
        <div className="grid grid-cols-4 h-full">
          {/* Internal dashed columns */}
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-l border-dashed border-amber-400 " />
          ))}
        </div>

        {/* Left solid border */}
        <div className="absolute left-0 top-0 h-full border-l border-gray-100" />
        {/* Right solid border */}
        <div className="absolute right-0 top-0 h-full border-r border-gray-100" />
      </div>

      {/* Page Content */}
      <div className="relative z-10  ">
        {children}
      </div>
    </div>
  );
}
