'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Plus, MapPin, Eye, Prohibit, List as ListIcon, MapTrifold, Trash } from '@phosphor-icons/react';
import { GeocercaPolygon } from '@/types/geocerca';
import { GEOFENCES } from '@/lib/appConstants';

const SimpleGeocercaMap = dynamic(
  () => import('@/components/geocercas').then((mod) => ({ default: mod.SimpleGeocercaMap })),
  { ssr: false }
);

export default function GeocercasPage() {
  const [geocercas, setGeocercas] = useState<GeocercaPolygon[]>([]);
  const [filterStatus, setFilterStatus] = useState<'Todas' | 'Ativas' | 'Inativas'>('Todas');
  const [activeTab, setActiveTab] = useState<'lista' | 'mapa'>('mapa');
  const [selectedGeocerca, setSelectedGeocerca] = useState<GeocercaPolygon | null>(null);
  const [showNewGeocercaForm, setShowNewGeocercaForm] = useState(false);
  const [newGeocercaName, setNewGeocercaName] = useState('');

  // Converter GEOFENCES existentes para GeocercaPolygon
  useEffect(() => {
    const convertedGeocercas: GeocercaPolygon[] = GEOFENCES.map((g: any, index: number) => ({
      id: `geo-${index}`,
      name: g.name,
      coordinates: [], // Geocercas existentes não têm coordenadas
      area: g.area,
      animals: g.animalsCount,
      status: g.status === 'Ativo' ? 'Ativo' : 'Inativo',
      createdAt: new Date().toISOString(),
      lastUpdate: g.lastUpdate,
      color: [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#FFA07A',
        '#98D8C8',
        '#F7DC6F',
        '#BB8FCE',
        '#85C1E2',
      ][index % 8],
    }));
    setGeocercas(convertedGeocercas);
  }, []);

  const filteredGeofences =
    filterStatus === 'Todas'
      ? geocercas
      : geocercas.filter((g) => g.status === (filterStatus === 'Ativas' ? 'Ativo' : 'Inativo'));

  const activeGeofences = geocercas.filter((g) => g.status === 'Ativo').length;
  const totalAnimals = geocercas.reduce((sum, g) => sum + g.animals, 0);

  const handleGeocercaCreate = (newGeocerca: GeocercaPolygon) => {
    const withName = {
      ...newGeocerca,
      name: newGeocercaName || newGeocerca.name,
    };
    setGeocercas([...geocercas, withName]);
    setNewGeocercaName('');
    setSelectedGeocerca(withName);
  };

  const handleDeleteGeocerca = (id: string) => {
    setGeocercas(geocercas.filter((g) => g.id !== id));
    if (selectedGeocerca?.id === id) {
      setSelectedGeocerca(null);
    }
  };

  const handleToggleStatus = (id: string) => {
    setGeocercas(
      geocercas.map((g) =>
        g.id === id
          ? { ...g, status: g.status === 'Ativo' ? 'Inativo' : 'Ativo', lastUpdate: new Date().toISOString() }
          : g
      )
    );
  };

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Geocercas</h1>
        <p className="text-dark/60 text-sm md:text-base">Monitore áreas de pastagem e localizações do rebanho em tempo real</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Geocercas</p>
              <p className="text-3xl font-bold text-dark">{geocercas.length}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <MapPin size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Áreas monitoradas</p>
        </div>

        <div className="bg-white rounded-xl border border-green-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Geocercas Ativas</p>
              <p className="text-3xl font-bold text-green-600">{activeGeofences}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Eye size={24} className="text-green-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Em operação agora</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Animais Monitorados</p>
              <p className="text-3xl font-bold text-dark">{totalAnimals}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <MapPin size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Em todas as geocercas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-brand-200">
        <button
          onClick={() => setActiveTab('mapa')}
          className={`flex items-center gap-2 px-4 py-3 font-medium text-sm border-b-2 transition-all ${
            activeTab === 'mapa'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-dark/60 hover:text-dark'
          }`}
        >
          <MapTrifold size={18} />
          <span>Mapa Interativo</span>
        </button>
        <button
          onClick={() => setActiveTab('lista')}
          className={`flex items-center gap-2 px-4 py-3 font-medium text-sm border-b-2 transition-all ${
            activeTab === 'lista'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-dark/60 hover:text-dark'
          }`}
        >
          <ListIcon size={18} />
          <span>Listagem</span>
        </button>
      </div>

      {/* TAB: MAPA INTERATIVO */}
      {activeTab === 'mapa' && (
        <div className="space-y-4">
          {/* Form para criar nova geocerca */}
          {showNewGeocercaForm && (
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <p className="text-sm font-medium text-dark mb-3">
                ✏️ Desenhe uma geocerca no mapa clicando no ícone de polígono
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newGeocercaName}
                  onChange={(e) => setNewGeocercaName(e.target.value)}
                  placeholder="Nome da geocerca..."
                  className="flex-1 px-3 py-2 border border-brand-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  onClick={() => setShowNewGeocercaForm(false)}
                  className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all font-medium"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Mapa */}
          <SimpleGeocercaMap
            geocercas={geocercas}
            onGeocercaCreate={handleGeocercaCreate}
            onGeocercaSelect={setSelectedGeocerca}
            selectedGeocerca={selectedGeocerca}
          />

          {/* Info Panel */}
          {!showNewGeocercaForm && (
            <button
              onClick={() => setShowNewGeocercaForm(true)}
              className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-lg hover:bg-brand-700 transition-all font-medium"
            >
              <Plus size={20} />
              <span>Desenhar Nova Geocerca</span>
            </button>
          )}
        </div>
      )}

      {/* TAB: LISTAGEM */}
      {activeTab === 'lista' && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['Todas', 'Ativas', 'Inativas'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status as any)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    filterStatus === status
                      ? 'bg-brand-600 text-white'
                      : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-xl border border-brand-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-brand-50 border-b border-brand-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Nome</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Área</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Animais</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Status</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Última Atualização</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredGeofences.map((geofence) => (
                  <tr key={geofence.id} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                    <td className="p-4 text-dark font-medium flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: geofence.color }}
                      />
                      {geofence.name}
                    </td>
                    <td className="p-4 text-dark">{geofence.area} ha</td>
                    <td className="p-4 text-dark">{geofence.animals}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleStatus(geofence.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          geofence.status === 'Ativo'
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {geofence.status}
                      </button>
                    </td>
                    <td className="p-4 text-dark text-sm">{new Date(geofence.lastUpdate).toLocaleDateString('pt-BR')}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteGeocerca(geofence.id)}
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        <Trash size={16} className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredGeofences.map((geofence) => (
              <div key={geofence.id} className="bg-white rounded-xl border border-brand-100 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-2 flex-1">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                      style={{ backgroundColor: geofence.color }}
                    />
                    <div>
                      <div className="font-semibold text-dark">{geofence.name}</div>
                      <div className="text-sm text-dark/60">{geofence.area} hectares</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggleStatus(geofence.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      geofence.status === 'Ativo'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {geofence.status}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm border-t border-brand-100 pt-3">
                  <div>
                    <span className="text-dark/60 text-xs">Animais</span>
                    <span className="block text-dark font-semibold">{geofence.animals}</span>
                  </div>
                  <div>
                    <span className="text-dark/60 text-xs">Atualizado</span>
                    <span className="block text-dark font-medium">{new Date(geofence.lastUpdate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteGeocerca(geofence.id)}
                  className="w-full mt-3 py-2 px-3 bg-red-50 text-red-600 font-medium text-sm rounded-lg hover:bg-red-100 transition-all flex items-center justify-center gap-2"
                >
                  <Trash size={16} />
                  Remover
                </button>
              </div>
            ))}
          </div>

          {filteredGeofences.length === 0 && (
            <div className="text-center py-12">
              <Prohibit size={48} className="text-dark/20 mx-auto mb-3" />
              <p className="text-dark/40">Nenhuma geocerca encontrada</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
