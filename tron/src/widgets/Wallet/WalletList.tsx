import React from "react";
import { cn } from "@/shared/lib/utils";
import WalletItem from "./WalletItem";

type WalletListProps = {
  items: Array<{ src: string; alt?: string }>; // пока только src
  className?: string;
};

export default function WalletList({ items, className }: WalletListProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-wrap gap-2 md:gap-4 justify-center ",
        className
      )}
    >
      {items.map((it, idx) => (
        <WalletItem
          className="w-20 h-20 "
          key={`${it.alt ?? "wallet"}-${idx}`}
          src={it.src}
          alt={it.alt}
        />
      ))}
    </div>
  );
}
