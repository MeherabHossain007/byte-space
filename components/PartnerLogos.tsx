export default function PartnerLogos() {
  const partners = [
    {
      name: "Logoipsum 1",
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 32">
          <circle cx="16" cy="16" r="12" fill="#64748B" opacity="0.3" />
          <circle cx="16" cy="16" r="6" fill="#475569" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#475569">
            Logoipsum
          </text>
        </svg>
      ),
    },
    {
      name: "Logoipsum 2",
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 32">
          <polygon points="16,4 28,26 4,26" fill="#64748B" opacity="0.4" />
          <polygon points="16,11 23,24 9,24" fill="#475569" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#475569">
            Logoipsum
          </text>
        </svg>
      ),
    },
    {
      name: "Logoipsum 3",
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 32">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#64748B" opacity="0.35" />
          <rect x="10" y="10" width="12" height="12" rx="3" fill="#475569" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#475569">
            Logoipsum
          </text>
        </svg>
      ),
    },
    {
      name: "Logoipsum 4",
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 32">
          <circle cx="12" cy="16" r="8" fill="#64748B" opacity="0.4" />
          <circle cx="20" cy="16" r="8" fill="#475569" opacity="0.8" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#475569">
            Logoipsum
          </text>
        </svg>
      ),
    },
    {
      name: "Logoipsum 5",
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 32">
          <path
            d="M8 8H24V24H8Z"
            stroke="#475569"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="16" r="4" fill="#64748B" />
          <text x="38" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#475569">
            Logoipsum
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] border-y border-zinc-200/80 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
