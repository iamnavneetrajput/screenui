'use client'
import React, {useState} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/packages/Modal';
import { Button } from "@/packages/Button";
import { Alert, AlertTitle } from "@/packages/Alert";
export function ConfirmationDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState('');

  const handleConfirm = () => {
    setResult('✓ Action confirmed!');
    setIsOpen(false);
    setTimeout(() => setResult(''), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Confirmation Dialog</h2>
          <p>Simple yes/no confirmation pattern</p>
        </div>

        <Button onClick={() => setIsOpen(true)} variant='solid'>
          Delete Account
        </Button>

        {result && (
          <Alert color='success' variant='soft'>
          <AlertTitle>{result}</AlertTitle>
          </Alert>
        )}
      </div>

      <Modal className="bg-white text-black" open={isOpen} onClose={() => setIsOpen(false)} size="sm">
        <ModalHeader>Confirm Deletion</ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="font-semibold text-red-900">Warning</p>
                <p className="text-sm text-red-700">This action cannot be undone</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Are you sure you want to delete your account? All of your data will be permanently removed from our servers forever.
            </p>
          </div>
        </ModalBody>
        <ModalFooter align="right">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='solid' onClick={handleConfirm}>
            Delete Account
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}