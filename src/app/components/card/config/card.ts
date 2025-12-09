// src/data/code-snippets/button.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
    dependency: '',
    ts: "npx screenui add card --lang ts --path src/components",
    js: "npx screenui add card --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/Card";

export function Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardHeader spacing="sm" align="between">
          <div>
            <CardDescription size="xs" className="uppercase tracking-wider font-semibold">
              Total Revenue
            </CardDescription>
            <CardTitle size="2xl" className="mt-2">
              $847,392
            </CardTitle>
          </div>

          <div className="p-3 rounded-xl">
            <span className="text-3xl">💰</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold">
              ↑ 23.5%
            </span>
            <span className="text-sm">vs last month</span>
          </div>

          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Monthly Target</span>
                <span className="text-sm font-semibold">84%</span>
              </div>

              <div className="overflow-hidden h-3 text-xs flex rounded-full">
                <div className="w-[84%] bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs mb-1">New Customers</p>
                <p className="text-lg font-bold">1,284</p>
              </div>
              <div>
                <p className="text-xs mb-1">Transactions</p>
                <p className="text-lg font-bold">8,492</p>
              </div>
              <div>
                <p className="text-xs mb-1">Avg. Order</p>
                <p className="text-lg font-bold">$129</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
`;

export const TsCode3 = `
import { useState } from "react";
import { Button } from "@/components/Button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/Card";

export function Example() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="text-6xl">✨</span>
          <p className="text-gray-600">Notification dismissed</p>
          <Button variant="outline" onClick={() => setDismissed(false)}>
            Show Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-white p-8">
      <Card className="max-w-lg w-full border-l-4 border-blue-500">
        <CardHeader align="between">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
              <span className="text-3xl">🎉</span>
            </div>

            <div className="flex-1">
              <CardTitle size="lg" className="text-black">
                New Feature: Team Collaboration
              </CardTitle>
              <CardDescription className="mt-1 text-black">
                Collaborate in real-time with your team members
              </CardDescription>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss notification"
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="text-gray-400 text-xl">×</span>
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              We've just launched our new team collaboration features! Work together, share feedback, and boost productivity.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">💬</p>
                <p className="text-xs font-medium text-gray-700">Live Chat</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">📝</p>
                <p className="text-xs font-medium text-gray-700">Shared Docs</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">🎯</p>
                <p className="text-xs font-medium text-gray-700">Task Assign</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter spacing="lg" align="end" gap="md">
          <Button variant="ghost" onClick={() => setDismissed(true)}>
            Maybe Later
          </Button>
          <Button>Try It Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`;

export const TsCode2 = `
import { useState } from "react";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/Card";

export function Example() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <Card padding="none" className="max-w-sm w-full">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop"
            alt="Premium Wireless Headphones"
            className="w-full h-64 object-cover"
            loading="lazy"
          />

          <button
            onClick={() => setLiked(!liked)}
            aria-label={liked ? "Unlike product" : "Like product"}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <span className={\`text-2xl \${liked ? "text-red-500" : "text-gray-400"}\`}>
              {liked ? "❤️" : "🤍"}
            </span>
          </button>
        </div>

        <div className="p-6">
          <CardHeader spacing="sm">
            <CardTitle size="lg">Premium Wireless Headphones</CardTitle>
            <CardDescription>
              Studio-quality sound with active noise cancellation
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-gray-900">$299</span>
              <span className="text-lg text-gray-500 line-through">$399</span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                25% OFF
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(2,847 reviews)</span>
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Free shipping on orders over $50</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>30-day money-back guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>In stock - Ships within 24 hours</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter spacing="lg" className="flex-col gap-3">
            <Button fullWidth size="lg">Add to Cart</Button>
            <Button fullWidth variant="outline">Buy Now</Button>
          </CardFooter>
        </div>

      </Card>
    </div>
  );
}
`;

// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;

// --- Meta Data ---
export const Component = "Card";
export const Title = "Versatile Card Component";
export const Description = "A customizable card component supporting various layouts, content types, and interactive states.";
export const Lastupdated = "2025-12-4";
export const Version = "1.0.0";
