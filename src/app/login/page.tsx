'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { CaretRightIcon, Cow } from '@phosphor-icons/react';
import Link from 'next/link';
import ImageCarousel from '@/components/auth/ImageCarousel';
import { MOCK_USERS } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState(MOCK_USERS.demo.email);
  const [password, setPassword] = useState(MOCK_USERS.demo.password);
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
    <div className="min-h-screen bg-white flex">
      {/* Coluna Esquerda - Carrossel de Imagens */}
      <div className="hidden lg:flex lg:w-4/6">
        <ImageCarousel />
      </div>

      {/* Coluna Direita - Formulário de Login */}
      <div className="w-full lg:w-2/6 flex flex-col items-center justify-center px-6 py-12 sm:px-8 bg-gradient-to-br from-white via-white to-brand-50 relative">
        {/* Botão Voltar */}
        <Link
          href="/"
          className="absolute top-6 left-6 text-brand-600 hover:text-brand-700 transition-colors"
          aria-label="Voltar"
        >
          <CaretRightIcon size={24} className="rotate-180" />
        </Link>

        {/* Logo e Título */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-dark mb-2">Bem-vindo de volta</h1>
          <p className="text-dark/60">Faça login na sua conta para continuar</p>
        </div>

        {/* Card de Login */}
        <div className="w-full bg-white rounded-2xl p-8 mb-8">
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
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Botão Login */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-base"
              variant="primary"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Divisor */}
          <div className="mt-6 pt-6 border-t border-brand-100">
            <p className="text-xs text-dark/50 text-center mb-4 font-medium">
              DADOS DE DEMONSTRAÇÃO
            </p>
            <div className="space-y-2 text-xs text-dark/60 font-mono text-center bg-brand-50 rounded-lg p-3">
              <p><span className="text-dark/80">Email:</span> {MOCK_USERS.demo.email}</p>
              <p><span className="text-dark/80">Senha:</span> {MOCK_USERS.demo.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
