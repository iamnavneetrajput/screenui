import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const alertBasicCode = `
'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/alert'

export function AlertExample() {
  return (
    <Alert color="success" showIcon>
      <AlertTitle>Payment successful</AlertTitle>
      <AlertDescription>
        Your payment has been processed successfully.
      </AlertDescription>
    </Alert>
  )
}
`.trim()

const alertDismissibleCode = `
'use client'

import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertActions,
} from '@/components/alert'
import { Button } from '@/components/button'

export function AlertDismissExample() {
  return (
    <Alert color="info" showIcon dismissible>
      <AlertTitle>New features available</AlertTitle>
      <AlertDescription>
        Check out the latest updates in the changelog.
      </AlertDescription>
      <AlertActions>
        <Button variant="link">View changelog</Button>
      </AlertActions>
    </Alert>
  )
}
`.trim()

// Export examples

export const alertExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Alert',
    description: 'A simple alert with icon and semantic color.',
    code: [
      { language: 'typescript', code: alertBasicCode },
      { language: 'javascript', code: alertBasicCode },
    ],
  },
  {
    id: 'dismissible',
    title: 'Dismissible Alert',
    description: 'An alert that can be dismissed or contain actions.',
    code: [
      { language: 'typescript', code: alertDismissibleCode },
      { language: 'javascript', code: alertDismissibleCode },
    ],
  },
]
