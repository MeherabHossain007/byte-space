import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28 w-full bg-background"
      aria-label="Testimonials"
    >
      {/* Background with Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/testimonials-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-6 sm:px-12 lg:px-30 2xl:px-0">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          <div>
            <h2 className="font-heading font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div>
            <p className="font-satoshi text-text-muted font-normal text-sm sm:text-base leading-relaxed max-w-xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-3xl p-7 sm:p-8 flex flex-col items-start text-left shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Circular Avatar */}
              <div className="relative size-16 sm:size-18 rounded-full overflow-hidden shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-heading font-semibold text-heading text-lg sm:text-xl mt-5 sm:mt-6 leading-tight">
                {t.name}
              </h3>
              <p className="font-satoshi font-normal text-primary text-sm sm:text-[15px] mt-1.5 leading-tight">
                {t.role}
              </p>

              {/* Quote */}
              <p className="font-satoshi text-muted font-normal text-sm sm:text-[15px] leading-relaxed mt-5 sm:mt-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
