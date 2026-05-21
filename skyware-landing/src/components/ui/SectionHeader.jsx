import SectionBadge from "./SectionBadge";

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2
        className={`text-3xl font-black tracking-tight text-slate-950 sm:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
