"use client";

import { Check } from "lucide-react";

type Step = {
  label: string;
};

type ProgressBarProps = {
  steps: Step[];
  progress: number; // 0 → 1
};

export default function ProgressBar({ steps, progress }: ProgressBarProps) {
  const totalSteps = steps.length;

  return (
    <div className="relative flex flex-col items-start h-full">
      {steps.map((step, index) => {
        const stepProgress = index / (totalSteps - 1);
        const nextStepProgress = (index + 1) / (totalSteps - 1);

        // How much of the line between this step and next should be filled
        const lineFill =
          progress <= stepProgress
            ? 0
            : progress >= nextStepProgress
            ? 1
            : (progress - stepProgress) / (nextStepProgress - stepProgress);

        const isCompleted = progress >= nextStepProgress;
        const isActive =
          progress >= stepProgress && progress < nextStepProgress;

        return (
          <div key={index} className="relative flex items-start">
            {/* Left side: Circle + line */}
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-blue-600 border-blue-600 text-white"
                    : isActive
                    ? "border-blue-600 text-blue-600 bg-white"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="w-1 h-20 bg-gray-300 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-200 ease-linear"
                    style={{
                      height: `${lineFill * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Right side: Label */}
            <span
              className={`ml-4 mt-1 text-sm font-medium ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
