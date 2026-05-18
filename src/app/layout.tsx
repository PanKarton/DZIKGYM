import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Nav";
import SvgDefs from "@/components/SvgDefs/SvgDefs";
import Copyrights from "@/components/layouts/Copyrights";
import Footer from "@/components/layouts/Footer";
import { myFontConfig } from "@/fonts/Obviously/obviously";
import { siteConfig } from "./config/site";
import { Providers } from "@/components/providers/providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title.default,
    template: siteConfig.title.template,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  openGraph: {
    title: siteConfig.title.default,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${myFontConfig.variable} antialiased`}>
        <SvgDefs />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        <Copyrights />
        <Analytics />
      </body>
    </html>
  );
}
