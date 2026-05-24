'use client';

import { useState } from 'react';
import { Plus, MagnifyingGlass, CurrencyDollar, ArrowUp, ArrowDown } from '@phosphor-icons/react';
import { SALES_PURCHASES } from '@/lib/appConstants';

export default function CompraVendaPage() {
  const [filterType, setFilterType] = useState<'Todos' | 'Compra' | 'Venda'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = SALES_PURCHASES.filter(
    (item) =>
      (filterType === 'Todos' || item.type === filterType) &&
      item.animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const salesTotal = SALES_PURCHASES.filter((item) => item.type === 'Venda').reduce((sum, item) => sum + item.value, 0);
  const purchasesTotal = SALES_PURCHASES.filter((item) => item.type === 'Compra').reduce((sum, item) => sum + item.value, 0);
  const balance = salesTotal - purchasesTotal;

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Compra e Venda</h1>
        <p className="text-dark/60 text-sm md:text-base">Gerencie suas transações de compra e venda de animais</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-green-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Vendas</p>
              <p className="text-2xl md:text-3xl font-bold text-green-600">R$ {(salesTotal / 1000).toFixed(1)}k</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <ArrowUp size={24} className="text-green-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">{SALES_PURCHASES.filter((i) => i.type === 'Venda').length} transações</p>
        </div>

        <div className="bg-white rounded-xl border border-red-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Compras</p>
              <p className="text-2xl md:text-3xl font-bold text-red-600">R$ {(purchasesTotal / 1000).toFixed(1)}k</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <ArrowDown size={24} className="text-red-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">{SALES_PURCHASES.filter((i) => i.type === 'Compra').length} transações</p>
        </div>

        <div className={`bg-white rounded-xl border p-6 ${balance >= 0 ? 'border-green-100' : 'border-red-100'}`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Saldo</p>
              <p className={`text-2xl md:text-3xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                R$ {(balance / 1000).toFixed(1)}k
              </p>
            </div>
            <div className={`p-3 rounded-lg ${balance >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
              <CurrencyDollar size={24} className={balance >= 0 ? 'text-green-600' : 'text-red-600'} weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Resultado líquido</p>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4 md:space-y-0 md:flex md:gap-4 md:items-center md:justify-between">
        {/* Search */}
        <div className="flex-1 relative">
          <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40" />
          <input
            type="text"
            placeholder="Buscar por animal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-brand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* Add Button */}
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-all font-medium">
          <Plus size={20} />
          <span>Nova Transação</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['Todos', 'Compra', 'Venda'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type as any)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              filterType === type
                ? 'bg-brand-600 text-white'
                : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table - Desktop View */}
      <div className="hidden md:block bg-white rounded-xl border border-brand-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-brand-50 border-b border-brand-100">
            <tr>
              <th className="text-left p-4 font-semibold text-dark text-sm">Animal</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Tipo</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Valor</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Parceiro</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Data</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                <td className="p-4 text-dark font-medium">{item.animal}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Venda'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="p-4 text-dark font-semibold">
                  R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </td>
                <td className="p-4 text-dark">{item.type === 'Venda' ? item.buyer : item.seller}</td>
                <td className="p-4 text-dark">{new Date(item.date).toLocaleDateString('pt-BR')}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Concluído'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards - Mobile View */}
      <div className="md:hidden space-y-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-brand-100 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="font-semibold text-dark">{item.animal}</div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Venda'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {item.type}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-dark/60">Valor:</span>
                <span className="text-dark font-semibold">R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/60">Parceiro:</span>
                <span className="text-dark font-medium">{item.type === 'Venda' ? item.buyer : item.seller}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/60">Data:</span>
                <span className="text-dark font-medium">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/60">Status:</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Concluído'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark/40">Nenhuma transação encontrada</p>
        </div>
      )}
    </div>
  );
}
