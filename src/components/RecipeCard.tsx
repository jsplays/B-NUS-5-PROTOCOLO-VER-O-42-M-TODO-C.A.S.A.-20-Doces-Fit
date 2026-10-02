import React, { useState } from 'react';
import { Heart, Clock, Flame, UtensilsCrossed } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onSelect: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      onClick={() => onSelect(recipe)}
      className="group relative bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:border-stone-400 active:scale-[0.99] transition-all cursor-pointer flex flex-col"
    >
      {/* Visual media banner */}
      <div className="relative aspect-16/10 w-full bg-stone-100 overflow-hidden">
        {recipe.image && !imgError ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-400 p-4">
            <UtensilsCrossed className="w-8 h-8 mb-1.5 stroke-[1.5]" />
            <span className="text-xs font-serif text-stone-500 italic text-center">
              {recipe.category}
            </span>
          </div>
        )}

        {/* Gradient Scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Salvar como favorito'}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-red-600 active:scale-90 transition shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-stone-700'
            }`}
          />
        </button>

        {/* Number badge & category */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="font-mono text-white/90 font-medium">
            #{String(recipe.id).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-white/80 font-medium tracking-wide">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-base font-semibold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
            {recipe.title}
          </h3>

          {/* Zero-pill metadata with typographic separators */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-stone-500 mt-2 font-normal">
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-700 stroke-[2]" />
              <span className="font-mono tabular-nums font-medium text-stone-800">
                ~{recipe.caloriesPerServing}
              </span>
              <span>kcal/{recipe.yieldUnit.slice(0, -1)}</span>
            </span>

            <span aria-hidden="true" className="text-stone-300">·</span>

            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              <span className="font-mono tabular-nums">{recipe.prepTimeMinutes} min</span>
            </span>

            <span aria-hidden="true" className="text-stone-300">·</span>

            <span>
              {recipe.yieldCount} {recipe.yieldUnit}
            </span>
          </div>
        </div>

        {/* Key ingredient highlight / hint */}
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
          <span className="truncate max-w-[200px]">
            {recipe.ingredients[0]?.name || 'Ingredientes naturais'}
          </span>
          <span className="text-amber-800 font-medium shrink-0 ml-2">
            Ver receita →
          </span>
        </div>
      </div>
    </article>
  );
};
