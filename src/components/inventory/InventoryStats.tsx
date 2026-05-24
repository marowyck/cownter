'use client';

import { Package, Warning, CurrencyDollar } from '@phosphor-icons/react';

interface InventoryStatsProps {
  totalItems: number;
  lowStockItems: number;
  totalValue: number;
  categories: number;
}

export function InventoryStats({ totalItems, lowStockItems, totalValue, categories }: InventoryStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-dark/60 mb-1">Itens em Estoque</p>
            <p className="text-3xl font-bold text-dark">{totalItems}</p>
          </div>
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
            <Package size={24} className="text-brand-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-red-200 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-red-600 mb-1">Baixo Estoque</p>
            <p className="text-3xl font-bold text-red-700">{lowStockItems}</p>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Warning size={24} className="text-red-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-dark/60 mb-1">Valor Total</p>
            <p className="text-2xl font-bold text-dark">R$ {(totalValue / 1000).toFixed(1)}k</p>
          </div>
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
            <CurrencyDollar size={24} className="text-brand-600" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <p className="text-sm text-dark/60 mb-3">Categorias</p>
        <p className="text-3xl font-bold text-dark">{categories}</p>
      </div>
    </div>
  );
}
