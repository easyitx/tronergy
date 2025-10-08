import React from "react";
import { Typography } from "@/shared/ui/Typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/Accordion/Accordion";
import { cn } from "@/shared/lib/utils";
import { Spacing } from "@/shared/ui/Spacing";
import Title from "../Title/Title";

const faqData = [
    {
        id: "item-1",
        question: "Как работает аренда энергии TRON в Tronergy?",
        answer: "Укажите количество требуемых транзакций USDT в сети TRON, отметьте наличие USDT на кошельке получателя, переведите указанное количество TRX — энергия автоматически зачислится на ваш адрес для совершения переводов.",
    },
    {
        id: "item-2",
        question: "Что такое энергия в сети TRON и зачем она нужна?",
        answer: `TRON Energy — это специальный ресурс в блокчейне TRON, необходимый для выполнения смарт-контрактов и транзакций с токенами стандарта TRC-20, такими как USDT.

Основные преимущества энергии TRON:

• Снижение комиссий до 80% при переводах USDT
• Автоматическое списание вместо прямых платежей TRX
• Оптимизация стоимости транзакций в сети TRON

Энергия TRON особенно важна для:
- Переводов USDT TRC-20
- Взаимодействия со смарт-контрактами
- Экономии на комиссиях при регулярных транзакциях

Без достаточного количества энергии TRON каждая транзакция USDT будет стоить значительно дороже из-за необходимости прямых выплат комиссии в TRX.`,
    },
    {
        id: "item-3",
        question: "Как сэкономить TRX на транзакциях USDT с Tronergy?",
        answer: `Tronergy позволяет экономить до 82% на комиссиях за счёт аренды энергии TRON вместо покупки и заморозки TRX.

Пример экономии:
• Аренда 132,000 энергии = 5 TRX
• Прямая оплата комиссии = ~28 TRX
• Экономия: 23 TRX (82%)

Преимущества аренды энергии:
✅ Мгновенное получение энергии
✅ Без заморозки TRX на длительный срок
✅ Прозрачная стоимость транзакций
✅ Поддержка 24/7

Это оптимальное решение для регулярных переводов USDT в сети TRON.`,
    },
    {
        id: "item-4",
        question: "Как быстро поставляется энергия TRON в Tronergy?",
        answer: `Энергия TRON доставляется мгновенно — в течение 5-10 секунд после подтверждения оплаты.

Доступные периоды аренды:
• 15 минут (по умолчанию)
• 1 час
• 3 часа
• 24 часа
• 3 дня
• 1 неделя
• 1 месяц

Энергия автоматически зачисляется на ваш кошелёк и доступна для использования сразу после оплаты. Срок действия зависит от выбранного тарифа.`,
    },
    {
        id: "item-5",
        question: "Какие кошельки поддерживает Tronergy для аренды энергии TRON?",
        answer: `Tronergy работает со всеми популярными некастодиальными кошелками:

Поддерживаемые кошельки:
• Trust Wallet
• TronLink
• Ledger
• MetaMask
• Exodus
• Klever
• Atomic Wallet

Важно: Tronergy не работает с биржевыми кошельками (Binance, Bybit, HTX и другими). 

Для Trust Wallet:确保 на балансе должно быть не менее 28 TRX для активации транзакций, даже при наличии энергии.`,
    },
    {
        id: "item-6",
        question: "Сколько энергии TRON нужно для одной транзакции USDT?",
        answer: `Расход энергии зависит от типа транзакции USDT:

• Первый перевод на новый адрес: 130,000-132,000 энергии
• Повторный перевод на существующий адрес: 64,000-66,000 энергии

Калькулятор на сайте Tronergy автоматически рассчитывает необходимое количество энергии на основе ваших потребностей в транзакциях.`,
    },
    {
        id: "item-7",
        question: "Безопасно ли использовать Tronergy для аренды энергии TRON?",
        answer: `Tronergy гарантирует полную безопасность:

🔒 Без доступа к вашим средствам
🔒 Анонимность — не требуем личные данные
🔒 Прозрачные условия аренды
🔒 Мгновенная доставка энергии
🔒 Техническая поддержка 24/7

Мы используем проверенные смарт-контракты и не храним ваши приватные ключи.`,
    }
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
        }
    }))
};

interface FAQProps {
    className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ className }) => {
    return (
        <section
            className={cn("w-full", className)}
            itemScope
            itemType="https://schema.org/FAQPage"
            id="faq"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            <div className="w-full flex justify-center">
                <Title>Частые вопросы по аренде энергии TRON</Title>
            </div>

            <Spacing size="xl" direction="vertical" />

            <Typography
                color="accent"
                className="text-center text-2xl"
                variant="h2"
            >
                Часто задаваемые вопросы
            </Typography>

            <Spacing size="2xl" direction="vertical" />

            <div className="w-full mx-auto">
                <Accordion type="multiple" className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <AccordionTrigger
                                className="text-left data-[state=open]:text-primary text-lg font-semibold hover:text-accent transition-colors"
                                itemProp="name"
                            >
                                <span className="text-base md:text-lg">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <Typography
                                    variant="body"
                                    className="whitespace-pre-line leading-relaxed text-foreground/90"
                                >
                                    {item.answer}
                                </Typography>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};