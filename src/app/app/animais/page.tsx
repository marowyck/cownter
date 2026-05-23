'use client';

import { useState } from 'react';
import { Dog, Plus, MagnifyingGlass, Trash, PencilSimple, Eye, XCircle } from '@phosphor-icons/react';

const ANIMALS = [
  {
    id: 1,
    brinco: 'BR-001',
    name: 'Margarida',
    tipo: 'Bovino',
    raca: 'Nelore',
    idade: '5 anos',
    status: 'Saudável',
    weight: '480 kg',
    dataNascimento: '2021-05-15',
    mae: 'Princesa Velha',
    pai: 'Nelore Campeão',
    ultimaVacinacao: '2026-05-10',
  },
  {
    id: 2,
    brinco: 'BR-002',
    name: 'Touro Zeus',
    tipo: 'Bovino',
    raca: 'Angus',
    idade: '3 anos',
    status: 'Saudável',
    weight: '650 kg',
    dataNascimento: '2023-03-20',
    mae: 'Rainha Angus',
    pai: 'Zeus IV',
    ultimaVacinacao: '2026-05-12',
  },
  {
    id: 3,
    brinco: 'BR-003',
    name: 'Princesa',
    tipo: 'Bovino',
    raca: 'Nelore',
    idade: '2 anos',
    status: 'Vacinação pendente',
    weight: '320 kg',
    dataNascimento: '2024-02-10',
    mae: 'Margarida',
    pai: 'Nelore Premium',
    ultimaVacinacao: '2026-03-15',
  },
  {
    id: 4,
    brinco: 'EQ-001',
    name: 'Tornado',
    tipo: 'Equino',
    raca: 'Puro Sangue',
    idade: '4 anos',
    status: 'Saudável',
    weight: '520 kg',
    dataNascimento: '2022-06-08',
    mae: 'Tempestade',
    pai: 'Relâmpago',
    ultimaVacinacao: '2026-04-20',
  },
];

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
          <MagnifyingGlass
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40"
          />
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
          <div
            key={animal.id}
            className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg hover:border-brand-300 transition-all"
          >
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
                  animal.status === 'Saudável'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
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
                onClick={() => handleOpenViewModal(animal)}
                className="flex-1 flex items-center justify-center gap-1 bg-brand-50 hover:bg-brand-100 text-brand-600 font-medium py-2 rounded-lg transition-colors text-sm"
                title="Visualizar"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => handleOpenEditModal(animal)}
                className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 rounded-lg transition-colors text-sm"
                title="Editar"
              >
                <PencilSimple size={16} />
              </button>
              <button
                onClick={() => handleOpenDeleteModal(animal)}
                className="flex-1 flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 rounded-lg transition-colors text-sm"
                title="Deletar"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}

      {/* Register/Edit Modal */}
      {(modalType === 'register' || modalType === 'edit') && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-brand-100 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-dark">
                {modalType === 'register' ? 'Registrar Novo Animal' : 'Editar Animal'}
              </h2>
              <button
                onClick={closeModal}
                className="text-dark/60 hover:text-dark transition-colors"
              >
                <XCircle size={24} weight="bold" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Nome do Animal *</label>
                  <input
                    type="text"
                    defaultValue={editingAnimal?.name}
                    placeholder="Ex: Margarida"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Brinco *</label>
                  <input
                    type="text"
                    defaultValue={editingAnimal?.brinco}
                    placeholder="Ex: BR-001"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Tipo *</label>
                  <select
                    defaultValue={editingAnimal?.tipo}
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="Bovino">Bovino</option>
                    <option value="Equino">Equino</option>
                    <option value="Caprino">Caprino</option>
                    <option value="Ovino">Ovino</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Raça *</label>
                  <input
                    type="text"
                    defaultValue={editingAnimal?.raca}
                    placeholder="Ex: Nelore"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Data de Nascimento</label>
                  <input
                    type="date"
                    defaultValue={editingAnimal?.dataNascimento}
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Peso (kg)</label>
                  <input
                    type="number"
                    defaultValue={editingAnimal?.weight.replace(' kg', '')}
                    placeholder="Ex: 480"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-dark mb-2">Mãe</label>
                  <input
                    type="text"
                    defaultValue={editingAnimal?.mae}
                    placeholder="Nome da mãe"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-dark mb-2">Pai</label>
                  <input
                    type="text"
                    defaultValue={editingAnimal?.pai}
                    placeholder="Nome do pai"
                    className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-brand-100">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-brand-200 hover:bg-brand-50 text-dark font-semibold rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button className="flex-1 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
                  {modalType === 'register' ? 'Registrar Animal' : 'Salvar Alterações'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {modalType === 'view' && selectedAnimal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="border-b border-brand-100 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-dark">Detalhes do Animal</h2>
              <button
                onClick={closeModal}
                className="text-dark/60 hover:text-dark transition-colors"
              >
                <XCircle size={24} weight="bold" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-brand-100">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                  <Dog size={32} className="text-brand-600" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark">{selectedAnimal.name}</h3>
                  <p className="text-dark/60">Brinco: {selectedAnimal.brinco}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-dark/60 text-sm mb-1">Tipo</p>
                  <p className="font-medium text-dark">{selectedAnimal.tipo}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm mb-1">Raça</p>
                  <p className="font-medium text-dark">{selectedAnimal.raca}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm mb-1">Idade</p>
                  <p className="font-medium text-dark">{selectedAnimal.idade}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm mb-1">Peso</p>
                  <p className="font-medium text-dark">{selectedAnimal.weight}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm mb-1">Data de Nascimento</p>
                  <p className="font-medium text-dark">{new Date(selectedAnimal.dataNascimento).toLocaleDateString('pt-BR')}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm mb-1">Status</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${
                      selectedAnimal.status === 'Saudável'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {selectedAnimal.status}
                  </span>
                </div>
              </div>

              <div className="bg-brand-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-dark">Genealogia</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-dark/60 text-sm mb-1">Mãe</p>
                    <p className="font-medium text-dark">{selectedAnimal.mae}</p>
                  </div>
                  <div>
                    <p className="text-dark/60 text-sm mb-1">Pai</p>
                    <p className="font-medium text-dark">{selectedAnimal.pai}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-dark/60 text-sm mb-1">Última Vacinação</p>
                <p className="font-medium text-dark">{new Date(selectedAnimal.ultimaVacinacao).toLocaleDateString('pt-BR')}</p>
              </div>

              <div className="flex gap-3 pt-6 border-t border-brand-100">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => handleOpenEditModal(selectedAnimal)}
                  className="flex-1 px-6 py-3 border border-brand-200 hover:bg-brand-50 text-dark font-semibold rounded-lg transition-colors"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {modalType === 'delete' && editingAnimal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="border-b border-red-100 p-6">
              <h2 className="text-2xl font-bold text-red-600">Deletar Animal</h2>
            </div>

            <div className="p-6">
              <p className="text-dark mb-4">
                Tem certeza que deseja deletar <strong>{editingAnimal.name}</strong> (Brinco: {editingAnimal.brinco})?
              </p>
              <p className="text-dark/60 text-sm mb-6">
                Esta ação é irreversível e todos os dados associados ao animal serão perdidos.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-brand-200 hover:bg-brand-50 text-dark font-semibold rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay click to close */}
      {modalType && (
        <button
          className="fixed inset-0 z-40 bg-transparent"
          onClick={closeModal}
          aria-label="Fechar modal"
        />
      )}
    </div>
  );
}
