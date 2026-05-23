'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { Cow, List, XCircle, SignOut } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect } from 'react';

const MENU_ITEMS = [
  { href: '/app/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/app/animais', label: 'Animais', icon: '🐄' },
  { href: '/app/vacinacoes', label: 'Vacinações', icon: '💉' },
  { href: '/app/estoque', label: 'Estoque', icon: '📦' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600 mx-auto mb-4"></div>
          <p className="text-dark/60">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-cream">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-brand-100 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-brand-100">
          <Link href="/app/dashboard" className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center w-full'} flex-1`}>
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-brand-700 transition-colors">
              <Cow size={20} weight="fill" className="text-white" />
            </div>
            {sidebarOpen && <span className="font-bold text-dark text-sm whitespace-nowrap">COWNTER</span>}
          </Link>
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-brand-50 rounded transition-colors ml-2"
              title="Fechar sidebar"
            >
              <XCircle size={18} className="text-dark" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 font-semibold'
                      : 'text-dark/60 hover:bg-brand-50 hover:text-dark'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  {sidebarOpen && <span className="text-sm">{item.label}</span>}
                </Link>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-600 rounded-r-lg" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Expand Button & Logout */}
        <div className="border-t border-brand-100 p-4 space-y-2">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-full p-2 hover:bg-brand-50 rounded transition-colors text-dark"
              title="Expandir sidebar"
            >
              <List size={20} weight="bold" />
            </button>
          )}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all ${
              !sidebarOpen && 'justify-center'
            }`}
            title="Sair"
          >
            <SignOut size={20} weight="bold" className="flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Sair</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b border-brand-100 flex items-center justify-between px-8">
          <div>
            <h2 className="text-xl font-bold text-dark">{user.farm}</h2>
            <p className="text-sm text-dark/60">Plano: {user.plan}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-dark">{user.name}</p>
              <p className="text-xs text-dark/60">{user.email}</p>
            </div>
            <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
              <Cow size={20} weight="fill" className="text-white" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
