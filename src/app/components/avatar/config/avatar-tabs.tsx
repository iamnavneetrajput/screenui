import { Settings, Palette } from "lucide-react";
import { AvatarVariants } from "../components/AvatarVariants";
import { AvatarPropsTable } from "../components/AvatarPropsTable";

export const avatarTabs = [
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