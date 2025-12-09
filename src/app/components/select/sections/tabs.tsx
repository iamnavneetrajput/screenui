'use client';

import React from 'react';
import { Settings } from "lucide-react";
import { SelectPropsTable } from "./Props";

export function Tabs() {
    return [
      {
        label: 'Props',
        icon: Settings,
        content: <SelectPropsTable />
      }
    ];
}