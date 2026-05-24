'use client';

import { useState } from 'react';
import { MagnifyingGlass, Phone, EnvelopeOpen, MapPin, Star, Plus, Stethoscope, Circle } from '@phosphor-icons/react';
import { VETERINARIANS } from '@/lib/appConstants';

export default function VeterinariusPage() {
  const [filterSpecialty, setFilterSpecialty] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const specialties = ['Todas', 'Clínica Geral', 'Reprodução', 'Cirurgia', 'Diagnóstico e Exames'];

  const filteredVets = VETERINARIANS.filter(
    (vet) =>
      (filterSpecialty === 'Todas' || vet.specialty === filterSpecialty) &&
      (vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const availableVets = VETERINARIANS.filter((v) => v.available).length;

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Veterinários Parceiros</h1>
        <p className="text-dark/60 text-sm md:text-base">Conecte com profissionais veterinários especializados</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Veterinários Cadastrados</p>
              <p className="text-3xl font-bold text-dark">{VETERINARIANS.length}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <Stethoscope size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Profissionais parceiros</p>
        </div>

        <div className="bg-white rounded-xl border border-green-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Disponíveis Agora</p>
              <p className="text-3xl font-bold text-green-600">{availableVets}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Circle size={24} className="text-green-600" weight="fill" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Para atendimento</p>
        </div>

        <div className="bg-white rounded-xl border border-yellow-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Avaliação Média</p>
              <p className="text-3xl font-bold text-yellow-600">4.8</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Star size={24} className="text-yellow-600" weight="fill" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Baseado em avaliações</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40" />
        <input
          type="text"
          placeholder="Buscar veterinário..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-brand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      {/* Specialty Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setFilterSpecialty(specialty)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              filterSpecialty === specialty
                ? 'bg-brand-600 text-white'
                : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
            }`}
          >
            {specialty}
          </button>
        ))}
      </div>

      {/* Vets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVets.map((vet, index) => (
          <div key={index} className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all hover:border-brand-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-dark text-lg">{vet.name}</h3>
                <p className="text-sm text-brand-600 font-medium">{vet.specialty}</p>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  vet.available
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                }`}
              >
                <Circle
                  size={16}
                  className={vet.available ? 'text-green-600' : 'text-gray-600'}
                  weight="fill"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4 pb-4 border-b border-brand-100">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(vet.rating) ? 'text-yellow-400' : 'text-dark/20'}
                    weight="fill"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-dark">{vet.rating}</span>
              <span className="text-xs text-dark/40">({vet.reviews} avaliações)</span>
            </div>

            {/* Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-dark">{vet.location}</div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-600 flex-shrink-0" />
                <a href={`tel:${vet.phone}`} className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                  {vet.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeOpen size={16} className="text-brand-600 flex-shrink-0" />
                <a href={`mailto:${vet.email}`} className="text-sm text-brand-600 hover:text-brand-700 font-medium break-all">
                  {vet.email}
                </a>
              </div>
            </div>

            {/* Status */}
            <div className="mb-4 pb-4 border-b border-brand-100">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
                  vet.available
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {vet.available ? 'Disponível' : 'Indisponível'}
              </span>
            </div>

            {/* Action Button */}
            <button className="w-full py-2 px-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all font-medium text-sm flex items-center justify-center gap-2">
              <Plus size={16} />
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVets.length === 0 && (
        <div className="text-center py-16">
          <Stethoscope size={48} className="text-dark/20 mx-auto mb-3" />
          <p className="text-dark/40 font-medium">Nenhum veterinário encontrado</p>
          <p className="text-dark/30 text-sm">Tente alterar seus filtros de busca</p>
        </div>
      )}
    </div>
  );
}
