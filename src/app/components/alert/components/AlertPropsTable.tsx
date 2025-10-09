// src/app/components/alert/components/AlertPropsTable.tsx
'use client';
import React from 'react';
import { PropsTable, PropItem } from '@/components/ui/main/PropsTable';

const alertProps: PropItem[] = [
  {
    prop: "variant",
    type: "'default' | 'filled' | 'soft' | 'outlined'",
    default: "'default'",
    description: "Visual style variant"
  },
  {
    prop: "dismissible",
    type: "boolean",
    default: "false",
    description: "Show close button"
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes"
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Alert content"
  }
];

export function AlertPropsTable() {
  return (
    <PropsTable
      title="Checkbox Props"
      description="All available properties and their configurations for the Checkbox component."
      propsData={alertProps}
      tip="All props are optional unless marked as required"
    />
  );
}
