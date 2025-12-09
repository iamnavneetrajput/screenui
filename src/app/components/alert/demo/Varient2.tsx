import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/packages/Alert';

export function Variant2() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert variant='filled' color="info" showIcon dismissible>
            <AlertTitle>New features available</AlertTitle>
            <AlertDescription>Check out the changelog...</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}