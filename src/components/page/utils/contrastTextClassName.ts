export const contrastTextClassName = (contrast: number, theme: "light" | "dark") => {
  if (contrast > 7) {
    return "text-green-500";
  }
  if (contrast > 4.5) {
    return "text-yellow-500";
  }
  if (contrast > 3) {
    return "text-orange-500";
  }

  return theme === "light" ? "text-muted-foreground" : "text-white";
};
