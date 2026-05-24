'use client';

import { useState } from 'react';
import { Modal } from '@/components/shared/Modal';

interface RegisterAnimalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterAnimalModal({ isOpen, onClose }: RegisterAnimalModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    brinco: '',
    tipo: 'Bovino',
    raca: '',
    dataNascimento: '',
    weight: '',
    mae: '',
    pai: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Novo animal registrado:', formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Registrar Novo Animal"
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
            Registrar
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
              placeholder="Ex: Margarida"
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
              placeholder="Ex: BR-001"
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
              placeholder="Ex: Nelore"
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
              placeholder="Ex: 480"
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
              placeholder="Ex: Princesa Velha"
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
              placeholder="Ex: Nelore Campeão"
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
