import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography";
import React from "react";
import WalletList from "./WalletList";
import placeholder from "@/shared/assets/images/2.5trx.webp";

const Wallet = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-4  h-full flex-col", className)}>
      <div className="flex items-center gap-4">
        <div className="card  text-accent text-lg  w-15 h-15  flex items-center justify-center rounded-full">
          3
        </div>
        <Typography variant="body" className="text-foreground text-lg">
          Получить энергию за 5 сек
        </Typography>
      </div>
      <div className=" card p-6  grow  flex flex-col gap-6">
        <Typography variant="h2" className="text-accent text-lg text-center">
          Доступно для любых кошельков
        </Typography>
        <WalletList
          items={[
            { src: placeholder.src, alt: "MetaMask" },
            { src: placeholder.src, alt: "Trust" },
            { src: placeholder.src, alt: "XDEFI" },
            { src: placeholder.src, alt: "GridPlus" },
            { src: placeholder.src, alt: "Trezor" },
            { src: placeholder.src, alt: "Coinbase" },
            { src: placeholder.src, alt: "Zengo" },
            { src: placeholder.src, alt: "More" },
            { src: placeholder.src },
            { src: placeholder.src },
            { src: placeholder.src },
            { src: placeholder.src },
          ]}
          className="mt-2 "
        />
      </div>
    </div>
  );
};

export default Wallet;
