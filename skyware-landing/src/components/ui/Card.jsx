export default function Card({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
