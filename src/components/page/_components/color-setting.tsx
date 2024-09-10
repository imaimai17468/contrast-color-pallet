"use client";
import { ColorPicker, useColor } from "react-color-palette";
import { Slider } from "../../ui/slider";
import "react-color-palette/css";
import { searchParams } from "@/utils/search-params";
import { useQueryState } from "nuqs";

type Props = {
  baseColor: string;
  numberOfColors: number;
};

export const ColorSetting: React.FC<Props> = ({ baseColor, numberOfColors }) => {
  const [color, setColor] = useColor(baseColor);
  const [_baseColor, setBaseColor] = useQueryState(
    "baseColor",
    searchParams.baseColor.withDefault(baseColor).withOptions({ throttleMs: 500, shallow: false }),
  );
  const [_numberOfColors, setNumberOfColors] = useQueryState(
    "numberOfColors",
    searchParams.numberOfColors.withDefault(numberOfColors).withOptions({
      shallow: false,
    }),
  );

  return (
    <div className="flex flex-col gap-8">
      <ColorPicker
        color={color}
        onChange={(iColor) => {
          setBaseColor(iColor.hex);
          setColor(iColor);
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <p>Number of Colors</p>
          <div className="text-2xl font-bold">{_numberOfColors}</div>
        </div>
        <Slider
          value={[_numberOfColors]}
          max={10}
          step={1}
          min={1}
          onValueChange={(value) => setNumberOfColors(value[0])}
        />
      </div>
    </div>
  );
};
