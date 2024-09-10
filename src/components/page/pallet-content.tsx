import { ColorPallet } from "./_components/color-pallet";
import { ColorSetting } from "./_components/color-setting";

export const PalletContent: React.FC = () => {
  return (
    <div className="flex gap-16 p-16">
      <ColorSetting />
      <ColorPallet />
    </div>
  );
};
