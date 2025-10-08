import React from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";
import { Spacing } from "@/shared/ui/Spacing";
import Calculator from "../Calculator/Calculator";
import Adress from "../Adress/Adress";
import Wallet from "../Wallet/Wallet";

const energyRentalStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Аренда энергии TRON",
    "description": "Покупка и аренда энергии TRON для снижения комиссий при транзакциях USDT в сети TRON. Экономия до 80% на комиссиях.",
    "provider": {
        "@type": "Organization",
        "name": "TRONERGY"
    },
    "areaServed": "Россия и СНГ",
    "serviceType": "Криптовалютные услуги"
};

interface TronEnergyProps {
    className?: string;
}

const TronEnergy = ({ className }: TronEnergyProps) => {
    return (
        <section
            className={className}
            itemScope
            itemType="https://schema.org/Service"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(energyRentalStructuredData) }}
            />

            <div className="w-full flex justify-center">
                <Title>Пополни энергию TRON</Title>
            </div>

            <Spacing size="2xl" direction="vertical" />

            <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-2 text-center">
                    <Typography
                        variant="h1"
                        className="text-accent text-2xl font-medium"
                    >
                        Купить энергию TRON
                    </Typography>
                    <Typography
                        variant="h2"
                        className="text-foreground text-lg font-normal"
                    >
                        Снижение комиссий USDT в сети TRON
                        <br />
                        <strong>Экономьте до 80% на комиссиях</strong> за переводы USDT
                    </Typography>
                </header>
            </div>

            <Spacing size="2xl" direction="vertical" />

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                itemProp="hasOfferCatalog"
                itemScope
                itemType="https://schema.org/OfferCatalog"
            >
                <Calculator className="w-full h-full" />
                <Adress className="w-full h-full" />
                <Wallet className="w-full h-full md:col-span-2 lg:col-span-1" />
            </div>
        </section>
    );
};

export default TronEnergy;