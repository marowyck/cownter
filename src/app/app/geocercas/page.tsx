'use client';

import { useState } from 'react';
import { Plus, MapPin, Eye, Prohibit, List as ListIcon, MapTrifold } from '@phosphor-icons/react';
import { GEOFENCES } from '@/lib/appConstants';

export default function GeocercasPage() {
  const [filterStatus, setFilterStatus] = useState<'Todas' | 'Ativas' | 'Inativas'>('Todas');
  const [activeTab, setActiveTab] = useState<'lista' | 'mapa'>('lista');

  const filteredGeofences =
    filterStatus === 'Todas' ? GEOFENCES : GEOFENCES.filter((g) => g.status === (filterStatus === 'Ativas' ? 'Ativo' : 'Inativo'));

  const activeGeofences = GEOFENCES.filter((g) => g.status === 'Ativo').length;
  const totalAnimals = GEOFENCES.reduce((sum, g) => sum + g.animalsCount, 0);

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Geocercas</h1>
        <p className="text-dark/60 text-sm md:text-base">Monitore áreas de pastagem e localizações do rebanho</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Geocercas</p>
              <p className="text-3xl font-bold text-dark">{GEOFENCES.length}</p>
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
        <button
          onClick={() => setActiveTab('mapa')}
          className={`flex items-center gap-2 px-4 py-3 font-medium text-sm border-b-2 transition-all ${
            activeTab === 'mapa'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-dark/60 hover:text-dark'
          }`}
        >
          <MapTrifold size={18} />
          <span>Mapa</span>
        </button>
      </div>

      {/* TAB: LISTAGEM */}
      {activeTab === 'lista' && (
        <div className="space-y-4">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Filters */}
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

            {/* Add Button */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-all font-medium">
              <Plus size={20} />
              <span>Nova Geocerca</span>
            </button>
          </div>

          {/* Geofences List - Desktop View */}
          <div className="hidden md:block bg-white rounded-xl border border-brand-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-brand-50 border-b border-brand-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Nome</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Área (hectares)</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Animais</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Status</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Última Atualização</th>
                  <th className="text-left p-4 font-semibold text-dark text-sm">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredGeofences.map((geofence, index) => (
                  <tr key={index} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                    <td className="p-4 text-dark font-medium flex items-center gap-2">
                      <MapPin size={16} className="text-brand-600" />
                      {geofence.name}
                    </td>
                    <td className="p-4 text-dark">{geofence.area} ha</td>
                    <td className="p-4 text-dark">{geofence.animalsCount} animais</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          geofence.status === 'Ativo'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {geofence.status}
                      </span>
                    </td>
                    <td className="p-4 text-dark text-sm">{new Date(geofence.lastUpdate).toLocaleDateString('pt-BR')}</td>
                    <td className="p-4">
                      <button className="text-brand-600 hover:text-brand-700 font-medium text-sm">Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Geofences Cards - Mobile View */}
          <div className="md:hidden space-y-4">
            {filteredGeofences.map((geofence, index) => (
              <div key={index} className="bg-white rounded-xl border border-brand-100 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-2 flex-1">
                    <MapPin size={20} className="text-brand-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold text-dark">{geofence.name}</div>
                      <div className="text-sm text-dark/60">{geofence.area} hectares</div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      geofence.status === 'Ativo'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {geofence.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm border-t border-brand-100 pt-3">
                  <div className="flex flex-col">
                    <span className="text-dark/60 text-xs">Animais</span>
                    <span className="text-dark font-semibold">{geofence.animalsCount}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-dark/60 text-xs">Atualizado</span>
                    <span className="text-dark font-medium">{new Date(geofence.lastUpdate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                <button className="w-full mt-3 py-2 px-3 bg-brand-50 text-brand-600 font-medium text-sm rounded-lg hover:bg-brand-100 transition-all">
                  Editar
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

      {/* TAB: MAPA */}
      {activeTab === 'mapa' && (
        <div className="space-y-4">
          {/* Controls for Map View */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Filters */}
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

            {/* Add Button */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-all font-medium">
              <Plus size={20} />
              <span>Nova Geocerca</span>
            </button>
          </div>

          {/* Map Container */}
          <div className="bg-gradient-to-br from-blue-50 to-brand-50 rounded-xl border border-brand-200 p-6 md:p-8">
            <div className="aspect-video bg-white rounded-lg border border-brand-200 flex items-center justify-center">
              <div className="text-center">
                <MapTrifold size={64} className="text-brand-600 mx-auto mb-4" weight="light" />
                <p className="text-dark/60 font-bold text-lg mb-2">Visualização do Mapa</p>
                <p className="text-dark/40 text-sm mb-6">Integração com Google Maps em desenvolvimento</p>
                
                {/* Mini Geofences Preview on Map */}
                <div className="mt-8 pt-8 border-t border-brand-200">
                  <p className="text-sm font-medium text-dark/60 mb-4">Geocercas no mapa:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {filteredGeofences.map((geofence, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-brand-50 rounded-lg border border-brand-200 hover:bg-brand-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-3 h-3 rounded-full flex-shrink-0 ${
                              geofence.status === 'Ativo' ? 'bg-green-500' : 'bg-gray-400'
                            }`}
                          />
                          <span className="text-xs font-medium text-dark truncate">{geofence.name}</span>
                        </div>
                        <p className="text-xs text-dark/60 mt-1">{geofence.animalsCount} animais</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
