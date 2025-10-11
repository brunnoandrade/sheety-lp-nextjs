import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import GoogleAnalytics from "@/components/google-analytics";
import { SmartlookAnalytics } from "@/components/smartlook";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: siteConfig.icons.icon,
  },
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.siteName,
    images: siteConfig.openGraph.images,
    locale: siteConfig.openGraph.locale,
    type: siteConfig.openGraph.type,
  },
  twitter: {
    card: siteConfig.twitter.card,
    title: siteConfig.twitter.title,
    description: siteConfig.twitter.description,
    images: siteConfig.twitter.images,
    creator: siteConfig.twitter.creator,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <SmartlookAnalytics />
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
