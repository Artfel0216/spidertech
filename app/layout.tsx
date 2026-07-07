import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieConsent from "./components/cookie-consent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spidertech.dev";

export const metadata: Metadata = {
  title: "SpiderTech | Sistemas Sob Medida & Landing Pages que Convertem",
  description:
    "Transformamos suas ideias em softwares robustos e páginas de alta performance. Sob medida para o seu bolso e para o seu objetivo.",
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "SpiderTech | Tecnologia que faz seu negócio crescer",
    description:
      "Sistemas sob demanda e Landing Pages que convertem. A tecnologia que o seu negócio precisa para crescer.",
    url: baseUrl,
    siteName: "SpiderTech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SpiderTech - Sistemas Sob Medida & Landing Pages que Convertem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiderTech | Tecnologia que faz seu negócio crescer",
    description:
      "Sistemas sob demanda e Landing Pages que convertem. A tecnologia que o seu negócio precisa para crescer.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">
        {children}
        <CookieConsent />
        {gaId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
