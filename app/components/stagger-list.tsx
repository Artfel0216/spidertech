"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface StaggerListProps {
  children: ReactNode[];
  className?: string;
  baseDelay?: number;
}

export default function StaggerList({
  children,
  className = "",
  baseDelay = 0,
}: StaggerListProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-stagger]");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = "1";
              (item as HTMLElement).style.transform = "translateY(0)";
            }, baseDelay + i * 80);
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [baseDelay]);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          data-stagger
          style={{
            opacity: 0,
            transform: "translateY(12px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
