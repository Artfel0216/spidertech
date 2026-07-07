"use client";
import { useId, useState, useEffect, useCallback } from "react";

const barberImages = [
  { src: "/Captura%20de%20tela%202026-07-06%20132009.webp", alt: "Dashboard do sistema Barbershop - visão geral de agendamentos" },
  { src: "/Captura%20de%20tela%202026-07-06%20132021.webp", alt: "Calendário de agendamentos do Barbershop" },
  { src: "/Captura%20de%20tela%202026-07-06%20132049.webp", alt: "Painel financeiro do Barbershop com gráficos" },
  { src: "/Captura%20de%20tela%202026-07-06%20132056.webp", alt: "Gestão de comissão por barbeiro no Barbershop" },
  { src: "/Captura%20de%20tela%202026-07-06%20132105.webp", alt: "Tela de perfil e comissão do barbeiro" },
  { src: "/Captura%20de%20tela%202026-07-06%20132113.webp", alt: "Gestão de estoque de produtos do Barbershop" },
  { src: "/Captura%20de%20tela%202026-07-06%20132140.webp", alt: "Tela de relatórios do sistema Barbershop" },
  { src: "/Captura%20de%20tela%202026-07-06%20132258.webp", alt: "Configurações da barbearia no sistema" },
  { src: "/Captura%20de%20tela%202026-07-06%20132315.webp", alt: "Tela inicial do sistema de agendamento Barbershop" },
];

interface ProjectMockupProps {
  type: "wegym" | "jarvis" | "barbershop" | "innovaodonto";
  title: string;
  tags: string[];
}

