'use client';

import { useState } from 'react';
import { Plus, Link as LinkIcon, CheckCircle, Clock } from '@phosphor-icons/react';
import { FARM_INTEGRATIONS } from '@/lib/appConstants';

export default function IntegracoesPage() {
  const [filterStatus, setFilterStatus] = useState<'Todas' | 'Conectadas' | 'Pendentes'>('Todas');

  const filteredFarms =
    filterStatus === 'Todas' ? FARM_INTEGRATIONS : FARM_INTEGRATIONS.filter((f) => f.status === (filterStatus === 'Conectadas' ? 'Conectada' : 'Pendente'));

  const connectedCount = FARM_INTEGRATIONS.filter((f) => f.status === 'Conectada').length;
  const totalAnimalsShared = FARM_INTEGRATIONS.filter((f) => f.status === 'Conectada').reduce((sum, f) => sum + f.animalsShared, 0);

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Integração entre Fazendas</h1>
        <p className="text-dark/60 text-sm md:text-base">Conecte e compartilhe informações com outras fazendas parceiras</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Total de Fazendas</p>
              <p className="text-3xl font-bold text-dark">{FARM_INTEGRATIONS.length}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <LinkIcon size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Fazendas parceiras</p>
        </div>

        <div className="bg-white rounded-xl border border-green-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Conectadas</p>
              <p className="text-3xl font-bold text-green-600">{connectedCount}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle size={24} className="text-green-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Integração ativa</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-dark/60 text-sm font-medium">Animais Compartilhados</p>
              <p className="text-3xl font-bold text-dark">{totalAnimalsShared}</p>
            </div>
            <div className="p-3 bg-brand-50 rounded-lg">
              <LinkIcon size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <p className="text-xs text-dark/40">Entre fazendas</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Todas', 'Conectadas', 'Pendentes'].map((status) => (
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
          <span>Nova Integração</span>
        </button>
      </div>

      {/* Farms List - Desktop View */}
      <div className="hidden md:block bg-white rounded-xl border border-brand-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-brand-50 border-b border-brand-100">
            <tr>
              <th className="text-left p-4 font-semibold text-dark text-sm">Fazenda</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Proprietário</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Localização</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Animais Compartilhados</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Status</th>
              <th className="text-left p-4 font-semibold text-dark text-sm">Data de Conexão</th>
            </tr>
          </thead>
          <tbody>
            {filteredFarms.map((farm, index) => (
              <tr key={index} className="border-b border-brand-100 hover:bg-brand-50 transition-colors">
                <td className="p-4 text-dark font-medium">{farm.farmName}</td>
                <td className="p-4 text-dark">{farm.owner}</td>
                <td className="p-4 text-dark">{farm.location}</td>
                <td className="p-4 text-dark font-semibold">{farm.animalsShared} animais</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      farm.status === 'Conectada'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {farm.status === 'Conectada' ? (
                      <CheckCircle size={14} weight="fill" />
                    ) : (
                      <Clock size={14} weight="fill" />
                    )}
                    {farm.status}
                  </span>
                </td>
                <td className="p-4 text-dark text-sm">{new Date(farm.connectedDate).toLocaleDateString('pt-BR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Farms Cards - Mobile View */}
      <div className="md:hidden space-y-4">
        {filteredFarms.map((farm, index) => (
          <div key={index} className="bg-white rounded-xl border border-brand-100 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="font-semibold text-dark">{farm.farmName}</div>
                <div className="text-sm text-dark/60">{farm.owner}</div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                  farm.status === 'Conectada'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {farm.status === 'Conectada' ? (
                  <CheckCircle size={14} weight="fill" />
                ) : (
                  <Clock size={14} weight="fill" />
                )}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm border-t border-brand-100 pt-3">
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Localização</span>
                <span className="text-dark font-medium">{farm.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark/60 text-xs">Animais</span>
                <span className="text-dark font-semibold">{farm.animalsShared}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-brand-100">
              <div className="text-xs text-dark/60">Conectado desde {new Date(farm.connectedDate).toLocaleDateString('pt-BR')}</div>
            </div>
            <button className="w-full mt-3 py-2 px-3 bg-brand-50 text-brand-600 font-medium text-sm rounded-lg hover:bg-brand-100 transition-all">
              Detalhes
            </button>
          </div>
        ))}
      </div>

      {filteredFarms.length === 0 && (
        <div className="text-center py-12">
          <LinkIcon size={48} className="text-dark/20 mx-auto mb-3" />
          <p className="text-dark/40">Nenhuma integração encontrada</p>
        </div>
      )}
    </div>
  );
}
