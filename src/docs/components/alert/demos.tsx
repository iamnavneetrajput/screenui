'use client'

import type { JSX } from 'react'
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/packages/Alert'
import { Button } from '@/packages/Button'

export const alertDemos: Record<string, () => JSX.Element> = {
  basic: () => (
    <div className='max-w-md m-auto'>
    <Alert color="success" showIcon>
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription>
        Your payment has been processed successfully.
      </AlertDescription>
    </Alert>
    </div>
  ),

  dismissible: () => (
    <div className='max-w-md m-auto'>
    <Alert color="info" showIcon dismissible>
      <AlertTitle>New features available</AlertTitle>
      <AlertDescription>
        Check out the latest updates in the changelog.
      </AlertDescription>
      <AlertActions>
        <Button variant="link">View changelog</Button>
      </AlertActions>
    </Alert>
    </div>
  ),
}
