// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui add modal --lang ts --path src/components",
  js: "npx screenui add modal --lang js --path src/components",
};

// --- TypeScript Examples ---

export const TsCode1 = `'use client'
import React, {useState} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';

export function Example() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Content Modal</h2>
          <p >Display rich content and information</p>
        </div>

        <Button variant='outline' onClick={() => setIsOpen(true)}>
          View Features
        </Button>
      </div>

      <Modal className="bg-white text-black" open={isOpen} onClose={() => setIsOpen(false)} size="2xl">
        <ModalHeader>Premium Features</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p >
              Unlock powerful features to take your productivity to the next level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Advanced Analytics', desc: 'Deep insights into your data' },
                { icon: '🔒', title: 'Enhanced Security', desc: 'Enterprise-grade protection' },
                { icon: '⚡', title: 'Priority Support', desc: '24/7 dedicated assistance' },
                { icon: '🎯', title: 'Custom Integrations', desc: 'Connect with your tools' }
              ].map((feature, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-900 mb-1">Special Offer</p>
                  <p className="text-sm text-blue-700">Get 20% off when you upgrade today!</p>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter align="between">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Maybe Later
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Upgrade Now
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
`;

export const TsCode2 = `'use client'
import React, {useState} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import { Alert, AlertTitle } from "@/components/Alert";

export function Example() {
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
`;

// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;

// --- Meta Data ---
export const Component = "Modal";
export const Title = "Modal Component";
export const Description =
  "A flexible modal component for displaying content, confirmations, and interactive flows. Includes header, body, footer regions and supports custom sizing, styling, and controlled behavior.";
export const Lastupdated = "2025-11-12";
export const Version = "1.0.0";
