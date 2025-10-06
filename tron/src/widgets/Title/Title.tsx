import React from "react";
import { cn } from "@/shared/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return (
    <div
      className={cn(
        "card  border text-primary w-fit rounded-full glass px-8 py-2  text-center font-medium text-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
