'use client';
import { useState, useCallback, useRef } from 'react';

interface UseClipboardOptions {
  timeout?: number;
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
}

interface UseClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
  isSupported: boolean;
  error: Error | null;
  reset: () => void;
}

export function useClipboard(options: UseClipboardOptions = {}): UseClipboardReturn {
  const { timeout = 2000, onSuccess, onError } = options;
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isSupported = typeof navigator !== 'undefined' && 'clipboard' in navigator;

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!isSupported) {
      const fallbackError = new Error('Clipboard API not supported');
      setError(fallbackError);
      onError?.(fallbackError);
      return false;
    }

    reset();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onSuccess?.(text);
      
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, timeout);

      return true;
    } catch (err) {
      const clipboardError = err instanceof Error 
        ? err 
        : new Error('Failed to copy to clipboard');
      
      setError(clipboardError);
      onError?.(clipboardError);
      
      // Fallback: Create temporary textarea
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        setCopied(true);
        onSuccess?.(text);
        
        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (fallbackErr) {
        const finalError = fallbackErr instanceof Error 
          ? fallbackErr 
          : new Error('All clipboard methods failed');
        setError(finalError);
        onError?.(finalError);
        return false;
      }
    }
  }, [isSupported, timeout, onSuccess, onError, reset]);

  return {
    copied,
    copy,
    isSupported,
    error,
    reset
  };
}