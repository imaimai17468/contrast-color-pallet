"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PlusCircleIcon, Trash2 } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo, useState } from "react";
import { searchParams } from "../../../utils/search-params";
import { generateSigmoidData } from "../utils/sigmoid";
import { LightnessChart } from "./lightness-chart";
import { Pallet } from "./pallet";
import { PalletLegend } from "./pallet-legend";
import { ThemeColorMenu } from "./theme-color-menu";
import { type VisibilityUI, VisibleMenu } from "./visibleMenu";

type Props = {
  baseColors: string[];
  numberOfColors: number;
  selectedColorIndex: number;
  lightThemeColor: string;
  darkThemeColor: string;
};

export const ColorPallet: React.FC<Props> = ({
  baseColors,
  numberOfColors,
  selectedColorIndex,
  lightThemeColor,
  darkThemeColor,
}) => {
  const lightnessList = useMemo(() => {
    return generateSigmoidData(numberOfColors);
  }, [numberOfColors]);

  const [selectedIndex, setSelectedIndex] = useQueryState(
    "selectedColorIndex",
    searchParams.selectedColorIndex.withDefault(selectedColorIndex).withOptions({ shallow: false }),
  );

  const [newBaseColors, setNewBaseColors] = useQueryState(
    "baseColors",
    searchParams.baseColors.withDefault(baseColors).withOptions({ shallow: false, history: "push" }),
  );

  const [newLightThemeColor, setNewLightThemeColor] = useQueryState(
    "lightThemeColor",
    searchParams.lightThemeColor.withDefault(lightThemeColor).withOptions({ shallow: false, history: "push" }),
  );

  const [newDarkThemeColor, setNewDarkThemeColor] = useQueryState(
    "darkThemeColor",
    searchParams.darkThemeColor.withDefault(darkThemeColor).withOptions({ shallow: false, history: "push" }),
  );

  const [visible, setVisible] = useState<VisibilityUI>({
    heading: true,
    lightness: true,
    colorCode: true,
    contrast: true,
  });

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        {newBaseColors.map((baseColor, index) => (
          <div key={`${baseColor}-${Math.random()}`} className="flex gap-4">
            <div className={clsx("flex flex-col justify-center w-24", !visible.heading && "hidden")}>
              {newBaseColors.length === 1 ? (
                <p className="text-xl font-bold">{baseColor}</p>
              ) : (
                <Button
                  variant="link"
                  className={clsx(selectedIndex === index && "text-orange-500", "text-xl font-bold")}
                  onClick={() => setSelectedIndex(index)}
                >
                  {baseColor}
                </Button>
              )}
              <Button
                variant="link"
                size="sm"
                className={clsx("text-red-500", newBaseColors.length === 1 && "hidden")}
                onClick={() => {
                  if (newBaseColors.length === 1) {
                    return;
                  }

                  if (selectedIndex === index) {
                    setSelectedIndex(0);
                  }

                  if (selectedIndex > newBaseColors.length - 2) {
                    setSelectedIndex(newBaseColors.length - 2);
                  }

                  setNewBaseColors(newBaseColors.filter((_, i) => i !== index));
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                delete
              </Button>
            </div>
            <div className="flex gap-4">
              {lightnessList.map((lightness) => (
                <Pallet
                  key={lightness.x}
                  baseColor={baseColor}
                  lightness={lightness.y}
                  visible={visible}
                  lightThemeColor={lightThemeColor}
                  darkThemeColor={darkThemeColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={() => setNewBaseColors([...newBaseColors, "#000000"])} className="flex gap-2 w-fit">
        <PlusCircleIcon /> Create Pallet
      </Button>
      <div className="flex gap-8">
        <VisibleMenu value={visible} onVisibleChange={setVisible} />
        <ThemeColorMenu
          value={{
            lightThemeColor: newLightThemeColor,
            darkThemeColor: newDarkThemeColor,
          }}
          onColorChange={(color) => {
            setNewLightThemeColor(color.lightThemeColor);
            setNewDarkThemeColor(color.darkThemeColor);
          }}
        />
      </div>
      <div className="flex gap-8 w-full">
        <LightnessChart lightnessList={lightnessList} />
        <PalletLegend />
      </div>
    </div>
  );
};
