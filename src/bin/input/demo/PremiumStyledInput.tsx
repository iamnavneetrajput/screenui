'use client'
import React, {useState} from 'react'
import { Input } from '@/packages/Input';
import { Mail } from 'lucide-react';


export function PremiumStyledInput() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-12">
      <div className="space-y-6">

        <Input
          variant="ghost"
          label="Custom Styled Input"
          description="Completely customized with Tailwind classes"
          placeholder="Type here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          leftIcon={<Mail />}
          clearable
          onClear={() => setValue("")}
          showCount
          maxLength={100}

          className="
            border-4 border-purple-500 bg-purple-50
            hover:bg-purple-100 focus:bg-white
            focus:border-purple-600 focus-visible:ring-purple-500
            rounded-xl font-semibold text-purple-900
            placeholder:text-purple-400
          "
          containerClassName="
            bg-gradient-to-br from-purple-50 to-pink-50
            p-6 rounded-xl border-2 border-purple-200 shadow-lg
          "
          labelClassName="text-purple-900 font-bold text-xl"
          descriptionClassName="text-purple-700 font-medium"
          counterClassName="text-purple-600 font-bold"
        />

      </div>
    </div>
  );
}
