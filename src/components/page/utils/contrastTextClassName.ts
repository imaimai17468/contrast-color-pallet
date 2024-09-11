export const contrastTextClassName = (contrast: number) => {
  if (contrast > 7) {
    return "text-green-500";
  }
  if (contrast > 4.5) {
    return "text-yellow-500";
  }
  if (contrast > 3) {
    return "text-orange-500";
  }
};
