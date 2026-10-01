import Image from "next/image";
import { MdStar, MdSignalCellularAlt } from "react-icons/md";
import { COURSE_AVATARS, HAPPY_STUDENT_AVATARS } from "@/lib/constants";

export default function AuthCardCluster() {
  return (
    <div
      className="relative aspect-500/558 w-full @container select-none"
      aria-label="Discover courses and join over 2,000 happy students"
    >
      {/* Card 1: Back Card - Build Digital Asset */}
      <article className="absolute w-[74.6%] overflow-hidden rounded-[4.8cqw] border border-card-border bg-card p-[3cqw] left-0 top-[15.95%] shadow-lg transition-transform duration-300 hover:scale-[1.01]">
        <div className="relative aspect-341/195 overflow-hidden rounded-[2.4cqw] bg-surface-dark">
          <Image
            src="/images/courses/illustration.jpg"
            alt="Digital design course"
            fill
            sizes="(max-width: 768px) 50vw, 340px"
            className="object-cover"
          />
          <div className="absolute bottom-[2.6cqw] left-[2.4cqw] flex gap-[2.4cqw] whitespace-nowrap text-[2.4cqw] leading-[4cqw]">
            <span className="rounded-full bg-white/70 backdrop-blur-xs px-[2.4cqw] py-[1.2cqw] font-medium text-heading shadow-xs">
              17 Lessons
            </span>
          </div>
        </div>
        <div className="mt-[3.5cqw] flex flex-col gap-[2.8cqw]">
          <div>
            <div className="flex items-center justify-between gap-[1cqw]">
              <h3 className="truncate font-heading text-[3.8cqw] font-semibold leading-[5.2cqw] tracking-tight text-heading">
                Build Digital Asset
              </h3>
              <div className="flex shrink-0 items-center text-[3.4cqw] leading-[5.2cqw] text-muted-foreground gap-[0.5cqw]">
                <span>4.5</span>
                <MdStar className="text-secondary fill-secondary size-[3.6cqw]" />
              </div>
            </div>
            <p className="text-[2.4cqw] leading-[3.6cqw] text-muted">
              by <span className="text-primary font-medium">purepearl studio</span>
            </p>
          </div>
          <div className="flex items-center gap-[2.4cqw]">
            <div className="flex items-center gap-[0.8cqw] rounded-full bg-surface px-[2.4cqw] py-[1.2cqw] text-[2.4cqw] font-medium leading-[3.6cqw] text-muted-foreground">
              <MdSignalCellularAlt className="size-[2.8cqw]" />
              <span>Beginner</span>
            </div>
            <div className="flex items-center">
              {COURSE_AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Learner ${i + 1}`}
                  width={32}
                  height={32}
                  className="mr-[-1.6cqw] size-[6.4cqw] rounded-full border-1.5 border-card object-cover"
                />
              ))}
              <div className="relative size-[6.4cqw] rounded-full border-1.5 border-card bg-surface-dark flex items-center justify-center text-primary-foreground font-bold text-[2.2cqw]">
                26+
              </div>
            </div>
          </div>
          <p className="flex items-baseline text-primary">
            <span className="font-heading text-[3.8cqw] font-semibold tracking-tight">
              $25
            </span>
            <span className="text-[2.4cqw] leading-[3.6cqw] text-muted ml-[0.5cqw]">
              /lifetime
            </span>
          </p>
        </div>
      </article>

      {/* Card 2: Front Card - the Power of Big Data */}
      <article className="absolute w-[74.6%] overflow-hidden rounded-[4.8cqw] border border-card-border bg-card p-[3cqw] left-[22.6%] top-0 z-10 shadow-2xl shadow-blue-950/20 transition-transform duration-300 hover:scale-[1.01]">
        <div className="relative aspect-341/195 overflow-hidden rounded-[2.4cqw] bg-surface-dark">
          <Image
            src="/images/courses/dashboard.jpg"
            alt="the Power of Big Data preview"
            fill
            sizes="(max-width: 768px) 50vw, 340px"
            className="object-cover"
          />
          <div className="absolute bottom-[2.6cqw] left-[2.4cqw] flex gap-[2cqw] whitespace-nowrap text-[2.4cqw] leading-[3.6cqw]">
            {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
              <span
                key={label}
                className="rounded-full bg-white/70 backdrop-blur-xs px-[2.4cqw] py-[1.2cqw] font-medium text-heading shadow-xs"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-[3.5cqw] flex flex-col gap-[2.8cqw]">
          <div>
            <div className="flex items-center justify-between gap-[1cqw]">
              <h3 className="truncate font-heading text-[3.8cqw] font-semibold leading-[5.2cqw] tracking-tight text-heading">
                the Power of Big Data
              </h3>
              <div className="flex shrink-0 items-center text-[3.4cqw] leading-[5.2cqw] text-muted-foreground gap-[0.5cqw]">
                <span>4.5</span>
                <MdStar className="text-secondary fill-secondary size-[3.6cqw]" />
              </div>
            </div>
            <p className="text-[2.4cqw] leading-[3.6cqw] text-muted">
              by <span className="text-primary font-medium">purepearl studio</span>
            </p>
          </div>
          <div className="flex items-center gap-[2.4cqw]">
            <div className="flex items-center gap-[0.8cqw] rounded-full bg-surface px-[2.4cqw] py-[1.2cqw] text-[2.4cqw] font-medium leading-[3.6cqw] text-muted-foreground">
              <MdSignalCellularAlt className="size-[2.8cqw]" />
              <span>Beginner</span>
            </div>
            <div className="flex items-center">
              {COURSE_AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Learner ${i + 1}`}
                  width={32}
                  height={32}
                  className="mr-[-1.6cqw] size-[6.4cqw] rounded-full border-1.5 border-card object-cover"
                />
              ))}
              <div className="relative size-[6.4cqw] rounded-full border-1.5 border-card bg-surface-dark flex items-center justify-center text-primary-foreground font-bold text-[2.2cqw]">
                26+
              </div>
            </div>
          </div>
          <p className="flex items-baseline text-primary">
            <span className="font-heading text-[3.8cqw] font-semibold tracking-tight">
              $25
            </span>
            <span className="text-[2.4cqw] leading-[3.6cqw] text-muted ml-[0.5cqw]">
              /lifetime
            </span>
          </p>
        </div>
      </article>

      {/* Card 3: Happy Students Lime Card (Bottom Offset) */}
      <div className="absolute left-[45.2%] top-[77.96%] z-20 flex w-[51.6%] flex-col gap-[1.6cqw] rounded-[3.2cqw] bg-secondary p-[3.2cqw] shadow-xl text-secondary-foreground transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <p className="font-heading text-[3.2cqw] font-semibold leading-[4.4cqw] text-secondary-foreground">
            Happy Students
          </p>
          <div className="flex items-center text-[2.2cqw] leading-[3.2cqw] text-secondary-foreground">
            <span className="font-bold">4.5&nbsp;</span>
            <span>(240)</span>
            <MdStar className="ml-[0.6cqw] text-primary fill-primary size-[2.4cqw]" />
          </div>
        </div>
        <div className="flex items-center">
          {HAPPY_STUDENT_AVATARS.map((student, i) => (
            <Image
              key={i}
              src={student.src}
              alt={student.alt}
              width={40}
              height={40}
              className="mr-[-2.8cqw] size-[8.2cqw] rounded-full border-1.5 border-secondary object-cover"
            />
          ))}
          <div className="relative size-[8.2cqw] rounded-full border-1.5 border-secondary bg-surface-dark flex items-center justify-center text-primary-foreground font-bold text-[2.4cqw]">
            2K+
          </div>
        </div>
      </div>

      {/* 3D Shape 1: Lime Torus (Top Left) from /shapes/shape-cone.png */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5.8%] top-[2.69%] z-20 aspect-square w-[29.2%]"
      >
        <Image
          src="/shapes/shape-cone.png"
          alt=""
          fill
          className="size-full object-contain"
        />
        <div
          className="absolute inset-0 bg-secondary mix-blend-hard-light"
          style={{
            maskImage: "url('/shapes/shape-cone.png')",
            WebkitMaskImage: "url('/shapes/shape-cone.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      </div>

      {/* 3D Shape 2: Lime Pyramid/Cone (Bottom Left) from /shapes/shape-rectangle-white.png */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] top-[71.15%] z-20 aspect-square w-[37.6%]"
      >
        <Image
          src="/shapes/shape-rectangle-white.png"
          alt=""
          fill
          className="size-full object-contain rotate-180"
        />
        <div
          className="absolute inset-0 bg-secondary mix-blend-hard-light rotate-180"
          style={{
            maskImage: "url('/shapes/shape-rectangle-white.png')",
            WebkitMaskImage: "url('/shapes/shape-rectangle-white.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      </div>

      {/* 3D Shape 3: White 3D Spiral Ribbon (Bottom Right) from /shapes/shape-spiral-white.png */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[69.6%] top-[57.6%] z-30 aspect-square w-[35%] drop-shadow-xl"
      >
        <Image
          src="/shapes/shape-spiral-white.png"
          alt=""
          fill
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}
