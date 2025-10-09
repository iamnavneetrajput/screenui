// src/app/components/alert/components/AlertPageClient.tsx
'use client';

import { EnhancedComponentDemo } from '../../../library/component/enhanced/EnhancedComponentDemo';
import { alertDemos } from '../config/alert-demos';
import { createAlertTabs } from '../config/alert-tabs';

export function AlertPageClient() {
  const alertTabs = createAlertTabs();
  
  return (
    <>
      {alertDemos.map((demo, index) => (
        <EnhancedComponentDemo
          key={demo.id}
          {...demo.config}
          showInstallation={index === 0}
          additionalTabs={index === 0 ? alertTabs : []}
        >
          <demo.component />
        </EnhancedComponentDemo>
      ))}
    </>
  );
}