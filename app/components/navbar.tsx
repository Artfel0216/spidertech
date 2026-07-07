"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PixelSpider from "./pixel-spider";

export default function Navbar() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = logoRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl" aria-label="Navegação principal">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          ref={logoRef}
          href="/"
          className="group flex items-center gap-2"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
          aria-label="Ir para página inicial"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-neon-blue/20 to-neon-purple/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            <PixelSpider
              size={28}
              mode="magnetic"
              mouseX={mousePos.x}
              mouseY={mousePos.y}
              scrollProgress={scroll}
              hovered={hovered}
            />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Spider<span className="text-neon-blue">Tech</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex" role="menubar">
          <Link
            href="/#servicos"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Serviços
          </Link>
          <Link
            href="/#portfolio"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Portfólio
          </Link>
          <Link
            href="/#metodo"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Método
          </Link>
          <Link
            href="/quem-somos"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Quem Somos
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Blog
          </Link>
          <Link
            href="/#precos"
            className="transition-colors hover:text-white"
            role="menuitem"
          >
            Preços
          </Link>
          <Link
            href="/#contato"
            className="rounded-full bg-neon-blue/10 px-5 py-2 text-sm font-medium text-neon-blue transition-all hover:bg-neon-blue/20"
            role="menuitem"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
