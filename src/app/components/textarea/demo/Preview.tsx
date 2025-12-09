'use client';
import React, { useState } from 'react';
import { Textarea } from '@/packages/Textarea';
import { Button } from '@/packages/Button';

const baseTextarea =
  "text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground)/0.4)] " +
  "bg-[hsl(var(--background))] border border-[hsl(var(--border))]";

// Variant 1 — Basic Textarea

export function Variant1() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Textarea
            placeholder="Enter your message..."
            className={baseTextarea}
          />
        </div>
      </div>
    </div>
  );
}

// Variant 2 — With Label

export function Variant2() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Textarea
            label="Message"
            placeholder="Type your message here..."
            className={baseTextarea}
            labelClassName="text-[hsl(var(--foreground))]"
          />
        </div>
      </div>
    </div>
  );
}

// Variant 3 — Custom Styled (Headless)

export function Variant3() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">

          <Textarea
            variant="ghost"
            label="Custom Styled Textarea"
            description="A refined, premium textarea experience"
            placeholder="Type here..."
            showCount
            maxLength={200}

            /* PREMIUM INPUT STYLES */
            className={`
    ${baseTextarea}
    rounded-xl
    px-4 py-3
    border-2
    bg-[hsl(var(--surface))]
    backdrop-blur-md
    shadow-[0_2px_12px_rgba(0,0,0,0.25)]
    transition-all duration-200

    focus:border-[hsl(var(--blue))]
    focus-visible:ring-[hsl(var(--blue)/0.5)]
    focus-visible:ring-4
    focus:shadow-[0_4px_20px_rgba(0,0,0,0.35)]
  `}

            /* PREMIUM CONTAINER */
            containerClassName={`
    p-6 
    rounded-2xl 
    border border-[hsl(var(--border))]
    bg-[hsl(var(--background)/0.6)]
    backdrop-blur-xl
    shadow-[0_4px_30px_rgba(0,0,0,0.25)]
    transition-colors
  `}

            /* Label — minimal luxury */
            labelClassName="
    text-[hsl(var(--foreground))]
    font-semibold
    tracking-wide
    text-base
  "

            /* Description — light, subtle */
            descriptionClassName="
    text-[hsl(var(--foreground)/0.55)]
    text-sm
  "

            /* Remaining counter — classy & understated */
            counterClassName="
    text-[hsl(var(--foreground)/0.55)]
    font-medium
    text-sm
  "
          />
        </div>
      </div>
    </div>
  );
}

// Variant 4 — Rich Text Editor Style

export function Variant4() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <div className="max-w-3xl">

            <div className="border border-[hsl(var(--border))] rounded-lg overflow-hidden">

              {/* Toolbar */}
              <div className="border-b border-[hsl(var(--border))] px-3 py-2 flex gap-2">
                <Button className="px-2 py-1 rounded text-sm font-bold">B</Button>
                <Button className="px-2 py-1 rounded text-sm italic">I</Button>
                <Button className="px-2 py-1 rounded text-sm underline">U</Button>
                <div className="border-l mx-1 border-[hsl(var(--border))]"></div>
                <Button className="px-2 py-1 rounded text-sm">Link</Button>
                <Button className="px-2 py-1 rounded text-sm">Image</Button>
              </div>

              {/* Editor */}
              <Textarea
                placeholder="Write your content here..."
                variant="ghost"
                autoResize
                minRows={10}
                maxRows={20}
                className={`${baseTextarea} border-0 focus:ring-0`}
              />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Variant 5 — Comment Box
export function Variant5() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handlePost = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-6">

        {/* Input Card */}
        <div className="border border-[hsl(var(--border))] rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
            Add a Comment
          </h3>

          <Textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            autoResize
            minRows={2}
            maxRows={6}
            showCount
            maxLength={1000}
            className={`${baseTextarea}`}
          />

          <div className="flex justify-end mt-3">
            <Button
              variant="solid"
              onClick={handlePost}
              disabled={!comment.trim()}
              className="
                px-4 py-2
                text-[hsl(var(--foreground))]
                bg-[hsl(var(--button))]
                disabled:cursor-not-allowed
              "
            >
              Post Comment
            </Button>
          </div>
        </div>

        {/* Posted Comments */}
        <div className="space-y-3">
          {comments.map((c, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-lg p-4"
            >
              <p className="text-[hsl(var(--foreground))]">{c}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
