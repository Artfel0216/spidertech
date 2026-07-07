"use client";

import { useEffect, useRef, useState } from "react";

const SPRITE = [
  "..XXXXXX..",
  ".XXXXXXXX.",
  "XXXX..XXXX",
  "XXXXXXXXXX",
  "XXXX..XXXX",
  ".XXXXXXXX.",
  "..XXXXXX..",
  ".XXXXXXXX.",
  "XXXXXXXXXX",
  "XXX....XXX",
  "XX......XX",
  "X........X",
];

const H = SPRITE.length;
const W = SPRITE[0].length;
const PX = 5;

function SpiderSVG({
  size,
  eyeFlash,
  shadowDy,
  legPhase,
  children,
}: {
  size: number;
  eyeFlash: boolean;
  shadowDy: number;
  legPhase: number;
  children?: React.ReactNode;
}) {
  const legOffset = Math.sin(legPhase) * 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${W * PX} ${H * PX + 4}`}
      className="overflow-visible"
      style={{ imageRendering: "pixelated" }}
    >
      <defs>
        <linearGradient id="spiderFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
        </radialGradient>
      </defs>

      {children}

      <ellipse
        cx={Math.floor(W * PX / 2)}
        cy={H * PX + 2 + shadowDy * 0.5}
        rx={8 + shadowDy * 0.3}
        ry={2.5 + shadowDy * 0.1}
        fill="url(#shadowGrad)"
        className="transition-all duration-300"
      />

      {SPRITE.map((row, y) =>
        [...row].map((ch, x) =>
          ch === "X" ? (
            <rect
              key={`${x}-${y}`}
              x={x * PX}
              y={y * PX}
              width={PX}
              height={PX}
              fill="url(#spiderFill)"
              rx={0.5}
            />
          ) : null
        )
      )}

      {eyeFlash && (
        <>
          <rect x={5 * PX} y={1 * PX} width={2} height={1} fill="#fff" rx={0.3} />
          <rect x={8 * PX} y={1 * PX} width={2} height={1} fill="#fff" rx={0.3} />
        </>
      )}

      <g
        fill="none"
        stroke="url(#spiderFill)"
        strokeWidth={1.3}
        strokeLinecap="round"
        opacity={0.5}
      >
        <line x1={3} y1={4} x2={-3 + legOffset * 0.3} y2={7 + legOffset} />
        <line x1={3} y1={6} x2={-5 + legOffset * 0.3} y2={9 + legOffset} />
        <line x1={3} y1={8} x2={-4 + legOffset * 0.3} y2={12 + legOffset} />
        <line x1={4} y1={10} x2={-2 + legOffset * 0.3} y2={15 + legOffset} />
        <line x1={W * PX - 3} y1={4} x2={W * PX + 3 - legOffset * 0.3} y2={7 - legOffset} />
        <line x1={W * PX - 3} y1={6} x2={W * PX + 5 - legOffset * 0.3} y2={9 - legOffset} />
        <line x1={W * PX - 3} y1={8} x2={W * PX + 4 - legOffset * 0.3} y2={12 - legOffset} />
        <line x1={W * PX - 4} y1={10} x2={W * PX + 2 - legOffset * 0.3} y2={15 - legOffset} />
      </g>
    </svg>
  );
}

interface PixelSpiderProps {
  size?: number;
  animate?: boolean;
  mode?: "idle" | "walk" | "rappel" | "web" | "swing" | "magnetic";
  mouseX?: number;
  mouseY?: number;
  scrollProgress?: number;
  hovered?: boolean;
}

export default function PixelSpider({
  size = 32,
  animate = true,
  mode = "idle",
  mouseX = 0.5,
  mouseY = 0.5,
  scrollProgress = 0,
  hovered = false,
}: PixelSpiderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyeFlash, setEyeFlash] = useState(false);
  const [legPhase, setLegPhase] = useState(0);
  const [shadowDy, setShadowDy] = useState(0);
  const [swingAngle, setSwingAngle] = useState(0);
  const [rappelY, setRappelY] = useState(0);
  const [jumped, setJumped] = useState(false);
  const [jumpY, setJumpY] = useState(0);
  const [webClimb, setWebClimb] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!animate) return;

    if (mode === "rappel" && rappelY === 0) {
      const targetY = -(H * PX + 4);
      const dur = 1200;
      const start = performance.now();
      const id = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setRappelY(targetY * (1 - eased));
        if (p < 1) requestAnimationFrame(id);
      };
      requestAnimationFrame(id);
    }
  }, [animate, mode, rappelY]);

  useEffect(() => {
    if (!animate) return;
    let frame = 0;

    const tick = () => {
      frame++;

      if (mode === "walk" || mode === "magnetic") {
        setLegPhase(frame * 0.08);
      }

      if (mode === "idle") {
        setShadowDy(Math.sin(frame * 0.03) * 2);
      }

      if (mode === "swing") {
        setSwingAngle(Math.sin(frame * 0.02) * 12);
        setWebClimb(Math.sin(frame * 0.01) * 3);
      }

      setEyeFlash(Math.floor(frame / 60) % 8 === 0);

      if (!jumped && mode === "magnetic" && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setJumped(true);
          const dur = 400;
          const start = performance.now();
          const jId = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const height = -12 * Math.sin(p * Math.PI);
            setJumpY(height);
            setShadowDy(Math.max(0, 6 * Math.sin(p * Math.PI)));
            if (p < 1) requestAnimationFrame(jId);
          };
          requestAnimationFrame(jId);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, mode, jumped]);

  const magX = (mouseX - 0.5) * 2;
  const magY = (mouseY - 0.5) * 2;

  const displaceX = hovered && mode === "magnetic" ? -magX * 4 : 0;
  const displaceY = hovered && mode === "magnetic" ? (-magY * 4) + jumpY : mode === "idle" ? Math.sin(legPhase * 0.06) * 2 + jumpY : jumpY;
  const rotZ = mode === "swing" ? swingAngle : mode === "magnetic" ? scrollProgress * 3 - 1.5 : 0;
  const rotY = mode === "magnetic" ? (hovered ? magX * 10 : scrollProgress * 5) : 0;

  const showWebLine = mode === "web" || mode === "swing";

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div
        style={{
          transform: `translate(${displaceX}px, ${displaceY + rappelY + webClimb}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg)`,
          transition: hovered ? "none" : "transform 0.3s ease",
          transformOrigin: mode === "magnetic" && hovered ? "center" : "center top",
        }}
      >
        {showWebLine && (
          <svg
            width={1}
            height={size * 2}
            className="absolute left-1/2 -top-full -translate-x-1/2"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="webGradLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <line
              x1={0}
              y1={0}
              x2={mode === "swing" ? swingAngle * 0.3 : 0}
              y2={size * 2}
              stroke="url(#webGradLine)"
              strokeWidth={0.8}
              strokeDasharray="3 2"
              className="transition-all duration-300"
            />
          </svg>
        )}

        <SpiderSVG
          size={size}
          eyeFlash={eyeFlash}
          shadowDy={shadowDy}
          legPhase={legPhase}
        />
      </div>

      {hovered && mode === "magnetic" && (
        <svg
          className="pointer-events-none absolute inset-0"
          width={size * 3}
          height={size * 3}
          style={{
            left: -size,
            top: -size,
            transform: `translate(${displaceX}px, ${displaceY}px)`,
          }}
        >
          <defs>
            <radialGradient id="webRadial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.15} />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity={0.08} />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity={0.02} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="url(#webRadial)"
            className="animate-ripple"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos((deg * Math.PI) / 180) * 50}%`}
              y2={`${50 + Math.sin((deg * Math.PI) / 180) * 50}%`}
              stroke="#38bdf8"
              strokeWidth={0.5}
              strokeOpacity={0.15}
              strokeDasharray="2 3"
            />
          ))}
          {[25, 50, 75].map((r) => (
            <circle
              key={r}
              cx="50%"
              cy="50%"
              r={`${r}%`}
              fill="none"
              stroke="#38bdf8"
              strokeWidth={0.4}
              strokeOpacity={0.08}
              strokeDasharray="2 4"
            />
          ))}
        </svg>
      )}
    </div>
  );
}
