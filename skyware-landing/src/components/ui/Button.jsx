import { ArrowRight } from "lucide-react";

const variantClasses = {
  primary:
    "rounded-2xl bg-[var(--color-skyware-blue-primary)] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-[var(--color-skyware-blue-medium)] focus:ring-blue-200",
  secondary:
    "rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus:ring-blue-100",
  ghost:
    "rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 focus:ring-blue-100",
  icon:
    "h-14 w-14 rounded-full bg-[var(--color-skyware-blue-primary)] text-white shadow-2xl shadow-blue-600/30 hover:scale-105 focus:ring-blue-200",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow,
  ariaLabel,
  type = "button",
  ...props
}) {
  const Component = href ? "a" : "button";
  const shouldShowArrow = showArrow ?? variant === "primary";

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 transition focus:outline-none focus:ring-4 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {shouldShowArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Component>
  );
}
