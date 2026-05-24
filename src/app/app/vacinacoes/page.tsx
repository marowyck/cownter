'use client';

import { useState } from 'react';
import { VACCINATIONS } from '@/lib/appConstants';
import { VaccinationStats } from '@/components/vaccinations/VaccinationStats';
import { VaccinationTable } from '@/components/vaccinations/VaccinationTable';

export default function VacinacoesPage() {
  const [selectedStatus, setSelectedStatus] = useState<'Todos' | 'Pendente' | 'Vencida' | 'Completa'>('Todos');

  const filteredVaccinations =
    selectedStatus === 'Todos' ? VACCINATIONS : VACCINATIONS.filter((v) => v.status === selectedStatus);

  const stats = {
    total: VACCINATIONS.length,
    pending: VACCINATIONS.filter((v) => v.status === 'Pendente').length,
    expired: VACCINATIONS.filter((v) => v.status === 'Vencida').length,
    complete: VACCINATIONS.filter((v) => v.status === 'Completa').length,
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Controle de Vacinações</h1>
        <p className="text-dark/60">Acompanhe o cronograma de vacinação dos seus animais</p>
      </div>

      {/* Stats */}
      <VaccinationStats {...stats} />

      {/* Filters */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {['Todos', 'Pendente', 'Vencida', 'Completa'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status as any)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              selectedStatus === status
                ? 'bg-brand-600 text-white'
                : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <VaccinationTable vaccinations={filteredVaccinations} />
    </div>
  );
}
