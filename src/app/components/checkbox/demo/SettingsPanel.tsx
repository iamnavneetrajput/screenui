'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/packages/Checkbox';

// Example 4: Settings Panel with Checkboxes
export function SettingsPanelCheckboxes() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
    analytics: false
  });
  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <div className="max-w-md p-6 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-lg shadow-lg">
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
    </div>
  );
}
