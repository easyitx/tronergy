import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography/Typography";

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={cn("flex  items-center justify-between", className)}>
      <Logo />
      <Navigation />
      <Button variant="glass" size="lg" className="rounded-full">
        <span className=" flex items-center gap-5">
          <Icon name="plus" />
          <Typography variant="body" color="accent">
            Telegram Bot
          </Typography>
        </span>
      </Button>
    </header>
  );
};

export default Header;
