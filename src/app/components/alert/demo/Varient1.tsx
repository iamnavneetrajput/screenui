import React from 'react';
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/packages/Alert';
import { Button } from '@/packages/Button';

export function Variant1() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert variant='filled' color="success" showIcon>
            <AlertTitle>Payment successful</AlertTitle>
            <AlertDescription>Your payment has been processed.</AlertDescription>
            <AlertActions>
              <Button className='cursor-pointer' variant="soft">View Receipt</Button>
              <Button className='cursor-pointer' variant="soft">Download</Button>
            </AlertActions>
          </Alert>
        </div>
      </div>
    </div>
  );
}