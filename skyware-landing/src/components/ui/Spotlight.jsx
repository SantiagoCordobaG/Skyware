import { useCallback, useRef } from "react";

export function Spotlight({ children, className = "" }) {
  const containerRef = useRef(null);

  const handlePointerMove = useCallback((event) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    Array.from(container.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) {
        return;
      }

      const rect = child.getBoundingClientRect();

      child.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      child.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    });
  }, []);

  return (
    <div ref={containerRef} className={className} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}

export function SpotlightCard({ children, className = "" }) {
  return (
    <div className={`spotlight-card ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
