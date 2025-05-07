import React from 'react';
import { SocialItem } from '../types';

interface ToolsTabProps {
  items: SocialItem[];
  onSelect: (title: string) => void;
}

const ToolsTab: React.FC<ToolsTabProps> = ({ items, onSelect }) => (
  <div className="p-2">
    <div className="text-xs text-gray-500 uppercase px-2 py-1">Social</div>
    <ul>
      {items.map((item) => (
        <li 
          key={item.id}
          className="flex items-center px-2 py-2 my-1 rounded hover:bg-gray-800 cursor-pointer group"
          onClick={() => onSelect(item.title)}
        >
          <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center mr-3">
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="text-gray-200">{item.title}</div>
            <div className="text-xs text-gray-400">{item.description}</div>
          </div>
          <span className="text-xs text-gray-500">{item.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ToolsTab;