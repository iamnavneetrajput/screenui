'use client';

import React from 'react';
import { Settings} from 'lucide-react';
import { AlertPropsTable } from './PropsTable';

export function Tabs() {
  return [
    {
      label: 'Props',
      icon: Settings,
      content: <AlertPropsTable />
    }
  ];
}
