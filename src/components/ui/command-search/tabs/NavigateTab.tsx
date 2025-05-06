import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '../types';

interface NavigateTabProps {
  items: NavigationItem[];
  onSelect: (title: string) => void;
}

const NavigateTab: React.FC<NavigateTabProps> = ({ items, onSelect }) => (
  <div className="p-2">
    <div className="text-xs text-gray-500 uppercase px-2 py-1">Navigation</div>
    <ul>
      {items.map((item) => (
        <li key={item.id} className="my-1">
          <Link
            href={item.href || '/'}
            className="flex items-center px-2 py-2 rounded hover:bg-gray-800 cursor-pointer"
            onClick={() => onSelect(item.title)}
          >
            <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center mr-3">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="text-gray-200">{item.title}</div>
              <div className="text-xs text-gray-400">{item.description}</div>
            </div>
            {item.shortcut && (
              <kbd className="px-2 py-0.5 text-xs bg-gray-700 rounded">{item.shortcut}</kbd>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default NavigateTab;