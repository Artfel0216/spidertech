"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface NewsletterFormProps {
  variant?: "default" | "footer";
}

export default function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("E-mail inválido");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(data.errors?.email || "Erro ao inscrever");
      }
    } catch {
      setStatus("error");
      setError("Erro de conexão");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 text-sm text-neon-green text-center justify-center">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <span>Inscrição confirmada! Bem-vindo(a) à SpiderTech.</span>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="Seu melhor e-mail"
          required
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-600 transition-colors focus:border-neon-blue/40"
          aria-label="E-mail para newsletter"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-xl bg-neon-blue/10 px-4 py-2.5 text-sm font-medium text-neon-blue transition-all hover:bg-neon-blue/20 disabled:opacity-50"
          aria-label="Inscrever na newsletter"
        >
          {status === "loading" ? "..." : "Inscrever"}
        </button>
        {error && <p className="sr-only">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome (opcional)"
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-colors focus:border-neon-blue/40"
          aria-label="Nome para newsletter"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="Seu melhor e-mail"
          required
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-colors focus:border-neon-blue/40"
          aria-label="E-mail para newsletter"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-xl bg-neon-blue/10 px-6 py-3 text-sm font-medium text-neon-blue transition-all hover:bg-neon-blue/20 disabled:opacity-50"
          aria-label="Inscrever na newsletter"
        >
          {status === "loading" ? "Enviando..." : "Inscrever"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </form>
  );
}
