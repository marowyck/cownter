'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlass, Newspaper } from '@phosphor-icons/react';
import { AGRO_NEWS } from '@/lib/appConstants';

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todas', 'Mercado', 'Saúde', 'Sustentabilidade', 'Manejo'];

  const filteredNews = AGRO_NEWS.filter(
    (news) =>
      (selectedCategory === 'Todas' || news.category === selectedCategory) &&
      (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">Notícias do Agro</h1>
        <p className="text-dark/60 text-sm md:text-base">Fique atualizado com as principais notícias do setor pecuário</p>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40" />
        <input
          type="text"
          placeholder="Buscar notícias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-brand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-brand-600 text-white'
                : 'bg-white border border-brand-200 text-dark hover:border-brand-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-brand-100 overflow-hidden hover:shadow-lg transition-all hover:border-brand-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative h-48 bg-brand-50 overflow-hidden group-hover:scale-105 transition-transform">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-700">
                  {news.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-dark mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                {news.title}
              </h3>

              {/* Description */}
              <p className="text-dark/60 text-sm mb-4 line-clamp-3">{news.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-100">
                <div className="flex flex-col">
                  <span className="text-xs text-dark/40">Fonte</span>
                  <span className="text-sm font-medium text-dark">{news.source}</span>
                </div>
                <span className="text-xs text-dark/40">{new Date(news.date).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-16">
          <Newspaper size={48} className="text-dark/20 mx-auto mb-3" />
          <p className="text-dark/40 font-medium">Nenhuma notícia encontrada</p>
          <p className="text-dark/30 text-sm">Tente alterar seus filtros de busca</p>
        </div>
      )}
    </div>
  );
}
