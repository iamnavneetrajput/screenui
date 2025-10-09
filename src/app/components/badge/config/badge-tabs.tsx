import { Settings, Palette, Badge } from "lucide-react";
import { BadgeVariants } from "../components/BadgeVariants";
import { BadgePropsTable } from "../components/BadgeProps";

export const badgeTabs = [
  {
    label: 'Variants',
    icon: Palette,
    content: <BadgeVariants />
  },
  {
    label: 'Props',
    icon: Settings,
    content: <BadgePropsTable />
  }
];