"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RevealOnScroll from "../components/reveal-on-scroll";
import PixelSpider from "../components/pixel-spider";
import Link from "next/link";

const posts = [
  {
    slug: "landing-page-que-converte",
    title: "Landing Page que Converte: 7 Elementos Essenciais",
    excerpt:
      "Descubra os elementos que toda landing page de alta conversão precisa ter para transformar visitantes em clientes.",
    date: "06 Jul 2026",
    tags: ["Landing Page", "Conversão"],
  },
  {
    slug: "sistema-sob-medida-vs-sistema-pronto",
    title: "Sistema Sob Medida vs. Sistema Pronto: Qual escolher?",
    excerpt:
      "Entenda as diferenças entre um sistema personalizado e uma solução de prateleira para o seu negócio.",
    date: "28 Jun 2026",
    tags: ["Sistemas", "Tecnologia"],
  },
  {
    slug: "automacao-processos-pequenas-empresas",
    title: "Automação de Processos para Pequenas Empresas",
    excerpt:
      "Como a automação pode reduzir custos e aumentar a produtividade da sua empresa, mesmo com orçamento limitado.",
    date: "15 Jun 2026",
    tags: ["Automação", "Produtividade"],
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative py-28">
          <div className="mx-auto max-w-6xl px-6">
            <RevealOnScroll className="mb-16 text-center">
              <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-blue">
                Blog
              </span>
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                Conteúdo para{" "}
                <span className="gradient-text">transformar seu negócio</span>
              </h1>
              <p className="mx-auto max-w-2xl text-zinc-400">
                Artigos sobre tecnologia, desenvolvimento de sistemas, landing pages e
                estratégias digitais para alavancar sua empresa.
              </p>
            </RevealOnScroll>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, idx) => (
                <RevealOnScroll key={post.slug} delay={idx * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card-hover group block rounded-2xl border border-white/5 bg-card-bg p-6"
                  >
                    <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-linear-to-br from-neon-blue/10 to-neon-purple/10">
                      <PixelSpider size={48} mode="idle" />
                    </div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neon-blue/10 px-2.5 py-0.5 text-[10px] font-medium text-neon-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-neon-blue">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-zinc-600">{post.date}</span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
