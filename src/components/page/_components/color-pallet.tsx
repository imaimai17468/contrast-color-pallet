"use client";
import { useSearchParams } from "next/navigation";

export const ColorPallet: React.FC = () => {
  const searchParams = useSearchParams();
  const color = searchParams.get("baseColor");

  return (
    <div>
      {color && <div className="w-16 h-16 rounded-md" style={{ backgroundColor: `oklch(from ${color} 0.5 c h)` }} />}
    </div>
  );
};
