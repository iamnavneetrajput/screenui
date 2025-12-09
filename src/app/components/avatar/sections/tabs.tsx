import { Settings, Palette } from "lucide-react";
import AvatarVariants from "../demo/AvatarVariants";
import { AvatarPropsTable } from "@/app/components/avatar/sections/PropsTable";

export const Tabs = [
  {
    label: 'Variants',
    icon: Palette,
    content: <AvatarVariants />
  },
  {
    label: 'Props',
    icon: Settings,
    content: <AvatarPropsTable />
  }
];