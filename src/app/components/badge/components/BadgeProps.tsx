"use client";
import React from "react";
import { PropItem, PropsTable } from "@/components/ui/main/PropsTable";

const badgeProps: PropItem[] = [
  {
    prop: "variant",
    type: "'solid' | 'outline' | 'soft' | 'ghost' | 'dot'",
    default: "'solid'",
    description: "Defines the badge style variant"
  },
  {
    prop: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'sm'",
    description: "Controls padding, font size, and spacing"
  },
  {
    prop: "rounded",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    default: "'md'",
    description: "Border radius of the badge"
  },
  {
    prop: "interactive",
    type: "boolean",
    default: "false",
    description: "Enable hover/click animations (scaling)"
  },
  {
    prop: "icon",
    type: "React.ReactNode",
    default: "-",
    description: "Optional leading icon element"
  },
  {
    prop: "onRemove",
    type: "() => void",
    default: "-",
    description: "Adds a remove button inside badge"
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interactivity & dims appearance"
  },
  {
    prop: "as",
    type: "'span' | 'button'",
    default: "'span'",
    description: "Renders badge as `<span>` or `<button>`"
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "Text or custom content inside the badge"
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Custom utility classes for styling"
  }
];

export function BadgePropsTable() {
  return (
    <PropsTable
              title="Badge Props"
              description="All available properties and their configurations for the Badge component."
              propsData={badgeProps}
              tip="All props are optional unless marked as required"
            />
  );
}
