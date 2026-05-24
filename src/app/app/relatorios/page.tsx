'use client';

import { ChartBar, ArrowUp, Calendar, Download } from '@phosphor-icons/react';

export default function RelatoriosPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Relatórios</h1>
        <p className="text-dark/60">Analise dados e gere relatórios da sua fazenda</p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">Relatório de Saúde</h3>
              <p className="text-sm text-dark/60">Análise completa de saúde dos animais</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
              <ChartBar size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            Gerar
          </button>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">Relatório de Estoque</h3>
              <p className="text-sm text-dark/60">Análise de movimentação de estoque</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
              <ArrowUp size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            Gerar
          </button>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">Cronograma de Vacinação</h3>
              <p className="text-sm text-dark/60">Planejamento de vacinações futuras</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            Gerar
          </button>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">Relatório Financeiro</h3>
              <p className="text-sm text-dark/60">Análise de custos e receitas</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
              <Download size={24} className="text-brand-600" weight="duotone" />
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            Gerar
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <h2 className="text-lg font-bold text-dark mb-4">Relatórios Recentes</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100 hover:bg-brand-50 transition-colors">
            <div>
              <p className="font-semibold text-dark">Relatório de Saúde - Maio 2026</p>
              <p className="text-xs text-dark/60">Gerado há 2 dias</p>
            </div>
            <button className="text-brand-600 hover:text-brand-700 font-semibold">Download</button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100 hover:bg-brand-50 transition-colors">
            <div>
              <p className="font-semibold text-dark">Relatório de Estoque - Abril 2026</p>
              <p className="text-xs text-dark/60">Gerado há 30 dias</p>
            </div>
            <button className="text-brand-600 hover:text-brand-700 font-semibold">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
