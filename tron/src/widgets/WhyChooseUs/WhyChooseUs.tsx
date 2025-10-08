import React from "react";
import { cn } from "@/shared/lib/utils";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Typography } from "@/shared/ui/Typography";
import Title from "../Title/Title";
import { Spacing } from "@/shared/ui/Spacing";

type WhyChooseUsItem = {
  title: string;
  subtitle: string;
  icon?: { name: Parameters<typeof Icon>[0]["name"]; bg?: string };
};

const defaultItems: WhyChooseUsItem[] = [
  {
    title: "Низкая комиссия",
    subtitle: "Предлагаем конкурентные условия на рынке",
    icon: { name: "discount-circle" },
  },
  {
    title: "Скорость",
    subtitle: "Мгновенное получение энергии",
    icon: { name: "flash" },
  },
  {
    title: "Гибкость",
    subtitle: "Эксклюзивные условия для наших клиентов",
    icon: { name: "trade" },
  },
  {
    title: "Поддержка 24/7",
    subtitle: "Поможем решить любой вопрос оперативно",
    icon: { name: "headphone" },
  },
];

export const WhyChooseUs = ({
  className,
  items = defaultItems,
}: {
  className?: string;
  items?: WhyChooseUsItem[];
}) => {
  return (
    <section className={cn("w-full", className)}>
      <div className="w-full flex justify-center">
        <Title>Мы такие одни</Title>
      </div>
      <Spacing size="xl" direction="vertical" />
      <Typography color="accent" className="text-center text-2xl" variant="h2">
        Почему TRONERGY?
      </Typography>
      <Spacing size="xl" direction="vertical" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="card w-full h-full rounded-4xl p-6 md:p-8  flex flex-col gap-3"
          >
            <div className="w-16 card h-16 p-2 rounded-full relative border flex items-center justify-center">
              <div className="absolute left-[-1.5rem] md:left-[-2rem] top-1/2 -translate-y-1/2 -ml-3 h-15 w-3  bg-primary shadow-[0_0_20px_rgba(255,94,24,0.8)] tag-trapezoid rotate-180" />
              <Icon
                name={
                  (item.icon?.name as Parameters<typeof Icon>[0]["name"]) ??
                  "discount-circle"
                }
                className="text-primary h-full w-auto"
              />
            </div>

            <Typography
              variant="h2"
              className="text-accent text-lg md:text-lg font-medium "
            >
              {item.title}
            </Typography>
            <Typography
              variant="body"
              className="text-foreground text-base md:text-base"
            >
              {item.subtitle}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
