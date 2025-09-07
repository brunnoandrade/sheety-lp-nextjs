export const siteConfig = {
  name: "",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  title: "",
  description: "",
  author: "",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL &&
    new URL(process.env.NEXT_PUBLIC_SITE_URL),
  keywords: [],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  openGraph: {
    title: "",
    description: "",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "",
    description: "",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@",
  },
};

export type SiteConfig = typeof siteConfig;
