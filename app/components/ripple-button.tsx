"use client";

import { ButtonHTMLAttributes, useRef, useState } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function RippleButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = idRef.current++;
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    props.onClick?.(e);
  };

  const base =
    variant === "primary"
      ? "bg-gradient-to-r from-neon-blue to-neon-purple text-black"
      : "border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white";

  return (
    <button
      ref={btnRef}
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden ${base} ${className}`}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: r.x - 10,
            top: r.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      {children}
    </button>
  );
}
