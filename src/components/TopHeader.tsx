import React from 'react';
import { ShieldCheck, Heart, ShoppingBag } from 'lucide-react';

interface TopHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenSafetyModal: () => void;
  favoritesCount: number;
  groceryCount: number;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenSafetyModal,
  favoritesCount,
  groceryCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-white border-b border-stone-800 backdrop-blur-md px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onTabChange('receitas')}
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap text-left"
        >
          20 Doces Fit
        </button>

        {/* Zone 2: Navigation links (desktop / tablet) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-300">
          <button
            onClick={() => onTabChange('receitas')}
            className={`hover:text-white transition-colors ${activeTab === 'receitas' ? 'text-amber-300 font-semibold' : ''}`}
          >
            Receitas
          </button>
          <button
            onClick={() => onTabChange('equilibrio')}
            className={`hover:text-white transition-colors ${activeTab === 'equilibrio' ? 'text-amber-300 font-semibold' : ''}`}
          >
            Equilíbrio 80/20
          </button>
          <button
            onClick={() => onTabChange('adocantes')}
            className={`hover:text-white transition-colors ${activeTab === 'adocantes' ? 'text-amber-300 font-semibold' : ''}`}
          >
            Adoçantes
          </button>
          <button
            onClick={() => onTabChange('lista')}
            className={`hover:text-white transition-colors ${activeTab === 'lista' ? 'text-amber-300 font-semibold' : ''}`}
          >
            Lista de Compras {groceryCount > 0 && `(${groceryCount})`}
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          {/* Safety Disclaimer Trigger Button */}
          <button
            onClick={onOpenSafetyModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition active:scale-95 border border-stone-700"
            title="Ver aviso de saúde e segurança"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Aviso de Saúde</span>
            <span className="sm:hidden text-[11px]">Aviso</span>
          </button>

          {/* Quick Grocery Badge */}
          <button
            onClick={() => onTabChange('lista')}
            className="relative w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition active:scale-95 border border-stone-700"
            title="Ver lista de compras"
            aria-label="Ver lista de compras"
          >
            <ShoppingBag className="w-4 h-4" />
            {groceryCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 text-white rounded-full font-mono text-[9px] font-bold flex items-center justify-center">
                {groceryCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
