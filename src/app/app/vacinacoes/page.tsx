'use client';

import { useState } from 'react';
import { Syringe, Check, Warning, Calendar } from '@phosphor-icons/react';

const VACCINATIONS = [
  {
    id: 1,
    animal: 'Margarida (BR-001)',
    vaccine: 'Raiva',
    status: 'Completa',
    nextDue: '2026-11-23',
    lastDate: '2025-11-23',
  },
  {
    id: 2,
    animal: 'Princesa (BR-003)',
    vaccine: 'Febre Aftosa',
    status: 'Pendente',
    nextDue: '2026-05-27',
    lastDate: '2025-11-27',
  },
  {
    id: 3,
    animal: 'Touro Zeus (BR-002)',
    vaccine: 'Raiva',
    status: 'Completa',
    nextDue: '2026-12-15',
    lastDate: '2025-12-15',
  },
  {
    id: 4,
    animal: 'Tornado (EQ-001)',
    vaccine: 'Tétano',
    status: 'Vencida',
    nextDue: '2025-04-20',
    lastDate: '2024-04-20',
  },
  {
    id: 5,
    animal: 'Margarida (BR-001)',
    vaccine: 'Febre Aftosa',
    status: 'Completa',
    nextDue: '2026-11-15',
    lastDate: '2025-11-15',
  },
];

const VACCINES = ['Raiva', 'Febre Aftosa', 'Tétano', 'IBR', 'BVD', 'Leptospirose'];

export default function VacinacoesPage() {
  const [filterStatus, setFilterStatus] = useState<'Todos' | 'Pendente' | 'Vencida' | 'Completa'>('Todos');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const filteredVaccinations = VACCINATIONS.filter(
    (v) => filterStatus === 'Todos' || v.status === filterStatus
  );

  const getPendingCount = () => VACCINATIONS.filter((v) => v.status === 'Pendente').length;
  const getExpiredCount = () => VACCINATIONS.filter((v) => v.status === 'Vencida').length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Controle de Vacinações</h1>
        <p className="text-dark/60">Gerencie o calendário de vacinações e lembretes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-dark/60 mb-1">Total de Registros</p>
              <p className="text-3xl font-bold text-dark">{VACCINATIONS.length}</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
              <Syringe size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-yellow-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-yellow-600 mb-1">Pendentes</p>
              <p className="text-3xl font-bold text-yellow-700">{getPendingCount()}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-yellow-600" weight="duotone" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-red-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-red-600 mb-1">Vencidas</p>
              <p className="text-3xl font-bold text-red-700">{getExpiredCount()}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Warning size={24} className="text-red-600" weight="duotone" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-green-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-green-600 mb-1">Completas</p>
              <p className="text-3xl font-bold text-green-700">
                {VACCINATIONS.filter((v) => v.status === 'Completa').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Check size={24} className="text-green-600" weight="duotone" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap items-center">
        {/* Filters */}
        <div className="flex gap-2">
          {(['Todos', 'Pendente', 'Completa', 'Vencida'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                filterStatus === status
                  ? 'bg-brand-600 text-white'
                  : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        {/* Add Button */}
        <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm">
          + Registrar Vacinação
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-brand-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-50 border-b border-brand-100">
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Animal</th>
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Vacina</th>
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Última Dose</th>
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Próxima Dose</th>
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Status</th>
              <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredVaccinations.map((vaccine) => (
              <tr key={vaccine.id} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-dark">{vaccine.animal}</td>
                <td className="px-6 py-4 text-sm text-dark/80">{vaccine.vaccine}</td>
                <td className="px-6 py-4 text-sm text-dark/60">
                  {new Date(vaccine.lastDate).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 text-sm text-dark/60">
                  {new Date(vaccine.nextDue).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full inline-block ${
                      vaccine.status === 'Completa'
                        ? 'bg-green-100 text-green-700'
                        : vaccine.status === 'Pendente'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {vaccine.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-brand-600 hover:text-brand-700 font-medium">
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
