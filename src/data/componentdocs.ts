import React from "react";
import {
  Terminal,
  Package,
  Activity,
  FileText,
  ArrowUp,
  List,
  Wrench
} from "lucide-react";

export interface ComponentDoc {
  name: string;
  description: string;
  longDescription?: string;

  example: string;

  examples?: {
    cmd: string;
    desc?: string;
  }[];

  icon?: React.ReactNode;

  options: {
    option: string;
    description: string;
    default: string;
  }[];

  usage?: string;
}

/* ---------------------------------------------
   ICON COLOR MAP (Correct + Consistent)
--------------------------------------------- */
const iconColors: Record<string, string> = {
  init: "text-blue-600",
  add: "text-green-600",
  status: "text-indigo-600",
  diff: "text-orange-600",
  upgrade: "text-purple-600",
  list: "text-teal-600",
  doctor: "text-red-600",
};

/* ---------------------------------------------
   ICON COMPONENT MAP (one place to manage icons)
--------------------------------------------- */
const iconMap: Record<string, any> = {
  init: Terminal,
  add: Package,
  status: Activity,
  diff: FileText,
  upgrade: ArrowUp,
  list: List,
  doctor: Wrench,
};

/* ---------------------------------------------
   Helper to render properly colored icons
--------------------------------------------- */
function makeIcon(commandName: string) {
  const Icon = iconMap[commandName];
  const color = iconColors[commandName] ?? "text-foreground";
  return React.createElement(Icon, { className: `w-5 h-5 ${color}` });
}

/* ---------------------------------------------
   COMMANDS
--------------------------------------------- */
export const commands: ComponentDoc[] = [
  {
    name: "init",
    icon: makeIcon("init"),
    description: "Initialize ScreenUI configuration in the current directory",
    longDescription:
      "Sets up the screenui.config.json file with your preferred settings. You can configure language (TypeScript/JavaScript), component paths, utils path, and more.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest init", desc: "Interactive setup with prompts" },
      { cmd: "npx screenui-cli@latest init --yes", desc: "Quick setup with defaults" },
      { cmd: "npx screenui-cli@latest init --force", desc: "Overwrite existing config" }
    ],
    options: [
      { option: "--yes", description: "Skip prompts and use default configuration", default: "false" },
      { option: "--force", description: "Overwrite existing config if present", default: "false" }
    ],
    usage: "Perfect for starting a new project or reconfiguring an existing one."
  },

  {
    name: "add",
    icon: makeIcon("add"),
    description: "Add one or more components to your project",
    longDescription:
      "Install one or multiple components into your project. Components are automatically normalized to PascalCase.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest add button", desc: "Add single component" },
      { cmd: "npx screenui-cli@latest add button card modal", desc: "Add multiple components" },
      { cmd: "npx screenui-cli@latest add alert --lang js", desc: "Add component in JavaScript" },
      { cmd: "npx screenui-cli@latest add button --path src/ui", desc: "Custom installation path" },
      { cmd: "npx screenui-cli@latest add card --force", desc: "Overwrite existing file" }
    ],
    options: [
      { option: "--lang <lang>", description: "Language: ts or js (overrides config)", default: "ts" },
      { option: "--path <path>", description: "Target output directory", default: "src/components" },
      { option: "--force", description: "Overwrite existing files", default: "false" },
      { option: "--silent", description: "Suppress non-error output", default: "false" }
    ],
    usage:
      "Automatically creates utils file if missing and installs required dependencies."
  },

  {
    name: "status",
    icon: makeIcon("status"),
    description: "Show installed components and their status",
    longDescription:
      "View all installed components, their versions, and available updates. Automatically cleans up stale lock file entries.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest status", desc: "Show all components status" },
      { cmd: "npx screenui-cli@latest status --verbose", desc: "Show detailed version info" }
    ],
    options: [
      { option: "--verbose", description: "Show additional information like version transitions", default: "false" }
    ],
    usage: "Use this to check which components need updates and general project health."
  },

  {
    name: "diff",
    icon: makeIcon("diff"),
    description: "Show differences between installed and latest component versions",
    longDescription:
      "Compares installed vs. latest component versions and shows breaking changes, additions, fixes, and more.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest diff button", desc: "Show full changelog" },
      { cmd: "npx screenui-cli@latest diff card --breaking-only", desc: "Only breaking changes" },
      { cmd: "npx screenui-cli@latest diff modal --full", desc: "Include full file diff" }
    ],
    options: [
      { option: "--breaking-only", description: "Show only breaking changes", default: "false" },
      { option: "--full", description: "Show full file differences", default: "false" }
    ],
    usage: "Use this before upgrading to understand what changed."
  },

  {
    name: "upgrade",
    icon: makeIcon("upgrade"),
    description: "Upgrade installed components to the latest version",
    longDescription:
      "Updates single, multiple, or all components. Component names are case-insensitive.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest upgrade button", desc: "Upgrade single component" },
      { cmd: "npx screenui-cli@latest upgrade button card", desc: "Upgrade multiple components" },
      { cmd: "npx screenui-cli@latest upgrade --all", desc: "Upgrade all components" },
      { cmd: "npx screenui-cli@latest upgrade button --force", desc: "Force upgrade even if up-to-date" }
    ],
    options: [
      { option: "--all", description: "Upgrade all installed components", default: "false" },
      { option: "--force", description: "Force upgrade regardless of version", default: "false" }
    ],
    usage: "Always check 'diff' first before upgrading."
  },

  {
    name: "list",
    icon: makeIcon("list"),
    description: "List available templates or components",
    longDescription:
      "Displays all templates and components in the registry. Use verbose mode to see versions.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest list", desc: "List all templates" },
      { cmd: "npx screenui-cli@latest list --components", desc: "List all components" },
      { cmd: "npx screenui-cli@latest list --components --verbose", desc: "Show component versions" }
    ],
    options: [
      { option: "--components", description: "List components instead of templates", default: "false" },
      { option: "--verbose", description: "Include version details", default: "false" }
    ],
    usage: "Useful for discovering available templates before creating a project."
  },

  {
    name: "doctor",
    icon: makeIcon("doctor"),
    description: "Run project health checks",
    longDescription:
      "Checks config, missing directories, utils file, and required dependencies. Suggests fixes.",
    example: "",
    examples: [
      { cmd: "npx screenui-cli@latest doctor", desc: "Check for issues" },
      { cmd: "npx screenui-cli@latest doctor --fix", desc: "Automatically fix issues" }
    ],
    options: [
      { option: "--fix", description: "Auto-fix detected issues", default: "false" }
    ],
    usage:
      "Run this if you encounter errors or after manually modifying project configuration."
  }
];
