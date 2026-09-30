"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Star, Laptop, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import {
  LimeSpring,
  LimeCylinder,
  WhiteTorus,
  WhitePrism,
  WhiteZigzag,
  LimeZigzag,
} from "./DecorativeShapes";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#1856F3] bg-grid-pattern text-white pb-16 sm:pb-24 pt-2">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/25 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative 3D Memphis Floating Elements */}
      <div className="absolute top-12 left-4 sm:left-12 w-16 sm:w-24 opacity-90 animate-float-slow">
        <LimeSpring />
      </div>
      <div className="absolute top-16 right-6 sm:right-16 w-16 sm:w-24 opacity-90 animate-float-gentle">
        <LimeCylinder />
      </div>
      <div className="absolute bottom-24 left-6 sm:left-20 w-20 sm:w-28 opacity-90 animate-float-gentle">
        <WhiteTorus />
      </div>
      <div className="absolute top-1/3 right-8 sm:right-28 w-14 sm:w-20 opacity-90 animate-float-slow">
        <WhitePrism />
      </div>
      <div className="absolute top-1/2 left-8 sm:left-24 w-12 sm:w-16 opacity-80">
        <WhiteZigzag />
      </div>
      <div className="absolute bottom-40 right-10 sm:right-24 w-12 sm:w-16 opacity-90">
        <LimeZigzag />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] max-w-4xl mx-auto drop-shadow-sm">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 font-normal max-w-xl mx-auto">
          ...or find your dream course and build your skills with the best instructors online
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 max-w-xl mx-auto bg-white rounded-full p-2 flex items-center shadow-xl shadow-blue-900/25 border border-white/20 transition-all focus-within:ring-4 focus-within:ring-lime-300/40"
        >
          <div className="pl-3 sm:pl-4 text-zinc-400 flex items-center">
            <Search className="w-5 h-5 text-zinc-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your course here..."
            className="w-full bg-transparent px-3 sm:px-4 py-2 text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-[#CEFF1A] hover:bg-[#bded00] active:scale-95 text-zinc-950 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-150 shadow-sm"
          >
            Search
          </button>
        </form>

        {/* Hero Character Visual Composition */}
        <div className="relative mt-12 sm:mt-16 mx-auto max-w-3xl flex justify-center items-end">
          {/* Neon lime circular backdrop */}
          <div className="absolute bottom-0 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#CEFF1A] -z-10 shadow-2xl shadow-lime-400/20" />

          {/* Student Cutout/Portrait Image Container */}
          <div className="relative w-[300px] h-[340px] sm:w-[440px] sm:h-[480px] overflow-hidden rounded-t-[3rem] sm:rounded-t-[4rem] flex justify-center items-end">
            <Image
              src="/images/hero-student.jpg"
              alt="ByteSpace student smiling with laptop"
              width={500}
              height={550}
              priority
              className="object-cover object-top w-full h-full scale-105"
            />
          </div>

          {/* Floating Glassmorphic Badge 1: Top-Left "Web Design" */}
          <div className="absolute top-8 -left-2 sm:left-4 sm:top-12 bg-white/95 backdrop-blur-md text-zinc-900 p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-2.5 text-left animate-float-slow">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#1856F3]">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase text-zinc-400 tracking-wider">
                Category
              </p>
              <p className="text-xs sm:text-sm font-bold text-zinc-900">
                Web Design
              </p>
            </div>
          </div>

          {/* Floating Glassmorphic Badge 2: Top-Right "Engaged Learner" 55% */}
          <div className="absolute top-12 -right-2 sm:right-6 sm:top-16 bg-white/95 backdrop-blur-md text-zinc-900 p-3 sm:p-4 rounded-2xl shadow-xl border border-white/60 min-w-[140px] sm:min-w-[170px] text-left animate-float-gentle">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-medium text-zinc-500">
                Course Progress
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1856F3]">
                55%
              </span>
            </div>
            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1856F3] rounded-full transition-all duration-1000"
                style={{ width: "55%" }}
              />
            </div>
          </div>

          {/* Floating Glassmorphic Badge 3: Bottom-Left Student Stack & Rating */}
          <div className="absolute bottom-6 -left-4 sm:left-0 bg-white/95 backdrop-blur-md text-zinc-900 p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-3 text-left animate-float-gentle">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center text-[10px] font-bold text-white">
                JD
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center text-[10px] font-bold text-white">
                AK
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-emerald-400 flex items-center justify-center text-[10px] font-bold text-white">
                SM
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                RL
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-zinc-900 text-xs">4.9</span>
                <span className="text-zinc-400 text-[10px]">(12k+)</span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-zinc-600">
                Popular Tutors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
