import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Quicksand, Baloo_2 } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimationProvider from "@/components/AnimationProvider";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo2-var",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mercadomais.vercel.app/",
  ),
  title: {
    default: "MERCADO +MAIS — O Mercado Completo do Seu Bairro",
    template: "%s | MERCADO +MAIS",
  },
  description:
    "Encontre carnes nobres no açougue, pães quentes na padaria, hortifrúti fresco todo dia e uma seleção completa de bebidas. O mercado ideal para as compras da sua família em Campo Grande – MS.",
  // Adicione este bloco de ícones abaixo:
  icons: {
    icon: "/brand/logo-mercadomais.jpg", // Caminho para o ícone padrão da aba
    shortcut: "/brand/logo-mercadomais.jpg",
    apple: "/brand/logo-mercadomais.jpg", // Ícone para dispositivos iOS (opcional)
  },
  keywords: [
    "mercado mais",
    "mercado +mais",
    "açougue campo grande",
    "padaria campo grande",
    "hortifrúti",
    "bebidas",
    "encarte de ofertas",
    "supermercado bairro",
    "Rita Vieira",
    "Jardim Paulista",
    "Campo Grande MS",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MERCADO +MAIS",
    images: [
      {
        url: "/assets/hero/fachada(1).jpg",
        width: 1200,
        height: 630,
        alt: "MERCADO +MAIS — Completo para você",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/hero/fachada(1).jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${quicksand.variable} ${baloo2.variable}`}
    >
      <body className="bg-brand-bg text-brand-deep font-sans antialiased">
        <AnimationProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
