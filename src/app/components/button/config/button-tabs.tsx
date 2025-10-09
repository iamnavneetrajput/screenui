// src/app/components/button/config/button-tabs.tsx
import { Settings, Palette, Badge } from "lucide-react";
import { ButtonVariants } from "../components/ButtonVariants";
import { ButtonPropsTable } from "../components/ButtonProps";

export const buttonTabs = [
  {
    label: 'Variants',
    icon: Palette,
    content: <ButtonVariants />
  },
  {
    label: 'Props',
    icon: Settings,
    content: <ButtonPropsTable />
  }
];