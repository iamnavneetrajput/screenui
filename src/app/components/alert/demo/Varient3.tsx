import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/packages/Alert';

export function Variant3() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert variant="outlined" color="warning" showIcon>
            <AlertTitle>Build warning detected</AlertTitle>
            <AlertDescription>
              <ul>
                <li>Unused CSS classes</li>
                <li>Large bundle size</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}