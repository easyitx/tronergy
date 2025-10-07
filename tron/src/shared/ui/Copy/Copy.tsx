"use client";
import React, { useState } from "react";
import Button from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { cn } from "@/shared/lib/utils";
import { Typography } from "../Typography";

type CopyProps = {
  value: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  onCopied?: () => void;
  shape?: "circle" | "square";
  iconSize?: number;
};

export default function Copy({
  value,
  className,
  size = "md",
  onCopied,
  shape = "square",
  iconSize = 28,
}: CopyProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      window.setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  };

  return (
    <button
      className={cn(
        "relative w-full cursor-pointer card glassflex rounded-md   px-2  h-15 items-center gap-2",
        className
      )}
    >
      <Typography
        variant="body"
        className={cn(
          "text-foreground text-left  font-medium text-base overflow-auto scrollbar-hide"
        )}
        style={{
          width: `calc(100% - ${iconSize}px - 2rem)`,
        }}
      >
        {value}
      </Typography>

      <div className="absolute bg-accent  rounded-md p-2 right-2 top-1/2 -translate-y-1/2">
        {<Icon name="copy" size={iconSize} className=" text-background " />}
      </div>
    </button>
  );
}
