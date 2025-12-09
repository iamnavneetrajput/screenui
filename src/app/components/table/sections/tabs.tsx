'use client';

import React from 'react';
import { Settings } from "lucide-react";
import { TablePropsTable } from "./Props";

export function Tabs() {
    return [
      {
        label: 'Props',
        icon: Settings,
        content: <TablePropsTable />
      }
    ];
}