export const siteConfig = {
  name: "Bolicover",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  title: "Bolicover - Create cool covers for your playlists",
  description:
    "Design covers for music in seconds. Fast, modern, and ready to export. Perfect for Spotify, Apple Music, YouTube, Deezer, SoundCloud and more.",
  author: "Bruno Andrade",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL &&
    new URL(process.env.NEXT_PUBLIC_SITE_URL),
  keywords: [
    "playlist cover generator",
    "Spotify cover art",
    "Apple Music cover",
    "YouTube thumbnail creator",
    "Deezer playlist cover",
    "SoundCloud cover",
    "make playlist artwork",
    "custom music cover tool",
    "free album art maker",
    "music artwork generator",
    "stylish playlist designs",
    "create cover for playlists",
    "Bolicover",
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
    title: "Bolicover - Create cool covers for your playlists",
    description:
      "Design covers for music in seconds. Fast, modern, and ready to export. Perfect for Spotify, Apple Music, YouTube, Deezer, SoundCloud and more.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Bolicover",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bolicover - Create cool covers for your playlists",
      },
    ],
    locale: "en_US",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Bolicover - Create cool covers for your playlists",
    description:
      "Design covers for music in seconds. Fast, modern, and ready to export. Perfect for Spotify, Apple Music, YouTube, Deezer, SoundCloud and more.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@bolicover",
  },
};

export type SiteConfig = typeof siteConfig;
