"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Gauge,
  Globe,
  Headphones,
  Layers,
  Smartphone,
  Zap,
  BookOpen,
  DollarSign,
  Check,
} from "lucide-react";
import Particles from "./components/particles";
import TypingEffect from "./components/typing-effect";
import ScrollProgress from "./components/scroll-progress";
import { FloatingInput, FloatingTextarea } from "./components/floating-input";
import RippleButton from "./components/ripple-button";
import MagneticCard from "./components/magnetic-card";
import RevealOnScroll from "./components/reveal-on-scroll";
import AnimatedLine from "./components/animated-line";
import StaggerList from "./components/stagger-list";
import { useConfetti } from "./components/confetti";
import PixelSpider from "./components/pixel-spider";
import ProjectMockup from "./components/project-mockup";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewsletterForm from "./components/newsletter-form";
import Link from "next/link";
import { useCallback, useState } from "react";

const portfolioItems = [
  {
    title: "WEGYM — Plataforma Fitness com IA",
    type: "wegym" as const,
    problem: "Atletas e personal trainers sem uma plataforma unificada que integrasse treinos, GPS, IA, pagamentos e biometria em um só lugar.",
    solution: "Plataforma full-stack com Gemini IA, rastreamento GPS, monitores Bluetooth, Mercado Pago, 15 idiomas e gamificação — usada por atletas e profissionais do mundo todo.",
    tags: ["IA", "Full-Stack", "GPS", "BLE", "i18n", "Fintech"],
  },
  {
    title: "J.A.R.V.I.S. — Assistente Virtual com IA",
    type: "jarvis" as const,
    problem: "Usuários sem um assistente inteligente unificado que integrasse conversação com IA, comandos de voz, clima, notícias e buscas em tempo real.",
    solution: "Assistente virtual com Google Gemini, streaming em tempo real, Web Speech API, 4 integrações externas (OpenWeather, NewsAPI, Serper, Wolfram Alpha) e dashboard futurista.",
    tags: ["IA", "Streaming", "Voz", "Next.js", "Gemini"],
  },
  {
    title: "Barbershop — Agendamento e Gestão",
    type: "barbershop" as const,
    problem: "Barbearias sem sistema digital de agendamento, controlando tudo no papel ou WhatsApp, perdendo clientes e sem visibilidade financeira.",
    solution: "Sistema completo com agendamento online, painel admin com agenda visual, financeiro com gráficos, comissão por barbeiro, estoque de produtos e PWA instalável.",
    tags: ["Agendamento", "Financeiro", "PWA", "Admin"],
  },
  {
    title: "InnovaOdonto — Landing Page + Mini CRM",
    type: "innovaodonto" as const,
    problem: "Clínica odontológica sem presença digital profissional e sem sistema de captura e acompanhamento de leads.",
    solution: "Landing page completa com 12 seções, formulário com validação inline e máscara de telefone, mini CRM admin com filtros por status e JSON-LD para SEO local.",
    tags: ["Landing Page", "CRM", "SEO", "Saúde"],
  },

];

const methodSteps = [
  {
    number: "01",
    title: "Alinhamento e Briefing",
    description:
      "Entendemos seu negócio, suas dores e seus objetivos. Desenhamos juntos a solução ideal.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Design e Prototipação",
    description:
      "Criamos protótipos interativos para você visualizar cada detalhe antes do desenvolvimento.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Desenvolvimento Ágil",
    description:
      "Codificamos com entregas contínuas e feedbacks constantes. Você acompanha tudo em tempo real.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testes e Entrega",
    description:
      "Colocamos no ar uma plataforma rápida, segura e pronta para escalar.",
    icon: Gauge,
  },
];

