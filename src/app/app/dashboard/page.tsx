'use client';

import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle, Clock, Warning } from '@phosphor-icons/react/dist/ssr';

const STATS = [
  {
    label: 'Animais Ativos',
    value: '280',
    change: '+12 este mês',
    icon: '🐄',
    status: 'good',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Vacinações Pendentes',
    value: '23',
    change: 'Próximos 7 dias',
    icon: '💉',
    status: 'warning',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    label: 'Itens em Estoque',
    value: '1.847',
    change: '+89 este mês',
    icon: '📦',
    status: 'good',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Taxa de Saúde',
    value: '98.5%',
    change: '+2.3% vs. mês anterior',
    icon: '📈',
    status: 'good',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    iconColor: 'text-green-600',
  },
];

const RECENT_ACTIVITIES = [
  { time: 'Há 2 horas', action: 'Animal "Brinco 001" vacinado com sucesso', type: 'success' },
  { time: 'Há 4 horas', action: 'Estoque de ração atualizado', type: 'info' },
  { time: 'Hoje', action: 'Geocerca "Pasto Norte" ativada', type: 'info' },
  { time: 'Ontem', action: '3 novos animais cadastrados', type: 'success' },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="p-8 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-dark mb-2">
          Bem-vindo, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-dark/60">
          Aqui está um resumo da sua fazenda {user?.farm}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className={`bg-white rounded-xl border p-6 ${stat.borderColor}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-dark/60 mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold ${
                  stat.status === 'good' ? 'text-green-600' : 
                  stat.status === 'warning' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-xs text-dark/50">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Tasks */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-brand-100 p-6">
          <h2 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <Clock size={20} className="text-brand-600" weight="duotone" />
            Próximas Tarefas
          </h2>
          <div className="space-y-3">
            {[
              { task: 'Vacinação - Rebanho A', date: 'Hoje às 14:00', priority: 'high', animals: '45 animais' },
              { task: 'Inspeção de pastagem', date: 'Amanhã às 09:00', priority: 'medium', animals: '2 pastagens' },
              { task: 'Repor ração no cocho', date: 'Amanhã às 18:00', priority: 'low', animals: 'Pasto Sul' },
              { task: 'Revisão de geocercas', date: 'Em 2 dias', priority: 'medium', animals: '8 geocercas' },
            ].map((item) => (
              <div key={item.task} className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
                item.priority === 'high'
                  ? 'bg-red-50 border-red-100'
                  : item.priority === 'medium'
                  ? 'bg-yellow-50 border-yellow-100'
                  : 'bg-green-50 border-green-100'
              }`}>
                <div
                  className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                    item.priority === 'high'
                      ? 'bg-red-500'
                      : item.priority === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="font-semibold text-dark text-sm">{item.task}</p>
                  <p className="text-xs text-dark/60 mt-1">{item.date}</p>
                  <p className="text-xs text-dark/50 mt-1">{item.animals}</p>
                </div>
                <button className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex-shrink-0 ${
                  item.priority === 'high'
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : item.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}>
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl border border-brand-100 p-6">
          <h2 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
            <Warning size={20} className="text-brand-600" weight="duotone" />
            Atividades Recentes
          </h2>
          <div className="space-y-3">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.action} className={`pb-4 border-b border-brand-100 last:border-0 flex gap-3 ${activity.type === 'success' ? '' : ''}`}>
                <div className="flex-shrink-0 mt-1">
                  {activity.type === 'success' ? (
                    <CheckCircle size={18} className="text-green-600" weight="fill" />
                  ) : (
                    <Warning size={18} className="text-brand-600" weight="fill" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-dark/60 mb-1">{activity.time}</p>
                  <p className="text-sm text-dark/80">{activity.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
