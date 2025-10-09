'use client';

import { Terminal } from 'lucide-react';
import CopyButton from './copybutton';

interface TerminalCommandProps {
  command: string;
  copy?: boolean;
}

const TerminalCommand = ({ command, copy = true }: TerminalCommandProps) => {
  return (
    <div className="relative max-w-full bg-gray-950 text-white border border-gray-800 px-4 py-3 rounded-md font-mono text-sm overflow-hidden">
      <div className="flex items-start gap-2 pr-10">
        <Terminal className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
        <code className="whitespace-nowrap overflow-x-auto block">{command}</code>
        {/* <code className="break-words whitespace-pre-wrap">{command}</code> */}
      </div>
      {copy && (
        <div className="absolute top-3 right-3">
          <CopyButton text={command} />
        </div>
      )}
    </div>
  );
};

export default TerminalCommand;
