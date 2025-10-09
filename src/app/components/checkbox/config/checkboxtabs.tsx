'use client';

import React from 'react';
import { Settings, Palette } from 'lucide-react';
import { CheckboxPropsTable } from '../components/CheckboxPropsTable';

export function createCheckboxTabs() {
  return [
    {
      label: 'Props',
      icon: Settings,
      content: <CheckboxPropsTable />
    }
  ];
}
