'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Cow, User, EnvelopeOpen, Phone, MapPin, Calendar } from '@phosphor-icons/react';

export default function PerfilPage() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-2">Meu Perfil</h1>
        <p className="text-dark/60">Gerencie as informações da sua conta</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-brand-100 p-8 mb-8">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-100">
          <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Cow size={48} weight="fill" className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-dark mb-1">{user?.name}</h2>
            <p className="text-dark/60">{user?.farm}</p>
            <p className="text-xs text-dark/50 mt-2">Plano: {user?.plan}</p>
          </div>
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <EnvelopeOpen size={20} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-dark/60 mb-1">Email</p>
                <p className="font-semibold text-dark">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-dark/60 mb-1">Telefone</p>
                <p className="font-semibold text-dark">(11) 98765-4321</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-dark/60 mb-1">Localização</p>
                <p className="font-semibold text-dark">São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-dark/60 mb-1">Membro Desde</p>
                <p className="font-semibold text-dark">Janeiro de 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cow size={20} className="text-brand-600" />
              </div>
              <div>
                <p className="text-xs text-dark/60 mb-1">Fazenda</p>
                <p className="font-semibold text-dark">{user?.farm}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="bg-white rounded-xl border border-brand-100 p-6">
        <h3 className="text-lg font-bold text-dark mb-6">Editar Informações</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Nome Completo</label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Telefone</label>
            <input
              type="tel"
              defaultValue="(11) 98765-4321"
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Localização</label>
            <input
              type="text"
              defaultValue="São Paulo, SP"
              className="w-full px-4 py-2 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
