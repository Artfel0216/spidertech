"use client";

import { useCallback, useRef } from "react";

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotSpeed: number;
}

const COLORS = ["#38bdf8", "#a78bfa", "#4ade80", "#fbbf24", "#f472b6"];

export function useConfetti() {
  const piecesRef = useRef<ConfettiPiece[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number>(0);

  const fire = useCallback(() => {
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas");
      canvas.className = "pointer-events-none fixed inset-0 z-[70]";
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    piecesRef.current = Array.from({ length: 80 }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -16 - 4,
      size: Math.random() * 6 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
    }));

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of piecesRef.current) {
        p.x += p.vx;
        p.vy += 0.3;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.vx *= 0.99;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / 180);
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }

      if (frame < 180) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    cancelAnimationFrame(animRef.current);
    animate();
  }, []);

  return fire;
}

export function ConfettiCanvas() {
  return null;
}
