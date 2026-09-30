import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

export default function AuthCardCluster() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      {/* 3D Lime Torus (Top Left of Card) */}
      <div className="absolute -top-6 -left-6 z-20 w-20 h-20 animate-float-slow pointer-events-none drop-shadow-xl">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5FF66" />
              <stop offset="60%" stopColor="#CEFF1A" />
              <stop offset="100%" stopColor="#9FD400" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10ZM50 32C39.5066 32 31 40.5066 31 50C31 59.4934 39.5066 68 50 68C60.4934 68 69 59.4934 69 50C69 40.5066 60.4934 32 50 32Z"
            fill="url(#torusGrad)"
            transform="rotate(-25 50 50)"
          />
        </svg>
      </div>

      {/* 3D Lime Prism (Bottom Left) */}
      <div className="absolute -bottom-8 -left-8 z-20 w-24 h-24 animate-float-gentle pointer-events-none drop-shadow-2xl">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="prismFace1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4FFA6" />
              <stop offset="100%" stopColor="#D4FC35" />
            </linearGradient>
            <linearGradient id="prismFace2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CEFF1A" />
              <stop offset="100%" stopColor="#8EBE00" />
            </linearGradient>
          </defs>
          <polygon points="50,15 90,82 18,72" fill="url(#prismFace1)" />
          <polygon points="50,15 90,82 78,92 28,84" fill="url(#prismFace2)" />
        </svg>
      </div>

      {/* White Zigzag Squiggle Doodle (Bottom Right) */}
      <div className="absolute -bottom-6 -right-6 z-20 w-24 h-24 animate-float-slow pointer-events-none drop-shadow-md">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M70 20 L25 35 L75 55 L30 75 L70 90"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Card 1: Background card offset to the left */}
      <div className="absolute -left-10 top-12 w-[280px] bg-white rounded-2xl p-3.5 shadow-xl border border-white/60 -rotate-3 z-0 opacity-80 pointer-events-none">
        <div className="relative h-28 w-full bg-zinc-100 rounded-xl overflow-hidden mb-2.5">
          <Image
            src="/images/courses/developer.jpg"
            alt="Preview"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            17 Lessons
          </div>
        </div>
        <h4 className="text-xs font-bold text-zinc-900">Build Digital...</h4>
        <p className="text-[10px] text-[#1856F3] font-medium">by purepearl studio</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded-full text-zinc-600 font-medium">
            Beginner
          </span>
          <span className="text-xs font-bold text-[#1856F3]">$25<span className="text-[9px] text-zinc-400 font-normal">/lifetime</span></span>
        </div>
      </div>

      {/* Card 2: Main center card "the Power of Big Data" */}
      <div className="relative z-10 bg-white rounded-3xl p-4 shadow-2xl border border-white/90 max-w-[340px] ml-auto">
        {/* Course Image Preview */}
        <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-inner">
          <Image
            src="/images/courses/dashboard.jpg"
            alt="the Power of Big Data preview"
            fill
            className="object-cover"
          />
          {/* Translucent meta pills over image */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-[10px] font-medium text-white">
            <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              17 Lessons
            </span>
            <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              2 hours 16 mins
            </span>
            <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              59 Comments
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="pt-3.5 px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-zinc-900 tracking-tight">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 text-xs font-bold text-zinc-800">
              <span>4.5</span>
              <Star className="w-3.5 h-3.5 fill-[#CEFF1A] text-zinc-800" />
            </div>
          </div>

          <p className="text-xs text-[#1856F3] font-medium mt-0.5 hover:underline cursor-pointer">
            by purepearl studio
          </p>

          <div className="mt-3 flex items-center justify-between">
            {/* Beginner Tag */}
            <div className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              <BarChart2 className="w-3 h-3 text-zinc-500" />
              <span>Beginner</span>
            </div>

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
                JD
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
                AK
              </div>
              <div className="w-6 h-6 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
                SM
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
                ER
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-900 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                26+
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-baseline">
            <span className="text-lg font-extrabold text-[#1856F3]">$25</span>
            <span className="text-xs text-zinc-400 font-medium ml-1">/lifetime</span>
          </div>
        </div>
      </div>

      {/* Card 3: Happy Students Lime Card (Bottom Offset) */}
      <div className="relative z-10 -mt-10 mr-4 bg-[#CEFF1A] rounded-2xl p-3.5 shadow-xl border border-white/60 max-w-[280px]">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-zinc-950">Happy Students</h4>
          <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-950">
            <span>4.5</span>
            <span className="text-[10px] text-zinc-600 font-normal">(240)</span>
            <Star className="w-3 h-3 fill-[#1856F3] text-[#1856F3]" />
          </div>
        </div>

        {/* 7 Avatars + 2K+ badge */}
        <div className="mt-2.5 flex items-center -space-x-1.5 overflow-hidden">
          <div className="w-6 h-6 rounded-full bg-blue-600 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            A
          </div>
          <div className="w-6 h-6 rounded-full bg-orange-500 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            B
          </div>
          <div className="w-6 h-6 rounded-full bg-pink-500 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            C
          </div>
          <div className="w-6 h-6 rounded-full bg-emerald-600 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            D
          </div>
          <div className="w-6 h-6 rounded-full bg-violet-600 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            E
          </div>
          <div className="w-6 h-6 rounded-full bg-cyan-600 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            F
          </div>
          <div className="w-6 h-6 rounded-full bg-amber-600 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            G
          </div>
          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