export default function ProjectMockup({ type, title, tags }: ProjectMockupProps) {
  const uid = useId();
  const isBarber = type === "barbershop";
  const W = 320;
  const H = 200;
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openCarousel = useCallback(() => {
    setIdx(0);
    setOpen(true);
  }, []);

  const closeCarousel = useCallback(() => {
    setOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setIdx((i) => (i + 1) % barberImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setIdx((i) => (i - 1 + barberImages.length) % barberImages.length);
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) openCarousel();
    }
  }, [open, openCarousel]);

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

  const barberGrid = barberImages.map((img, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 10 + col * 102;
    const y = 36 + row * 54;
    return (
      <g key={i}>
        <clipPath id={`bs-${uid}-${i}`}>
          <rect x={x} y={y} width={96} height={50} rx={4} />
        </clipPath>
        <rect x={x} y={y} width={96} height={50} rx={4} fill={`${color}08`} />
        <image href={img.src} x={x} y={y} width={96} height={50} clipPath={`url(#bs-${uid}-${i})`} preserveAspectRatio="xMidYMid slice">
          <title>{img.alt}</title>
        </image>
      </g>
    );
  });

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card-bg"
      onClick={isBarber && !open ? openCarousel : undefined}
      role={isBarber ? "button" : undefined}
      tabIndex={isBarber ? 0 : undefined}
      onKeyDown={isBarber ? onKeyDown : undefined}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        style={{ imageRendering: "auto" }}
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
        </defs>

        {type === "wegym" ? (
          <>
            <rect x={10} y={0} width={W - 20} height={H - 10} rx={16} fill={`${color}08`} stroke={`${color}15`} strokeWidth={0.5} />
            <rect x={W / 2 - 12} y={4} width={24} height={3} rx={1.5} fill={`${color}25`} />
            <rect x={18} y={14} width={W - 36} height={H - 32} rx={8} fill={`url(#screen-${type})`} />
            <rect x={28} y={24} width={60} height={8} rx={2} fill={`${color}35`} />
            <rect x={W - 68} y={24} width={40} height={8} rx={2} fill={`${color}20`} />
            <rect x={28} y={42} width={W - 66} height={4} rx={1} fill={`${color}20`} />
            <rect x={28} y={56} width={W - 66} height={44} rx={8} fill={`${color}10`} />
            <rect x={36} y={64} width={28} height={28} rx={6} fill={`${color}25`} />
            <rect x={72} y={68} width={50} height={6} rx={2} fill={`${color}30`} />
            <rect x={72} y={78} width={34} height={4} rx={1} fill={`${color}20`} />
            <rect x={W - 64} y={68} width={28} height={20} rx={4} fill={`${color}20`} />
            <rect x={W - 58} y={87} width={16} height={4} rx={1} fill={`${color}15`} />
            <rect x={28} y={110} width={W - 66} height={36} rx={8} fill={`${color}08`} />
            <rect x={36} y={118} width={W - 82} height={4} rx={1} fill={`${color}20`} />
            <rect x={36} y={128} width={W * 0.4} height={4} rx={1} fill={`${color}15`} />
            <rect x={W * 0.55} y={118} width={W * 0.3} height={20} rx={4} fill={`${color}20`} />
            <rect x={28} y={156} width={W - 66} height={36} rx={8} fill={`${color}08`} />
            <rect x={36} y={164} width={W - 82} height={4} rx={1} fill={`${color}20`} />
            <rect x={36} y={174} width={W * 0.35} height={4} rx={1} fill={`${color}15`} />
            <rect x={W * 0.5} y={164} width={W * 0.35} height={20} rx={4} fill={`${color}20`} />
            <rect x={28} y={202} width={W - 66} height={36} rx={8} fill={`${color}08`} />
            <rect x={36} y={210} width={W - 82} height={4} rx={1} fill={`${color}20`} />
            <rect x={36} y={220} width={W * 0.3} height={4} rx={1} fill={`${color}15`} />
            <rect x={(W - 60) / 2} y={H - 28} width={60} height={6} rx={3} fill={`${color}35`} />
            <rect x={28} y={H - 42} width={40} height={6} rx={3} fill={`${color}20`} />
            <rect x={W - 48} y={H - 42} width={20} height={6} rx={3} fill={`${color}15`} />
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
                <rect x={0} y={0} width={4} height={H} fill={color} opacity={0.2} />
                <text x={W / 2} y={26} textAnchor="middle" fill={color} fontSize={7} fontWeight="bold" opacity={0.5}>J.A.R.V.I.S.</text>
                <rect x={8} y={36} width={70} height={154} rx={4} fill={`${color}04`} />
                {["Conversa 1", "Conversa 2", "Conversa 3", "Conversa 4"].map((_, i) => (
                  <rect key={i} x={14} y={44 + i * 32} width={58} height={24} rx={4} fill={`${color}${8 + i * 4}`} />
                ))}
                {["", "", ""].map((_, i) => (
                  <rect key={i} x={18} y={50 + i * 32} width={36} height={3} rx={1} fill={`${color}25`} />
                ))}
                {["", ""].map((_, i) => (
                  <rect key={i} x={18} y={58 + i * 32} width={24} height={2} rx={1} fill={`${color}15`} />
                ))}
                <rect x={84} y={36} width={228} height={118} rx={4} fill={`${color}04`} />
                <rect x={92} y={44} width={100} height={28} rx={6} fill={`${color}12`} />
                <rect x={98} y={50} width={60} height={4} rx={1} fill={`${color}30`} />
                <rect x={98} y={58} width={40} height={3} rx={1} fill={`${color}20`} />
                <rect x={210} y={52} width={94} height={28} rx={6} fill={`${color}12`} />
                <rect x={216} y={58} width={54} height={4} rx={1} fill={`${color}30`} />
                <rect x={216} y={66} width={36} height={3} rx={1} fill={`${color}20`} />
                <rect x={92} y={80} width={94} height={28} rx={6} fill={`${color}12`} />
                <rect x={98} y={86} width={50} height={4} rx={1} fill={`${color}30`} />
                <rect x={98} y={94} width={34} height={3} rx={1} fill={`${color}20`} />
                <rect x={160} y={116} width={60} height={20} rx={4} fill={`${color}20`} />
                <rect x={165} y={122} width={50} height={3} rx={1} fill={`${color}40`} />
                <rect x={165} y={128} width={36} height={2} rx={1} fill={`${color}30`} />
                <rect x={84} y={162} width={228} height={28} rx={4} fill={`${color}06`} />
                <rect x={92} y={169} width={150} height={14} rx={6} fill={`${color}10`} />
                <rect x={96} y={173} width={60} height={3} rx={1} fill={`${color}25`} />
                <rect x={96} y={179} width={40} height={2} rx={1} fill={`${color}15`} />
                <rect x={260} y={169} width={44} height={14} rx={6} fill={`${color}20`} />
                <rect x={270} y={173} width={24} height={6} rx={2} fill={color} opacity={0.4} />
                {[0, 1, 2, 3, 4].map((i) => (
                  <rect key={i} x={86 + i * 10} y={170} width={3} height={6 + Math.sin(i + 1) * 4} rx={1} fill={color} opacity={0.4} />
                ))}
              </>
            )}

            {isBarber && (
              <>
                <text x={W / 2} y={26} textAnchor="middle" fill={color} fontSize={7} fontWeight="bold" opacity={0.5}>BARBERSHOP</text>
                <text x={W / 2} y={190} textAnchor="middle" fill={color} fontSize={5} opacity={0.4}>Clique para ampliar</text>
                {barberGrid}
              </>
            )}

            {type === "innovaodonto" && (
              <>
                <rect x={0} y={0} width={4} height={H} fill={color} opacity={0.15} />
                <rect x={8} y={36} width={W - 16} height={52} rx={4} fill={`${color}06`} />
                <rect x={16} y={44} width={W * 0.4} height={7} rx={2} fill={`${color}25`} />
                <rect x={16} y={56} width={W * 0.28} height={4} rx={1} fill={`${color}15`} />
                <rect x={16} y={64} width={W * 0.2} height={6} rx={2} fill={`${color}25`} />
                <rect x={W * 0.55} y={44} width={W * 0.15} height={8} rx={3} fill={`${color}20`} />
                <rect x={W * 0.73} y={44} width={W * 0.12} height={8} rx={3} fill={`${color}15`} />
                <rect x={W * 0.88} y={44} width={W * 0.08} height={8} rx={3} fill={`${color}12`} />
                <rect x={W * 0.55} y={44} width={16} height={16} rx={8} fill={color} opacity={0.15} />
                <rect x={8} y={96} width={W - 16} height={16} rx={4} fill={`${color}04`} />
                <rect x={16} y={100} width={W * 0.15} height={4} rx={1} fill={`${color}15`} />
                <rect x={W * 0.25} y={100} width={W * 0.1} height={4} rx={1} fill={`${color}15`} />
                <rect x={W * 0.38} y={100} width={W * 0.1} height={4} rx={1} fill={`${color}15`} />
                <rect x={W * 0.51} y={100} width={W * 0.1} height={4} rx={1} fill={`${color}15`} />
                <rect x={8} y={120} width={W * 0.48} height={44} rx={4} fill={`${color}06`} />
                <rect x={16} y={128} width={W * 0.2} height={5} rx={2} fill={`${color}25`} />
                <rect x={16} y={138} width={W * 0.35} height={3} rx={1} fill={`${color}15`} />
                <rect x={16} y={146} width={W * 0.15} height={4} rx={2} fill={`${color}20`} />
                <rect x={W * 0.18} y={120} width={80} height={44} rx={4} fill={`${color}08`} />
                <rect x={W * 0.2} y={128} width={30} height={28} rx={6} fill={`${color}15`} />
                <rect x={W * 0.33} y={134} width={40} height={4} rx={1} fill={`${color}20`} />
                <rect x={W * 0.33} y={142} width={28} height={3} rx={1} fill={`${color}15`} />
                <rect x={W * 0.52} y={120} width={W * 0.44} height={44} rx={4} fill={`${color}06`} />
                <rect x={W * 0.55} y={128} width={W * 0.2} height={5} rx={2} fill={`${color}25`} />
                <rect x={W * 0.55} y={138} width={W * 0.32} height={3} rx={1} fill={`${color}15`} />
                <rect x={W * 0.55} y={146} width={W * 0.15} height={4} rx={2} fill={`${color}20`} />
                <rect x={8} y={172} width={W * 0.4} height={22} rx={4} fill={`${color}08`} />
                <rect x={16} y={179} width={W * 0.15} height={4} rx={1} fill={`${color}25`} />
                <rect x={16} y={187} width={W * 0.2} height={3} rx={1} fill={`${color}15`} />
                <rect x={W * 0.2} y={179} width={16} height={10} rx={3} fill={`${color}20`} />
                <rect x={W * 0.12} y={153} width={W * 0.12} height={5} rx={2} fill={`${color}25`} />
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

      {open && isBarber && (
        <div className="border-t border-white/5">
          <div className="relative">
            <img
              src={barberImages[idx].src}
              alt={barberImages[idx].alt}
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
              {idx + 1} / {barberImages.length}
            </div>
            <div className="flex gap-2">
              {barberImages.map((_, i) => (
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
