// src/data/code-snippets/input.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add input --lang ts --path src/components",
  js: "npx screenui-cli@latest add input --lang js --path src/components",
};

// --- TypeScript Examples ---

export const TsCode1 = `
import { Input } from '@/components/Input';

export function Example() {
  return (
    <Input
      label="Email Address"
      description="We'll never share your email"
      placeholder="your@email.com"
      type="email"
    />
  );
}
`;

export const TsCode2 = `
import { Input } from '@/components/Input';
import { Search } from 'lucide-react';

const SearchIcon = () => (

export function Example() {
  return (
    <Input
      label="Search"
      placeholder="Search..."
      leftIcon={<Search />}
    />
  );
}
`;

export const TsCode3 = `
import { Input } from '@/components/Input';

export function Example() {
  return (
  <Input
    label="Password"
    type="password"
    placeholder="Enter password"
    description="Password toggle appears automatically"
    showCount
    maxLength={50}
  />
  );
}
`;

export const TsCode4 = `'use client'
import React, {useState} from 'react'
import { Input } from '@/components/Input';
import { Mail } from 'lucide-react';

export function Example() {
  return (
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
  );
}
`;


// --- JavaScript Examples ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// --- Meta Data ---
export const Component = "Input";
export const Title = "Advanced Input Component";
export const Description =
  "A production-grade input component supporting icons, elements, validation helpers, states, counters, and premium customization.";
export const Lastupdated = "2025-11-12";
export const Version = "1.0.0";
