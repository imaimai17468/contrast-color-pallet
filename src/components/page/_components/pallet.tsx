import { culcHexColor } from "@/components/page/utils/culcHexColor";
import clsx from "clsx";
import { wcagContrast } from "culori";
import { useMemo } from "react";
import { contrastTextClassName } from "../utils/contrastTextClassName";

type PalletProps = {
  baseColor: string;
  lightness: number;
};

export const Pallet: React.FC<PalletProps> = ({ baseColor, lightness }) => {
  const hexColor = useMemo(() => culcHexColor(baseColor, lightness), [baseColor, lightness]);
  const lightContrast = useMemo(() => wcagContrast(hexColor, "#fff"), [hexColor]);
  const darkContrast = useMemo(() => wcagContrast(hexColor, "#000"), [hexColor]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-muted-foreground">{lightness.toFixed(2)}</p>
      <div
        className="w-16 h-16 rounded-md border"
        style={{
          backgroundColor: hexColor,
        }}
      />
      <div className="flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">{hexColor}</p>
        <div className="rounded-full border py-1 px-2 flex justify-center">
          <p className={clsx("text-xs", contrastTextClassName(lightContrast, "light"))}>{lightContrast.toFixed(2)}</p>
        </div>
        <div className="rounded-full bg-black py-1 px-2 flex justify-center">
          <p className={clsx("text-xs", contrastTextClassName(darkContrast, "dark"))}>{darkContrast.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
