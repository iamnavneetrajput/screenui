'use client';

import React from 'react';
import { Settings } from 'lucide-react';
import { CheckboxPropsTable } from './PropsTable';

export function Tabs() {
  return [
    {
      label: 'Props',
      icon: Settings,
      content: <CheckboxPropsTable />
    }
  ];
}
