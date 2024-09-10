"use client";

type Props = {
  baseColor: string;
  numberOfColors: number;
};

export const ColorPallet: React.FC<Props> = ({ baseColor, numberOfColors }) => {
  const lightnessList = Array.from({ length: numberOfColors }, (_, i) => i / (numberOfColors - 1));

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold">{baseColor}</p>
      <div className="flex gap-4">
        {lightnessList.map((lightness) => (
          <div
            key={lightness}
            className="w-16 h-16 rounded-md border"
            style={{
              backgroundColor: `oklch(from ${baseColor} ${lightness} c h)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
