import Image from "next/image";
import { CheckCircle2, TrendingUp, DollarSign, Users, Star, ArrowRight } from "lucide-react";
import { LimeZigzag } from "./DecorativeShapes";
import Link from "next/link";

export default function InstructorSection() {
  const benefits = [
    "Direct Student Chat & Feedback",
    "Automated Video Hosting & Quizzes",
    "Flexible Pricing & Payouts",
    "Analytics & Insights Dashboard",
  ];

  return (
    <section id="creators" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Column: Visual Composition with Female Instructor & Floating Stats */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-300/20 blur-[90px] rounded-full -z-10" />

            {/* Lime Zigzag Doodle */}
            <div className="absolute top-4 -right-2 sm:right-6 w-16 sm:w-20 opacity-90 animate-float-slow -z-10">
              <LimeZigzag />
            </div>

            {/* Central Instructor Image Card */}
            <div className="relative w-[280px] sm:w-[350px] h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
              <Image
                src="/images/instructor.jpg"
                alt="ByteSpace instructor teaching class"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Card 1: Top-Left "Total Revenue" (Blue Accent) */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-[#1856F3] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-blue-500/20 max-w-[160px] sm:max-w-[180px] animate-float-slow">
              <div className="flex items-center gap-1.5 text-blue-100 text-xs font-medium mb-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Total Revenue</span>
              </div>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight">
                $25,480.00
              </p>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-lime-300 font-semibold">
                <TrendingUp className="w-3 h-3" />
                <span>+24% this month</span>
              </div>
            </div>

            {/* Floating Card 2: Mid-Left "Active Students" */}
            <div className="absolute top-1/2 -left-6 sm:-left-12 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-white/80 animate-float-gentle text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1856F3]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-400">
                    Active
                  </p>
                  <p className="text-sm font-extrabold text-zinc-900">
                    55,045
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Bottom-Right "Student Reviews" Stack */}
            <div className="absolute -bottom-4 right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/80 flex items-center gap-3 animate-float-slow">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-500 border border-white flex items-center justify-center text-[10px] font-bold text-white">
                  ER
                </div>
                <div className="w-7 h-7 rounded-full bg-rose-500 border border-white flex items-center justify-center text-[10px] font-bold text-white">
                  TJ
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[10px] font-bold text-white">
                  KL
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-zinc-900 text-xs">4.95</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-500">
                  Student Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Share your expertise and build a thriving online education business.
              ByteSpace gives you all the tools required to author curriculum,
              deliver engaging lessons, and connect with a global community of eager learners.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-2">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1856F3] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-zinc-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/signup?role=instructor"
                className="inline-flex items-center gap-2 text-sm font-bold bg-[#1856F3] text-white px-7 py-3 rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-500/20"
              >
                Become an Instructor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
