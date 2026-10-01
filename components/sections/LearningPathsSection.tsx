import Image from "next/image";
import Link from "next/link";
import { LEARNING_PATHS } from "@/lib/constants";

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      className="bg-background py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-30 overflow-hidden"
      aria-label="Learning Paths"
    >
      <div className="max-w-360 mx-auto w-full">
        {/* Section Header */}
        <div className="max-w-360 mx-auto flex flex-col items-center text-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <h2 className="font-heading font-semibold text-heading text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi font-normal text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl sm:max-w-5xl">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Path Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.name}
              href="#courses"
              className="group bg-card rounded-3xl border border-card-border py-7 px-4 sm:py-8 sm:px-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-card-border-hover hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Lime Icon Container */}
              <div className="size-16 sm:size-18 rounded-full bg-secondary flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                <Image
                  src={path.icon}
                  alt={path.name}
                  width={36}
                  height={36}
                  className="size-7 sm:size-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-satoshi font-medium text-heading text-sm sm:text-lg lg:text-xl tracking-tight group-hover:text-primary transition-colors text-center">
                {path.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

