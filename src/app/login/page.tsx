'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Cow } from '@phosphor-icons/react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('demo@cownter.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      router.push('/app/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center">
              <Cow size={24} weight="fill" className="text-white" />
            </div>
            <span className="text-3xl font-bold text-brand-600">COWNTER</span>
          </div>
          <h1 className="text-2xl font-bold text-dark mb-2">Bem-vindo de volta</h1>
          <p className="text-dark/60">Faça login na sua conta</p>
        </div>

        {/* Card de Login */}
        <div className="bg-white rounded-2xl border border-brand-100 shadow-sm p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-all"
                required
              />
            </div>

            {/* Erro */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Botão Login */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              variant="primary"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Info para Demo */}
          <div className="mt-6 pt-6 border-t border-brand-100">
            <p className="text-xs text-dark/50 text-center mb-3">
              Dados de demonstração pré-preenchidos:
            </p>
            <div className="space-y-1 text-xs text-dark/60 font-mono text-center">
              <p>Email: <span className="font-semibold">demo@cownter.com</span></p>
              <p>Senha: <span className="font-semibold">demo123</span></p>
            </div>
          </div>
        </div>

        {/* Voltar para Landing */}
        <div className="text-center">
          <Link
            href="/"
            className="text-brand-600 hover:text-brand-700 font-medium text-sm transition-colors"
          >
            ← Voltar para Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
