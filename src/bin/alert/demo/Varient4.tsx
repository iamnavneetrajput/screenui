import React from 'react';
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/packages/Alert';
import { Button } from '@/packages/Button';

export function Variant4() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert variant="soft" color="success" showIcon>
            <AlertTitle>Item added to cart</AlertTitle>
            <AlertActions>
              <Button variant="link" className='cursor-pointer'>View Cart</Button>
              <Button variant="link" className='cursor-pointer'>Continue Shopping</Button>
            </AlertActions>
          </Alert>
        </div>
      </div>
    </div>
  );
}