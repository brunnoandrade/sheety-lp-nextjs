export const siteConfig = {
  name: "Sheety",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  title: "Sheety | Transforme suas planilhas em sistemas inteligentes",
  description:
    "O Sheety transforma suas planilhas em sistemas completos com dashboards, relatórios e automações. Deixe o Excel de lado e crie insights em minutos, sem precisar programar.",
  author: "Sheety",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL &&
    new URL(process.env.NEXT_PUBLIC_SITE_URL),
  keywords: [
    "planilhas",
    "sistemas",
    "dashboard",
    "relatórios automáticos",
    "business intelligence",
    "no-code",
    "Excel",
    "Google Sheets",
    "gestão de dados",
    "automação de planilhas",
    "Sheety",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  openGraph: {
    title: "Sheety | Transforme suas planilhas em sistemas inteligentes",
    description:
      "Converta planilhas em dashboards e relatórios automáticos. O Sheety é a forma mais rápida e simples de dar vida aos seus dados.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Sheety",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sheety - Transforme suas planilhas em sistemas inteligentes",
      },
    ],
    locale: "pt_BR",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Sheety | Transforme suas planilhas em sistemas inteligentes",
    description:
      "Do Excel ao dashboard em segundos. Gere relatórios, gráficos e insights automáticos com o Sheety.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@Sheety",
  },
};

export type SiteConfig = typeof siteConfig;
