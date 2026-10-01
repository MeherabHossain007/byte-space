"use client";

import { useState } from "react";
import CourseCard from "@/components/ui/CourseCard";

interface CourseItem {
  id: string;
  title: string;
  category: string;
  thumb: string;
  instructor?: string;
  price?: string;
  period?: string;
  rating?: number | string;
  level?: string;
  lessonsCount?: string;
  duration?: string;
  commentsCount?: string;
  studentsCount?: string;
}

const COURSES: CourseItem[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    thumb: "/images/courses/figma.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    studentsCount: "26+",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    category: "Digital Illustration",
    thumb: "/images/courses/illustration.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "14 Lessons",
    duration: "1 hour 45 mins",
    commentsCount: "42 Comments",
    studentsCount: "26+",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    category: "Data Science",
    thumb: "/images/courses/dashboard.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "21 Lessons",
    duration: "3 hours 10 mins",
    commentsCount: "86 Comments",
    studentsCount: "26+",
  },
  {
    id: "4",
    title: "Balancing Productivity and Self-Care",
    category: "Productivity",
    thumb: "/images/courses/developer.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "12 Lessons",
    duration: "1 hour 30 mins",
    commentsCount: "35 Comments",
    studentsCount: "26+",
  },
  {
    id: "5",
    title: "Mastering Money Management",
    category: "Freelance & Entrepreneurship",
    thumb: "/images/courses/growth.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "16 Lessons",
    duration: "2 hours 05 mins",
    commentsCount: "48 Comments",
    studentsCount: "26+",
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    thumb: "/images/courses/collab.jpg",
    instructor: "purepearl studio",
    price: "$25",
    period: "lifetime",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: "19 Lessons",
    duration: "2 hours 40 mins",
    commentsCount: "64 Comments",
    studentsCount: "26+",
  },
];

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses =
    activeCategory === "Featured"
      ? COURSES
      : COURSES.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : COURSES;

  return (
    <section
      id="courses"
      className="discover-section bg-background py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-30 overflow-hidden"
      aria-label="Discover Courses"
    >
      <div className="max-w-360 mx-auto w-full">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <h2 className="font-heading font-semibold text-heading text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mx-auto">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="font-satoshi font-normal text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills - 3 Structured Rows */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-16">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {row.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-center px-4 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-200 select-none text-xs sm:text-sm font-medium ${
                      isActive
                        ? "bg-secondary text-secondary-foreground shadow-xs scale-102"
                        : "bg-surface hover:bg-surface-hover text-muted-foreground"
                    }`}
                  >
                    <span className="whitespace-nowrap">{category}</span>
                  </button>
                );
              })}

              {/* "+ More" button appended at the end of Row 3 */}
              {rowIndex === CATEGORY_ROWS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActiveCategory("Featured")}
                  className="font-satoshi font-medium text-primary hover:text-primary-dark text-xs sm:text-sm leading-tight flex items-center px-3 py-2 cursor-pointer transition-colors"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              thumb={course.thumb}
              title={course.title}
              instructor={course.instructor}
              price={course.price}
              period={course.period}
              rating={course.rating}
              level={course.level}
              lessonsCount={course.lessonsCount}
              duration={course.duration}
              commentsCount={course.commentsCount}
              studentsCount={course.studentsCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
