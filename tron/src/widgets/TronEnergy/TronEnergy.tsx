import React from "react";
import Title from "../Title/Title";
import { Typography } from "@/shared/ui/Typography";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Spacing } from "@/shared/ui/Spacing";
import Button from "@/shared/ui/Button/Button";
import { Slider } from "@/shared/ui/Slider";
import { Checkbox } from "@/shared/ui/Checkbox";

const TronEnergy = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Title className="mx-auto">Пополни энергию</Title>
      <Spacing size="2xl" direction="vertical" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <Typography variant="h1" className="text-accent font-medium">
            Энергия TRON
          </Typography>
          <Typography variant="body" className="text-foreground text-lg">
            Неиссякаемая энергия для сети TRON.
            <br /> Легко пополняйте ресурс и работайте без остановки.
          </Typography>
        </div>
      </div>

      <div className="flex w-full justify-between gap-4"></div>
      <div className="flex gap-4 flex-col">
        <div className="flex items-center gap-4">
          <div className="card text-accent  w-15 h-15  flex items-center justify-center rounded-full">
            1
          </div>
          <Typography variant="body" className="text-foreground text-lg">
            Расчитать энергию
          </Typography>
        </div>
        <div className="glass card p-6 w-1/3 h-100 flex flex-col gap-4">
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
              className="text-primary text-lg"
            >
              100
            </Typography>
          </Typography>

          <Slider min={1} max={10} />
          <Checkbox>На адресе получателя не USDT</Checkbox>

          <div className="w-full flex justify-between">
            <Typography variant="body" className="text-foreground text-lg">
              Необходимо отправить:
            </Typography>
            <Typography
              variant="body"
              className="text-primary font-bold text-lg"
            >
              100 TRX
            </Typography>
          </div>

          <div className="w-full flex justify-between">
            <Typography variant="body" className="text-foreground text-lg">
              Вы сэкономите:
            </Typography>
            <Typography
              variant="body"
              className="text-foreground font-bold text-lg"
            >
              100 TRX
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col">
        <div className="flex items-center gap-4">
          <div className="card text-accent  w-15 h-15  flex items-center justify-center rounded-full">
            1
          </div>
          <Typography variant="body" className="text-foreground text-lg">
            Расчитать энергию
          </Typography>
        </div>
        <div className="glass card p-6 w-1/3 h-100 flex flex-col gap-4">
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
              className="text-primary text-lg"
            >
              100
            </Typography>
          </Typography>

          <Slider min={1} max={10} />
          <Checkbox>На адресе получателя не USDT</Checkbox>

          <div className="w-full flex justify-between">
            <Typography variant="body" className="text-foreground text-lg">
              Необходимо отправить:
            </Typography>
            <Typography
              variant="body"
              className="text-primary font-bold text-lg"
            >
              100 TRX
            </Typography>
          </div>

          <div className="w-full flex justify-between">
            <Typography variant="body" className="text-foreground text-lg">
              Вы сэкономите:
            </Typography>
            <Typography
              variant="body"
              className="text-foreground font-bold text-lg"
            >
              100 TRX
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TronEnergy;
