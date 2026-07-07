"use client";
import { useId, useState, useEffect, useCallback } from "react";

interface ProjectImage {
  src: string;
  alt: string;
}

const barberImages: ProjectImage[] = Array.from({ length: 9 }, (_, i) => ({
  src: `/BarberShopImages/barbershop${i + 1}.webp`,
  alt: `Tela do sistema Barbershop - parte ${i + 1}`,
}));

const innovaImages: ProjectImage[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/InovaodOntoImages/Inovaodonto${i + 1}.webp`,
  alt: `Tela do sistema InnovaOdonto - parte ${i + 1}`,
}));

const jarvisImages: ProjectImage[] = Array.from({ length: 4 }, (_, i) => ({
  src: `/JarvisImages/Jarvis${i + 1}.webp`,
  alt: `Tela do assistente J.A.R.V.I.S. - parte ${i + 1}`,
}));

const wegymImages: ProjectImage[] = Array.from({ length: 15 }, (_, i) => ({
  src: `/WegymImages/wegym${i + 1}.webp`,
  alt: `Tela do aplicativo WeGym - parte ${i + 1}`,
}));

const imagesByType: Record<string, ProjectImage[]> = {
  barbershop: barberImages,
  innovaodonto: innovaImages,
  jarvis: jarvisImages,
  wegym: wegymImages,
};

const typesWithCarousel = new Set(["barbershop", "innovaodonto", "jarvis", "wegym"]);

interface ProjectMockupProps {
  type: "wegym" | "jarvis" | "barbershop" | "innovaodonto";
  title: string;
  tags: string[];
}

export default function ProjectMockup({ type, title, tags }: ProjectMockupProps) {
  const uid = useId();
  const hasCarousel = typesWithCarousel.has(type);
  const images = imagesByType[type] || [];
  const W = 320;
  const H = 200;
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openCarousel = useCallback(() => {
    if (!hasCarousel) return;
    setIdx(0);
    setOpen(true);
  }, [hasCarousel]);

  const closeCarousel = useCallback(() => {
    setOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open && hasCarousel) openCarousel();
    }
  }, [open, hasCarousel, openCarousel]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeCarousel, goNext, goPrev]);

  const colors: Record<string, string> = {
    wegym: "#a78bfa",
    jarvis: "#fbbf24",
    barbershop: "#fb7185",
    innovaodonto: "#14b8a6",
  };
  const color = colors[type] || "#38bdf8";

  const gridLayout = useCallback(() => {
    const layouts: Record<string, { cols: number; rows: number; ox: number; oy: number; gapX: number; gapY: number; w: number; h: number }> = {
      barbershop: { cols: 3, rows: 3, ox: 10, oy: 36, gapX: 102, gapY: 54, w: 96, h: 50 },
      innovaodonto: { cols: 3, rows: 2, ox: 8, oy: 40, gapX: 104, gapY: 54, w: 98, h: 50 },
      jarvis: { cols: 2, rows: 2, ox: 10, oy: 40, gapX: 152, gapY: 58, w: 146, h: 54 },
      wegym: { cols: 2, rows: 3, ox: 24, oy: 46, gapX: 140, gapY: 48, w: 130, h: 42 },
    };
    return layouts[type];
  }, [type]);

  const renderClipPaths = (imgs: ProjectImage[]) => {
    const layout = gridLayout();
    if (!layout) return null;
    const count = type === "barbershop" ? imgs.length : Math.min(imgs.length, layout.cols * layout.rows);
    return Array.from({ length: count }, (_, i) => {
      const col = i % layout.cols;
      const row = Math.floor(i / layout.cols);
      const x = layout.ox + col * layout.gapX;
      const y = layout.oy + row * layout.gapY;
      return (
        <clipPath key={i} id={`g-${uid}-${i}`}>
          <rect x={x} y={y} width={layout.w} height={layout.h} rx={4} />
        </clipPath>
      );
    });
  };

  const renderImageGrid = (imgs: ProjectImage[]) => {
    const layout = gridLayout();
    if (!layout) return null;
    const count = type === "barbershop" ? imgs.length : Math.min(imgs.length, layout.cols * layout.rows);
    return Array.from({ length: count }, (_, i) => {
      const col = i % layout.cols;
      const row = Math.floor(i / layout.cols);
      const x = layout.ox + col * layout.gapX;
      const y = layout.oy + row * layout.gapY;
      return (
        <g key={i}>
          <rect x={x} y={y} width={layout.w} height={layout.h} rx={4} fill={`${color}08`} />
          <image href={imgs[i].src} x={x} y={y} width={layout.w} height={layout.h} clipPath={`url(#g-${uid}-${i})`} preserveAspectRatio="xMidYMid slice">
            <title>{imgs[i].alt}</title>
          </image>
        </g>
      );
    });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card-bg"
      onClick={openCarousel}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        style={{ imageRendering: "auto" }}
        suppressHydrationWarning
      >
        <defs>
          <linearGradient id={`bg-${type}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={`${color}08`} />
            <stop offset="100%" stopColor={`${color}02`} />
          </linearGradient>
          <linearGradient id={`screen-${type}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`${color}12`} />
            <stop offset="100%" stopColor={`${color}02`} />
          </linearGradient>
          {renderClipPaths(images)}
        </defs>

        {type === "wegym" ? (
          <>
            <rect x={10} y={0} width={W - 20} height={H - 10} rx={16} fill={`${color}08`} stroke={`${color}15`} strokeWidth={0.5} />
            <rect x={W / 2 - 12} y={4} width={24} height={3} rx={1.5} fill={`${color}25`} />
            <rect x={18} y={14} width={W - 36} height={H - 32} rx={8} fill={`url(#screen-${type})`} />
            <text x={W / 2} y={30} textAnchor="middle" fill={color} fontSize={5} fontWeight="bold" opacity={0.6}>WeGym</text>
            <rect x={28} y={38} width={4} height={4} rx={1} fill={`${color}30`} />
            <rect x={W - 40} y={38} width={14} height={4} rx={1} fill={`${color}20`} />
            {renderImageGrid(wegymImages)}
            <text x={W / 2} y={188} textAnchor="middle" fill={color} fontSize={4.5} opacity={0.4}>Clique para ampliar</text>
          </>
        ) : (
          <>
            <rect x={0} y={0} width={W} height={H} rx={8} fill={`url(#bg-${type})`} stroke={`${color}10`} strokeWidth={0.5} />
            <rect x={8} y={6} width={W - 16} height={10} rx={3} fill={`${color}08`} />
            <circle cx={14} cy={11} r={2} fill="#ef4444" />
            <circle cx={22} cy={11} r={2} fill="#fbbf24" />
            <circle cx={30} cy={11} r={2} fill="#4ade80" />

            {type === "jarvis" && (
              <>
                <rect x={W / 2 - 22} y={22} width={44} height={10} rx={3} fill={color} opacity={0.2} />
                <text x={W / 2} y={30} textAnchor="middle" fill={color} fontSize={6} fontWeight="bold" opacity={0.6}>J.A.R.V.I.S.</text>
                {renderImageGrid(jarvisImages)}
                <text x={W / 2} y={186} textAnchor="middle" fill={color} fontSize={5} opacity={0.4}>Clique para ampliar</text>
              </>
            )}

            {type === "barbershop" && (
              <>
                <text x={W / 2} y={26} textAnchor="middle" fill={color} fontSize={7} fontWeight="bold" opacity={0.5}>BARBERSHOP</text>
                {renderImageGrid(barberImages)}
                <text x={W / 2} y={190} textAnchor="middle" fill={color} fontSize={5} opacity={0.4}>Clique para ampliar</text>
              </>
            )}

            {type === "innovaodonto" && (
              <>
                <rect x={W / 2 - 32} y={22} width={64} height={10} rx={3} fill={color} opacity={0.15} />
                <text x={W / 2} y={30} textAnchor="middle" fill={color} fontSize={6} fontWeight="bold" opacity={0.6}>InnovaOdonto</text>
                {renderImageGrid(innovaImages)}
                <text x={W / 2} y={186} textAnchor="middle" fill={color} fontSize={5} opacity={0.4}>Clique para ampliar</text>
              </>
            )}

          </>
        )}
      </svg>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-4 pt-8">
        <div className="flex flex-wrap gap-1.5 mb-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>

      {open && hasCarousel && (
        <div className="border-t border-white/5">
          <div className="relative">
            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="w-full h-auto max-h-120 object-contain bg-black/40"
              loading="lazy"
            />

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-white/20"
              aria-label="Anterior"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-white/20"
              aria-label="Próximo"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-xs text-zinc-500">
              {idx + 1} / {images.length}
            </div>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-neon-blue" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                  }`}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); closeCarousel(); }}
              className="text-xs text-zinc-500 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              Fechar ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
