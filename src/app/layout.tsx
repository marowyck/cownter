import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Fonte moderna e amigável para títulos e destaques
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Fonte neutra e super legível para textos e dados do painel
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COWNTER | Gestão Inteligente de Fazendas",
  description: "Organize sua fazenda, controle seu rebanho e conecte-se com o futuro do agronegócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-cownter-50 text-foreground">
        {children}
      </body>
    </html>
  );
}