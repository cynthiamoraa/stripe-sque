"use client";

import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import { div } from "framer-motion/client";

export default function ProgressSteps() {
  const steps = [
    { label: "Find Work" },
    { label: "Approve" },
    { label: "Invoice" },
    { label: "Paid" },
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        setProgress(video.currentTime / video.duration);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="bg-gray-50  px-4 lg:px-22 ">
      <div className=" pt-9 ">
        <div className=" mb-6 flex flex-col  items-center justify-center text-center px-4">
          <h1 className="font-bold text-3xl mb-4">
            Find Work → Approve → Invoice → Paid
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Sque is the Legal Revenue & Operating System — it captures work
            automatically, gives you downloadable proof, and runs billing as
            your system of record.
          </p>
        </div>

        <div className="p-6 flex flex-row ">
          <div className="w-1/4  hidden lg:flex p-4">
            <ProgressBar steps={steps} progress={progress} />
          </div>
          <div className="flex-1 shadow-2xl">
            <video
              ref={videoRef}
              poster="/images/sque.png"
              src="https://storage.googleapis.com/sque_storage/videos/Screen%20Recording%202025-08-26%20at%209.28.54%E2%80%AFAM.mov"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover border-muted-foreground object-center bg-gray-50 opacity-90 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
