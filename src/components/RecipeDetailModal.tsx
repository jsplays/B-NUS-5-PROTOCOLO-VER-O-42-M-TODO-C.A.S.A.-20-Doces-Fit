import React, { useState } from 'react';
import {
  X,
  Heart,
  Share2,
  ShoppingCart,
  Check,
  Flame,
  Clock,
  Sparkles,
  Info,
  CheckCircle,
  Copy
} from 'lucide-react';
import { Recipe } from '../data/recipes';
import { CookingTimer } from './CookingTimer';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onAddToGroceryList: (recipeTitle: string, ingredientNames: string[]) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddToGroceryList,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [addedToList, setAddedToList] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  if (!recipe) return null;

  const toggleStep = (index: number) => {
    setCompletedSteps(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleAddGrocery = () => {
    const list = recipe.ingredients.map(ing => {
      if (ing.amount) {
        const scaledAmt = (ing.amount * scale).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
        return `${scaledAmt} ${ing.unit || ''} de ${ing.name}`;
      }
      return ing.raw;
    });

    onAddToGroceryList(recipe.title, list);
    setAddedToList(true);
    setTimeout(() => setAddedToList(false), 2500);
  };

  const handleShare = async () => {
    const text = `Confira esta receita fit: *${recipe.title}* (~${recipe.caloriesPerServing} kcal por porção) do Protocolo Verão 42!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: text,
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled or unsupported, fallback to copy
      }
    }
    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const currentYield = recipe.yieldCount * scale;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-900/70 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white sm:rounded-3xl rounded-t-3xl max-h-[92vh] sm:max-h-[88vh] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Floating Control Bar */}
        <div className="relative aspect-16/9 w-full bg-stone-900 shrink-0 overflow-hidden">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-amber-950/20" />
          )}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/60" />

          {/* Action buttons on top of image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition"
              aria-label="Voltar para receitas"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition"
                title="Compartilhar receita"
                aria-label="Compartilhar receita"
              >
                {copiedShare ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Share2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => onToggleFavorite(recipe.id)}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition"
                title="Favoritar"
                aria-label="Favoritar receita"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Title on Media */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-200 mb-1">
              <span>#{String(recipe.id).padStart(2, '0')}</span>
              <span>·</span>
              <span className="uppercase tracking-wider font-sans font-medium text-[11px] text-amber-100">
                {recipe.category}
              </span>
            </div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {recipe.title}
            </h1>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Quick Metrics Bar */}
          <div className="flex items-center justify-between p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-700" />
              <div>
                <span className="font-mono tabular-nums font-bold text-stone-900 text-sm">
                  ~{recipe.caloriesPerServing}
                </span>
                <span className="text-stone-500 ml-1">kcal/porção</span>
              </div>
            </div>

            <div className="h-4 w-px bg-stone-300" />

            <div className="flex items-center gap-1.5 text-stone-600">
              <Clock className="w-4 h-4 text-stone-400" />
              <span className="font-medium text-stone-900">{recipe.prepTimeMinutes} min</span>
            </div>

            <div className="h-4 w-px bg-stone-300" />

            <div className="text-right">
              <span className="font-semibold text-stone-900">{currentYield}</span>
              <span className="text-stone-500 ml-1">{recipe.yieldUnit}</span>
            </div>
          </div>

          {/* Scaler Controller */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Ajustar Porções
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Rendimento: <strong className="text-stone-900">{currentYield} {recipe.yieldUnit}</strong>
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200">
              {[1, 2, 3].map(multiplier => (
                <button
                  key={multiplier}
                  type="button"
                  onClick={() => setScale(multiplier)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    scale === multiplier
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {multiplier}x
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-base font-bold text-stone-900">
                Ingredientes ({recipe.ingredients.length})
              </h2>

              <button
                type="button"
                onClick={handleAddGrocery}
                disabled={addedToList}
                className={`text-xs font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                  addedToList
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 active:scale-95'
                }`}
              >
                {addedToList ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Adicionado à Lista!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-3.5 h-3.5 text-stone-600" />
                    <span>Salvar na Lista</span>
                  </>
                )}
              </button>
            </div>

            <ul className="space-y-2">
              {recipe.ingredients.map((ing, idx) => {
                let formattedAmount = '';
                if (ing.amount) {
                  const scaledVal = ing.amount * scale;
                  formattedAmount = `${scaledVal.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} ${ing.unit || ''}`;
                }

                return (
                  <li
                    key={idx}
                    className="p-3 bg-stone-50/70 hover:bg-stone-50 rounded-xl border border-stone-100 flex items-start justify-between text-xs sm:text-sm text-stone-800"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                      <span>{ing.name}</span>
                    </div>
                    {formattedAmount && (
                      <span className="font-mono tabular-nums text-xs font-semibold text-stone-900 bg-white px-2 py-0.5 rounded-md border border-stone-200 shrink-0 ml-3">
                        {formattedAmount}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Optional Timer if needed */}
          {recipe.timerMinutes && (
            <CookingTimer
              initialMinutes={recipe.timerMinutes}
              label={recipe.timerLabel}
            />
          )}

          {/* Preparation Steps Section with Checklist */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-base font-bold text-stone-900">
                Modo de Preparo Passo a Passo
              </h2>
              <span className="text-xs text-stone-500 font-mono">
                {completedSteps.length}/{recipe.steps.length} concluídos
              </span>
            </div>

            <div className="space-y-2.5">
              {recipe.steps.map((step, idx) => {
                const isDone = completedSteps.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-xs sm:text-sm ${
                      isDone
                        ? 'bg-emerald-50/40 border-emerald-200 text-stone-500 line-through'
                        : 'bg-white border-stone-200 text-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={`Passo ${idx + 1}`}
                      className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-mono text-xs transition ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-100 text-stone-700 font-semibold'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </button>
                    <p className="leading-relaxed flex-1 pt-0.5">
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Chef / Nutritional Tip */}
          {recipe.tips && (
            <div className="p-4 bg-amber-50/70 border border-amber-200/70 rounded-2xl text-xs sm:text-sm text-stone-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>Dica de Ouro do Método C.A.S.A.</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                {recipe.tips}
              </p>
            </div>
          )}

          {/* Calorie and Professional Advice Disclaimer */}
          <div className="p-3 bg-stone-100 rounded-xl text-[11px] text-stone-600 leading-normal flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <p>
              <strong>Sobre as calorias:</strong> As calorias são estimativas (~{recipe.caloriesPerServing} kcal) e podem variar conforme o peso dos ingredientes e marcas. Para pessoas com diabetes ou necessidades específicas, consulte um nutricionista.
            </p>
          </div>
        </div>

        {/* Sticky Bottom Actions */}
        <div className="p-4 bg-white border-t border-stone-200 shrink-0 flex gap-3">
          <button
            onClick={handleAddGrocery}
            className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition active:scale-[0.99] flex items-center justify-center gap-2"
          >
            {addedToList ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Itens Salvos na Lista</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Salvar Ingredientes ({recipe.ingredients.length})</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs sm:text-sm font-medium transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
