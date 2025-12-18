'use client'

import React, { useState } from 'react'
import {
  Pagination,
  SimplePagination,
  CompactPagination
} from '@/packages/Pagination'
import { Button } from '@/packages/Button'
import { cn } from '@/lib/utils'

// -------------------------------------------------------------
// Variant 1 — Basic Pagination
// -------------------------------------------------------------
export function Variant1() {
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

// -------------------------------------------------------------
// Variant 2 — Style Variants
// -------------------------------------------------------------
export function Variant2() {
  const [page, setPage] = useState(1)

  return (
    <div className="space-y-10">
      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} variant="default" showPrevNext />
      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} variant="outlined" showPrevNext />
      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} variant="ghost" showPrevNext />
    </div>
  )
}

// -------------------------------------------------------------
// Variant 3 — Size Options
// -------------------------------------------------------------
export function Variant3() {
  const [page, setPage] = useState(1)

  return (
    <div className="space-y-6">
      <Pagination size="sm" currentPage={page} totalPages={5} onPageChange={setPage} showPrevNext />
      <Pagination size="md" currentPage={page} totalPages={5} onPageChange={setPage} showPrevNext />
      <Pagination size="lg" currentPage={page} totalPages={5} onPageChange={setPage} showPrevNext />
    </div>
  )
}

// -------------------------------------------------------------
// Variant 4 — Feature Options
// -------------------------------------------------------------
export function Variant4() {
  const [page, setPage] = useState(5)

  return (
    <div className="space-y-10">
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        showFirstLast
        showPrevNext
      />
      <div className="flex flex-col items-center text-center">
        <Pagination
          currentPage={page}
          totalPages={5}
          onPageChange={setPage}
          showPrevNext
          showPageInfo
          className="items-center justify-center"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <Pagination
          currentPage={page}
          totalPages={5}
          totalItems={197}
          pageSize={5}
          onPageChange={setPage}
          showPrevNext
          showItemsInfo
          className="items-center justify-center"
        />
      </div>

    </div>
  )
}

// -------------------------------------------------------------
// Variant 5 — Simple + Compact Pagination
// -------------------------------------------------------------
export function Variant5() {
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

// -------------------------------------------------------------
// Variant 6 — Headless Mode (Custom UI)
// -------------------------------------------------------------
export function Variant6() {
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
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
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
              );
            }

            if (typeof pageObj === "number") {
              const isActive = pageObj === currentPage;

              return (
                <Button
                  key={`page-${pageObj}`}
                  onClick={() => goToPage(pageObj)}
                  className={cn(
                    "min-w-10 h-10 px-3",
                    isActive && "scale-105"
                  )}
                >
                  {pageObj}
                </Button>
              );
            }

            return null;
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
