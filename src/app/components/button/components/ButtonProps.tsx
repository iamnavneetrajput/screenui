"use client";
import React from "react";
import { PropItem, PropsTable } from "@/components/ui/main/PropsTable";

const buttonProps: PropItem[] = [
  {
    prop: "variant",
    type: "'solid' | 'outline' | 'ghost' | 'link' | 'soft'",
    default: "'solid'",
    description: "Defines the button style variant"
  },
  {
    prop: "size",
    type: "'sm' | 'md' | 'lg' | 'xl' | 'icon'",
    default: "'md'",
    description: "Controls height, padding, and text size"
  },
  {
    prop: "rounded",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    default: "'md'",
    description: "Border radius of the button"
  },
  {
    prop: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Expands button to full container width"
  },
  {
    prop: "icon",
    type: "React.ReactNode",
    default: "-",
    description: "Optional leading icon element"
  },
  {
    prop: "loading",
    type: "boolean",
    default: "false",
    description: "Shows a loading spinner and disables interactions"
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables button interaction"
  },
  {
    prop: "as",
    type: "'button' | 'a'",
    default: "'button'",
    description: "Renders as a native `<button>` or `<a>` element"
  },
  {
    prop: "href",
    type: "string",
    default: "-",
    description: "Required when `as='a'`, link destination"
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "Text or custom content inside the button"
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Custom utility classes for styling"
  }
];

export function ButtonPropsTable() {
  return (
     <PropsTable
          title="Button Props"
          description="All available properties and their configurations for the Button component."
          propsData={buttonProps}
          tip="All props are optional unless marked as required"
        />
  );
}
