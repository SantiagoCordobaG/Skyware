import { Sparkles } from "lucide-react";

export default function SectionBadge({ children, className = "" }) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ${className}`}
    >
      <Sparkles className="h-4 w-4" aria-hidden="true" />
      {children}
    </div>
  );
}
