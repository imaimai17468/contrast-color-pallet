import { ColorSetting } from "./_components/color-setting";

export const PalletContent: React.FC = () => {
  return (
    <div className="flex gap-32 p-16">
      <ColorSetting />
      <div className="w-8 h-8 rounded-md bg-red-500" />
    </div>
  );
};
