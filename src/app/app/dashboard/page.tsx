'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Clock, Warning } from '@phosphor-icons/react';
import { DASHBOARD_STATS, RECENT_ACTIVITIES, UPCOMING_TASKS } from '@/lib/appConstants';
import { StatCard } from '@/components/dashboard/StatCard';
import { TaskCard } from '@/components/dashboard/TaskCard';
import { ActivityCard } from '@/components/dashboard/ActivityCard';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="p-8 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-dark mb-2">
          Bem-vindo, {user?.name?.split(' ')[0]}!
        </h1>
        <p className="text-dark/60">Aqui está um resumo da sua fazenda {user?.farm}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
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
            {UPCOMING_TASKS.map((item) => (
              <TaskCard key={item.task} {...item} />
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
              <ActivityCard key={activity.action} {...activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
