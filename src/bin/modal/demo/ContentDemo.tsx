'use client'
import React, {useState} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@/packages/Modal";
import { Button } from "@/packages/Button";

export function ContentDemo() {
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