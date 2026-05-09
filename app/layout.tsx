import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Autohaus Feldmeier",
    default: "Autohaus Feldmeier in Kallmünz",
  },
  description: "Neu- und Gebrauchtwagen, Werkstatt, HU/AU, Autogas, Finanzierung – zwei Standorte in Kallmünz und Hohenfels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${interTight.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen pb-14 md:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-black p-4 z-[100]">Zum Inhalt springen</a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
