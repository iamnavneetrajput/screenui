'use client';

import React, { useState, useEffect } from 'react';
import './AnimatedCheckbox.css'; // Keep your existing CSS animations here

interface AnimatedCheckboxProps {
  id: string;
  label: string;
  value: string | number;
}

const AnimatedCheckbox: React.FC<AnimatedCheckboxProps> = ({ id, label, value }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (checked) {
      timer = setTimeout(() => setChecked(false), 2000); // auto uncheck after 2 sec
    }
    return () => clearTimeout(timer); // cleanup on unmount or state change
  }, [checked]);

  return (
    <div className="relative grid grid-cols-[30px_auto] items-center rounded-[10px] p-1">
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className={`appearance-none relative h-[15px] w-[15px] cursor-pointer bg-transparent outline-none border-0 m-0 grid place-items-center
          before:content-[''] before:absolute before:h-[2px] before:bg-[#4F29F0] before:rounded before:transition-all
          after:content-[''] after:absolute after:h-[2px] after:bg-[#4F29F0] after:rounded after:transition-all
          ${checked ? 'checked-animation' : ''}`}
      />
      <label
        htmlFor={id}
        className={`relative cursor-pointer inline-grid items-center text-[hsl(var(--foreground))] transition-colors duration-300 ${checked ? 'text-[#C3C8DE]' : ''}`}
      >
        {label}
        <span className={`before:absolute before:left-[-27px] before:h-[2px] before:w-2 before:bg-[#4F29F0] before:rounded before:transition-colors
          after:absolute after:top-2 after:left-[-25px] after:h-1 after:w-1 after:rounded-full ${checked ? 'before:bg-[#C3C8DE]' : ''} label-animation`}>
        </span>
      </label>
    </div>
  );
};

export default AnimatedCheckbox;
