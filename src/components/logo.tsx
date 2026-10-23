import { Link } from "@/components/router";

export function KodeblinkMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-lg border border-[#DCE7F5] bg-white p-1.5 shadow-xs transition-transform hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="logo-blue-cyan" x1="6" y1="6" x2="6" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0878F9" />
            <stop offset="100%" stop-color="#11C5E8" />
          </linearGradient>
          <linearGradient id="logo-yellow-red" x1="14" y1="6" x2="30" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFC928" />
            <stop offset="100%" stop-color="#F04438" />
          </linearGradient>
          <linearGradient id="logo-turq-green" x1="14" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#12DCC0" />
            <stop offset="100%" stop-color="#20B85A" />
          </linearGradient>
        </defs>

        {/* Vertical Stem in Blue-to-Cyan Gradient */}
        <rect x="7" y="6" width="6" height="24" rx="3" fill="url(#logo-blue-cyan)" />

        {/* Upper Wing (Yellow to Red) */}
        <path
          d="M15 17.5L25.8 7.2C26.7 6.3 28.5 7 28.5 8.4V8.8C28.5 9.7 28 10.6 27.2 11.2L18 19.5L15 17.5Z"
          fill="url(#logo-yellow-red)"
        />

        {/* Lower Wing (Turquoise to Green) */}
        <path
          d="M15 18.5L27.2 28.8C28 29.4 28.5 30.3 28.5 31.2V31.6C28.5 33 26.7 33.7 25.8 32.8L15 22.5V18.5Z"
          fill="url(#logo-turq-green)"
        />

        {/* Center Optical Blink Point */}
        <circle cx="15.5" cy="18" r="2.5" fill="#0878F9" />
        <circle cx="15.5" cy="18" r="1.2" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="KODEBLINK home"
      className="focus-ring group flex min-w-0 items-center gap-3 select-none"
    >
      <KodeblinkMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      {!compact && (
        <span className="min-w-0 flex flex-col justify-center">
          <span className="block truncate font-display text-lg font-bold tracking-tight text-[#0B132B] transition-colors group-hover:text-[#0878F9]">
            KODEBLINK
          </span>
          <span className="block truncate font-mono text-[9px] uppercase tracking-[0.2em] text-[#5A6D82]">
            Custom Design Company
          </span>
        </span>
      )}
    </Link>
  );
}
