// src/app/components/alert/components/AlertDemos.tsx
'use client';

import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

export function BasicAlertDemo() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert dismissible className="border-blue-500 text-blue-700">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>This is an informational alert.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export function DismissibleAlertDemo() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert
            variant="filled"
            className="bg-red-500 text-white"
            dismissible
          >
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong!</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export function SoftAlertDemo() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert
            variant="soft"
            className="bg-green-100 text-green-800 border-green-200"
          >
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Operation completed successfully.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export function OutlinedAlertDemo() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Alert
            variant="outlined"
            className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
          >
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review your settings.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}