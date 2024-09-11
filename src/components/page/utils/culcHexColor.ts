import { type Oklch, formatHex, formatHex8, oklch, parse } from "culori";

export const culcHexColor = (color: string, lightness: number) => {
  const parsedColor = parse(color);
  const oklchColor = oklch(parsedColor) as Oklch;
  const adjustedColor = oklch({
    mode: "oklch",
    l: lightness,
    c: oklchColor.c,
    h: oklchColor.h,
    alpha: oklchColor.alpha,
  });
  return adjustedColor.alpha ? formatHex8(adjustedColor) : formatHex(adjustedColor);
};
