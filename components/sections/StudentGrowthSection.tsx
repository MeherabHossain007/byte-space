import Image from "next/image";
import CourseCard from "../ui/cards/CourseCard";
import LearningProgressCard from "../ui/cards/LearningProgressCard";
import HappyStudentsCard from "../ui/cards/HappyStudentsCard";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

function LearningIllustration() {
  return (
    <div
      className="@container relative aspect-621/552 w-full"
      aria-label="Learning with ByteSpace"
    >
      <div className="w-[70%] pointer-events-none">
        <CourseCard
          thumb="/images/courses/figma.jpg"
          title="Learn Figma from Basic"
          duration="2 hours 16 mins"
          commentsCount="59 Comments"
          studentsCount="26+"
        />
      </div>

      <img
          src="/images/hero-image.png"
          alt="A smiling student wearing headphones and holding a laptop"
        className="pointer-events-none absolute left-0 top-[1.932cqw] h-[86.957cqw] w-[92.915cqw] object-cover drop-shadow-[4.1cqw_5.9cqw_4.5cqw_rgba(0,0,0,0.3)] z-30"
        />
      <div className="pointer-events-none absolute left-[55.556cqw] top-[36cqw] flex  flex-col gap-[1.288cqw] rounded-[2.577cqw] z-40">
        <LearningProgressCard progress={55} />
      </div>
      <div className="pointer-events-none absolute left-[65.379cqw] top-[10.789cqw] size-[34.783cqw] z-50 rotate-120">
        <img
          src="/shapes/shape-spiral-lime.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function CreatorIllustration() {
  return (
    <div
      className="@container relative aspect-541/596 w-full"
      aria-label="Course creator revenue and student community"
    >
      <div className="absolute left-0 top-[8.133cqw] flex w-[42.884cqw] flex-col gap-[1.479cqw] rounded-[2.958cqw] bg-primary p-[2.958cqw] text-nav-text">
        <div>
          <p className="font-body-medium text-[2.957cqw] leading-[1.2]">
            Total Revenue
          </p>
          <p className="text-[1.848cqw] leading-[1.2] mt-1">July 1-28</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-heading text-[4.436cqw] leading-[5.915cqw] tracking-[-0.24px]">
            $120.29
          </p>
          <span className="rounded-full bg-secondary px-[1.479cqw] py-[0.37cqw] font-body-medium text-[1.848cqw] leading-[3.697cqw] text-foreground">
            +12$
          </span>
        </div>
        <div className="h-[1.479cqw] rounded-full bg-white">
          <div className="h-full w-[56%] rounded-full bg-secondary" />
        </div>
      </div>
      <div className="absolute left-0 top-[35.86cqw] flex w-[24.769cqw] flex-col items-start gap-[1.479cqw] rounded-[2.958cqw] bg-primary p-[2.958cqw] text-nav-text">
        <div>
          <p className="font-body-medium text-[2.957cqw] leading-[1.2]">
            Year to Date
          </p>
          <p className="text-[1.848cqw] leading-[1.2] mt-1">2023</p>
        </div>
        <p className="whitespace-nowrap font-heading text-[4.436cqw] leading-[5.915cqw] tracking-[-0.24px]">
          $1,200.38
        </p>
        <span className="rounded-full bg-secondary px-[1.479cqw] py-[0.37cqw] font-body-medium text-[1.848cqw] leading-[3.697cqw] text-foreground">
          +12$
        </span>
      </div>
      <div className="pointer-events-none absolute left-[5.176cqw] top-0 h-[110.166cqw] w-[80.407cqw] drop-shadow-[4.8cqw_6.8cqw_5.2cqw_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-image-2.png"
            alt="A course creator wearing headphones and holding a tablet"
            className="absolute left-[-28.51%] top-0 h-[114.6%] w-[157.01%] max-w-none"
          />
        </div>
      </div>
      <div className="absolute left-[52.311cqw] top-[76.34cqw] flex w-[47.689cqw] flex-col gap-[1.479cqw] rounded-[2.958cqw] p-[2.958cqw]">
        <HappyStudentsCard />
      </div>
      <div className="pointer-events-none absolute left-[56.377cqw] top-[21.072cqw] size-[39.926cqw]">
        <img
          src="/shapes/shape-spiral-lime.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function StudentGrowthSection() {
  return (
    <section
      id="creators"
      aria-label="Student Growth and Course Creation"
      className="min-h-svh overflow-hidden bg-background font-body text-foreground bg-student-growth-radial"
    >
      <div className="relative isolate mx-auto min-h-svh max-w-360 pb-20 md:min-h-[min(101.389vw,1460px)] md:pb-[8.333%]">
        <div className="mx-6 flex flex-col gap-16 pt-14 sm:mx-10 md:ml-[8.403%] md:mr-[4.236%] md:gap-[min(5vw,72px)] 2xl:mx-0 md:pt-[8.333%]">
          {/* 1. Student Growth Section */}
          <section
            aria-labelledby="growth-title"
            className="grid items-center gap-10 md:grid-cols-[574fr_621fr] md:gap-[min(4.375vw,63px)] w-full max-w-360 mx-auto"
          >
            <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 max-w-xl">
              <h2
                id="growth-title"
                className="font-heading font-semibold text-heading text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] tracking-tight"
              >
                Your Path to Professional <br className="hidden sm:inline" />
                Growth Starts Here!
              </h2>
              <p className="max-w-120 text-muted font-satoshi font-normal text-sm sm:text-base leading-relaxed">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <dl className="flex items-start gap-8 sm:gap-10 lg:gap-12 pt-1">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <dt className="font-heading font-medium text-3xl sm:text-4xl text-primary leading-tight tracking-tight">
                      {value}
                    </dt>
                    <dd className="font-satoshi text-muted text-sm sm:text-base leading-tight mt-1">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <LearningIllustration />
          </section>

          {/* 2. Creator Management Section */}
          <section
            aria-labelledby="creator-title"
            className="grid items-center gap-8 md:mr-[4.61%] md:grid-cols-[541fr_580fr] md:gap-[min(5.486vw,79px)]"
          >
            <div className="order-2 md:order-1">
              <CreatorIllustration />
            </div>
            <div className="order-1 flex flex-col items-start gap-6 sm:gap-7 md:order-2 md:gap-8 max-w-xl">
              <h2
                id="creator-title"
                className="font-heading font-semibold text-heading text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] tracking-tight"
              >
                Create &amp; Manage <br className="hidden sm:inline" />
                Courses Easily.
              </h2>
              <p className="max-w-120 text-muted font-satoshi font-normal text-sm sm:text-base leading-relaxed">
                <strong className="font-bold text-heading">ByteSpace</strong>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-3.5 sm:gap-4 pt-1">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 font-satoshi font-medium text-body text-sm sm:text-base leading-tight"
                  >
                    <Image
                      src="/icons/correct-filled.svg"
                      alt=""
                      width={22}
                      height={22}
                      className="size-5 sm:size-5.5 shrink-0"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
