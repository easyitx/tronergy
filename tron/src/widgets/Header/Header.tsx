"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography/Typography";
import { MobileMenuContent } from "../MobileMenuContent/MobileMenuContent";
import { useModalActions } from "@/app/providers";

const Header = ({ className }: { className?: string }) => {
  const { openModal } = useModalActions();

  const openMobileMenu = () => {
    openModal({
      component: MobileMenuContent,
      size: "full",
      closeOnOverlayClick: true,
      showCloseButton: true,
    });
  };
  return (
    <header className={cn("flex   items-center justify-between", className)}>
      <div className="h-full p-2 w-[155px]">
        <Logo />
      </div>
      <div className=" not-md:hidden">
        <Navigation />
      </div>

      <Button variant="glass" size="lg" className="rounded-full not-md:hidden">
        <span className=" flex items-center gap-5">
          <Icon name="plus" />
          <Typography variant="body" color="accent">
            Telegram Bot
          </Typography>
        </span>
      </Button>
      <Button
        variant="ghost"
        size="lg"
        onClick={openMobileMenu}
        className="md:hidden"
        aria-label="Toggle mobile menu"
      >
        <Icon name="menu" className="text-foreground" size={24} />
      </Button>
    </header>
  );
};

export default Header;
