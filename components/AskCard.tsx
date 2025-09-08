"use client";

import { Sparkles } from "lucide-react";

export default function AskCard() {
  return (
    <div
      className="relative rounded-2xl bg-white shadow-xl overflow-hidden p-8 border border-gray-200 flex flex-col"
      style={{
        ["--primaryAccent" as any]: "#F59E0B", // Amber
        ["--secondaryAccent" as any]: "#EC4899", // Pink
      }}
    >
      {/* Background gradient layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="800"
          height="600"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="gradient1" cx="0" cy="0" r="1">
              <stop offset="0.2" stopColor="var(--primaryAccent)" />
              <stop
                offset="1"
                stopColor="var(--primaryAccent)"
                stopOpacity="0"
              />
            </radialGradient>
            <radialGradient id="gradient2" cx="0" cy="0" r="1">
              <stop stopColor="var(--secondaryAccent)" />
              <stop
                offset="1"
                stopColor="var(--secondaryAccent)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <circle
            cx="400"
            cy="300"
            r="250"
            fill="url(#gradient1)"
            opacity="0.5"
          />
          <circle
            cx="500"
            cy="350"
            r="300"
            fill="url(#gradient2)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Productivity
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6">
          Ask. It Gets Done.
        </h2>

        {/* Search bar */}
        <div className="w-full flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/40 
                       text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.65 6.65a7.5 7.5 0 016.5 9.5z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-auto pt-6">
          <button className="w-full px-6 py-3 bg-pink-500 text-white rounded-xl font-medium shadow hover:bg-pink-600 transition">
            Explore productivity
          </button>
        </div>
      </div>
    </div>
  );
}
