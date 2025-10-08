"use client";
import React, { useState } from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";

import { Spacing } from "@/shared/ui/Spacing";

import Calculator from "../Calculator/Calculator";
import Adress from "../Adress/Adress";
import Wallet from "../Wallet/Wallet";

const TronEnergy = ({ className }: { className?: string }) => {
  const TRX_PRICE = 2.5;
  const TRX_DISCOUNT = 14;
  const [transationsCount, setTransationsCount] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const totalPrice = TRX_PRICE * transationsCount;
  const totalDiscount = TRX_DISCOUNT * transationsCount;
  return (
    <section className={className}>
      <div className="w-full flex justify-center ">
        <Title>Пополни энергию</Title>
      </div>

      <Spacing size="2xl" direction="vertical" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <Typography variant="h1" className="text-accent text-2xl font-medium">
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
        <Calculator
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          isConfirmed={isConfirmed}
          transationsCount={transationsCount}
          setTransationsCount={setTransationsCount}
          setIsConfirmed={setIsConfirmed}
          className="w-full h-full"
        />
        <Adress totalPrice={totalPrice} className="w-full h-full" />
        <Wallet className="w-full h-full md:col-span-2 lg:col-span-1" />
      </div>
    </section>
  );
};

export default TronEnergy;
