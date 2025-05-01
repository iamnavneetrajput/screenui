'use client';

import { useEffect, useState } from 'react';
import { BarChart2,Wifi, WifiOff, Globe } from 'lucide-react';

export default function PerformanceSection({ fps }: { fps: number }) {
  const [isOnline, setIsOnline] = useState(true);
  const [route, setRoute] = useState<string | null>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsOnline(navigator.onLine);
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRoute(window.location.pathname);
    }
  }, []);

  return (
    <div className="border-b border-dotted border-muted/50 p-1">
      <h3 className="font-medium mb-2 flex items-center gap-1">
         Performance
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <MetricCard
          label="FPS"
          value={fps}
          icon={<BarChart2 className="w-4 h-4 text-blue-500" />}
        />
        <MetricCard
          label="Network"
          value={isOnline ? 'Online' : 'Offline'}
          icon={
            isOnline ? (
              <Wifi className="w-4 h-4 text-green-500" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-500" />
            )
          }
        />
        <MetricCard
          label="Route"
          value={route || '...'}
          icon={<Globe className="w-4 h-4 text-yellow-500" />}
        />
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-muted p-2 rounded-lg text-center">
      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <div className="font-semibold text-sm">{value}</div>
    </div>
  );
}
