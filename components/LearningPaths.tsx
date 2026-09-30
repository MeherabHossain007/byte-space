import {
  Palette,
  Code2,
  BarChart3,
  Megaphone,
  Camera,
  FileText,
  ArrowRight,
} from "lucide-react";

const PATHS = [
  {
    name: "Design",
    courses: "45+ Courses",
    icon: <Palette className="w-5 h-5 text-zinc-950" />,
  },
  {
    name: "Development",
    courses: "80+ Courses",
    icon: <Code2 className="w-5 h-5 text-zinc-950" />,
  },
  {
    name: "Data Science",
    courses: "35+ Courses",
    icon: <BarChart3 className="w-5 h-5 text-zinc-950" />,
  },
  {
    name: "Marketing",
    courses: "28+ Courses",
    icon: <Megaphone className="w-5 h-5 text-zinc-950" />,
  },
  {
    name: "Photography",
    courses: "20+ Courses",
    icon: <Camera className="w-5 h-5 text-zinc-950" />,
  },
  {
    name: "Writing & Audio",
    courses: "18+ Courses",
    icon: <FileText className="w-5 h-5 text-zinc-950" />,
  },
];

export default function LearningPaths() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Dive into our vast catalog of expert-led courses across technology,
            creative arts, business, and beyond. Every path is crafted to guide
            you step-by-step toward mastering real-world skills.
          </p>
        </div>

        {/* 6 Category Path Cards Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {PATHS.map((path, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-zinc-200/90 p-5 text-center flex flex-col items-center justify-center hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Lime Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#CEFF1A] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-200">
                {path.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#1856F3] transition-colors">
                {path.name}
              </h3>

              {/* Course count */}
              <p className="text-[11px] text-zinc-400 mt-1 font-medium">
                {path.courses}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
