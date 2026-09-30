import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "UI/UX Designer at Figma Community",
    initials: "SJ",
    avatarBg: "bg-amber-400",
    content:
      "The courses on ByteSpace are exceptionally well-structured. I went from having zero design background to landing my first junior product design role in less than 4 months! The mentor feedback was invaluable.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "Senior Software Engineer & Creator",
    initials: "MV",
    avatarBg: "bg-blue-500",
    content:
      "As an instructor, ByteSpace gives me unmatched creative freedom and incredible student analytics. The community is active, deeply engaged, and an absolute pleasure to teach every single day.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Full-Stack Bootcamp Graduate",
    initials: "AR",
    avatarBg: "bg-emerald-500",
    content:
      "I loved the hands-on project reviews and community challenges. Unlike passive video tutorials, ByteSpace kept me accountable, focused, and genuinely excited to code every single day.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Ambient Lime Glow in Bottom Right */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#CEFF1A]/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              ByteSpace has helped over 100,000 learners and instructors around the globe
              master cutting-edge technologies, break into new industries, and achieve their career aspirations.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm text-zinc-600 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#1856F3] font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
