import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { EyeOffIcon } from "lucide-react";

export type VisibilityUI = {
  heading: CheckedState;
  lightness: CheckedState;
  colorCode: CheckedState;
  contrast: CheckedState;
};

type VisibleMenuProps = {
  value: VisibilityUI;
  onVisibleChange: (visible: VisibilityUI) => void;
};

export const VisibleMenu: React.FC<VisibleMenuProps> = ({ value, onVisibleChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <EyeOffIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right" sideOffset={8} className="flex flex-col gap-2">
        <p className="text-lg font-bold">Change visibility</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="heading"
              checked={value.heading}
              onCheckedChange={(checked) => onVisibleChange({ ...value, heading: checked })}
            />
            <Label htmlFor="heading">Show heading</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="lightness"
              checked={value.lightness}
              onCheckedChange={(checked) => onVisibleChange({ ...value, lightness: checked })}
            />
            <Label htmlFor="lightness">Show lightness</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="colorCode"
              checked={value.colorCode}
              onCheckedChange={(checked) => onVisibleChange({ ...value, colorCode: checked })}
            />
            <Label htmlFor="colorCode">Show color code</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="contrast"
              checked={value.contrast}
              onCheckedChange={(checked) => onVisibleChange({ ...value, contrast: checked })}
            />
            <Label htmlFor="contrast">Show contrast</Label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
