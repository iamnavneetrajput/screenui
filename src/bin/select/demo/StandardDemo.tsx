"use client";
import React, { useState } from "react";
import { Select } from "@/packages/Select";

export function StandardDemo() {
  const [country, setCountry] = useState('');

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="bg-white text-black rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Standard Select</h2>
          <p>Simple dropdown with keyboard support</p>
        </div>

        <Select
          label="Select Country"
          placeholder="Choose a country"
          options={countries}
          value={country}
          onChange={setCountry}
          required
          dropdownClassName="bg-white"
        />

        {country && (
          <div className="mt-6 p-4 bg-blue-50 text-blue-900 rounded-lg">
            <p className="text-sm font-medium">Selected: {countries.find(c => c.value === country)?.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}