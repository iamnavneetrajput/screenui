'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/packages/Checkbox';

// Example 3: Checkbox with Label and Description
export function CheckboxDescription() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <Checkbox className='border-white'
          label="Subscribe to newsletter"
          description="Get weekly updates about new features and products"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </div>
  );
}