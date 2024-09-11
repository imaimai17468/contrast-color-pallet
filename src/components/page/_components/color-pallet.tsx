"use client";
import { useMemo } from "react";
import { generateSigmoidData } from "../utils/sigmoid";
import { LightnessChart } from "./lightness-chart";
import { Pallet } from "./pallet";
import { PalletLegend } from "./pallet-legend";
type Props = {
  baseColor: string;
  numberOfColors: number;
};

export const ColorPallet: React.FC<Props> = ({ baseColor, numberOfColors }) => {
  const lightnessList = useMemo(() => {
    return generateSigmoidData(numberOfColors);
  }, [numberOfColors]);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">{baseColor}</p>
        <div className="flex gap-4">
          {lightnessList.map((lightness) => (
            <Pallet key={lightness.x} baseColor={baseColor} lightness={lightness.y} />
          ))}
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <LightnessChart lightnessList={lightnessList} />
        <PalletLegend />
      </div>
    </div>
  );
};
