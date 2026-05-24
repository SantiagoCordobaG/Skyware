import { useEffect, useRef, useState } from "react";
import { Bot, Code2, Globe2, Rocket, Sparkles, Zap } from "lucide-react";
import { services, servicesIntro } from "../../data/services";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const LOOP_COPIES = 3;
const AUTO_SCROLL_SPEED = 0.03;
const AUTOPLAY_RESUME_DELAY_MS = 1800;

const serviceIcons = {
  Bot,
  Code2,
  Globe2,
  Rocket,
  Sparkles,
  Zap,
};

function getLoopWidth(track) {
  if (!track) {
    return 0;
  }

  return track.scrollWidth / LOOP_COPIES;
}

function normalizeScrollPosition(scroller, track) {
  const loopWidth = getLoopWidth(track);

  if (!scroller || !loopWidth) {
    return;
  }

  if (scroller.scrollLeft < loopWidth * 0.5) {
    scroller.scrollLeft += loopWidth;
  } else if (scroller.scrollLeft > loopWidth * 1.5) {
    scroller.scrollLeft -= loopWidth;
  }
}

function shouldPauseAutoplay(pauseReasons) {
  return (
    pauseReasons.reducedMotion ||
    pauseReasons.hover ||
    pauseReasons.focus ||
    pauseReasons.drag ||
    pauseReasons.manual ||
    document.hidden
  );
}

function pauseForManualInteraction(pauseReasonsRef, resumeTimeoutRef) {
  window.clearTimeout(resumeTimeoutRef.current);
  pauseReasonsRef.current.manual = true;
}

function scheduleAutoplayResume(pauseReasonsRef, resumeTimeoutRef) {
  window.clearTimeout(resumeTimeoutRef.current);
  resumeTimeoutRef.current = window.setTimeout(() => {
    pauseReasonsRef.current.manual = false;
  }, AUTOPLAY_RESUME_DELAY_MS);
}

function clearScheduledAutoplayResume(resumeTimeoutRef) {
  window.clearTimeout(resumeTimeoutRef.current);
}

export default function ServicesSection() {
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const resumeTimeoutRef = useRef(0);
  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
  });
  const pauseReasonsRef = useRef({
    reducedMotion: false,
    hover: false,
    focus: false,
    drag: false,
    manual: false,
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;

    if (!scroller || !track) {
      return undefined;
    }

    const centerCarousel = () => {
      const loopWidth = getLoopWidth(trackRef.current);

      if (!loopWidth) {
        return;
      }

      scroller.scrollLeft = loopWidth;
      lastFrameTimeRef.current = 0;
    };

    centerCarousel();

    const resizeObserver = new ResizeObserver(() => {
      centerCarousel();
    });

    resizeObserver.observe(scroller);
    resizeObserver.observe(track);

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const syncReducedMotionPreference = () => {
      pauseReasonsRef.current.reducedMotion = reducedMotionQuery.matches;
    };

    syncReducedMotionPreference();
    reducedMotionQuery.addEventListener("change", syncReducedMotionPreference);

    function animate(timestamp) {
      const currentScroller = scrollerRef.current;

      if (!currentScroller) {
        return;
      }

      if (shouldPauseAutoplay(pauseReasonsRef.current)) {
        lastFrameTimeRef.current = timestamp;
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const delta = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;
      currentScroller.scrollLeft += delta * AUTO_SCROLL_SPEED;
      normalizeScrollPosition(currentScroller, trackRef.current);
      animationFrameRef.current = window.requestAnimationFrame(animate);
    }

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      clearScheduledAutoplayResume(resumeTimeoutRef);
      reducedMotionQuery.removeEventListener(
        "change",
        syncReducedMotionPreference,
      );
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: scroller.scrollLeft,
    };
    pauseReasonsRef.current.drag = true;
    pauseForManualInteraction(pauseReasonsRef, resumeTimeoutRef);
    setIsDragging(true);
    scroller.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const scroller = scrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();

    const deltaX = event.clientX - dragState.startX;
    scroller.scrollLeft = dragState.startScrollLeft - deltaX;
    normalizeScrollPosition(scroller, trackRef.current);
  };

  const handlePointerRelease = (event) => {
    const scroller = scrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (scroller.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current.pointerId = null;
    pauseReasonsRef.current.drag = false;
    setIsDragging(false);
    scheduleAutoplayResume(pauseReasonsRef, resumeTimeoutRef);
  };

  const handleKeyDown = (event) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    pauseForManualInteraction(pauseReasonsRef, resumeTimeoutRef);
    scroller.scrollBy({
      left: event.key === "ArrowRight" ? 320 : -320,
      behavior: "smooth",
    });
    scheduleAutoplayResume(pauseReasonsRef, resumeTimeoutRef);
  };

  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-white to-[var(--color-skyware-surface-light)] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge={servicesIntro.badge}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />

        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            className={`carousel-scrollbar-hidden overflow-x-auto pb-4 touch-pan-y ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onBlurCapture={() => {
              pauseReasonsRef.current.focus = false;
            }}
            onFocusCapture={() => {
              pauseReasonsRef.current.focus = true;
            }}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => {
              pauseReasonsRef.current.hover = true;
            }}
            onMouseLeave={() => {
              pauseReasonsRef.current.hover = false;
            }}
            onPointerCancel={handlePointerRelease}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerRelease}
            onScroll={() => {
              normalizeScrollPosition(scrollerRef.current, trackRef.current);
            }}
            onTouchEnd={() => {
              scheduleAutoplayResume(pauseReasonsRef, resumeTimeoutRef);
            }}
            onTouchStart={() => {
              pauseForManualInteraction(pauseReasonsRef, resumeTimeoutRef);
            }}
            onWheel={() => {
              pauseForManualInteraction(pauseReasonsRef, resumeTimeoutRef);
              scheduleAutoplayResume(pauseReasonsRef, resumeTimeoutRef);
            }}
            aria-label="Carrusel de servicios"
            tabIndex={0}
          >
            <div ref={trackRef} className="flex gap-5 px-1" role="list">
              {Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
                services.map((service) => {
                  const Icon = serviceIcons[service.icon] ?? Code2;
                  const isVisibleCopy = copyIndex === 1;

                  return (
                    <Card
                      as="article"
                      key={`${copyIndex}-${service.title}`}
                      aria-hidden={!isVisibleCopy}
                      className="w-[min(85vw,24rem)] shrink-0 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 sm:w-[22rem] lg:w-[24rem]"
                      role="listitem"
                    >
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-black text-slate-950">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {service.description}
                      </p>
                    </Card>
                  );
                }),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
