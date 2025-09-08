type AnimatedGradientProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedGradient({
  children,
  className,
}: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-90" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
