// utils/readCode.ts
import fs from 'fs';
import path from 'path';

// Utility function to read the file content as a string
export const readFileAsString = (filePath: string): string | null => {
  if (typeof window === 'undefined') { // This check ensures the code runs only on the server
    const fullPath = path.join(process.cwd(), filePath); // Resolves path relative to root
    return fs.readFileSync(fullPath, 'utf-8'); // Returns file content as string
  }
  return null; // Return null if accessed from the client-side
};
