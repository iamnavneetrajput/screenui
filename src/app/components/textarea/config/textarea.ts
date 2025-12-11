// src/data/code-snippets/button.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
    dependency: '',
    ts: "npx screenui-cli@latest add textarea --lang ts --path src/components",
    js: "npx screenui-cli@latest add textarea --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `
import { Textarea } from '@/components/Textarea';

export function Example() {
  return (

     <Textarea
            placeholder="Enter your message..."
     />

  );
}
`;

export const TsCode2 = `
import { Textarea } from '@/components/Textarea';

export function Example() {

  return (
        <Textarea
            label="Message"
            placeholder="Type your message here..."
        />
  );
}
`;

export const TsCode3 = `
import { Textarea } from '@/components/Textarea';

export function Example() {
  return (
        <Textarea
            variant="ghost"
            label="Custom Styled Textarea"
            description="Completely customized with Tailwind"
            placeholder="Type here..."
            className="border-4 border-purple-500 focus:bg-purple-100 focus:border-purple-600 focus-visible:ring-purple-500 rounded-xl"
            containerClassName="bg-purple-50 p-6 rounded-lg border-2 border-purple-200"
            labelClassName="text-purple-900 font-bold text-xl"
            descriptionClassName="text-purple-700"
            showCount
            maxLength={200}
            counterClassName="text-purple-600 font-semibold"
        />
  );
}
`;

export const TsCode4 = `
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export function Example() {
  return (
        <div className="flex flex-wrap gap-4">
          <div className="max-w-3xl">
            <div className="border rounded-lg overflow-hidden">
              <div className="border-b px-3 py-2 flex gap-2">
                <Button className="px-2 py-1 rounded text-sm font-bold">B</Button>
                <Button className="px-2 py-1 rounded text-sm italic">I</Button>
                <Button className="px-2 py-1 rounded text-sm underline">U</Button>
                <div className="border-l mx-1"></div>
                <Button className="px-2 py-1 rounded text-sm">Link</Button>
                <Button className="px-2 py-1 rounded text-sm">Image</Button>
              </div>
              <Textarea
                placeholder="Write your content here..."
                variant="ghost"
                autoResize
                minRows={10}
                maxRows={20}
                className="border-0 focus:ring-0"
              />
            </div>
          </div>
        </div>
  );
}
`;

export const TsCode5 = `
'use client';
import React, { useState } from 'react';
import { Textarea } from '@/components/Textarea';

export function Example() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handlePost = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };
  return (
        <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Add a Comment</h3>
            <Textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              autoResize
              minRows={2}
              maxRows={6}
              showCount
              maxLength={1000}
              className='bg-zinc-100'
            />
            <div className="flex justify-end mt-3">
              <Button
                variant='solid'
                onClick={handlePost}
                disabled={!comment.trim()}
                className="text-amber-300 px-4 py-2 disabled:cursor-not-allowed"
              >
                Post Comment
              </Button>
            </div>
        </div>

          <div className="space-y-3">
            {comments.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800">{c}</p>
              </div>
            ))}
          </div>
  );
}
`;

// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;
export const JsCode5 = TsCode5;

// --- Meta Data ---
export const Component = "Textarea";
export const Title = "Textarea";
export const Description = "Accessible, customizable Textarea with labels, autosize, and character counting.";
export const Lastupdated = "2025-11-23";
export const Version = "1.0.0";
