"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import RevealOnScroll from "../../components/reveal-on-scroll";
import RippleButton from "../../components/ripple-button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

const posts: Record<string, { title: string; content: string; date: string }> = {
  "landing-page-que-converte": {
    title: "Landing Page que Converte: 7 Elementos Essenciais",
    date: "06 Jul 2026",
    content: `
      <p>Uma landing page eficiente é a diferença entre um visitante que sai e um que se torna cliente. Aqui estão os 7 elementos que não podem faltar:</p>
      
      <h3>1. Título que prende a atenção</h3>
      <p>Seu título tem 3 segundos para comunicar valor. Seja direto, específico e focado no benefício para o usuário.</p>
      
      <h3>2. Subtítulo de apoio</h3>
      <p>Reforce a proposta do título com uma frase que explique como você resolve o problema do visitante.</p>
      
      <h3>3. Imagem ou vídeo relevante</h3>
      <p>Mostre seu produto ou serviço em ação. Uma imagem vale mais que mil palavras — um vídeo vale mais que mil imagens.</p>
      
      <h3>4. Proposta de valor clara</h3>
      <p>Explique em poucas palavras o que você oferece, para quem é e por que é melhor que as alternativas.</p>
      
      <h3>5. Prova social</h3>
      <p>Depoimentos, números de clientes, cases de sucesso. As pessoas confiam no que outras pessoas já testaram.</p>
      
      <h3>6. Call-to-action (CTA) irresistível</h3>
      <p>Um botão visível, com texto orientado à ação: "Quero Minha Proposta", "Solicitar Orçamento", "Começar Agora".</p>
      
      <h3>7. Formulário simplificado</h3>
      <p>Peça apenas o essencial. Cada campo adicional reduz sua taxa de conversão em média 10%.</p>
      
      <p>Na SpiderTech, aplicamos esses princípios em cada landing page que desenvolvemos. Resultado: páginas que não apenas parecem bonitas — elas vendem.</p>
    `,
  },
  "sistema-sob-medida-vs-sistema-pronto": {
    title: "Sistema Sob Medida vs. Sistema Pronto: Qual escolher?",
    date: "28 Jun 2026",
    content: `
      <p>Uma das decisões mais importantes ao digitalizar um negócio é escolher entre um sistema pronto (de prateleira) ou um sistema desenvolvido sob medida.</p>
      
      <h3>Sistemas Prontos</h3>
      <p><strong>Vantagens:</strong> Menor custo inicial, implementação rápida, já testado por outros usuários.</p>
      <p><strong>Desvantagens:</strong> Funcionalidades genéricas, dificuldade de personalização, dependência do fornecedor, custos recorrentes altos.</p>
      
      <h3>Sistemas Sob Medida</h3>
      <p><strong>Vantagens:</strong> Adaptado 100% ao seu negócio, escalabilidade real, você é dono do código, vantagem competitiva.</p>
      <p><strong>Desvantagens:</strong> Investimento inicial maior, prazo de desenvolvimento.</p>
      
      <h3>Quando escolher cada um?</h3>
      <p>Escolha um sistema pronto se seu processo é exatamente igual ao de todo mundo e você não precisa de diferenciação.</p>
      <p>Escolha um sistema sob medida se seu negócio tem particularidades, você quer escalar sem limitações ou deseja criar um diferencial competitivo via tecnologia.</p>
      
      <p>Na SpiderTech, já ajudamos dezenas de empresas a tomar essa decisão. Agende uma conversa e descubra qual é a melhor opção para o seu caso.</p>
    `,
  },
  "automacao-processos-pequenas-empresas": {
    title: "Automação de Processos para Pequenas Empresas",
    date: "15 Jun 2026",
    content: `
      <p>Muita gente acha que automação é coisa de grande corporação. Mas a verdade é que as pequenas empresas são as que mais se beneficiam dela.</p>
      
      <h3>O que é automação de processos?</h3>
      <p>É o uso de tecnologia para executar tarefas repetitivas sem intervenção humana. Desde o envio automático de e-mails até a gestão integrada de estoque e vendas.</p>
      
      <h3>Onde começar?</h3>
      <p><strong>1. Atendimento ao cliente:</strong> Chatbots e respostas automáticas para perguntas frequentes.</p>
      <p><strong>2. Financeiro:</strong> Emissão automática de boletos, cobranças e conciliação bancária.</p>
      <p><strong>3. Marketing:</strong> Disparo de e-mails segmentados e nutrição de leads automática.</p>
      <p><strong>4. Vendas:</strong> CRM que registra interações e dispara alertas automaticamente.</p>
      
      <h3>Quanto custa?</h3>
      <p>Menos do que você imagina. Uma automação bem planejada se paga em poucos meses com o tempo economizado e o aumento de vendas.</p>
      
      <p>Quer descobrir quais processos do seu negócio podem ser automatizados? Fale conosco para uma análise gratuita.</p>
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold">Post não encontrado</h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-neon-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="relative py-28">
          <div className="mx-auto max-w-3xl px-6">
            <RevealOnScroll>
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao blog
              </Link>
              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                {post.title}
              </h1>
              <p className="mb-12 text-sm text-zinc-600">{post.date}</p>
              <div
                className="prose prose-invert max-w-none space-y-6 text-zinc-300 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="mt-16 rounded-2xl border border-white/5 bg-card-bg p-8 text-center">
                <h3 className="mb-3 text-lg font-semibold">
                  Gostou do conteúdo?
                </h3>
                <p className="mb-6 text-sm text-zinc-400">
                  Transforme suas ideias em soluções reais. Vamos conversar sobre
                  seu projeto.
                </p>
                <RippleButton className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold">
                  <Link
                    href="/#contato"
                    className="flex items-center gap-2"
                  >
                    Solicitar Proposta
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </RippleButton>
              </div>
            </RevealOnScroll>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
