'use client';

import { Terminal } from 'lucide-react';
import CopyButton from './copybutton';

interface TerminalCommandProps {
  command: string;
}

const TerminalCommand = ({ command }: TerminalCommandProps) => {
  return (
    <div className="flex items-center bg-gray-950 text-white border border-gray-800 px-4 py-2 rounded-md font-mono text-sm">
      <Terminal className="w-4 h-4 text-gray-400 mr-2" />
      <code>{command}</code>
      <div className="ml-4">
        <CopyButton text={command} />
      </div>
    </div>
  );
};

export default TerminalCommand;
