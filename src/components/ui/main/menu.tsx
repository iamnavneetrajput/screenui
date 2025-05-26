import React, { useState, useEffect } from "react";
import clsx from "clsx"; // optional; can use template literals instead

const HamburgerToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (checked) {
      timer = setTimeout(() => {
        setChecked(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [checked]);

  return (
    <label className="flex flex-col gap-2 w-8 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <div
        className={clsx(
          "rounded-2xl h-[3px] w-1/2 bg-[hsl(var(--foreground))] duration-500 origin-right",
          checked && "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]"
        )}
      />
      <div
        className={clsx(
          "rounded-2xl h-[3px] w-full bg-[hsl(var(--foreground))] duration-500",
          checked && "-rotate-45"
        )}
      />
      <div
        className={clsx(
          "rounded-2xl h-[3px] w-1/2 bg-[hsl(var(--foreground))] duration-500 place-self-end origin-left",
          checked && "rotate-[225deg] translate-x-[12px] translate-y-[1px]"
        )}
      />
    </label>
  );
};

export default HamburgerToggle;
