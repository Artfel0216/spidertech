"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("lgpd-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-60 border-t border-white/5 bg-card-bg/95 backdrop-blur-xl"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 sm:flex-row">
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">
          Usamos cookies e tecnologias semelhantes para melhorar sua experiência,
          analisar tráfego e personalizar conteúdo. Ao continuar, você concorda
          com nossa{" "}
          <a href="#" className="text-neon-blue underline underline-offset-2 hover:text-neon-blue/80">
            Política de Privacidade
          </a>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-xl border border-white/10 px-5 py-2.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-white"
            aria-label="Recusar cookies"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="rounded-xl bg-neon-blue/10 px-5 py-2.5 text-xs font-medium text-neon-blue transition-all hover:bg-neon-blue/20"
            aria-label="Aceitar cookies"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
