import { cn } from "@/shared/lib/utils";
import React from "react";
import { Icon } from "@/shared/ui/Icon/Icon";
import Logo from "@/widgets/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "@/shared/ui/Button/Button";
import { Typography } from "@/shared/ui/Typography";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full py-12 bg-background", className)}>
      <div className="flex flex-col items-center gap-8">
        <div className="w-[140px]">
          <Logo />
        </div>

        <Typography variant="body" className="text-center">
          Покупка энергии Tron через API <br /> Если у вас есть свои сценарии,
          мы также предоставляем стабильный API для энергии, чтобы максимально
          поддерживать ваш бизнес.
          <br /> Свяжитесь с нами и мы с радостью обсудим ваши потребности.
        </Typography>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Button variant="icon" size="lg">
            <Icon name="telegram" size={20} />
          </Button>
          <Button variant="icon" size="lg">
            <Icon name="vk-icon" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
