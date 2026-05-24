'use client';

import { CheckCircle, Warning } from '@phosphor-icons/react';

interface ActivityCardProps {
  time: string;
  action: string;
  type: 'success' | 'info';
}

export function ActivityCard({ time, action, type }: ActivityCardProps) {
  return (
    <div className="pb-4 border-b border-brand-100 last:border-0 flex gap-3">
      <div className="flex-shrink-0 mt-1">
        {type === 'success' ? (
          <CheckCircle size={18} className="text-green-600" weight="fill" />
        ) : (
          <Warning size={18} className="text-brand-600" weight="fill" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-dark/60 mb-1">{time}</p>
        <p className="text-sm text-dark/80">{action}</p>
      </div>
    </div>
  );
}
