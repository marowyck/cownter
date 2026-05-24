'use client';

import { Modal } from '@/components/shared/Modal';

interface ViewAnimalModalProps {
  isOpen: boolean;
  animal: any;
  onClose: () => void;
  onEdit: () => void;
}

export function ViewAnimalModal({ isOpen, animal, onClose, onEdit }: ViewAnimalModalProps) {
  if (!animal) return null;

  return (
    <Modal
      isOpen={isOpen}
      title={`${animal.name} (${animal.brinco})`}
      onClose={onClose}
      size="large"
      buttons={
        <>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-brand-200 text-dark hover:bg-brand-50 font-medium transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onEdit();
              onClose();
            }}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
          >
            Editar
          </button>
        </>
      }
    >
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="text-sm font-bold text-dark mb-4">Informações Básicas</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-xs text-dark/60 mb-1">Tipo</p>
              <p className="font-semibold text-dark">{animal.tipo}</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-xs text-dark/60 mb-1">Raça</p>
              <p className="font-semibold text-dark">{animal.raca}</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-xs text-dark/60 mb-1">Idade</p>
              <p className="font-semibold text-dark">{animal.idade}</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-xs text-dark/60 mb-1">Peso</p>
              <p className="font-semibold text-dark">{animal.weight}</p>
            </div>
          </div>
        </div>

        {/* Genealogy */}
        <div>
          <h3 className="text-sm font-bold text-dark mb-4">Genealogia</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-xs text-dark/60 mb-1">Mãe</p>
              <p className="font-semibold text-dark">{animal.mae}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-xs text-dark/60 mb-1">Pai</p>
              <p className="font-semibold text-dark">{animal.pai}</p>
            </div>
          </div>
        </div>

        {/* Health Info */}
        <div>
          <h3 className="text-sm font-bold text-dark mb-4">Saúde</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-brand-50 rounded-lg">
              <p className="text-sm text-dark/60">Status</p>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  animal.status === 'Saudável'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {animal.status}
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-brand-50 rounded-lg">
              <p className="text-sm text-dark/60">Última Vacinação</p>
              <p className="font-semibold text-dark">
                {new Date(animal.ultimaVacinacao).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
