"use client";

import { useEffect, useRef } from "react";

export default function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleX(1)";
          el.style.opacity = "1";
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-12 left-[10%] right-[10%] h-px origin-left transition-all duration-1000 ease-out"
      style={{
        transform: "scaleX(0)",
        opacity: 0,
        background: "linear-gradient(90deg, rgba(56,189,248,0.4), rgba(167,139,250,0.4), rgba(74,222,128,0.4))",
      }}
    />
  );
}
