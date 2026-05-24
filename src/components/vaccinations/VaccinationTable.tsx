'use client';

import { Check, Warning, X } from '@phosphor-icons/react';

interface VaccinationTableProps {
  vaccinations: Array<{
    id: number;
    animal: string;
    vaccine: string;
    status: 'Completa' | 'Pendente' | 'Vencida';
    date: string | null;
    nextDue: string;
  }>;
}

export function VaccinationTable({ vaccinations }: VaccinationTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completa':
        return 'bg-green-100 text-green-700';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-700';
      case 'Vencida':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completa':
        return <Check size={16} weight="fill" />;
      case 'Pendente':
        return <Warning size={16} weight="fill" />;
      case 'Vencida':
        return <X size={16} weight="fill" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-brand-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-brand-50 border-b border-brand-100">
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Animal</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Vacina</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Status</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Data Vacinação</th>
            <th className="text-left px-6 py-4 font-semibold text-dark text-sm">Próxima Dose</th>
          </tr>
        </thead>
        <tbody>
          {vaccinations.map((vacc) => (
            <tr key={vacc.id} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-dark">{vacc.animal}</td>
              <td className="px-6 py-4 text-sm text-dark/80">{vacc.vaccine}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${getStatusColor(vacc.status)}`}>
                  {getStatusIcon(vacc.status)}
                  {vacc.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-dark/60">
                {vacc.date ? new Date(vacc.date).toLocaleDateString('pt-BR') : '-'}
              </td>
              <td className="px-6 py-4 text-sm text-dark/60">
                {new Date(vacc.nextDue).toLocaleDateString('pt-BR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
