import React from "react";
import {
  Terminal,
  Package,
  Activity,
  FileText,
  ArrowUp,
  List,
  Wrench,
} from "lucide-react";

export interface ComponentDoc {
  name: string;
  description: string;
  longDescription?: string;

  /** Primary example (always shown) */
  example: string;

  /** Additional / advanced examples */
  examples?: {
    cmd: string;
    desc?: string;
  }[];

  icon?: React.ReactNode;
}

const iconColors: Record<string, string> = {
  // init: "text-blue-600",
  // add: "text-green-600",
  // status: "text-indigo-600",
  // diff: "text-orange-600",
  // upgrade: "text-purple-600",
  // list: "text-teal-600",
  // doctor: "text-red-600",
};

const iconMap: Record<string, any> = {
  init: Terminal,
  add: Package,
  status: Activity,
  diff: FileText,
  upgrade: ArrowUp,
  list: List,
  doctor: Wrench,
};

function makeIcon(name: string) {
  const Icon = iconMap[name];
  const color = iconColors[name] ?? "text-foreground";
  return Icon ? React.createElement(Icon, { className: `w-5 h-5 ${color}` }) : null;
}

export const commands: ComponentDoc[] = [
  {
    name: "init",
    icon: makeIcon("init"),
    description: "Initialize ScreenUI configuration",
    longDescription:
      "Creates a screenui.config.json file and guides you through initial setup.",
    example: "npx screenui-cli@latest init",
    examples: [
      { cmd: "npx screenui-cli@latest init --yes", desc: "Skip prompts" },
      { cmd: "npx screenui-cli@latest init --force", desc: "Overwrite config" },
    ],
  },
  {
    name: "add",
    icon: makeIcon("add"),
    description: "Add components to your project",
    longDescription:
      "Installs one or more components and normalizes names to PascalCase.",
    example: "npx screenui-cli@latest add button",
    examples: [
      { cmd: "npx screenui-cli@latest add button card", desc: "Multiple components" },
      { cmd: "npx screenui-cli@latest add alert --lang js", desc: "JavaScript output" },
      { cmd: "npx screenui-cli@latest add button --path src/ui", desc: "Custom path" },
      { cmd: "npx screenui-cli@latest add card --force", desc: "Overwrite files" },
    ],
  },
  {
    name: "status",
    icon: makeIcon("status"),
    description: "Show installed components",
    longDescription:
      "Displays installed components, versions, and update availability.",
    example: "npx screenui-cli@latest status",
    examples: [
      { cmd: "npx screenui-cli@latest status --verbose", desc: "Detailed output" },
    ],
  },
  {
    name: "diff",
    icon: makeIcon("diff"),
    description: "Compare installed vs latest versions",
    longDescription:
      "Shows changes between installed and latest component versions.",
    example: "npx screenui-cli@latest diff button",
    examples: [
      { cmd: "npx screenui-cli@latest diff card --breaking-only", desc: "Breaking changes only" },
      { cmd: "npx screenui-cli@latest diff modal --full", desc: "Full diff" },
    ],
  },
  {
    name: "upgrade",
    icon: makeIcon("upgrade"),
    description: "Upgrade components",
    longDescription:
      "Upgrades one, many, or all components to the latest version.",
    example: "npx screenui-cli@latest upgrade button",
    examples: [
      { cmd: "npx screenui-cli@latest upgrade --all", desc: "Upgrade everything" },
      { cmd: "npx screenui-cli@latest upgrade card --force", desc: "Force upgrade" },
    ],
  },
  {
    name: "list",
    icon: makeIcon("list"),
    description: "List available templates or components",
    longDescription:
      "Displays all registry entries with optional version info.",
    example: "npx screenui-cli@latest list",
    examples: [
      { cmd: "npx screenui-cli@latest list --components", desc: "Components only" },
      { cmd: "npx screenui-cli@latest list --verbose", desc: "Include versions" },
    ],
  },
  {
    name: "doctor",
    icon: makeIcon("doctor"),
    description: "Run project health checks",
    longDescription:
      "Validates config, directories, and dependencies.",
    example: "npx screenui-cli@latest doctor",
    examples: [
      { cmd: "npx screenui-cli@latest doctor --fix", desc: "Auto-fix issues" },
    ],
  },
];