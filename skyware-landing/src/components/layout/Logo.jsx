import { useId } from "react";
import { siteConfig } from "../../config/site";

export function LogoMark({ className = "h-12 w-14 shrink-0" }) {
  const gradientId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 112 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M34.2 58.4H27.8C17.9 58.4 10 50.5 10 40.9C10 31.3 17.9 23.6 27.8 23.6C30.2 12.7 40.1 5 51.7 5C64.5 5 75 14 76.5 26.1C84.7 26.7 91 33.3 91 41.4C91 50.8 83.6 58.4 73.9 58.4H68.3"
        stroke={`url(#${gradientId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 38.8L34 45.8L43 52.8"
        stroke="var(--color-skyware-blue-primary)"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59 38.8L68 45.8L59 52.8"
        stroke="var(--color-skyware-blue-primary)"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.6 36.5L48.4 55.1"
        stroke="var(--color-skyware-blue-primary)"
        strokeWidth="4.8"
        strokeLinecap="round"
      />
      
      {/* SÍMBOLOS MÁS PEQUEÑOS Y SEPARADOS */}
      <path
        d="M34 72 V75"
        stroke="var(--color-skyware-sky-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 73 V77"
        stroke="var(--color-skyware-sky-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M56 71 V74"
        stroke="var(--color-skyware-sky-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M67 73 V77"
        stroke="var(--color-skyware-sky-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M78 72 V75"
        stroke="var(--color-skyware-sky-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="31.7"
          x2="91"
          y2="31.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-skyware-sky-blue)" />
          <stop offset="1" stopColor="var(--color-skyware-blue-primary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-2 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100"
      aria-label={`${siteConfig.name} inicio`}
    >
      <LogoMark />
      <div className="leading-none">
        <span className="block text-2xl font-black tracking-tight text-[var(--color-skyware-blue-dark)]">
          {siteConfig.name}
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600">
          {siteConfig.tagline}
        </span>
      </div>
    </a>
  );
}
