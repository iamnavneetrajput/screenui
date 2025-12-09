// src/app/components/button/config/button-tabs.tsx
'use client';

import React from 'react';
import { Settings } from "lucide-react";
import { ButtonPropsTable } from "./ButtonProps";

export function Tabs() {
    return [
      {
        label: 'Props',
        icon: Settings,
        content: <ButtonPropsTable />
      }
    ];
}