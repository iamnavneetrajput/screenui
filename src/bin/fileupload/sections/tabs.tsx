'use client';

import React from 'react';
import { Settings } from "lucide-react";
import { FileUploadPropsTable } from "./Props";

export function Tabs() {
    return [
      {
        label: 'Props',
        icon: Settings,
        content: <FileUploadPropsTable />
      }
    ];
}