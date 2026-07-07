"use client";

import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  className?: string;
}

export default function TypingEffect({ texts, className }: TypingEffectProps) {
  const [displayed, setDisplayed] = useState("");
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = texts[idxRef.current];

    const tick = () => {
      if (!deletingRef.current && charRef.current < current.length) {
        charRef.current++;
        setDisplayed(current.slice(0, charRef.current));
        timerRef.current = setTimeout(tick, 60);
      } else if (!deletingRef.current && charRef.current === current.length) {
        timerRef.current = setTimeout(() => {
          deletingRef.current = true;
          tick();
        }, 2000);
      } else if (deletingRef.current && charRef.current > 0) {
        charRef.current--;
        setDisplayed(current.slice(0, charRef.current));
        timerRef.current = setTimeout(tick, 30);
      } else if (deletingRef.current && charRef.current === 0) {
        idxRef.current = (idxRef.current + 1) % texts.length;
        deletingRef.current = false;
        timerRef.current = setTimeout(tick, 300);
      }
    };

    timerRef.current = setTimeout(tick, 300);
    return () => clearTimeout(timerRef.current);
  }, [texts]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-neon-blue ml-0.5 animate-pulse align-middle" />
    </span>
  );
}
