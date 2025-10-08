"use client";
import { cn } from "@/shared/lib/utils";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Slider } from "@/shared/ui/Slider";
import { Typography } from "@/shared/ui/Typography";
import React, { useState } from "react";

const Calculator = ({ className }: { className?: string }) => {
  const [transationsCount, setTransationsCount] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <div className={cn("flex gap-4  flex-col", className)}>
      <div className="flex items-center gap-4">
        <div className="card text-accent text-lg  w-15 h-15  flex items-center justify-center rounded-full">
          1
        </div>
        <Typography variant="body" className="text-foreground text-lg">
          Расчитать энергию
        </Typography>
      </div>
      <div className="glass card grow p-6 w-full  flex flex-col gap-4">
        <Typography variant="h2" className="text-accent text-lg text-center">
          Калькулятор энергии
        </Typography>
        <Typography
          variant="body"
          className="text-foreground text-md text-center"
        >
          Количество транзакций:
          <Typography
            as="span"
            variant="body"
            className="text-primary text-lg ml-2"
          >
            {transationsCount}
          </Typography>
        </Typography>

        <Slider
          min={1}
          max={10}
          value={[transationsCount]}
          onValueChange={(value) => setTransationsCount(value[0])}
        />
        <Checkbox
          className="text-foreground"
          checked={isConfirmed}
          onCheckedChange={setIsConfirmed}
        >
          <Typography variant="body" className="text-foreground text-sm">
            На адресе получателя не USDT
          </Typography>
        </Checkbox>

        <div className="w-full flex justify-between">
          <Typography variant="body" className="text-foreground text-base">
            Необходимо отправить:
          </Typography>
          <Typography
            variant="body"
            className="text-primary font-bold text-base"
          >
            100 TRX
          </Typography>
        </div>

        <div className="w-full flex justify-between">
          <Typography variant="body" className="text-foreground text-base">
            Вы сэкономите:
          </Typography>
          <Typography
            variant="body"
            className="text-foreground font-bold text-base"
          >
            100 TRX
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
