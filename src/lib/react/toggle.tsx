"use client";

import { useEffect, useState } from "react";
import { Sun, Monitor, Moon } from "lucide-react";
import { JSX } from "react/jsx-runtime";

type Theme = "light" | "dark" | "system";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("system");

  // Apply the selected theme to the HTML tag
  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (newTheme: Theme) => {
      if (newTheme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", prefersDark);
      } else {
        root.classList.toggle("dark", newTheme === "dark");
      }
    };

    applyTheme(theme);
  }, [theme]);

  const themes: { icon: JSX.Element; label: string; value: Theme }[] = [
    { icon: <Sun size={18} />, label: "Switch to light theme", value: "light" },
    { icon: <Monitor size={18} />, label: "Switch to system theme", value: "system" },
    { icon: <Moon size={18} />, label: "Switch to dark theme", value: "dark" },
  ];

  return (
    <div
      role="radiogroup"
      className="flex w-fit items-center gap-1 rounded-full border border-gray-400 bg-white dark:bg-gray-900 p-[3px]"
    >
      {themes.map(({ icon, label, value }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          aria-label={label}
          data-theme-switcher="true"
          data-active={theme === value}
          onClick={() => setTheme(value)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all 
            ${theme === value ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-800"}
          `}
        >
          <div
            className={`transition-colors ${
              theme === value ? "text-white" : "text-black dark:text-white"
            }`}
          >
            {icon}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
