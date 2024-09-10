import { searchParamsCache } from "../../utils/search-params";
import { ColorPallet } from "./_components/color-pallet";
import { ColorSetting } from "./_components/color-setting";

export const PalletContent: React.FC = () => {
  const { baseColor, numberOfColors } = searchParamsCache.all();

  return (
    <div className="flex gap-16 p-16">
      <ColorSetting baseColor={baseColor} numberOfColors={numberOfColors} />
      <ColorPallet baseColor={baseColor} numberOfColors={numberOfColors} />
    </div>
  );
};
