// --- Installation Commands (structured) ---
export const InstallCommands = {
    dependency: '',
    ts: "npx screenui add pagination --lang ts --path src/components",
    js: "npx screenui add pagination --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `'use client'
import React, { useState } from 'react'
import { Pagination } from '@/components/Pagination'

export function BasicPagination() {
  const [page, setPage] = useState(1)
  
    return (
      <div className="space-y-12">
        <Pagination
          currentPage={page}
          totalPages={5}
          onPageChange={setPage}
          showPrevNext
        />
      </div>
    )
  }
`;

export const TsCode2 = `'use client'
import React, { useState } from 'react'
import { SimplePagination, CompactPagination } from '@/components/Pagination'

export function SimpleCompactPagination() {
  const [simplePage, setSimplePage] = useState(3)
  const [compactPage, setCompactPage] = useState(1)

  return (
    <div className="space-y-12">
      <SimplePagination
        currentPage={simplePage}
        totalPages={5}
        onPageChange={setSimplePage}
      />

      <CompactPagination
        currentPage={compactPage}
        totalPages={5}
        onPageChange={setCompactPage}
      />
    </div>
  )
}
`;

export const TsCode3 = `'use client'
import React, { useState } from 'react'
import { Pagination } from '@/packages/Pagination'
import { Button } from '@/packages/Button'
import { cn } from '@/lib/utils'

export function Custom() {
  const [page, setPage] = useState(1)

  return (
    <div className="space-y-12">
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        render={({
          currentPage,
          totalPages,
          pages,
          goToPage,
          previousPage,
          nextPage,
          canPreviousPage,
          canNextPage,
        }) => (
          <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">

            {/* Progress Bar */}
            <div className="w-full">
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
                  style={{ width: \`\${(currentPage / totalPages) * 100}%\` }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="
              flex flex-wrap items-center justify-center gap-3 
              w-full
            ">

              {/* Prev Button */}
              <Button
                onClick={previousPage}
                disabled={!canPreviousPage}
                className="min-w-[90px] sm:min-w-[110px]"
              >
                Previous
              </Button>

              {/* Page List */}
              <div
                className="
                  flex flex-wrap items-center justify-center 
                  gap-2 max-w-full
                "
              >
                {pages.map((pageObj) => {
                  if (typeof pageObj === "object" && pageObj.type === "ellipsis") {
                    return (
                      <span
                        key={pageObj.key}
                        className="px-3 py-2 text-slate-400 font-medium select-none"
                      >
                        •••
                      </span>
                    )
                  }

                  if (typeof pageObj === "number") {
                    const isActive = pageObj === currentPage

                    return (
                      <Button
                        key={\`page-\${pageObj}\`}
                        onClick={() => goToPage(pageObj)}
                        className={cn(
                          "min-w-10 h-10 px-3",
                          isActive && "scale-105"
                        )}
                      >
                        {pageObj}
                      </Button>
                    )
                  }

                  return null
                })}
              </div>

              {/* Next Button */}
              <Button
                onClick={nextPage}
                disabled={!canNextPage}
                className="min-w-[90px] sm:min-w-[110px]"
              >
                Next
              </Button>
            </div>

            {/* Info Text */}
            <p className="text-sm text-slate-600 font-medium text-center">
              Step {currentPage} of {totalPages} •{" "}
              {Math.round((currentPage / totalPages) * 100)}% Complete
            </p>
          </div>
        )}
      />
    </div>
  )
}
`;

// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;

// --- Meta Data ---
export const Component = "Pagination";
export const Title = "Pagination";
export const Description = "Accessible, customizable pagination component with multiple variants, render customization, and full keyboard support.";
export const Lastupdated = "2025-11-23";
export const Version = "1.0.0";
