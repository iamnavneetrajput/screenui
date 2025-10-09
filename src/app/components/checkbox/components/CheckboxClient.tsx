'use client';

import { EnhancedComponentDemo } from '../../../library/component/enhanced/EnhancedComponentDemo';
import { checkboxDemos } from '../config/checkbox-demos';
import { createCheckboxTabs } from '../config/checkboxtabs';

export function CheckboxPageClient() {
  const checkboxTabs = createCheckboxTabs();
  
  return (
    <>
      {checkboxDemos.map((demo, index) => (
        <EnhancedComponentDemo
          key={demo.id}
          {...demo.config}
          showInstallation={index === 0}
          additionalTabs={index === 0 ? checkboxTabs : []}
        >
          <demo.component />
        </EnhancedComponentDemo>
      ))}
    </>
  );
}
