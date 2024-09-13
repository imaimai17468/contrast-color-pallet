import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PencilLineIcon } from "lucide-react";

export type ThemeColorUI = {
  lightThemeColor: string;
  darkThemeColor: string;
};

type ThemeColorMenuProps = {
  value: ThemeColorUI;
  onColorChange: (color: ThemeColorUI) => void;
};

export const ThemeColorMenu: React.FC<ThemeColorMenuProps> = ({ value, onColorChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <PencilLineIcon className="w-4 h-4 mr-2" />
          Change theme color
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right" sideOffset={8} className="flex flex-col gap-2">
        <Label htmlFor="lightThemeColor">Light theme background color</Label>
        <Input
          id="lightThemeColor"
          value={value.lightThemeColor}
          onChange={(e) => onColorChange({ ...value, lightThemeColor: e.target.value })}
        />
        <Label htmlFor="darkThemeColor">Dark theme background color</Label>
        <Input
          id="darkThemeColor"
          value={value.darkThemeColor}
          onChange={(e) => onColorChange({ ...value, darkThemeColor: e.target.value })}
        />
      </PopoverContent>
    </Popover>
  );
};
