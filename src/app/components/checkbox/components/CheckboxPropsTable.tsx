// src/app/components/checkbox/components/CheckboxPropsTable.tsx
'use client';

import React from 'react';
import { PropsTable, PropItem } from '@/components/ui/main/PropsTable';

const checkboxProps: PropItem[] = [
  { prop: 'variant', type: "'default' | 'filled' | 'outlined' | 'soft'", default: "'default'", description: 'Visual style variant of the checkbox' },
  { prop: 'checked', type: "boolean | 'indeterminate'", description: 'Controlled checked state' },
  { prop: 'defaultChecked', type: 'boolean', default: 'false', description: 'Initial checked state (uncontrolled)' },
  { prop: 'onChange', type: "(checked: boolean | 'indeterminate') => void", description: 'Callback when the checked state changes' },
  { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
  { prop: 'className', type: 'string', description: 'Additional CSS classes' },
  { prop: 'children', type: 'ReactNode', description: 'Optional label or content' },
];

export function CheckboxPropsTable() {
  return (
    <PropsTable
      title="Checkbox Props"
      description="All available properties and their configurations for the Checkbox component."
      propsData={checkboxProps}
      tip="All props are optional unless marked as required"
    />
  );
}
