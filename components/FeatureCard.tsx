"use client";

import { ArrowRight } from "lucide-react";

type ProductFeatureCardProps = {
  title: string;
  description: string;
  image: string;
 
  
};

export default function FeatureCard({
  title,
  description,
  image,
  
 
}: ProductFeatureCardProps) {
  return (
    <div className="relative rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-200 p-6 flex flex-col hover:shadow-xl transition">
      {/* Graphic */}
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-full max-w-sm h-auto" />
      </div>

      {/* Body */}
      <div className="mt-6 flex-1">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-600 text-base">{description}</p>
      </div>

      
    </div>
  );
}
