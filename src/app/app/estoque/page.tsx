'use client';

import { useState } from 'react';
import { Plus, MagnifyingGlass } from '@phosphor-icons/react';
import { INVENTORY, INVENTORY_CATEGORIES } from '@/lib/appConstants';
import { InventoryStats } from '@/components/inventory/InventoryStats';
import { InventoryTable } from '@/components/inventory/InventoryTable';

export default function EstoquePage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = INVENTORY.filter(
    (item) =>
      (selectedCategory === 'Todos' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockItems = filteredItems.filter((item) => item.quantity < item.minStock);
  const totalValue = filteredItems.reduce((sum, item) => sum + item.quantity * (item.price / 10), 0);

  const stats = {
    totalItems: INVENTORY.length,
    lowStockItems: lowStockItems.length,
    totalValue,
    categories: INVENTORY_CATEGORIES.length - 1,
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Controle de Estoque</h1>
        <p className="text-dark/60">Gerencia insumos, medicamentos e materiais</p>
      </div>

      {/* Stats */}
      <InventoryStats {...stats} />

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap items-center">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {INVENTORY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-brand-600 text-white'
                  : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        {/* Add Button */}
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm">
          <Plus size={20} weight="bold" />
          Novo Item
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" />
          <input
            type="text"
            placeholder="Buscar item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <InventoryTable items={filteredItems} />
    </div>
  );
}
