import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/Header/Header";
import { cn } from "@/shared/lib/utils";
import { interTight } from "@/shared/lib/fonts";
import Footer from "@/widgets/Footer/Footer";
import Title from "@/widgets/Title/Title";
import { Spacing } from "@/shared/ui/Spacing";
import TronEnergy from "@/widgets/TronEnergy/TronEnergy";
import { FAQ } from "@/widgets/FAQ/FAQ";
import { WhyChooseUs } from "@/widgets/WhyChooseUs/WhyChooseUs";
import { AppProvider } from "./providers";
import Image from "next/image";
import bgFilterSvg from "@/shared/assets/images/background-filter.svg";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tronergy.ru"
  ),
  title: {
    default: "TRONERGY — Пополнение энергии TRON",
    template: "%s — TRONERGY",
  },
  description:
    "Быстрое пополнение энергии TRON. Низкая комиссия, гибкие условия, поддержка 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "TRONERGY — пополни энергию TRON",
    description: "Быстро, удобно, безопасно.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TRONERGY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRONERGY",
    description: "Быстрое пополнение энергии TRON",
    images: ["/og.png"],
  },
  viewport: { width: "device-width", initialScale: 1, maximumScale: 5 },
  themeColor: "#0b0b0b",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn("pt-6 m-0", interTight.variable)}>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65vh]">
          <Image
            src={bgFilterSvg}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <AppProvider>
          <Header className="app-container h-15" />
          <Spacing size="4xl" direction="vertical" />

          <TronEnergy className="app-container" />
          <Spacing size="4xl" direction="vertical" />
          <FAQ className="app-container" />
          <Spacing size="4xl" direction="vertical" />
          <WhyChooseUs className="app-container" />
          <Spacing size="4xl" direction="vertical" />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
