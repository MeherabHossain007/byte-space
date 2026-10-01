import Image from "next/image";
import { MdSignalCellularAlt, MdStar } from "react-icons/md";

export interface CourseCardProps {
  thumb: string;
  title: string;
  instructor?: string;
  price?: string;
  period?: string;
  rating?: number | string;
  level?: string;
  lessonsCount?: string;
  duration?: string;
  commentsCount?: string;
  studentsCount?: string;
  avatars?: string[];
  className?: string;
}

const DEFAULT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80",
];

export default function CourseCard({
  thumb,
  title,
  instructor = "purepearl studio",
  price = "$25",
  period = "lifetime",
  rating = 4.5,
  level = "Beginner",
  lessonsCount = "17 Lessons",
  duration = "2 hours 16 mins",
  commentsCount = "59 Comments",
  studentsCount = "26+",
  avatars = DEFAULT_AVATARS,
  className = "",
}: CourseCardProps) {
  const tags = [lessonsCount, duration, commentsCount];

  return (
    <article
      className={`course-card bg-card border border-card-border rounded-3xl p-3.5 sm:p-4 flex flex-col justify-between h-96 w-full group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 select-none ${className}`}
    >
      {/* Thumbnail Container */}
      <div className="relative h-48.75 w-full overflow-hidden rounded-2xl bg-surface-dark shrink-0">
        <Image
          src={thumb}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 341px"
          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 sm:gap-2.5 z-10 overflow-x-auto no-scrollbar">
          {tags.map((label) => (
            <span
              key={label}
              className="backdrop-blur-xs bg-surface/90 border border-card-border/40 flex items-center justify-center px-2.5 py-1 rounded-full shrink-0 shadow-xs font-satoshi font-medium text-muted-foreground text-xs text-center whitespace-nowrap"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 justify-between pt-3.5">
        {/* Title, Instructor & Rating Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-heading font-semibold text-xl text-heading tracking-tight leading-snug truncate group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="font-satoshi text-xs leading-normal text-muted mt-1">
              by <span className="text-primary font-medium">{instructor}</span>
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0 pt-0.5">
            <span className="font-satoshi font-normal text-lg leading-none text-muted-foreground">
              {rating}
            </span>
            <MdStar
              className="size-5.5 fill-star-empty text-star-empty"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Level Badge & Students Avatar Stack */}
        <div className="flex items-center gap-3">
          <div className="bg-surface flex items-center gap-1 px-3 py-1.5 rounded-full shrink-0">
            <MdSignalCellularAlt
              className="size-4.5 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="font-satoshi font-medium text-xs text-muted-foreground whitespace-nowrap">
              {level}
            </span>
          </div>

          <div className="flex items-center">
            {avatars.slice(0, 4).map((src, i) => (
              <img
                key={i}
                alt={`Learner ${i + 1}`}
                className="-mr-2 size-8 rounded-full border-2 border-card object-cover shrink-0"
                src={src}
                width="32"
                height="32"
                loading="lazy"
              />
            ))}
            <div className="relative size-8 rounded-full border-2 border-card bg-secondary flex items-center justify-center shrink-0">
              <span className="font-satoshi font-medium text-xs text-heading leading-none">
                {studentsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Price & Billing Period */}
        <div className="flex items-baseline">
          <span className="font-heading font-semibold text-xl text-primary tracking-tight">
            {price}
          </span>
          <span className="font-satoshi text-xs text-muted ml-0.5">
            /{period}
          </span>
        </div>
      </div>
    </article>
  );
}
