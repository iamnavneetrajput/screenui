
import React from 'react';

interface FeaturesItemProps {
  label: string;
  description: string;
}

export function FeaturesItem({
  label,
  description
}: FeaturesItemProps) {
  return (
    <li>
      <code className="px-1.5 py-1 rounded bg-gray-700 text-white font-mono text-sm">{label}</code>
      <span className="ml-2">{description}</span>
    </li>
  );
}
