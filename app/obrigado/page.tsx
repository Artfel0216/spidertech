import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/spidertech",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/spidertech",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: "https://github.com/spidertech",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

export default function Obrigado() {
  return (
    <div className="web-grid-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-linear-to-b from-neon-blue/5 via-transparent to-background" />
      <div className="relative max-w-lg">
        <div className="mb-6 inline-flex rounded-full bg-neon-green/10 p-4">
          <CheckCircle2 className="h-12 w-12 text-neon-green" />
        </div>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Proposta{" "}
          <span className="gradient-text-green">recebida!</span>
        </h1>
        <p className="mb-6 text-zinc-400 leading-relaxed">
          Entraremos em contato em até <strong className="text-zinc-200">48 horas</strong>
          {" "}com uma proposta personalizada para o seu projeto. Fique de olho no
          WhatsApp e no e-mail.
        </p>

        <div className="mb-8 rounded-2xl border border-white/5 bg-card-bg p-6">
          <p className="mb-4 text-sm text-zinc-500">
            Enquanto isso, acompanhe nosso trabalho:
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-400 transition-all hover:border-neon-blue/30 hover:text-neon-blue"
                aria-label={link.label}
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d={link.path} />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
          >
            <BookOpen className="h-4 w-4" />
            Ler o Blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-neon-blue/10 px-6 py-3 text-sm font-semibold text-neon-blue transition-all hover:bg-neon-blue/20"
          >
            Voltar ao Início
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
