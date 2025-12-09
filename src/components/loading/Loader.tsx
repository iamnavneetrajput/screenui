import { Skeleton } from "./Skeleton";
export function GlobalLoader() {
    return (
        <div className="w-full border border-[hsl(var(--border))] rounded-xl overflow-hidden flex flex-col mb-8 shadow-sm">
            {/* Header Section Skeleton */}
            <div className="p-6 border-b border-[hsl(var(--border))] relative">
                <div className="absolute top-6 right-6">
                    <Skeleton className="w-5 h-5 rounded" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="h-7 w-48" />
                    <div className="flex gap-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-12 rounded-full" />
                    </div>
                </div>

                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-3 w-32" />
            </div>

            {/* Toolbar Skeleton */}
            <div className="px-4 border-b border-[hsl(var(--border))] flex items-center gap-4 h-[50px]">
                <div className="flex items-center gap-2 px-2 py-3 border-b-2 border-[hsl(var(--border))]">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-12" />
                </div>
                <div className="flex items-center gap-2 px-2 py-3">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center gap-2 px-2 py-3">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-10" />
                </div>
            </div>

            {/* Preview Area Skeleton */}
            <div className="p-0 min-h-[300px] flex items-center justify-center border-b border-[hsl(var(--border))] relative">
                {/* Subtle pattern for preview area background matching the real component */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="w-full max-w-md p-8 relative z-10">
                    {/* Internal Alert Component Skeleton */}
                    <div className="rounded-lg p-4 border-[hsl(var(--border))] flex items-start gap-3">
                        <Skeleton className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-4 w-full opacity-60" />
                            <div className="flex gap-4 mt-4">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        </div>
                        <Skeleton className="w-4 h-4 rounded ml-2" />
                    </div>
                </div>
            </div>

            {/* Footer Skeleton */}
            <div className="px-6 py-3 border-t border-[hsl(var(--border))] flex items-center">
                <Skeleton className="h-3 w-24" />
            </div>
        </div>
    );
}
