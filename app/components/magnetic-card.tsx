"use client";

import { useRef, type ReactNode } from "react";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticCard({
  children,
  className = "",
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !glowRef.current) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(56,189,248,0.06), transparent 60%)`;
  };

  const handleLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.background = "transparent";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div ref={glowRef} className="pointer-events-none absolute inset-0 transition-all duration-300" />
      {children}
    </div>
  );
}
