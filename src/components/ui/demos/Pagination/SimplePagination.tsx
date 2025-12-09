'use client';
import { SimplePagination } from "@/packages/Pagination";
import { useState } from "react";

export default function SimplePaginationDemo() {
      const [simplePage, setSimplePage] = useState(3)
    return (
        <SimplePagination
            currentPage={simplePage}
            totalPages={5}
            onPageChange={setSimplePage}
        />
    );
}