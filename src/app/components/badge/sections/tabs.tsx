import { Settings, Palette, Badge } from "lucide-react";
import { BadgeVariants } from "../demo/Variants";
import { BadgePropsTable } from "./Props";

export const Tabs = [
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