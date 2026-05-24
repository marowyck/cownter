'use client';

import { Modal } from '@/components/shared/Modal';
import { Warning } from '@phosphor-icons/react';

interface DeleteAnimalModalProps {
  isOpen: boolean;
  animal: any;
  onClose: () => void;
}

export function DeleteAnimalModal({ isOpen, animal, onClose }: DeleteAnimalModalProps) {
  if (!animal) return null;

  const handleDelete = () => {
    console.log('Animal deletado:', animal);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Deletar Animal"
      onClose={onClose}
      size="small"
      buttons={
        <>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-brand-200 text-dark hover:bg-brand-50 font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 font-medium transition-colors"
          >
            Deletar
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Warning size={24} className="text-red-600" weight="fill" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-dark mb-2">Tem certeza?</p>
            <p className="text-sm text-dark/60">
              Você está prestes a deletar o animal <strong>{animal.name}</strong> ({animal.brinco}). Esta ação
              não pode ser desfeita.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
