import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Kitabisa | %s",
    default: "Kitabisa | Bimbel Terpercaya",
  },
  description:
    "Kitabisa adalah platform modern untuk layanan bimbingan belajar terpercaya. Didesain untuk memberikan pengalaman belajar yang nyaman dan hasil maksimal.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://bimbel-terpercaya.com/"), 
  openGraph: {
    title: "Kitabisa | Bimbel Terpercaya",
    siteName: "Kitabisa | Bimbel Terpercaya",
    description:
      "Kitabisa adalah platform modern untuk layanan bimbingan belajar terpercaya. Didesain untuk memberikan pengalaman belajar yang nyaman dan hasil maksimal.",
    url: "https://bimbel-terpercaya.com/", 
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Kitabisa | Bimbel Terpercaya",
      },
    ],
  },
  twitter: {
    title: "Kitabisa | Bimbel Terpercaya",
    creator: "@akunTwitterAnda", 
    site: "@akunTwitterAnda", 
    description:
      "Kitabisa adalah platform modern untuk layanan bimbingan belajar terpercaya. Didesain untuk memberikan pengalaman belajar yang nyaman dan hasil maksimal.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Kitabisa | Bimbel Terpercaya",
      },
    ],
  },
  alternates: {
    canonical: "https://bimbel-terpercaya.com/", 
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="id"> {/* Ganti bahasa ke 'id' */}
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
