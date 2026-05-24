'use client';

import { ReactNode } from 'react';
import {
  Cow,
  Syringe,
  Package,
  ArrowUp,
  House,
  ChartBar,
  Gear,
} from '@phosphor-icons/react';

interface IconProps {
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  className?: string;
}

const ICON_MAP: Record<string, any> = {
  Cow,
  Syringe,
  Package,
  ArrowUp,
  House,
  ChartBar,
  Gear,
};

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: string;
  status: 'good' | 'warning' | 'critical';
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

export function StatCard({ label, value, change, icon, status, bgColor, borderColor, iconColor }: StatCardProps) {
  const IconComponent = ICON_MAP[icon] as React.ComponentType<IconProps>;

  const statusColor = {
    good: 'text-green-600',
    warning: 'text-yellow-600',
    critical: 'text-red-600',
  }[status];

  return (
    <div className={`bg-white rounded-xl border p-6 ${borderColor}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-dark/60 mb-1">{label}</p>
          <p className={`text-3xl font-bold ${statusColor}`}>{value}</p>
        </div>
        {IconComponent && (
          <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center`}>
            <IconComponent size={24} weight="duotone" className={iconColor} />
          </div>
        )}
      </div>
      <p className="text-xs text-dark/50">{change}</p>
    </div>
  );
}
