import Link from "next/link";
import PixelSpider from "./components/pixel-spider";

export default function NotFound() {
  return (
    <div className="web-grid-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-linear-to-b from-neon-blue/5 via-transparent to-background" />
      <div className="relative">
        <div className="mb-8 flex justify-center opacity-30">
          <PixelSpider size={160} mode="idle" />
        </div>
        <h1 className="mb-4 text-8xl font-bold gradient-text">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-200">
          Página não encontrada
        </h2>
        <p className="mb-8 mx-auto max-w-md text-zinc-500">
          A página que você procura não existe, foi movida ou está em uma teia diferente.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-neon-blue/10 px-8 py-3.5 text-sm font-semibold text-neon-blue transition-all hover:bg-neon-blue/20"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
