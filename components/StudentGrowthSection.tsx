import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentGrowthSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl font-normal">
              ByteSpace is your springboard to career transformation. Our curriculum is
              collaboratively crafted with industry leaders to provide you with the most
              relevant, hands-on, and cutting-edge knowledge in technology and modern creative arts.
            </p>

            {/* 3 Metric Counters */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-zinc-200/80">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1856F3] tracking-tight">
                  17K+
                </p>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-1">
                  Enrolled Students
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1856F3] tracking-tight">
                  90+
                </p>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-1">
                  Expert Instructors
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1856F3] tracking-tight">
                  18
                </p>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-1">
                  Career Tracks
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 text-sm font-bold bg-[#1856F3] text-white px-7 py-3 rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-500/20"
              >
                Start Learning Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Cutout & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Background Glow & Lime Spring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400/10 blur-[80px] rounded-full -z-10" />

            {/* Central Student Image Container */}
            <div className="relative w-[280px] sm:w-[360px] h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/hero-student.jpg"
                alt="Student learning on ByteSpace"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Top-Left Snippet: Figma Course Card */}
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/80 max-w-[190px] sm:max-w-[210px] animate-float-slow">
              <div className="relative w-full h-20 rounded-lg overflow-hidden mb-2">
                <Image
                  src="/images/courses/figma.jpg"
                  alt="Course thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-bold text-zinc-900 line-clamp-1">
                Learn Figma from scratch
              </p>
              <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-500">
                <span className="text-[#1856F3] font-semibold">$45 / yr</span>
                <span className="flex items-center text-amber-500 font-bold">
                  ★ 4.9
                </span>
              </div>
            </div>

            {/* Floating Bottom-Right: 55% Progress Badge */}
            <div className="absolute -bottom-4 right-0 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/80 min-w-[150px] sm:min-w-[170px] animate-float-gentle">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-zinc-500">Course Progress</span>
                <span className="text-sm font-bold text-[#1856F3]">55%</span>
              </div>
              <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#1856F3] rounded-full" style={{ width: "55%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
