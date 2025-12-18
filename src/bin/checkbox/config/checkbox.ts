// src/data/code-snippets/checkbox.ts

// --- Installation Commands ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add checkbox --lang ts --path src/components",
  js: "npx screenui-cli@latest add checkbox --lang js --path src/components",
};

// --- TypeScript Examples ---

export const TsCode1 = `'use client';
import React, { useState } from 'react';
import { Checkbox } from '@/components/Checkbox';

export function Example() {
  const [checked, setChecked] = useState(false);

  return (
         <Checkbox className='border-white'
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
  );
}
`;

export const TsCode2 = `'use client';
import React, { useState } from "react";
import { Checkbox } from '@/components/Checkbox';

export function Example() {
 const [checked, setChecked] = useState(false);

  return (

        <Checkbox className='border-white'
          label="Accept terms and conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

  );
}
`;

export const TsCode3 = `'use client';
import React, { useState } from "react";
import { Checkbox } from '@/components/Checkbox';

export function Example() {
  const [checked, setChecked] = useState(false);

  return (

        <Checkbox className='border-white'
          label="Subscribe to newsletter"
          description="Get weekly updates about new features and products"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

  );
}
`;

export const TsCode4 = `'use client';
import React, { useState } from "react";
import { Checkbox } from "@/components/Checkbox";

export function Example() {
    const [settings, setSettings] = useState({
      darkMode: false,
      notifications: true,
      autoSave: true,
      analytics: false
    });

  return (

        <div className="flex gap-4 flex-wrap">
        <div className="max-w-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Settings</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Appearance</h3>
              <Checkbox
                label="Dark mode"
                description="Use dark theme across the app"
                checked={settings.darkMode}
                onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold mb-3">Notifications</h3>
              <Checkbox
                label="Enable notifications"
                description="Receive push notifications for updates"
                checked={settings.notifications}
                onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Data</h3>
              <div className="space-y-3">
                <Checkbox
                  label="Auto-save"
                  description="Automatically save your work"
                  checked={settings.autoSave}
                  onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
                />
                <Checkbox
                  label="Analytics"
                  description="Help us improve by sharing usage data"
                  checked={settings.analytics}
                  onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
`;

// --- JavaScript Examples (reuse TS if identical) ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// --- Meta Data ---
export const Component = "Checkbox";
export const Title = "Checkbox Component";
export const Description =
  "A customizable checkbox component built with React and Tailwind CSS, supporting various styles, sizes, and states.";
export const LastUpdated = "2025-11-13";
export const Version = "1.0.0";
