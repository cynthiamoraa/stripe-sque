"use client";
import { useEffect, useRef } from "react";

export default function HomepageHeroGradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

   const ctx = canvas.getContext("2d");
   if (!ctx) return;
   const context = ctx as CanvasRenderingContext2D;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      ["#a960ee", "#ff333d"],
      ["#90e0ff", "#ffcb57"],
    ];

    let step = 0;

    function draw() {
      step += 0.01;

      const gradient = context.createLinearGradient(0, 0, width, height);
      const c1 = colors[0];
      const c2 = colors[1];

      gradient.addColorStop(0, c1[0]);
      gradient.addColorStop(Math.abs(Math.sin(step)), c1[1]);
      gradient.addColorStop(1, c2[0]);

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="HomepageHeroGradient relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="Gradient__canvas absolute inset-0 w-full h-full"
      />
    </div>
  );
}
