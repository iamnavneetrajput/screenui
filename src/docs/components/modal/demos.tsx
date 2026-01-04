'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/packages/Modal'
import { Button } from '@/packages/Button'
import { Alert, AlertTitle } from '@/packages/Alert'

export const modalDemos: Record<string, () => JSX.Element> = {
  confirmation: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState('')

    const handleConfirm = () => {
      setResult('✓ Action confirmed!')
      setIsOpen(false)
      setTimeout(() => setResult(''), 3000)
    }

    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-6">
          <Button onClick={() => setIsOpen(true)}>Delete Account</Button>

          {result && (
            <Alert color="success" variant="soft">
              <AlertTitle>{result}</AlertTitle>
            </Alert>
          )}
        </div>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
        >
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalBody>
            <p>
              This action cannot be undone. Are you sure?
            </p>
          </ModalBody>
          <ModalFooter align="right">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  },
}
