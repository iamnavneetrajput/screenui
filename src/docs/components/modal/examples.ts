import type { Example } from '@/docs/schema'

const confirmationModalCode = `
'use client'
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/components/Modal'
import { Button } from '@/components/Button'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete</Button>

      <Modal open={open} onClose={() => setOpen(false)} size="sm">
        <ModalHeader>Confirm</ModalHeader>
        <ModalBody>This action cannot be undone.</ModalBody>
        <ModalFooter align="right">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
`.trim()

export const modalExamples: Example[] = [
  {
    id: 'confirmation',
    title: 'Confirmation Dialog',
    description: 'A controlled confirmation modal with footer actions.',
    code: [
      { language: 'typescript', code: confirmationModalCode },
      { language: 'javascript', code: confirmationModalCode },
    ],
  },
]
