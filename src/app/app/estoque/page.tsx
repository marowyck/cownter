'use client';

import { useState } from 'react';
import { Package, Warning, CurrencyDollar, Plus } from '@phosphor-icons/react';

const INVENTORY = [
  {
    id: 1,
    name: 'Ração Concentrada Premium',
    category: 'Ração',
    quantity: 250,
    unit: 'kg',
    minStock: 100,
    price: 1500.00,
    lastUpdated: '2026-05-20',
  },
  {
    id: 2,
    name: 'Vacina Raiva',
    category: 'Medicamentos',
    quantity: 8,
    unit: 'doses',
    minStock: 20,
    price: 450.00,
    lastUpdated: '2026-05-15',
  },
  {
    id: 3,
    name: 'Sal Mineralizado',
    category: 'Insumo',
    quantity: 45,
    unit: 'kg',
    minStock: 50,
    price: 280.00,
    lastUpdated: '2026-05-18',
  },
  {
    id: 4,
    name: 'Antibiótico Oxitetraciclina',
    category: 'Medicamentos',
    quantity: 12,
    unit: 'frascos',
    minStock: 10,
    price: 320.00,
    lastUpdated: '2026-05-22',
  },
  {
    id: 5,
    name: 'Arame Farpado',
    category: 'Materiais',
    quantity: 500,
    unit: 'metros',
    minStock: 200,
    price: 2500.00,
    lastUpdated: '2026-05-10',
  },
  {
    id: 6,
    name: 'Desinfetante Quaternário',
    category: 'Limpeza',
    quantity: 15,
    unit: 'litros',
    minStock: 20,
    price: 180.00,
    lastUpdated: '2026-05-21',
  },
];

const CATEGORIES = ['Todos', 'Ração', 'Medicamentos', 'Insumo', 'Materiais', 'Limpeza'];

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

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Controle de Estoque</h1>
        <p className="text-dark/60">Gerencia insumos, medicamentos e materiais</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-dark/60 mb-1">Itens em Estoque</p>
              <p className="text-3xl font-bold text-dark">{INVENTORY.length}</p>
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
              <p className="text-3xl font-bold text-red-700">{lowStockItems.length}</p>
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
          <p className="text-3xl font-bold text-dark">{CATEGORIES.length - 1}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap items-center">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
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
        <input
          type="text"
          placeholder="Buscar item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
        />
      </div>

      {/* Table */}
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
            {filteredItems.map((item) => {
              const isLowStock = item.quantity < item.minStock;
              return (
                <tr
                  key={item.id}
                  className={`border-b border-brand-100 hover:bg-brand-50 transition-colors ${
                    isLowStock ? 'bg-red-50' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-dark">
                    <div>
                      <p>{item.name}</p>
                      {isLowStock && (
                        <p className="text-xs text-red-600 mt-1">⚠️ Abaixo do mínimo</p>
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
                  <td className="px-6 py-4 text-sm text-dark/80">
                    R$ {(item.price / 10).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-dark/60">
                    {new Date(item.lastUpdated).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-brand-600 hover:text-brand-700 font-medium">
                      Editar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
