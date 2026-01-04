"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function Notfound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full">
        <div className="border border-dashed border-border p-8 md:p-12 bg-card">
          <div className="space-y-8">
            {/* HEADER */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-7xl md:text-8xl font-light">
                  404
                </span>

                <div className="h-16 w-px bg-border" />

                <span className="text-xl md:text-2xl font-light text-foreground">
                  Page not found
                </span>
              </div>

              <p className="text-foreground text-base max-w-md">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {/* Primary */}
              <button
                onClick={() => router.push("/")}
                className="inline-flex border-border items-center gap-2 px-5 py-2.5 text-sm font-medium border-2 hover:bg-transparent transition-colors"
              >
                <Home size={16} />
                Go home
              </button>

              {/* Secondary */}
              <button
                onClick={() => router.back()}
                className="inline-flex border-border items-center gap-2 px-5 py-2.5 text-sm font-medium border-2 hover:bg-transparent transition-colors"
              >
                <ArrowLeft size={16} />
                Go back
              </button>
            </div>

            {/* LINKS SECTION */}
            <div className="pt-6 border-t-2 border-dashed border-border">
              <div className="flex items-start gap-3">
                <Search
                  size={18}
                  className="text-[hsl(var(--foreground))]/40 mt-0.5 flex-shrink-0"
                />

                <div className="space-y-1">
                  <p className="text-sm foreground">
                    Looking for something specific?
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/library"
                      className="text-foreground foreground underline underline-offset-2"
                    >
                      Components
                    </Link>

                    <span className="text-border">•</span>

                    <Link
                      href="/docs/component"
                      className="text-foreground foreground underline underline-offset-2"
                    >
                      Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center">
          <p className="text-xs foreground">
            Error code: 404 • Not Found
          </p>
        </div>
      </div>
    </div>
  );
}
