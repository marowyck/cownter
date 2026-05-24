'use client';

import { useState } from 'react';
import { Plus, MagnifyingGlass } from '@phosphor-icons/react';
import { ANIMALS } from '@/lib/appConstants';
import { AnimalCard } from '@/components/animals/AnimalCard';
import { RegisterAnimalModal } from '@/components/animals/RegisterAnimalModal';
import { EditAnimalModal } from '@/components/animals/EditAnimalModal';
import { ViewAnimalModal } from '@/components/animals/ViewAnimalModal';
import { DeleteAnimalModal } from '@/components/animals/DeleteAnimalModal';

type ModalType = 'register' | 'edit' | 'view' | 'delete' | null;

export default function AnimaisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState<(typeof ANIMALS)[0] | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editingAnimal, setEditingAnimal] = useState<(typeof ANIMALS)[0] | null>(null);

  const filteredAnimals = ANIMALS.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.brinco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenRegisterModal = () => {
    setEditingAnimal(null);
    setModalType('register');
  };

  const handleOpenEditModal = (animal: typeof ANIMALS[0]) => {
    setEditingAnimal(animal);
    setModalType('edit');
  };

  const handleOpenViewModal = (animal: typeof ANIMALS[0]) => {
    setSelectedAnimal(animal);
    setModalType('view');
  };

  const handleOpenDeleteModal = (animal: typeof ANIMALS[0]) => {
    setEditingAnimal(animal);
    setModalType('delete');
  };

  const closeModal = () => {
    setModalType(null);
    setEditingAnimal(null);
    setSelectedAnimal(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Gestão de Animais</h1>
        <p className="text-dark/60">Cadastre e acompanhe todos os animais da sua fazenda</p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Search */}
        <div className="flex-1 min-w-[250px] relative">
          <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" />
          <input
            type="text"
            placeholder="Buscar por nome ou brinco..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={handleOpenRegisterModal}
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <Plus size={20} weight="bold" />
          Novo Animal
        </button>
      </div>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onView={handleOpenViewModal}
            onEdit={handleOpenEditModal}
            onDelete={handleOpenDeleteModal}
          />
        ))}
      </div>

      {/* Modals */}
      <RegisterAnimalModal isOpen={modalType === 'register'} onClose={closeModal} />
      <EditAnimalModal isOpen={modalType === 'edit'} animal={editingAnimal} onClose={closeModal} />
      <ViewAnimalModal
        isOpen={modalType === 'view'}
        animal={selectedAnimal}
        onClose={closeModal}
        onEdit={() => handleOpenEditModal(selectedAnimal!)}
      />
      <DeleteAnimalModal isOpen={modalType === 'delete'} animal={editingAnimal} onClose={closeModal} />

      {/* Overlay */}
      {modalType && <button className="fixed inset-0 z-40 bg-transparent" onClick={closeModal} aria-label="Fechar" />}
    </div>
  );
}
