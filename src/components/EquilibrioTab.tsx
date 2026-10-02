import React, { useState } from 'react';
import { CASA_PILLARS, TIPS_8020 } from '../data/methodCasa';
import { HeartHandshake, Shield, Sparkles, Utensils, CheckCircle2, BookOpen } from 'lucide-react';

interface EquilibrioTabProps {
  onOpenSafetyModal: () => void;
}

export const EquilibrioTab: React.FC<EquilibrioTabProps> = ({ onOpenSafetyModal }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>("C");

  const activePillarData = CASA_PILLARS.find(p => p.letter === selectedPillar) || CASA_PILLARS[0];

  return (
    <div className="space-y-6 pb-8 animate-in fade-in duration-200">
      {/* Editorial Header */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-2">
            <span>PROTOCOLO VERÃO 42</span>
            <span>·</span>
            <span>MÉTODO C.A.S.A.</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
            Como comer doce com equilíbrio
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Comer uma sobremesa não faz uma alimentação deixar de ser saudável. O resultado da sua rotina depende do conjunto de hábitos diários, e não de um alimento isolado consumido com prazer.
          </p>
        </div>
      </section>

      {/* Regra 80/20 Interactive Visual Card */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-amber-800 font-semibold uppercase tracking-wider">
              Flexibilidade Sustentável
            </span>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
              A Regra Prática 80/20
            </h2>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
            <Utensils className="w-5 h-5" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Uma forma simples e comprovada de organizar sua alimentação sem paranoia ou restrições severas:
        </p>

        {/* Visual 80/20 Bar */}
        <div className="space-y-2">
          <div className="h-6 w-full rounded-xl bg-stone-100 p-1 flex gap-1">
            <div 
              style={{ width: '80%' }}
              className="bg-stone-800 rounded-lg flex items-center justify-center text-[10px] font-bold text-white tracking-wide uppercase"
            >
              80% Nutrição Caseira
            </div>
            <div 
              style={{ width: '20%' }}
              className="bg-amber-700 rounded-lg flex items-center justify-center text-[10px] font-bold text-white tracking-wide"
            >
              20% Prazer
            </div>
          </div>
          <p className="text-[11px] text-stone-500 italic text-center">
            A proporção não precisa ser calculada na ponta do lápis. Ela é uma referência para construir paz com a comida.
          </p>
        </div>

        {/* 80/20 Principles List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {TIPS_8020.map((tip, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-stone-50 rounded-2xl border border-stone-100 flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-stone-900 text-white font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xs font-bold text-stone-900">
                  {tip.title}
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                  {tip.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Método C.A.S.A. Interactive Explorer */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-mono text-amber-800 font-semibold uppercase tracking-wider">
            Filosofia de Vida
          </span>
          <h2 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
            Os 4 Pilares do Método C.A.S.A.
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Toque nas letras para explorar as diretrizes fundamentais:
          </p>
        </div>

        {/* Letter Tabs */}
        <div className="grid grid-cols-4 gap-2">
          {CASA_PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.letter;
            return (
              <button
                key={pillar.letter}
                onClick={() => setSelectedPillar(pillar.letter)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div className="font-serif text-2xl font-bold">
                  {pillar.letter}
                </div>
                <div className={`text-[10px] font-medium tracking-tight mt-0.5 truncate ${
                  isSelected ? 'text-amber-300' : 'text-stone-500'
                }`}>
                  {pillar.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Pillar Highlight Box */}
        <div className="p-5 bg-amber-50/50 border border-amber-200/60 rounded-2xl space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              {activePillarData.letter} — {activePillarData.name}
            </h3>
            <span className="text-xs text-amber-800 font-semibold font-mono">
              {activePillarData.subtitle}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {activePillarData.description}
          </p>

          <div className="pt-2 border-t border-amber-200/40 flex items-start gap-2 text-xs text-stone-800 font-medium">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span><strong>Dica prática:</strong> {activePillarData.actionTip}</span>
          </div>
        </div>
      </section>

      {/* Como Consumir as Receitas no Dia a Dia */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h2 className="font-serif text-xl font-bold text-stone-900">
          Como consumir as receitas no seu cotidiano
        </h2>

        <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
          {[
            "Escolha uma porção individual e coloque sempre em um prato ou pote individual.",
            "Coma devagar, com atenção aos sabores, texturas e aromas.",
            "Evite comer diretamente da travessa ou forma para manter o controle visual.",
            "Armazene o restante imediatamente na geladeira para outro momento.",
            "Se uma receita causar desconforto, reduza a quantidade ou substitua o ingrediente.",
            "Não use a sobremesa como compensação nem como punição pelo que comeu antes."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Encerramento & Mensagem Final */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl p-6 text-center space-y-3">
        <HeartHandshake className="w-8 h-8 text-amber-800 mx-auto" />
        <h2 className="font-serif text-lg font-bold text-stone-900">
          Você não precisa excluir o doce para cuidar da sua saúde
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
          Aprenda a preparar, escolha uma porção, saboreie com calma e volte naturalmente à sua rotina. O equilíbrio não está em nunca comer sobremesa, mas em não transformar um momento prazeroso em culpa ou exagero.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenSafetyModal}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 px-4 py-2 rounded-xl transition"
          >
            <Shield className="w-4 h-4 text-amber-700" />
            <span>Consultar Diretrizes de Segurança e Saúde</span>
          </button>
        </div>
      </section>
    </div>
  );
};
