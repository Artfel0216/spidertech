"use client";

import { Code2, Cpu, Globe, Lightbulb, Rocket, Target, Users } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Particles from "../components/particles";
import ScrollProgress from "../components/scroll-progress";
import RevealOnScroll from "../components/reveal-on-scroll";
import AnimatedLine from "../components/animated-line";
import PixelSpider from "../components/pixel-spider";
import StaggerList from "../components/stagger-list";

const values = [
  {
    icon: Code2,
    title: "Excelência Técnica",
    desc: "Cada linha de código é escrita com propósito. Buscamos as melhores práticas para entregar produtos estáveis, seguros e performáticos.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    desc: "Não somos apenas fornecedores. Sentamos lado a lado com o cliente para entender o negócio e construir a melhor solução juntos.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Prática",
    desc: "Tecnologia de ponta sim, mas aplicada com os pés no chão. Inovamos para resolver problemas reais, não por modismo.",
  },
  {
    icon: Target,
    title: "Compromisso com o Prazo",
    desc: "Planejamos realista e entregamos no combinado. Respeito pelo tempo e pelo investimento do cliente é prioridade.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "A Fundação",
    desc: "Nascemos da insatisfação com agências que entregavam sites genéricos e caros. Dois sócios, um quarto e vontade de fazer diferente.",
  },
  {
    year: "2020",
    title: "Primeiros Clientes",
    desc: "Mesmo na pandemia, conquistamos nossos primeiros contratos de landing pages e sistemas sob medida. O boca a boca começou a girar.",
  },
  {
    year: "2022",
    title: "Expansão",
    desc: "Triplicamos o time e passamos a atender clientes de todo o Brasil. Nosso portfólio se diversificou para apps web completos e dashboards.",
  },
  {
    year: "2025",
    title: "Maturidade",
    desc: "Mais de 50 projetos entregues. Hoje atendemos startups, clínicas, corretoras e e-commerces com a mesma paixão do primeiro projeto.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-linear-to-b from-neon-blue/5 via-transparent to-background" />
          <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-neon-blue/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-neon-purple/10 blur-[120px]" />
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <RevealOnScroll delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 text-sm text-neon-blue">
                <Cpu className="h-3.5 w-3.5" />
                Nossa história
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Quem{" "}
                <span className="gradient-text">Somos</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
                A SpiderTech nasceu da crença de que tecnologia de qualidade não
                precisa ser cara nem burocrática. Somos uma equipe apaixonada por
                construir soluções digitais que realmente funcionam — do
                planejamento à entrega.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <AnimatedLine />

        {/* Missão / Visão */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <RevealOnScroll delay={0}>
                <div className="neon-border rounded-2xl bg-card-bg/80 p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neon-blue/10">
                    <Rocket className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">Missão</h3>
                  <p className="leading-relaxed text-zinc-400">
                    Democratizar o acesso a sistemas sob medida e landing pages
                    de alta performance, oferecendo soluções digitais acessíveis
                    que transformam ideias em resultados reais para negócios de
                    todos os tamanhos.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="neon-border rounded-2xl bg-card-bg/80 p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neon-purple/10">
                    <Globe className="h-6 w-6 text-neon-purple" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">Visão</h3>
                  <p className="leading-relaxed text-zinc-400">
                    Ser referência em desenvolvimento web no Brasil até 2028,
                    reconhecida pela qualidade técnica, transparência nas
                    relações e capacidade de entregar projetos complexos com
                    agilidade e preço justo.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <AnimatedLine />

        {/* Valores */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <RevealOnScroll delay={0}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-4 py-1.5 text-sm text-neon-green">
                <Target className="h-3.5 w-3.5" />
                Nossos valores
              </div>
              <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
                O que nos{" "}
                <span className="gradient-text-green">move</span>
              </h2>
            </RevealOnScroll>
            <StaggerList className="grid gap-8 md:grid-cols-2">
              {values.map((v) => (
                <RevealOnScroll key={v.title} delay={0}>
                  <div className="card-hover rounded-2xl border border-card-border bg-card-bg/60 p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                      <v.icon className="h-5 w-5 text-neon-blue" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{v.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </StaggerList>
          </div>
        </section>

        <AnimatedLine />

        {/* Timeline */}
        <section className="relative py-24">
          <div className="mx-auto max-w-4xl px-6">
            <RevealOnScroll delay={0}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 text-sm text-neon-blue">
                <PixelSpider size={18} />
                Nossa trajetória
              </div>
              <h2 className="mb-16 text-3xl font-bold sm:text-4xl">
                Como <span className="gradient-text">chegamos até aqui</span>
              </h2>
            </RevealOnScroll>
            <div className="relative space-y-12 before:absolute before:left-[19px] before:top-0 before:h-full before:w-px before:bg-linear-to-b before:from-neon-blue/40 before:via-neon-purple/20 before:to-transparent">
              {timeline.map((item, i) => (
                <RevealOnScroll key={item.year} delay={i * 100}>
                  <div className="relative flex items-start gap-6 pl-2">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neon-blue/30 bg-background text-xs font-bold text-neon-blue">
                      {item.year.slice(2)}
                    </div>
                    <div className="neon-border rounded-2xl bg-card-bg/60 p-6">
                      <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-neon-blue/60">
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedLine />

        {/* CTA */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <RevealOnScroll delay={0}>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Vamos construir algo{" "}
                <span className="gradient-text">juntos</span>?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
                Se você tem um projeto em mente ou quer conhecer melhor como
                trabalhamos, estamos prontos para conversar.
              </p>
              <a
                href="/#contato"
                className="inline-flex items-center gap-2 rounded-full bg-neon-blue px-6 py-3 text-sm font-medium text-background transition-all hover:bg-neon-blue/90"
              >
                Fale conosco
              </a>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
