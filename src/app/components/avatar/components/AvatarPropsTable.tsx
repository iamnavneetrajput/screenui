"use client";
import React from "react";
import { PropItem, PropsTable } from "@/components/ui/main/PropsTable";

const avatarProps: PropItem[] = [
  {
    prop: "src",
    type: "string",
    default: "-",
    description: "Image source URL"
  },
  {
    prop: "size",
    type: "'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Avatar size"
  },
  {
    prop: "variant",
    type: "'circular' | 'square' | 'rounded'",
    default: "'circular'",
    description: "Avatar shape"
  },
  {
    prop: "clickable",
    type: "boolean",
    default: "false",
    description: "Enable click interactions"
  }
];

export function AvatarPropsTable() {
  return (
    <PropsTable
              title="Avatar Props"
              description="All available properties and their configurations for the Avatar component."
              propsData={avatarProps}
              tip="All props are optional unless marked as required"
            />
  );
}