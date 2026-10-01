interface UiUxDesignCardProps {
  className?: string;
  title?: string;
  coursesCount?: string;
  studentsCount?: string;
}

export default function UiUxDesignCard({
  className = "",
  title = "UI/UX Design",
  coursesCount = "200 Courses",
  studentsCount = "1000+ Students",
}: UiUxDesignCardProps) {
  return (
    <div
      className={`group/card select-none hover:[animation-play-state:paused] ${className}`}
    >
      <div className="bg-card border border-card-border shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col items-start justify-center p-2.5 xs:p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_22px_45px_-10px_rgba(0,59,226,0.18)] hover:border-primary/25 active:scale-[0.98] cursor-pointer">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <p className="font-satoshi font-medium text-heading text-xs xs:text-sm lg:text-base leading-tight whitespace-nowrap group-hover/card:text-primary transition-colors duration-300">
            {title}
          </p>
        </div>
        <div className="flex gap-1.5 sm:gap-2 items-center mt-0.5 sm:mt-1">
          <p className="font-satoshi font-normal text-muted text-[10px] xs:text-[11px] lg:text-xs leading-[1.6] group-hover/card:text-muted-foreground transition-colors duration-200">
            {coursesCount}
          </p>
          <p className="text-[8px] sm:text-[10px] text-muted group-hover/card:text-primary transition-colors duration-200">•</p>
          <p className="font-satoshi font-normal text-muted text-[10px] xs:text-[11px] lg:text-xs leading-[1.6] group-hover/card:text-muted-foreground transition-colors duration-200">
            {studentsCount}
          </p>
        </div>
      </div>
    </div>
  );
}
