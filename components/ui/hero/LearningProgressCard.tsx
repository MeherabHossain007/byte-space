"use client";

import { useEffect, useState } from "react";

interface LearningProgressCardProps {
  className?: string;
  progress?: number;
}

export default function LearningProgressCard({
  className = "",
  progress = 55,
}: LearningProgressCardProps) {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 1000; // 1s matching the progress bar transition
    const startDelay = 200;

    const timer = setTimeout(() => {
      setDisplayedProgress(progress);

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progressRatio = Math.min(elapsed / duration, 1);

        // easeOutCubic curve for smooth count deceleration
        const easeOut = 1 - Math.pow(1 - progressRatio, 3);
        setCount(Math.round(easeOut * progress));

        if (progressRatio < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, startDelay);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [progress]);

  const hasCustomWidth = className.includes("w-");

  return (
    <div
      className={`group/card select-none hover:[animation-play-state:paused] ${className}`}
    >
      <div className={`bg-white flex flex-col gap-1.5 sm:gap-2.5 items-start p-3 xs:p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-[20px] ${
        hasCustomWidth ? "w-full" : "w-38 xs:w-46 sm:w-56 lg:w-64"
      } max-w-full shadow-xl shadow-blue-950/10 border border-white/80 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-950/20 hover:border-secondary/40 active:scale-[0.98] cursor-pointer`}>
        <div className="flex items-center justify-between w-full">
          <p className="font-satoshi font-medium text-zinc-600 text-[11px] xs:text-xs sm:text-sm lg:text-base leading-tight whitespace-nowrap group-hover/card:text-zinc-900 transition-colors duration-200">
            Learning Progress
          </p>
        </div>
        <p className="font-heading font-semibold text-zinc-950 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight group-hover/card:scale-105 origin-left transition-transform duration-300 tabular-nums">
          {count}%
        </p>
        <div className="w-full h-1.5 sm:h-2.5 lg:h-3 bg-zinc-100 rounded-full overflow-hidden mt-0.5 relative">
          <div
            className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${displayedProgress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent animate-shimmer-sweep pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
