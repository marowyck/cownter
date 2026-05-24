'use client';

import { Dog, Eye, PencilSimple, Trash } from '@phosphor-icons/react';

interface AnimalCardProps {
  animal: {
    id: number;
    name: string;
    brinco: string;
    status: string;
    tipo: string;
    raca: string;
    idade: string;
    weight: string;
  };
  onView: (animal: any) => void;
  onEdit: (animal: any) => void;
  onDelete: (animal: any) => void;
}

export function AnimalCard({ animal, onView, onEdit, onDelete }: AnimalCardProps) {
  return (
    <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg hover:border-brand-300 transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Dog size={24} className="text-brand-600" weight="duotone" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-dark text-base truncate">{animal.name}</h3>
            <p className="text-xs text-dark/60">Brinco: {animal.brinco}</p>
          </div>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ml-2 flex-shrink-0 ${
            animal.status === 'Saudável' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {animal.status}
        </span>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div>
          <p className="text-dark/60 text-xs mb-1">Tipo</p>
          <p className="font-medium text-dark text-sm">{animal.tipo}</p>
        </div>
        <div>
          <p className="text-dark/60 text-xs mb-1">Raça</p>
          <p className="font-medium text-dark text-sm">{animal.raca}</p>
        </div>
        <div>
          <p className="text-dark/60 text-xs mb-1">Idade</p>
          <p className="font-medium text-dark text-sm">{animal.idade}</p>
        </div>
        <div>
          <p className="text-dark/60 text-xs mb-1">Peso</p>
          <p className="font-medium text-dark text-sm">{animal.weight}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-brand-100">
        <button
          onClick={() => onView(animal)}
          className="flex-1 flex items-center justify-center gap-1 bg-brand-50 hover:bg-brand-100 text-brand-600 font-medium py-2 rounded-lg transition-colors text-sm"
          title="Visualizar"
        >
          <Eye size={16} />
        </button>
        <button
          onClick={() => onEdit(animal)}
          className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 rounded-lg transition-colors text-sm"
          title="Editar"
        >
          <PencilSimple size={16} />
        </button>
        <button
          onClick={() => onDelete(animal)}
          className="flex-1 flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 rounded-lg transition-colors text-sm"
          title="Deletar"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
