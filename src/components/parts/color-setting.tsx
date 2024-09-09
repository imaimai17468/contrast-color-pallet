"use client";

import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { Slider } from "../ui/slider";
import "react-color-palette/css";

export const ColorSetting: React.FC = () => {
  const [color, setColor] = useColor("#561ecb");
  const [numberOfColors, setNumberOfColors] = useState(10);
  return (
    <div className="flex flex-col gap-8">
      <ColorPicker color={color} onChange={setColor} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <p>Number of Colors</p>
          <div className="text-2xl font-bold">{numberOfColors / 10}</div>
        </div>
        <Slider
          value={[numberOfColors]}
          max={100}
          step={10}
          min={10}
          onValueChange={(value) => setNumberOfColors(value[0])}
        />
      </div>
    </div>
  );
};
