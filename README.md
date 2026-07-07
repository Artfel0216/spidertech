# SpiderTech 🕷️

Site institucional da SpiderTech — desenvolvimento de sistemas sob medida e landing pages de alta conversão.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Ícones:** Lucide React
- **Tipografia:** Inter (via next/font)
- **Linguagem:** TypeScript

## Funcionalidades

- Página inicial com Hero, Serviços, Portfólio, Método, Preços, Blog e Contato
- Página "Quem Somos" com missão, visão, valores e timeline
- Blog com artigos sobre tecnologia e desenvolvimento
- Formulário de contato com validação e envio de e-mail via SMTP
- Integração com WhatsApp
- Animações e partículas interativas
- SEO otimizado (sitemap, robots.txt, Open Graph, Schema)
- Analytics via Google Tag Manager (GA4)

## Variáveis de Ambiente

Copie `.env.local` e preencha:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL do site (ex: `https://spidertech.dev`) |
| `NEXT_PUBLIC_WHATSAPP` | Número do WhatsApp com DDI (ex: `5511999999999`) |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics (opcional) |
| `SMTP_HOST` | Servidor SMTP para e-mail (opcional) |
| `SMTP_PORT` | Porta SMTP (padrão: 587) |
| `SMTP_USER` | Usuário SMTP |
| `SMTP_PASS` | Senha SMTP |
| `NOTIFICATION_EMAIL` | E-mail que recebe os leads |

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
