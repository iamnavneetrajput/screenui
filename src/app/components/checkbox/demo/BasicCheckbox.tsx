'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/packages/Checkbox';

// Example 1: Basic Checkbox (No label, standalone)
export function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <Checkbox className='border-white'
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </div>
  );
}