"use client";

import Button from "@/shared/ui/Button/Button";
import { Typography } from "@/shared/ui/Typography";

export const navigationConfig = [
  { label: "Главная", href: "#replenishment" },
  { label: "О нас", href: "#faq" },
  { label: "Контакты", href: "#guide" },
] as const;

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

export default function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-5">
        {navigationConfig.map((item) => (
          <li key={item.href}>
            <Button
              onClick={() => scrollToSection(item.href)}
              className="text-accent hover:text-accent/80 transition-colors cursor-pointer"
              variant="ghost"
            >
              <Typography variant="body" className="text-accent ">
                {item.label}
              </Typography>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
