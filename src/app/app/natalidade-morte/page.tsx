'use client';

import { useState } from 'react';
import { Plus, MagnifyingGlass, Baby, Skull } from '@phosphor-icons/react';
import { BIRTHS_DEATHS } from '@/lib/appConstants';

export default function NatalidadeMortePage() {
  const [filterType, setFilterType] = useState<'Todos' | 'Nascimento' | 'Morte'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = BIRTHS_DEATHS.filter(
    (item) =>
      (filterType === 'Todos' || item.type === filterType) &&
      item.animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const birthCount = BIRTHS_DEATHS.filter((item) => item.type === 'Nascimento').length;
  const deathCount = BIRTHS_DEATHS.filter((item) => item.type === 'Morte').length;

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Controle de Natalidade e Morte</h1>
        <p className="text-dark/60 text-sm md:text-base">Registre e acompanhe nascimentos e mortes do rebanho</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Eventos</p>
              <p className="text-3xl font-bold text-dark">{BIRTHS_DEATHS.length}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <Baby size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Eventos registrados este ano</p>
        </div>

        <div className="bg-white rounded-xl border border-green-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Nascimentos</p>
              <p className="text-3xl font-bold text-green-600">{birthCount}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Baby size={24} className="text-green-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Novos animais</p>
        </div>

        <div className="bg-white rounded-xl border border-red-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Mortes</p>
              <p className="text-3xl font-bold text-red-600">{deathCount}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <Skull size={24} className="text-red-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Animais falecidos</p>
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
          <span>Novo Evento</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['Todos', 'Nascimento', 'Morte'].map((type) => (
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
              <th className="text-left p-4 font-semibold text-dark text-sm">Data</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Gênero</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Peso</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                <td className="p-4 text-dark font-medium">{item.animal}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Nascimento'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="p-4 text-dark">{new Date(item.date).toLocaleDateString('pt-BR')}</td>
                <td className="p-4 text-dark">{item.genero}</td>
                <td className="p-4 text-dark">{item.peso}</td>
                <td className="p-4 text-dark text-sm">
                  {item.type === 'Nascimento' ? `${item.mae} x ${item.pai}` : item.causa || '-'}
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
                  item.type === 'Nascimento'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {item.type}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Data</span>
                <span className="text-dark font-medium">{new Date(item.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Gênero</span>
                <span className="text-dark font-medium">{item.genero}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Peso</span>
                <span className="text-dark font-medium">{item.peso}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Detalhes</span>
                <span className="text-dark font-medium">
                  {item.type === 'Nascimento' ? `${item.mae}` : item.causa || '-'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark/40">Nenhum evento encontrado</p>
        </div>
      )}
    </div>
  );
}
