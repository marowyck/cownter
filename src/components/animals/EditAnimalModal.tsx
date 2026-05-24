'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@/components/shared/Modal';

interface EditAnimalModalProps {
  isOpen: boolean;
  animal: any;
  onClose: () => void;
}

export function EditAnimalModal({ isOpen, animal, onClose }: EditAnimalModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    brinco: '',
    tipo: '',
    raca: '',
    dataNascimento: '',
    weight: '',
    mae: '',
    pai: '',
  });

  useEffect(() => {
    if (animal) {
      setFormData({
        name: animal.name || '',
        brinco: animal.brinco || '',
        tipo: animal.tipo || '',
        raca: animal.raca || '',
        dataNascimento: animal.dataNascimento || '',
        weight: animal.weight?.replace(' kg', '') || '',
        mae: animal.mae || '',
        pai: animal.pai || '',
      });
    }
  }, [animal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Animal atualizado:', formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={`Editar ${animal?.name}`}
      onClose={onClose}
      size="large"
      buttons={
        <>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-brand-200 text-dark hover:bg-brand-50 font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 font-medium transition-colors"
          >
            Salvar Alterações
          </button>
        </>
      }
    >
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Brinco</label>
            <input
              type="text"
              name="brinco"
              value={formData.brinco}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Tipo</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            >
              <option>Bovino</option>
              <option>Equino</option>
              <option>Caprino</option>
              <option>Ovino</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Raça</label>
            <input
              type="text"
              name="raca"
              value={formData.raca}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Peso (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Mãe</label>
            <input
              type="text"
              name="mae"
              value={formData.mae}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Pai</label>
            <input
              type="text"
              name="pai"
              value={formData.pai}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
