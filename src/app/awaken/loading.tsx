'use client';

import React, { useEffect } from 'react';

const SkeletonOverlay: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-30 bg-[#0A0A0B]">
      <div className="w-full mt-20 max-w-7xl mx-auto p-6">

        {/* <div className="flex items-center space-x-2 mb-12">
          <div className="h-5 w-44 bg-white/10 rounded animate-pulse" />
          <div className="h-5 w-5 bg-white/10 rounded animate-pulse" />
        </div> */}

        <div className="space-y-4 mb-12">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
          <div className="h-6 w-full max-w-xs bg-white/10 rounded animate-pulse" />
        </div>
        <div className="h-12 w-full max-w-md bg-[#1C1C1F] rounded-lg mb-16 flex items-center px-4">
          <div className="h-4 w-48 bg-white/10 rounded animate-pulse" />
        </div>

        <div className="h-12 w-full bg-[#1C1C1F] rounded-lg mb-16 flex items-center px-4 space-x-4">
          <div className="h-4 w-25 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-25 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-25 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-25 bg-white/10 rounded animate-pulse" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 bg-[#1C1C1F] rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="h-6 w-32 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-48 bg-white/10 rounded animate-pulse" />
                </div>
                <div className="h-6 w-6 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-6 w-20 bg-white/10 rounded-full animate-pulse" />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-5 w-16 bg-white/10 rounded animate-pulse" />
                <div className="h-5 w-16 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonOverlay;
