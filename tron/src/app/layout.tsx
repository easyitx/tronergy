import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/widgets/Header/Header";
import { cn } from "@/shared/lib/utils";
import { interTight } from "@/shared/lib/fonts";
import Footer from "@/widgets/Footer/Footer";
import { Spacing } from "@/shared/ui/Spacing";
import TronEnergy from "@/widgets/TronEnergy/TronEnergy";
import { FAQ } from "@/widgets/FAQ/FAQ";
import { WhyChooseUs } from "@/widgets/WhyChooseUs/WhyChooseUs";
import { AppProvider } from "./providers";
import Image from "next/image";
import bgFilterSvg from "@/shared/assets/images/background-filter.svg";

const keywords = [
    "купить энергию TRON",
    "аренда энергии TRX",
    "энергия Tron купить",
    "снижение комиссий USDT TRON",
    "экономия TRX на комиссиях",
    "TRON энергия аренда",
    "USDT комиссии TRON",
    "энергия Tron цена",
    "аренда TRX энергии",
    "Tron сеть комиссии",
    "криптовалютные комиссии",
    "TRON переводы USDT",
    "энергия Tron за USDT",
    "дешевые переводы TRON"
];

const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TRONERGY",
    "description": "Аренда энергии TRON для снижения комиссий при транзакциях USDT. Экономьте до 80% на комиссиях в сети TRON.",
    "url": "https://tronergy.pro",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tronergy.pro/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TRONERGY",
    "description": "Сервис аренды энергии TRON для снижения комиссий при транзакциях USDT",
    "url": "https://tronergy.pro",
    "logo": "https://tronergy.pro/logo.svg",
    "sameAs": []
};

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://tronergy.pro"
    ),
    title: {
        default: "TRONERGY — Купить энергию TRON | Аренда энергии TRX для снижения комиссий USDT",
        template: "%s | TRONERGY — Аренда энергии TRON",
    },
    description: "Купить энергию TRON для снижения комиссий USDT. Аренда энергии TRX с экономией до 80% на комиссиях в сети TRON. Русскоязычная поддержка 24/7. Быстрое пополнение энергии.",
    keywords: keywords.join(", "),
    alternates: {
        canonical: "/",
        languages: {
            'ru': '/',
        }
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        siteName: "TRONERGY",
        title: "TRONERGY — Купить энергию TRON | Аренда энергии TRX для снижения комиссий USDT",
        description: "Купить энергию TRON для снижения комиссий USDT. Аренда энергии TRX с экономией до 80% на комиссиях в сети TRON. Русскоязычная поддержка 24/7.",
        url: "/",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "TRONERGY - Аренда энергии TRON для снижения комиссий USDT",
                type: "image/png"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@tronergy",
        creator: "@tronergy",
        title: "TRONERGY — Купить энергию TRON | Аренда энергии TRX",
        description: "Купить энергию TRON для снижения комиссий USDT. Экономия до 80% на комиссиях в сети TRON.",
        images: ["/og.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    verification: {
        // yandex: "",
        // google: "",
    },
    category: "cryptocurrency",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#0b0b0b",
    colorScheme: "dark",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru" dir="ltr" itemScope itemType="https://schema.org/WebPage">
        <head>

            <link type="image/x-icon" rel="shortcut icon" href="./favicon.ico"/>

            <link type="image/png" sizes="16x16" rel="icon" href="/icons/favicon-16x16.png"/>
            <link type="image/png" sizes="32x32" rel="icon" href="/icons/favicon-32x32.png"/>
            <link type="image/png" sizes="96x96" rel="icon" href="/icons/favicon-96x96.png"/>
            <link type="image/png" sizes="120x120" rel="icon" href="/icons/favicon-120x120.png"/>

            <link type="image/png" sizes="72x72" rel="icon" href="/icons/android-icon-72x72.png"/>
            <link type="image/png" sizes="96x96" rel="icon" href="/icons/android-icon-96x96.png"/>
            <link type="image/png" sizes="144x144" rel="icon" href="/icons/android-icon-144x144.png"/>
            <link type="image/png" sizes="192x192" rel="icon" href="/icons/android-icon-192x192.png"/>
            <link type="image/png" sizes="512x512" rel="icon" href="/icons/android-icon-512x512.png"/>
            <link rel="manifest" href="/manifest.json"/>

            <link sizes="57x57" rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png"/>
            <link sizes="60x60" rel="apple-touch-icon" href="/icons/apple-touch-icon-60x60.png"/>
            <link sizes="72x72" rel="apple-touch-icon" href="/icons/apple-touch-icon-72x72.png"/>
            <link sizes="76x76" rel="apple-touch-icon" href="/icons/apple-touch-icon-76x76.png"/>
            <link sizes="114x114" rel="apple-touch-icon" href="/icons/apple-touch-icon-114x114.png"/>
            <link sizes="120x120" rel="apple-touch-icon" href="/icons/apple-touch-icon-120x120.png"/>
            <link sizes="144x144" rel="apple-touch-icon" href="/icons/apple-touch-icon-144x144.png"/>
            <link sizes="152x152" rel="apple-touch-icon" href="/icons/apple-touch-icon-152x152.png"/>
            <link sizes="180x180" rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png"/>

            <meta name="msapplication-TileColor" content="#2b5797"/>
            <meta name="msapplication-TileImage" content="./mstile-144x144.png"/>
            <meta name="msapplication-square70x70logo" content="./mstile-70x70.png"/>
            <meta name="msapplication-square150x150logo" content="./mstile-150x150.png"/>
            <meta name="msapplication-wide310x150logo" content="./mstile-310x310.png"/>
            <meta name="msapplication-square310x310logo" content="./mstile-310x150.png"/>
            <meta name="application-name" content="Tronergy"/>
            <meta name="msapplication-config" content="./browserconfig.xml"/>

        </head>

        <body className={cn("pt-6 m-0", interTight.variable)}>
        {/* Добавляем структурированные данные для сайта и организации */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteStructuredData)}}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(organizationStructuredData)}}
        />

        {/* Блок с фоном - улучшенная доступность */}
        <div
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65vh]"
            aria-hidden="true"
            role="presentation"
        >
            <Image
                src={bgFilterSvg}
                alt=""
                fill
                className="object-cover"
                priority // Добавляем приоритетную загрузку для LCP
            />
        </div>

        {/* Основной контент с правильной семантикой */}
        <AppProvider>
            <Header className="app-container h-15"/>
            <Spacing size="4xl" direction="vertical"/>

            <main id="main-content" role="main">
                <TronEnergy className="app-container"/>
                <Spacing size="4xl" direction="vertical"/>
                <FAQ className="app-container"/>
                <Spacing size="4xl" direction="vertical"/>
                <WhyChooseUs className="app-container"/>
            </main>

            <Spacing size="4xl" direction="vertical"/>
            <Footer/>
        </AppProvider>

        {/* Schema.org для BreadcrumbList (можно динамически генерировать) */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Главная",
                            "item": "https://tronergy.pro"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Аренда энергии TRON",
                            "item": "https://tronergy.pro/tron-energy"
                        }
                    ]
                })
            }}
        />
        </body>
        </html>
    );
}