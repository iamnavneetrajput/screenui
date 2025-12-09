'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/packages/Accordion';
import { Checkbox } from '@/packages/Checkbox';


// Settings Panel Example
export function Variant3() {
  return (
          <div className="flex flex-wrap gap-4">
            <div className="max-w-2xl p-6 bg-slate-800/90 rounded-lg shadow-2xl border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Settings</h2>

              <Accordion type="multiple" defaultValue={['general']}>
                <AccordionItem value="general" className="border-purple-500/20">
                  <AccordionTrigger className="text-purple-300 hover:text-purple-200">General Settings</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Enable notifications"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Dark mode"
                        />
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy" className="border-purple-500/20">
                  <AccordionTrigger className="text-purple-300 hover:text-purple-200">Privacy & Security</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Two-factor authentication"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Share analytics"
                        />
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="notifications" className="border-purple-500/20">
                  <AccordionTrigger className="text-purple-300 hover:text-purple-200">Notification Preferences</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Email notifications"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center gap-2">
                        <Checkbox 
                          className='bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400'
                          label="Push notifications"
                        />
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
  );
}