'use client';

import { Gear, Bell, Lock, Eye } from '@phosphor-icons/react';

export default function ConfiguracoesPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Configurações</h1>
        <p className="text-dark/60">Gerencie as configurações da sua conta e fazenda</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
              <Lock size={20} className="text-brand-600" />
            </div>
            <h2 className="text-lg font-bold text-dark">Segurança da Conta</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100 bg-brand-50">
              <div>
                <p className="font-semibold text-dark">Senha</p>
                <p className="text-xs text-dark/60">Última alteração: há 30 dias</p>
              </div>
              <button className="text-brand-600 hover:text-brand-700 font-semibold">Alterar</button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100">
              <div>
                <p className="font-semibold text-dark">Autenticação em Dois Fatores</p>
                <p className="text-xs text-dark/60">Desativada</p>
              </div>
              <button className="text-brand-600 hover:text-brand-700 font-semibold">Ativar</button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
              <Bell size={20} className="text-brand-600" />
            </div>
            <h2 className="text-lg font-bold text-dark">Notificações</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100">
              <div>
                <p className="font-semibold text-dark">Email de Alertas</p>
                <p className="text-xs text-dark/60">Receber alertas importantes</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-brand-200 accent-brand-600" />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100">
              <div>
                <p className="font-semibold text-dark">Notificações de Vacinação</p>
                <p className="text-xs text-dark/60">Lembretes de vacinação</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-brand-200 accent-brand-600" />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
              <Eye size={20} className="text-brand-600" />
            </div>
            <h2 className="text-lg font-bold text-dark">Privacidade</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-brand-100">
              <div>
                <p className="font-semibold text-dark">Dados de Uso</p>
                <p className="text-xs text-dark/60">Permitir coleta de dados para melhorias</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-brand-200 accent-brand-600" />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 rounded-xl border border-red-200 p-6">
          <h2 className="text-lg font-bold text-red-700 mb-4">Zona de Perigo</h2>
          <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
            Deletar Conta Permanentemente
          </button>
        </div>
      </div>
    </div>
  );
}
