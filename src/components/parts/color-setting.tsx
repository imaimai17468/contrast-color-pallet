"use client";
import { ColorPicker, useColor } from "react-color-palette";
import { Slider } from "../ui/slider";
import "react-color-palette/css";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export const ColorSetting: React.FC = () => {
  const [color, setColor] = useColor("#561ecb");
  const [_, setBaseColor] = useQueryState(
    "color",
    parseAsString.withDefault("#561ecb").withOptions({ throttleMs: 500 }),
  );
  const [numberOfColors, setNumberOfColors] = useQueryState("numberOfColors", parseAsInteger.withDefault(1));

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
          <div className="text-2xl font-bold">{numberOfColors}</div>
        </div>
        <Slider
          value={[numberOfColors * 10]}
          max={100}
          step={10}
          min={10}
          onValueChange={(value) => setNumberOfColors(value[0] / 10)}
        />
      </div>
    </div>
  );
};
