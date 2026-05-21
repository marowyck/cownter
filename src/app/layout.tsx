import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COWNTER — O Organizador Inteligente da Sua Fazenda",
  description:
    "Gerencie animais, estoque, vacinações, geocercas e muito mais. A plataforma completa para pequenas, médias e grandes propriedades rurais.",
  keywords: ["fazenda", "gestão rural", "bovinos", "animais", "pecuária", "agronegócio"],
  openGraph: {
    title: "COWNTER",
    description: "O Organizador Inteligente da Sua Fazenda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="grain">
      <body className="bg-cream text-dark antialiased">{children}</body>
    </html>
  );
}
