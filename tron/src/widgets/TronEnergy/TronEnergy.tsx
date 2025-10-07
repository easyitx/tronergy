import React from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Spacing } from "@/shared/ui/Spacing";
import Button from "@/shared/ui/Button/Button";
import { Slider } from "@/shared/ui/Slider";
import { Checkbox } from "@/shared/ui/Checkbox";
import Calculator from "../Calculator/Calculator";
import Adress from "../Adress/Adress";
import Wallet from "../Wallet/Wallet";

const TronEnergy = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="w-full flex justify-center ">
        <Title>Пополни энергию</Title>
      </div>

      <Spacing size="2xl" direction="vertical" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <Typography variant="h2" className="text-accent text-2xl font-medium">
            Энергия TRON
          </Typography>
          <Typography variant="h3" className="text-foreground text-lg">
            Неиссякаемая энергия для сети TRON.
            <br /> Легко пополняйте ресурс и работайте без остановки.
          </Typography>
        </div>
      </div>
      <Spacing size="2xl" direction="vertical" />
      <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Calculator className="w-full h-full" />
        <Adress className="w-full h-full" />
        <Wallet className="w-full h-full md:col-span-2 lg:col-span-1" />
      </div>
    </section>
  );
};

export default TronEnergy;
