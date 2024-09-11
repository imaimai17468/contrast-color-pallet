import { culcHexColor } from "@/components/page/utils/culcHexColor";
import { useMemo } from "react";

type PalletProps = {
  baseColor: string;
  lightness: number;
};

export const Pallet: React.FC<PalletProps> = ({ baseColor, lightness }) => {
  const hexColor = useMemo(() => culcHexColor(baseColor, lightness), [baseColor, lightness]);

  return (
    <div key={lightness} className="flex flex-col items-center">
      <p className="text-xs text-muted-foreground">{lightness.toFixed(2)}</p>
      <div
        className="w-16 h-16 rounded-md border"
        style={{
          backgroundColor: hexColor,
        }}
      />
      <p className="text-xs text-muted-foreground">{hexColor}</p>
    </div>
  );
};
