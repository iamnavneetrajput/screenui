'use client'
import React, { useState } from "react";
import { Checkbox } from '@/packages/Checkbox';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (

        <Checkbox
          label="Subscribe to newsletter"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="border-border"
        />

  );
}
