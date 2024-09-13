export const contrastTextClassName = (contrast: number, theme: "light" | "dark") => {
  if (contrast >= 7) {
    if (theme === "light") {
      return "text-green-600";
    }
    if (theme === "dark") {
      return "text-green-400";
    }
  }
  if (contrast >= 4.5) {
    if (theme === "light") {
      return "text-yellow-600";
    }
    if (theme === "dark") {
      return "text-yellow-400";
    }
  }
  if (contrast >= 3) {
    if (theme === "light") {
      return "text-orange-600";
    }
    if (theme === "dark") {
      return "text-orange-400";
    }
  }

  return theme === "light" ? "text-muted-foreground" : "text-white";
};
