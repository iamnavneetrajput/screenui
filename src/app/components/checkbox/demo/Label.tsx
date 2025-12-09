'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/packages/Checkbox';

// Example 2: Checkbox with Label
export function CheckboxwithLabel() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <Checkbox className='border-white'
          label="Accept terms and conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </div>
  );
}