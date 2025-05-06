import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Components } from '../types';
import Link from 'next/link';

interface ActionsTabProps {
  items: Components[];
  onSelect: (title: string) => void;
}

const ActionsTab: React.FC<ActionsTabProps> = ({ items, onSelect }) => (
  <div className="p-2">
    <div className="text-xs text-gray-500 uppercase px-2 py-1">Quick Actions</div>
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center px-2 py-2 my-1 rounded hover:bg-gray-800 cursor-pointer group"
          onClick={() => {
            if (onSelect) {
              onSelect(item.title); // Ensure this function is implemented
            } else {
              console.error('onSelect is not implemented');
            }
          }}
        >
          <Link href={item.href || '#'}>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center mr-3">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-gray-200">{item.title}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
              <ChevronRight size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ActionsTab;