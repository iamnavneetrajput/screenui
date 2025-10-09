// utils/icons.ts
import {
  GithubIcon,
  FileText,
  PenTool as Tool,
  Instagram,
  UserCircle,
  BadgeAlert,
  Badge,
  ListCollapse,
  Power,
  House,
  Component,
  Palette,
  LayoutGrid,
  SquareCheck,
  Star
} from "lucide-react";

// central icon registry
export const Icons = {
  house: House,
  fileText: FileText,
  component: Component,
  palette: Palette,
  layoutGrid: LayoutGrid,
  power: Power,
  badge: Badge,
  userCircle: UserCircle,
  squareCheck: SquareCheck,
  badgeAlert: BadgeAlert,
  listCollapse: ListCollapse,
  github: GithubIcon,
  instagram: Instagram,
  tool: Tool,
  star: Star,
};

export type IconName = keyof typeof Icons;
