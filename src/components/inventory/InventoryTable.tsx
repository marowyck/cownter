'use client';

import { Warning } from '@phosphor-icons/react';

interface InventoryTableProps {
  items: Array<{
    id: number;
    name: string;
    category: string;
    quantity: number;
    unit: string;
    minStock: number;
    price: number;
    lastUpdated: string;
  }>;
}

export function InventoryTable({ items }: InventoryTableProps) {
  return (
    <div className="bg-white rounded-xl border border-brand-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-brand-50 border-b border-brand-100">
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Item</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Categoria</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Quantidade</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Mínimo</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Preço Unit.</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Última Atualização</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const isLowStock = item.quantity < item.minStock;
            return (
              <tr key={item.id} className={`border-b border-brand-100 hover:bg-brand-50 transition-colors ${isLowStock ? 'bg-red-50' : ''}`}>
                <td className="px-6 py-4 text-sm font-medium text-dark">
                  <div>
                    <p>{item.name}</p>
                    {isLowStock && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <Warning size={12} weight="fill" />
                        Abaixo do mínimo
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-dark/80">{item.category}</td>
                <td className="px-6 py-4 text-sm font-medium text-dark">
                  {item.quantity} {item.unit}
                </td>
                <td className="px-6 py-4 text-sm text-dark/60">
                  {item.minStock} {item.unit}
                </td>
                <td className="px-6 py-4 text-sm text-dark/80">R$ {(item.price / 10).toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-dark/60">
                  {new Date(item.lastUpdated).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-brand-600 hover:text-brand-700 font-medium">Editar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
