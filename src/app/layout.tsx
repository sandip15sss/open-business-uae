import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Business in UAE | Business Setup & Company Formation in Dubai",
  description: "Launch your business in Dubai today. Premier company formation, residency visas, corporate bank accounts, VAT registration, and business advisory services in the UAE.",
  keywords: "business setup uae, company formation dubai, dubai freezone license, mainland company setup, open company dubai, residency visa uae, corporate bank account dubai",
  authors: [{ name: "Open Business in UAE" }],
  openGraph: {
    title: "Open Business in UAE | Business Setup & Company Formation",
    description: "Launch your business in Dubai today. Premier company formation, residency visas, corporate bank accounts, VAT registration, and business advisory services in the UAE.",
    type: "website",
    locale: "en_US",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-warm font-sans text-text-dark selection:bg-luxury-gold/30 selection:text-primary-navy">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
