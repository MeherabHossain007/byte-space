import { Star } from "lucide-react";

export interface StudentAvatar {
  src: string;
  alt: string;
}

export const HAPPY_STUDENT_AVATARS: StudentAvatar[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner Sarah",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner David",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner Emily",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner Alex",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner Michael",
  },
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner Lisa",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80",
    alt: "Happy learner James",
  },
];

interface HappyStudentsCardProps {
  className?: string;
  rating?: string;
  reviewCount?: number;
  countBadge?: string;
  avatars?: StudentAvatar[];
}

export default function HappyStudentsCard({
  className = "",
  rating = "4.5",
  reviewCount = 240,
  countBadge = "2K+",
  avatars = HAPPY_STUDENT_AVATARS,
}: HappyStudentsCardProps) {
  return (
    <div
      className={`group/card select-none hover:[animation-play-state:paused] ${className}`}
    >
      <div className="bg-white flex flex-col gap-1.5 sm:gap-2 items-start justify-center p-2.5 xs:p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl w-46 xs:w-54 sm:w-62 lg:w-65 border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_22px_45px_-10px_rgba(0,59,226,0.18)] hover:border-primary/20 active:scale-[0.98] cursor-pointer">
        <div className="flex flex-col items-start space-y-0.5 sm:space-y-1">
          <p className="font-satoshi font-medium text-footer-text text-xs xs:text-sm lg:text-base leading-tight group-hover/card:text-primary transition-colors duration-300">
            Happy Students
          </p>
          <div className="flex items-center">
            <span className="font-satoshi font-normal text-footer-text text-[11px] xs:text-xs lg:text-sm">
              {rating} <span className="text-[#82868E]">({reviewCount})</span>
            </span>
            <div className="relative size-3.5 sm:size-4 ml-1 flex items-center justify-center">
              <Star className="size-3 sm:size-3.5 fill-secondary text-secondary inline shrink-0 transition-transform duration-300 ease-out group-hover/card:rotate-12 group-hover/card:scale-125" />
            </div>
          </div>
        </div>
        <div className="flex items-start pt-0.5 sm:pt-1">
          {avatars.map((avatar, i) => (
            <img
              key={i}
              alt={avatar.alt}
              src={avatar.src}
              className="size-6.5 xs:size-7.5 sm:size-9 lg:size-10.75 -mr-2 xs:-mr-2.5 sm:-mr-3.5 lg:-mr-4 rounded-full border-1.5 sm:border-2 border-white object-cover shrink-0 transition-all duration-200 ease-out hover:scale-125 hover:z-30 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-secondary cursor-pointer"
              width="43"
              height="43"
              loading="lazy"
            />
          ))}
          <div className="relative size-6.5 xs:size-7.5 sm:size-9 lg:size-10.75 rounded-full border-1.5 sm:border-2 border-white bg-secondary flex items-center justify-center shrink-0 transition-all duration-200 ease-out hover:scale-125 hover:z-30 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <p className="font-satoshi font-bold leading-normal text-[#242528] text-[9px] xs:text-[10px] sm:text-[11px] lg:text-[12px] whitespace-nowrap">
              {countBadge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
