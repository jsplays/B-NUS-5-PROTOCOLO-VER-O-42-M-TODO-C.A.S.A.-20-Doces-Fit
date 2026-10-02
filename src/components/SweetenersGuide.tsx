import React, { useState } from 'react';
import { SWEETENERS_DATA, SPECIAL_WARNINGS, HOW_TO_CHOOSE_STEPS } from '../data/sweeteners';
import { Search, AlertTriangle, CheckCircle, Info, Sparkles, Filter } from 'lucide-react';

export const SweetenersGuide: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Alimento Integral', 'Natural', 'Poliois', 'Artificiais'];

  const filteredSweeteners = SWEETENERS_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.characteristic.toLowerCase().includes(search.toLowerCase()) ||
      item.observation.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 pb-8 animate-in fade-in duration-200">
      {/* Editorial Header */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-2">
            <span>GUIA DO PROFISSIONAL</span>
            <span>·</span>
            <span>ANVISA & NUTRIÇÃO</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
            Adoçantes e como escolher
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Adoçante não transforma automaticamente uma receita em saudável e não é obrigatório para preparar essas sobremesas. Muitas receitas podem ser adoçadas apenas com banana madura, tâmaras, manga, maçã ou outra fruta.
          </p>
        </div>
      </section>

      {/* 6 Steps Guide Accordion / Carousel */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <h2 className="font-serif text-xl font-bold text-stone-900">
            A melhor forma de escolher (6 Passos)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {HOW_TO_CHOOSE_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-4 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Passo {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Sweeteners Section with Filter */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              Tabela Comparativa de Adoçantes & Alternativas
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Consulte as propriedades culinárias e observações de cada opção
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar adoçante..."
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400"
            />
          </div>
        </div>

        {/* Category Filters (interactive segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards for Mobile & Table for Wide View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {filteredSweeteners.map((sw, idx) => (
            <div
              key={idx}
              className="p-4 bg-stone-50/70 border border-stone-200/90 rounded-2xl space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    {sw.name}
                  </h3>
                  <span className="text-[11px] font-mono text-stone-500">
                    {sw.category}
                  </span>
                </div>

                <div className="mt-2 space-y-1.5 text-xs text-stone-700">
                  <p>
                    <strong className="text-stone-900">Característica:</strong> {sw.characteristic}
                  </p>
                  <p className="text-amber-900 bg-amber-50/80 p-2 rounded-lg border border-amber-100/70">
                    <strong>Atenção:</strong> {sw.observation}
                  </p>
                </div>
              </div>

              {/* Badges and metadata */}
              <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-mono tabular-nums">{sw.caloricValue}</span>
                <span className="text-stone-600">
                  {sw.suitableForBaking ? '✓ Resiste ao calor' : '✗ Evitar em fogo'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Warnings (Atenção Especial) */}
      <section className="bg-red-50/50 border border-red-200/80 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-red-900">
          <AlertTriangle className="w-5 h-5 text-red-700" />
          <h2 className="font-serif text-xl font-bold">
            Atenção Especial e Cuidados de Saúde
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SPECIAL_WARNINGS.map((warn, i) => (
            <div
              key={i}
              className="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs space-y-1"
            >
              <h3 className="text-xs font-bold text-red-900">
                {warn.title}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {warn.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
