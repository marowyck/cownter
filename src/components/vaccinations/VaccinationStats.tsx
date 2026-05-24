'use client';

import { Syringe, Warning, Check } from '@phosphor-icons/react';

interface VaccinationStatsProps {
  total: number;
  pending: number;
  expired: number;
  complete: number;
}

export function VaccinationStats({ total, pending, expired, complete }: VaccinationStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-dark/60 mb-1">Total</p>
            <p className="text-3xl font-bold text-dark">{total}</p>
          </div>
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
            <Syringe size={24} className="text-brand-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-yellow-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-yellow-600 mb-1">Pendente</p>
            <p className="text-3xl font-bold text-yellow-700">{pending}</p>
          </div>
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Warning size={24} className="text-yellow-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-red-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-red-600 mb-1">Vencida</p>
            <p className="text-3xl font-bold text-red-700">{expired}</p>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Warning size={24} className="text-red-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-green-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-green-600 mb-1">Completa</p>
            <p className="text-3xl font-bold text-green-700">{complete}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Check size={24} className="text-green-600" weight="duotone" />
          </div>
        </div>
      </div>
    </div>
  );
}
