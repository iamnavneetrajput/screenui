import TerminalCommand from "../main/TerminalCommand";
import { useState } from "react";
import  CopyButton from "../main/copybutton";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title, description }) => {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    return (
        <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {description && <p className="text-sm text-gray-400 mb-2">{description}</p>}
        <pre className={`language-${language}`}>
            <code>{code}</code>
        </pre>
        <div className="flex justify-between items-center mt-2">
            <TerminalCommand command={code} />
            {/* <CopyButton text={code} onClick={handleCopy} /> */}
        </div>
        </div>
    );
    }