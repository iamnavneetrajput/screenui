// src/app/components/alert/config/alert-tabs.tsx
'use client';

import React from 'react';
import { Settings} from 'lucide-react';
import { AlertPropsTable } from '../components/AlertPropsTable';

export function createAlertTabs() {
  return [
    {
      label: 'Props',
      icon: Settings,
      content: <AlertPropsTable />
    }
  ];
}
