import React, { useState } from 'react';
import { GroceryItem } from '../hooks/useGroceryList';
import { ShoppingCart, Check, Trash2, Plus, Share2, Copy, CheckCircle2 } from 'lucide-react';

interface GroceryListTabProps {
  items: GroceryItem[];
  onToggleItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
  onAddCustomItem: (name: string) => void;
  onGoToRecipes: () => void;
}

export const GroceryListTab: React.FC<GroceryListTabProps> = ({
  items,
  onToggleItem,
  onRemoveItem,
  onClearCompleted,
  onClearAll,
  onAddCustomItem,
  onGoToRecipes,
}) => {
  const [customText, setCustomText] = useState('');
  const [copied, setCopied] = useState(false);

  const completedCount = items.filter(i => i.completed).length;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (customText.trim()) {
      onAddCustomItem(customText);
      setCustomText('');
    }
  };

  const handleShareList = async () => {
    if (items.length === 0) return;

    const formatted = items
      .map(i => `${i.completed ? '☑' : '☐'} ${i.name} ${i.sourceRecipeTitle ? `(${i.sourceRecipeTitle})` : ''}`)
      .join('\n');

    const message = `🛒 *Lista de Compras — 20 Doces Fit*\n\n${formatted}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Lista de Compras — 20 Doces Fit',
          text: message,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-8 animate-in fade-in duration-200">
      {/* Editorial Header */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-2">
            <span>ORGANIZADOR DE FEIRA & MERCADO</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
            Lista de Compras
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Adicione os ingredientes direto de qualquer receita para ir ao mercado com tudo planejado e sem esquecer nada.
          </p>
        </div>
      </section>

      {/* Add Custom Item Input */}
      <section className="bg-white border border-stone-200 rounded-3xl p-4 shadow-xs">
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Adicionar ingrediente avulso (ex: Cacau 100%)..."
            className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400"
          />
          <button
            type="submit"
            disabled={!customText.trim()}
            className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-stone-800 disabled:opacity-40 transition active:scale-95 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </form>
      </section>

      {/* Grocery Items List */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Itens da Lista ({items.length})
            </h2>
            {items.length > 0 && (
              <p className="text-xs text-stone-500 font-mono">
                {completedCount} de {items.length} itens marcados
              </p>
            )}
          </div>

          {items.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShareList}
                className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
              </button>

              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={onClearCompleted}
                  className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-xs transition"
                  title="Limpar itens já comprados"
                >
                  Limpar comprados
                </button>
              )}
            </div>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-stone-400">
              <ShoppingCart className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-stone-800">
              Sua lista de compras está vazia
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Abra qualquer uma das 20 receitas e clique em &ldquo;Salvar na Lista&rdquo; para preencher seus ingredientes automaticamente.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onGoToRecipes}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition"
              >
                Explorar as 20 Receitas
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                  item.completed
                    ? 'bg-stone-50 border-stone-200 text-stone-400'
                    : 'bg-white border-stone-200/90 text-stone-800'
                }`}
              >
                <div
                  onClick={() => onToggleItem(item.id)}
                  className="flex items-center gap-3 flex-1 cursor-pointer select-none"
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      item.completed
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-stone-300 bg-white hover:border-stone-400'
                    }`}
                  >
                    {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <span className={`text-xs sm:text-sm font-medium ${item.completed ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                      {item.name}
                    </span>
                    {item.sourceRecipeTitle && (
                      <span className="block text-[10px] text-stone-500 truncate max-w-[240px]">
                        De: {item.sourceRecipeTitle}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg hover:bg-stone-100 transition"
                  title="Remover item"
                  aria-label="Remover item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="pt-3 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs text-stone-500 hover:text-red-600 transition"
              >
                Esvaziar toda a lista
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
