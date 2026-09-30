"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Star, ArrowUpRight, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  rating: number;
  reviews: string;
  price: string;
  image: string;
  instructor: string;
  studentsCount: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Scratch",
    category: "Design",
    duration: "4.5 Hrs",
    rating: 4.9,
    reviews: "1.2k",
    price: "$45",
    image: "/images/courses/figma.jpg",
    instructor: "Alex Morgan",
    studentsCount: "3.4k",
  },
  {
    id: "2",
    title: "Basic Digital Illustration",
    category: "Design",
    duration: "3.2 Hrs",
    rating: 4.8,
    reviews: "890",
    price: "$38",
    image: "/images/courses/illustration.jpg",
    instructor: "Elena Rostova",
    studentsCount: "2.1k",
  },
  {
    id: "3",
    title: "Dashboard UI & Data Viz",
    category: "Design",
    duration: "5.0 Hrs",
    rating: 5.0,
    reviews: "2.4k",
    price: "$55",
    image: "/images/courses/dashboard.jpg",
    instructor: "David Chen",
    studentsCount: "4.8k",
  },
  {
    id: "4",
    title: "Web Design for Beginners",
    category: "Front End Development",
    duration: "8.0 Hrs",
    rating: 4.9,
    reviews: "3.1k",
    price: "$40",
    image: "/images/courses/developer.jpg",
    instructor: "Sarah Jenkins",
    studentsCount: "5.6k",
  },
  {
    id: "5",
    title: "Product Design Strategy",
    category: "UI/UX Design",
    duration: "4.0 Hrs",
    rating: 4.7,
    reviews: "950",
    price: "$50",
    image: "/images/courses/growth.jpg",
    instructor: "Marcus Vance",
    studentsCount: "1.9k",
  },
  {
    id: "6",
    title: "User Research & Prototyping",
    category: "Design",
    duration: "6.0 Hrs",
    rating: 4.8,
    reviews: "1.6k",
    price: "$48",
    image: "/images/courses/collab.jpg",
    instructor: "Priya Sharma",
    studentsCount: "2.8k",
  },
];

const CATEGORIES = [
  "Design",
  "All",
  "Front End Development",
  "Back End",
  "Cyber Security",
  "Data Science",
  "Cloud & DevOps",
  "Digital Marketing",
  "Video Editing",
  "Content Creation",
  "UI/UX Design",
  "Game Development",
  "Mobile App Development",
  "Music Production",
  "Blockchain",
  "+More",
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("Design");

  const filteredCourses =
    activeCategory === "All"
      ? COURSES
      : COURSES.filter(
          (c) =>
            c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            activeCategory.toLowerCase().includes(c.category.toLowerCase()) ||
            activeCategory === "Design" // default keep rich list visible
        );

  return (
    <section id="courses" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Choose from a wide variety of topics designed to help you succeed in
            today&apos;s tech and creative industries. Learn at your own pace with
            practical hands-on exercises.
          </p>
        </div>

        {/* Categories Pills Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#CEFF1A] text-zinc-950 shadow-sm scale-105"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {course.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Meta Row: Tag & Duration */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2.5">
                  <span className="font-semibold text-[#1856F3] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 font-medium text-zinc-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#1856F3] transition-colors leading-snug line-clamp-1">
                  {course.title}
                </h3>

                {/* Instructor & Reviews */}
                <div className="mt-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-500 text-xs">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-zinc-800">{course.rating.toFixed(1)}</span>
                    <span className="text-zinc-400 text-[11px]">({course.reviews})</span>
                  </div>

                  {/* Student Avatars Stack */}
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-400 border border-white text-[8px] font-bold text-white flex items-center justify-center">
                      A
                    </div>
                    <div className="w-5 h-5 rounded-full bg-amber-400 border border-white text-[8px] font-bold text-white flex items-center justify-center">
                      M
                    </div>
                    <div className="w-5 h-5 rounded-full bg-emerald-400 border border-white text-[8px] font-bold text-white flex items-center justify-center">
                      S
                    </div>
                    <div className="w-5 h-5 rounded-full bg-purple-400 border border-white text-[8px] font-bold text-white flex items-center justify-center">
                      K
                    </div>
                  </div>
                </div>

                {/* Footer / Price & Enroll */}
                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-[#1856F3]">
                      {course.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium ml-1">
                      / Year
                    </span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 bg-zinc-100 hover:bg-[#CEFF1A] hover:text-zinc-950 px-3.5 py-1.5 rounded-full transition-colors duration-150"
                  >
                    Enroll Now
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 bg-white border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 px-6 py-3 rounded-full transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-[#1856F3]" />
            Explore All 240+ Courses
          </button>
        </div>
      </div>
    </section>
  );
}
