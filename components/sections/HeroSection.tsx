"use client";

import { useState } from "react";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import LearningProgressCard from "@/components/ui/hero/LearningProgressCard";
import HappyStudentsCard from "@/components/ui/hero/HappyStudentsCard";
import UiUxDesignCard from "@/components/ui/hero/UiUxDesignCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

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
    <section
      className="relative overflow-hidden bg-primary bg-grid-pattern text-primary-foreground pb-0 pt-16 sm:pt-20 lg:pt-24"
      aria-label="Hero Section"
    >
      {/* 1440px Centered Stage Wrapper */}
      <div className="relative w-full max-w-360 mx-auto overflow-hidden 2xl:overflow-visible">
        {/* Ellipse 7 (Lime Circle Backdrop from Figma) */}
        <div className="absolute -bottom-16 sm:-bottom-24 lg:-bottom-30 left-1/2 -translate-x-1/2 w-[140vw] max-w-125 sm:max-w-187.5 lg:max-w-none sm:w-240 lg:w-287.25 aspect-square pointer-events-none select-none z-0 translate-y-[49%]">
          <Image
            src="/images/Ellipse 7.png"
            alt="ByteSpace Lime Circle Backdrop"
            fill
            priority
            className="object-contain select-none pointer-events-none"
          />
        </div>

        {/* 3D Memphis Decorative Ornaments from Figma */}
        <div className="absolute bottom-6 sm:bottom-16 lg:bottom-30 left-1/2 -translate-x-1/2 w-[160%] sm:w-[130%] lg:w-full min-w-125 sm:min-w-200 lg:min-w-0 pointer-events-none select-none z-0">
          <Image
            src="/images/3d ornament.png"
            alt="ByteSpace 3D Decorative Ornaments"
            width={1780}
            height={802}
            priority
            className="object-contain object-bottom select-none pointer-events-none scale-110 sm:scale-120"
          />
        </div>

        {/* Hero content */}
        <div className="hero-content relative z-10 flex flex-col items-center text-center px-4 pt-4 sm:pt-8 lg:pt-12 gap-6 sm:gap-10 lg:gap-14 w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col justify-center items-center text-center gap-4 sm:gap-6 lg:gap-8 mx-auto">
            <h1 className="font-heading font-bold text-primary-foreground text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-tight tracking-tight w-full max-w-4xl text-center mx-auto">
              Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
            </h1>
            <p className="font-satoshi font-normal text-hero-muted text-sm sm:text-base lg:text-lg leading-relaxed w-full max-w-xl sm:max-w-3xl lg:max-w-4xl text-center mx-auto px-2">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          {/* Search Bar */}
          <form
            className="hero-search flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full justify-center max-w-md sm:max-w-xl mx-auto px-2 sm:px-0"
            onSubmit={handleSearch}
            role="search"
            aria-label="Course Search"
          >
            <Input
              type="search"
              icon={
                <MdSearch className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search courses, topics, or creators"
              placeholder="Course, topic, creator"
              containerClassName="w-full sm:w-115 max-w-full"
            />
            <Button type="submit" className="w-full sm:w-auto">Search</Button>
          </form>
        </div>

        {/* Hero image (person) */}
        <div className="hero-visual relative z-10 flex justify-center pb-0 px-2 sm:px-4 mt-6 sm:mt-8">
          <div className="relative w-full max-w-85 sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex justify-center items-end">
            {/* Student Cutout/Portrait Image Container */}
            <Image
              src="/images/hero-image.png"
              alt="Student"
              width={1920}
              height={1080}
              priority
              style={{ transform: "translateX(3.2%)" }}
              className="w-full h-auto object-contain select-none pointer-events-none relative z-10"
            />

            {/* Learning Progress Card */}
            <LearningProgressCard className="absolute top-[12%] sm:top-[14%] lg:top-[17%] right-0 sm:right-2 lg:right-4 z-20" />

            {/* Happy Students Card */}
            <HappyStudentsCard className="absolute bottom-[2%] sm:bottom-[6%] lg:bottom-[10%] left-0 sm:left-2 lg:left-4 z-20" />

            {/* UI/UX Design Card */}
            <UiUxDesignCard className="absolute top-[6%] sm:top-[14%] lg:top-[20%] left-0 sm:left-2 lg:left-6 z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
