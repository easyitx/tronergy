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

export const metadata: Metadata = {
  title: "TronEnergy",
  description: "TronEnergy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("pt-6 m-0", interTight.variable)}>
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
