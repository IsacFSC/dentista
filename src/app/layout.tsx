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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorrisopremium.vercel.app",
  ),

  title: {
    default: "Sorriso Premium | Clínica Odontológica em Campo Grande - MS",
    template: "%s | Sorriso Premium",
  },

  description:
    "Clínica odontológica em Campo Grande - MS especializada em implantes dentários, ortodontia, alinhadores invisíveis, estética dental e odontologia preventiva. Atendimento humanizado e tecnologia de ponta.",

  applicationName: "Sorriso Premium",

  keywords: [
    "dentista campo grande",
    "clínica odontológica",
    "implantes dentários",
    "ortodontia",
    "alinhadores invisíveis",
    "clareamento dental",
    "lentes de contato dental",
    "odontologia estética",
    "dentista campo grande ms",
    "tratamento odontológico",
    "sorriso premium",
  ],

  authors: [
    {
      name: "Sorriso Premium",
    },
  ],

  creator: "Sorriso Premium",

  publisher: "Sorriso Premium",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/brand/tooth.svg",
    shortcut: "/brand/tooth.svg",
    apple: "/brand/tooth.svg",
  },

  openGraph: {
    title: "Sorriso Premium | Clínica Odontológica em Campo Grande - MS",

    description:
      "Implantes dentários, ortodontia, alinhadores invisíveis e odontologia estética com atendimento humanizado.",

    url:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorrisopremium.vercel.app",

    siteName: "Sorriso Premium",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/brand/doutores.jpg",
        width: 1200,
        height: 630,
        alt: "Equipe da Clínica Sorriso Premium",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sorriso Premium | Clínica Odontológica",

    description:
      "Implantes, ortodontia e odontologia estética em Campo Grande - MS.",

    images: ["/brand/doutores.jpg"],
  },

  category: "health",
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