const services = [
  {
    icon: Cpu,
    title: "Sistemas Sob Demanda",
    items: [
      "Automação de processos",
      "ERPs e CRMs personalizados",
      "Segurança e escalabilidade",
      "O sistema se adapta à sua empresa",
    ],
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    icon: Globe,
    title: "Landing Pages de Alta Conversão",
    items: [
      "Velocidade e performance",
      "Design moderno e responsivo",
      "Mobile First",
      "Foco em vendas e conversão",
    ],
    gradient: "from-neon-green to-neon-blue",
  },
];

function Hero() {
  return (
    <section className="web-grid-bg relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-linear-to-b from-neon-blue/5 via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-neon-blue/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-neon-purple/10 blur-[120px]" />
      <div className="absolute top-1/3 right-[10%] hidden opacity-20 lg:block">
        <PixelSpider size={120} mode="swing" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll delay={0}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 text-sm text-neon-blue">
            <Zap className="h-3.5 w-3.5" />
            Tecnologia que impulsiona resultados
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Sistemas sob demanda e{" "}
            <span className="gradient-text">
              <TypingEffect texts={["Landing Pages que convertem", "Softwares que escalam", "Soluções que entregam"]} />
            </span>
            .
            <br />
            <span className="text-zinc-400">
              A tecnologia que o seu negócio precisa para crescer.
            </span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Na SpiderTech, transformamos suas ideias em softwares robustos e
            páginas de alta performance. Sob medida para o seu bolso e para o
            seu objetivo.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <div className="flex flex-wrap gap-4">
            <RippleButton className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold" aria-label="Solicitar proposta">
              <a href="#contato" className="flex items-center gap-2">
                Quero Tirar Meu Projeto do Papel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </RippleButton>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
              aria-label="Ver portfólio de projetos"
            >
              Ver Portfólio
            </a>
          </div>
        </RevealOnScroll>
        <div className="mt-16 grid gap-6 border-t border-white/5 pt-12 sm:grid-cols-3">
          {[
            { icon: Zap, title: "Orçamento sem compromisso", desc: "Transparência total desde o primeiro contato. Sem surpresas, sem taxas escondidas." },
            { icon: Headphones, title: "Suporte Dedicado", desc: "Canal direto com o time técnico durante todo o projeto. Você não fala com robô." },
            { icon: Clock, title: "Entregas Rápidas", desc: "Metodologia ágil com resultados em poucas semanas. Do briefing ao deploy sem enrolação." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-xl border border-white/4 bg-white/2 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-neon-blue/20 to-neon-purple/20">
                <item.icon className="h-5 w-5 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-blue">
            O que fazemos
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Soluções completas em{" "}
            <span className="gradient-text">tecnologia</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Do sistema que organiza sua operação à página que vende seu produto
            — entregamos tecnologia que realmente funciona.
          </p>
        </RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.title} delay={idx * 100}>
              <MagneticCard className="card-hover neon-border rounded-2xl border border-white/5 bg-card-bg p-8">
                <div
                  className={`mb-6 inline-flex rounded-xl bg-linear-to-br ${service.gradient} p-3 animate-float`}
                  style={{ animationDelay: `${idx}s` }}
                >
                  <service.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                <StaggerList
                  className="space-y-3"
                  baseDelay={300}
                >
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon-blue" />
                      {item}
                    </li>
                  ))}
                </StaggerList>
              </MagneticCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-purple">
            Portfólio
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Projetos que{" "}
            <span className="gradient-text">entregam resultado</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Cada linha de código é pensada para resolver um problema real. Veja
            alguns dos projetos que já transformamos em realidade.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0}>
          <MagneticCard className="card-hover group relative mb-8 overflow-hidden rounded-3xl border border-white/5 bg-card-bg">
            <div className="absolute top-3 left-3 z-10 rounded-full bg-linear-to-r from-neon-blue to-neon-purple px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-black">
              Projeto em Destaque
            </div>
            <ProjectMockup
              type={portfolioItems[0].type}
              title={portfolioItems[0].title}
              tags={portfolioItems[0].tags}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 p-8">
              <div className="max-w-lg text-center">
                <span className="mb-2 inline-block text-[10px] font-medium tracking-wider uppercase text-zinc-500">
                  O PROBLEMA
                </span>
                <p className="mb-4 text-sm text-zinc-300">
                  {portfolioItems[0].problem}
                </p>
                <span className="mb-2 inline-block text-[10px] font-medium tracking-wider uppercase text-neon-green">
                  A SOLUÇÃO
                </span>
                <p className="text-sm text-zinc-100">
                  {portfolioItems[0].solution}
                </p>
              </div>
            </div>
          </MagneticCard>
        </RevealOnScroll>
        <div className="grid gap-6 sm:grid-cols-2">
          {portfolioItems.slice(1).map((item, idx) => (
            <RevealOnScroll key={item.title} delay={idx * 80}>
              <MagneticCard className="card-hover group relative overflow-hidden rounded-2xl border border-white/5 bg-card-bg">
                <ProjectMockup
                  type={item.type}
                  title={item.title}
                  tags={item.tags}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 p-6">
                  <div className="max-w-sm text-center">
                    <span className="mb-2 inline-block text-[10px] font-medium tracking-wider uppercase text-zinc-500">
                      O PROBLEMA
                    </span>
                    <p className="mb-4 text-sm text-zinc-300">
                      {item.problem}
                    </p>
                    <span className="mb-2 inline-block text-[10px] font-medium tracking-wider uppercase text-neon-green">
                      A SOLUÇÃO
                    </span>
                    <p className="text-sm text-zinc-100">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-green">
            Nosso Método
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Como{" "}
            <span className="gradient-text-green">transformamos</span> sua ideia
            em produto
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Um processo transparente e estruturado, do briefing ao deploy. Você
            no controle, sem surpresas.
          </p>
        </RevealOnScroll>
        <div className="relative grid gap-8 md:grid-cols-4">
          <AnimatedLine />
          {methodSteps.map((step, idx) => (
            <RevealOnScroll key={step.number} delay={idx * 120}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="animate-pulse-glow absolute inset-0 rounded-full bg-linear-to-br from-neon-blue/10 to-neon-purple/10" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-card-bg">
                    <step.icon className="h-8 w-8 text-neon-blue" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-neon-blue to-neon-purple text-[10px] font-bold text-black">
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

const pricingPlans = [
  {
    name: "Landing Page",
    price: "de R$ 200 a R$ 500",
    description: "Perfeito para quem quer começar a vender online com uma página de alta conversão.",
    features: [
      "Design personalizado",
      "Responsivo (mobile-first)",
      "Formulário com validação",
      "Integração com WhatsApp",
      "SEO otimizado",
      "Hospedagem 1 ano grátis",
    ],
    gradient: "from-neon-blue to-neon-purple",
    popular: false,
  },
  {
    name: "Sistema Web",
    price: "de R$ 200 a R$ 3.000",
    description: "Ideal para automatizar processos e escalar seu negócio com um sistema sob medida.",
    features: [
      "Painel administrativo",
      "Banco de dados",
      "Autenticação de usuários",
      "API RESTful",
      "Relatórios e gráficos",
      "Suporte 3 meses",
      "Hospedagem 1 ano grátis",
    ],
    gradient: "from-neon-green to-neon-blue",
    popular: true,
  },
  {
    name: "Plataforma Completa",
    price: "Sob Consulta",
    description: "Soluções complexas com IA, múltiplos módulos e escalabilidade para grandes operações.",
    features: [
      "Arquitetura escalável",
      "Múltiplos módulos",
      "IA e automação",
      "Integrações externas",
      "App mobile (opcional)",
      "Suporte prioritário",
      "Treinamento da equipe",
    ],
    gradient: "from-neon-purple to-neon-blue",
    popular: false,
  },
];

const blogPosts = [
  {
    slug: "landing-page-que-converte",
    title: "Landing Page que Converte: 7 Elementos Essenciais",
    excerpt: "Descubra os elementos que toda landing page de alta conversão precisa ter.",
    date: "06 Jul 2026",
    tags: ["Landing Page", "Conversão"],
  },
  {
    slug: "sistema-sob-medida-vs-sistema-pronto",
    title: "Sistema Sob Medida vs. Sistema Pronto",
    excerpt: "Entenda as diferenças e descubra qual é a melhor opção para o seu negócio.",
    date: "28 Jun 2026",
    tags: ["Sistemas", "Tecnologia"],
  },
  {
    slug: "automacao-processos-pequenas-empresas",
    title: "Automação para Pequenas Empresas",
    excerpt: "Como a automação pode reduzir custos e aumentar a produtividade do seu negócio.",
    date: "15 Jun 2026",
    tags: ["Automação", "Produtividade"],
  },
];

function Pricing() {
  return (
    <section id="precos" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-green">
            Investimento
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Planos que cabem no{" "}
            <span className="gradient-text-green">seu bolso</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Preços justos e transparentes. Sem letras miúdas, sem taxas
            escondidas. Do briefing ao deploy, você sabe exatamente o que está
            pagando.
          </p>
        </RevealOnScroll>
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <RevealOnScroll key={plan.name} delay={idx * 100}>
              <MagneticCard
                className={`card-hover group relative rounded-2xl border bg-card-bg p-8 ${
                  plan.popular
                    ? "border-neon-blue/30 shadow-[0_0_30px_rgba(56,189,248,0.1)]"
                    : "border-white/5"
                }`}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${plan.gradient} p-2.5`}
                >
                  <DollarSign className="h-5 w-5 text-black" />
                </div>
                <h3 className="mb-1 text-xl font-bold">{plan.name}</h3>
                <p className="mb-1 text-2xl font-bold text-neon-blue">
                  {plan.price}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-zinc-500">
                  {plan.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-green" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <RippleButton className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
                  <a href="#contato" className="flex items-center gap-2">
                    Solicitar Proposta
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </RippleButton>
              </MagneticCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-neon-purple">
            Blog
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Conteúdo que{" "}
            <span className="gradient-text">transforma</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Artigos sobre tecnologia, desenvolvimento e estratégias digitais
            para ajudar seu negócio a crescer.
          </p>
        </RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <RevealOnScroll key={post.slug} delay={idx * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-hover group block rounded-2xl border border-white/5 bg-card-bg p-6"
              >
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-linear-to-br from-neon-blue/10 to-neon-purple/10">
                  <BookOpen className="h-10 w-10 text-neon-blue/40" />
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
                <h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-neon-blue">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                  {post.excerpt}
                </p>
                <span className="text-xs text-zinc-600">{post.date}</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neon-blue transition-colors hover:text-neon-blue/80"
            >
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
          <div className="mt-16 rounded-2xl border border-white/5 bg-card-bg p-8 text-center">
            <h3 className="mb-2 text-lg font-semibold">
              Receba conteúdos exclusivos
            </h3>
            <p className="mb-6 text-sm text-zinc-500">
              Dicas de tecnologia, desenvolvimento e estratégias digitais direto
              no seu e-mail. Sem spam, só conteúdo útil.
            </p>
            <NewsletterForm />
          </div>
        </RevealOnScroll>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

const faqItems = [
  {
    q: "Quanto tempo leva para desenvolver meu projeto?",
    a: "Depende da complexidade. Landing pages ficam prontas em 5 a 10 dias úteis. Sistemas web levam de 2 a 8 semanas. Durante o briefing inicial damos um prazo exato.",
  },
  {
    q: "Preciso ter um domínio ou hospedagem?",
    a: "Não. Cuidamos de tudo: domínio, hospedagem, SSL e configuração. Você só precisa do seu negócio funcionando.",
  },
  {
    q: "Vocês fazem manutenção após a entrega?",
    a: "Sim. Oferecemos suporte por 1 a 3 meses incluso no projeto, e planos de manutenção contínua para quem precisa de atualizações frequentes.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalhamos com pagamento parcelado: 50% no início e 50% na entrega. Para projetos maiores, parcelamos em até 6x.",
  },
  {
    q: "O que preciso fornecer para começar?",
    a: "Apenas suas ideias e objetivos. No briefing inicial alinhamos tudo: identidade visual, funcionalidades, público-alvo e metas.",
  },
  {
    q: "Vocês desenvolvem apps mobile também?",
    a: "Sim! Dentro do plano Plataforma Completa, podemos incluir versão mobile (Android e iOS) usando React Native, compartilhando código com o sistema web.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-3xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-zinc-500">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Dúvidas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Respondemos as perguntas mais comuns antes de você precisar perguntar.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-card-bg transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {item.q}
                    <svg
                      className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="border-t border-white/5 px-6 py-5 text-sm leading-relaxed text-zinc-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
      <div className="web-line absolute bottom-0 left-10 right-10" />
    </section>
  );
}

function Contact() {
  const fire = useConfetti();

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Nome é obrigatório";
    if (!form.email.trim()) errs.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "E-mail inválido";
    if (!form.whatsapp.trim()) errs.whatsapp = "WhatsApp é obrigatório";
    else if (!/^[\d\s\-\+\(\)]{8,}$/.test(form.whatsapp.replace(/\s/g, "")))
      errs.whatsapp = "Telefone inválido";
    if (!form.message.trim()) errs.message = "Mensagem é obrigatória";
    return errs;
  }, [form]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const errs = validate();
      setErrors(errs);

      if (Object.keys(errs).length > 0) return;

      setStatus("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();

        if (data.success) {
          fire();
          window.location.href = "/obrigado";
        } else {
          setStatus("error");
          setServerMsg(data.message || "Erro ao enviar. Tente novamente.");
          if (data.errors) setErrors(data.errors);
        }
      } catch {
        setStatus("error");
        setServerMsg("Erro de conexão. Tente novamente.");
      }
    },
    [form, validate, fire]
  );

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const whatsappNum = process.env.NEXT_PUBLIC_WHATSAPP || "5511999999999";

  return (
    <section id="contato" className="relative py-28">
      <div className="web-line absolute top-0 left-10 right-10" />
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Vamos tirar seu projeto{" "}
            <span className="gradient-text">do papel?</span>
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Conte-nos sobre sua ideia. Em até 48 horas você recebe uma proposta
            personalizada.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <form
            onSubmit={handleSubmit}
            className="neon-border mx-auto max-w-2xl rounded-2xl border border-white/5 bg-card-bg p-8"
          >
            {status === "success" && (
              <div className="mb-6 rounded-xl border border-neon-green/20 bg-neon-green/5 p-4 text-center text-sm text-neon-green">
                {serverMsg}
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400">
                {serverMsg}
              </div>
            )}
            <div className="mb-5 grid gap-5 sm:grid-cols-2">
              <FloatingInput
                id="name"
                label="Nome"
                type="text"
                required
                value={form.name}
                error={errors.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
              <FloatingInput
                id="email"
                label="E-mail"
                type="email"
                required
                value={form.email}
                error={errors.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>
            <div className="mb-5">
              <FloatingInput
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                required
                value={form.whatsapp}
                error={errors.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
              />
            </div>
            <div className="mb-5">
              <FloatingTextarea
                id="message"
                label="Fale um pouco sobre o seu projeto"
                rows={4}
                required
                value={form.message}
                error={errors.message}
                onChange={(e) => updateField("message", e.target.value)}
              />
            </div>
            <RippleButton
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar Proposta"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </RippleButton>
          </form>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-zinc-500">
              Ou fale diretamente conosco
            </p>
            <a
              href={`https://wa.me/${whatsappNum}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20SpiderTech.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-6 py-3 text-sm font-medium text-neon-green transition-all hover:bg-neon-green/10"
              aria-label="Falar no WhatsApp"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Method />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
