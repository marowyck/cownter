'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { Cow, List, XCircle, SignOut, House, Syringe, Package, ChartBar, Gear, ArrowUp, Baby, CurrencyDollar, MapPin, Link as LinkIcon, Newspaper, Stethoscope } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { MENU_ITEMS } from '@/lib/appConstants';

const ICON_MAP: Record<string, any> = {
  House,
  Cow,
  Syringe,
  Package,
  ChartBar,
  Gear,
  ArrowUp,
  Baby,
  Money: CurrencyDollar,
  MapPin,
  Link: LinkIcon,
  Newspaper,
  StethoscopeSlash: Stethoscope,
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <div className="flex flex-col lg:flex-row h-screen bg-cream">
      {/* Sidebar - Hidden on mobile, visible on lg and up */}
      <div
        className={`fixed lg:static z-40 h-screen w-64 bg-white border-r border-brand-100 transition-all duration-300 flex flex-col transform lg:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-brand-100">
          <Link href="/app/dashboard" className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-brand-700 transition-colors">
              <Cow size={20} weight="fill" className="text-white" />
            </div>
            <span className="font-bold text-dark text-sm whitespace-nowrap">COWNTER</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 hover:bg-brand-50 rounded transition-colors ml-2 lg:hidden"
            title="Fechar sidebar"
          >
            <XCircle size={18} className="text-dark" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {MENU_ITEMS.map((item) => {
            const IconComponent = ICON_MAP[item.icon];
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 font-semibold'
                      : 'text-dark/60 hover:bg-brand-50 hover:text-dark'
                  }`}
                >
                  {IconComponent && (
                    <IconComponent size={20} weight={isActive ? 'fill' : 'regular'} className="flex-shrink-0" />
                  )}
                  <span className="text-sm">{item.label}</span>
                </Link>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-600 rounded-r-lg" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="border-t border-brand-100 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
            title="Sair"
          >
            <SignOut size={20} weight="bold" className="flex-shrink-0" />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="h-16 lg:h-20 bg-white border-b border-brand-100 flex items-center justify-between px-4 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-brand-50 rounded transition-colors text-dark lg:hidden"
            title="Abrir menu"
          >
            <List size={24} weight="bold" />
          </button>

          {/* Farm Info */}
          <div className="hidden lg:block">
            <h2 className="text-lg lg:text-xl font-bold text-dark">{user.farm}</h2>
            <p className="text-xs lg:text-sm text-dark/60">Plano: {user.plan}</p>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden flex-1 text-center">
            <h2 className="text-lg font-bold text-dark">{user.farm}</h2>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden md:block text-right">
              <p className="text-xs lg:text-sm font-semibold text-dark">{user.name}</p>
              <p className="text-xs text-dark/60">{user.email}</p>
            </div>
            <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Cow size={20} weight="fill" className="text-white" />
            </div>
          </div>
        </header>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
