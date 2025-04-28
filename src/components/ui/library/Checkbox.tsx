'use client';
import React, { useState } from 'react';

const Checkbox: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="checkbox-wrapper-11 flex items-center space-x-2">
      <input
        type="checkbox"
        id="02-11"
        value="2"
        name="r"
        checked={checked}
        onChange={handleChange}
        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="02-11" className="text-lg text-gray-700">
        To-do
      </label>
    </div>
  );
};

export default Checkbox;
