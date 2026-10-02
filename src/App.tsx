import React, { useState, useEffect, useMemo } from 'react';
import { RECIPES, Recipe } from './data/recipes';
import { useFavorites } from './hooks/useFavorites';
import { useGroceryList } from './hooks/useGroceryList';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { EquilibrioTab } from './components/EquilibrioTab';
import { SweetenersGuide } from './components/SweetenersGuide';
import { GroceryListTab } from './components/GroceryListTab';
import { SafetyDisclaimerModal } from './components/SafetyDisclaimerModal';
import { TopHeader } from './components/TopHeader';
import { BottomNavBar } from './components/BottomNavBar';
import { 
  Search, 
  Heart, 
  ArrowUpDown, 
  Sparkles, 
  ShieldAlert, 
  UtensilsCrossed, 
  Check, 
  BookOpen, 
  SlidersHorizontal 
} from 'lucide-react';

const SAFETY_STORAGE_KEY = 'doces_fit_safety_accepted_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<'receitas' | 'equilibrio' | 'adocantes' | 'lista'>('receitas');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'calories' | 'time'>('default');
  
  // Selected recipe for detail modal
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Safety Disclaimer Modal State
  const [showSafetyModal, setShowSafetyModal] = useState<boolean>(false);
  const [hasAcceptedSafety, setHasAcceptedSafety] = useState<boolean>(true);

  // Favorites & Grocery custom hooks
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { 
    items: groceryItems, 
    addItemsFromRecipe, 
    addCustomItem, 
    toggleItem, 
    removeItem, 
    clearCompleted, 
    clearAll 
  } = useGroceryList();

  // Check safety acceptance on mount
  useEffect(() => {
    try {
      const accepted = localStorage.getItem(SAFETY_STORAGE_KEY);
      if (!accepted) {
        setShowSafetyModal(true);
        setHasAcceptedSafety(false);
      } else {
        setHasAcceptedSafety(true);
      }
    } catch {
      setShowSafetyModal(true);
    }
  }, []);

  const handleConfirmSafety = () => {
    try {
      localStorage.setItem(SAFETY_STORAGE_KEY, 'true');
    } catch (e) {
      console.error(e);
    }
    setHasAcceptedSafety(true);
    setShowSafetyModal(false);
  };

  const categories = [
    'Todos',
    'Docinhos & Trufas',
    'Cremosos & Gelados',
    'Bolos & Forno',
    'Express & Práticos',
    'Docinhos & Panela',
  ];

  // Filtered & Sorted recipes
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      const matchesSearch = 
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'Todos' || r.category === selectedCategory;
      const matchesFav = !onlyFavorites || favorites.includes(r.id);

      return matchesSearch && matchesCat && matchesFav;
    }).sort((a, b) => {
      if (sortBy === 'calories') return a.caloriesPerServing - b.caloriesPerServing;
      if (sortBy === 'time') return a.prepTimeMinutes - b.prepTimeMinutes;
      return a.id - b.id;
    });
  }, [searchQuery, selectedCategory, onlyFavorites, favorites, sortBy]);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-amber-900 selection:text-white">
      {/* Top Header adheres to Top Bar Contract */}
      <TopHeader
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as typeof activeTab)}
        onOpenSafetyModal={() => setShowSafetyModal(true)}
        favoritesCount={favorites.length}
        groceryCount={groceryItems.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-4 pb-24 md:pb-12">
        {/* Safety Banner if user wants to see it anytime */}
        {!hasAcceptedSafety && (
          <div className="mb-4 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Por favor, leia e confirme o aviso importante de saúde.</span>
            </div>
            <button
              onClick={() => setShowSafetyModal(true)}
              className="px-3 py-1 bg-amber-800 text-white rounded-lg text-xs font-semibold shrink-0"
            >
              Ler Diretrizes
            </button>
          </div>
        )}

        {/* Tab 1: RECEITAS */}
        {activeTab === 'receitas' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Editorial Hero Banner */}
            <section className="relative rounded-3xl overflow-hidden bg-stone-900 text-white shadow-md">
              <div className="relative aspect-16/8 sm:aspect-16/7 w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_doces_fit_1790977006708.jpg"
                  alt="20 Receitas de Doces Fit"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-1.5">
                    <span>BÔNUS 5</span>
                    <span>·</span>
                    <span>PROTOCOLO VERÃO 42</span>
                    <span>·</span>
                    <span>MÉTODO C.A.S.A.</span>
                  </div>

                  <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
                    20 Doces Fit
                  </h1>

                  <p className="text-stone-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                    Receitas fáceis, cremosas e deliciosas para incluir na sua rotina: brigadeiros, mousses, brownies, bolos, trufas e sobremesas geladas sem culpa e com ingredientes simples.
                  </p>

                  <div className="flex items-center gap-3 mt-4 text-xs font-medium text-stone-300">
                    <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      20 Receitas Testadas
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      De 55 a 260 kcal
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Filter and Search Bar Section */}
            <section className="bg-white border border-stone-200 rounded-3xl p-4 sm:p-5 shadow-xs space-y-3.5">
              {/* Search input + Sort selector */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por receita ou ingrediente (ex: batata-doce, cacau, maracujá)..."
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* Favorites Quick Filter */}
                  <button
                    type="button"
                    onClick={() => setOnlyFavorites(!onlyFavorites)}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 border ${
                      onlyFavorites
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-red-500 text-red-500' : 'text-stone-500'}`} />
                    <span>Favoritos ({favorites.length})</span>
                  </button>

                  {/* Sorting dropdown */}
                  <div className="relative flex items-center">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      aria-label="Ordenar receitas"
                      className="appearance-none pl-8 pr-8 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-semibold text-stone-700 focus:outline-none focus:border-stone-400 cursor-pointer"
                    >
                      <option value="default">Ordem do E-book (1 a 20)</option>
                      <option value="calories">Menos Calorias</option>
                      <option value="time">Mais Rápidas</option>
                    </select>
                    <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute left-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Category Segmented Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                        isSelected
                          ? 'bg-stone-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Results count indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-mono">
              <span>Mostrando {filteredRecipes.length} de {RECIPES.length} receitas</span>
              {onlyFavorites && <span>Filtro de favoritos ativo</span>}
            </div>

            {/* Recipe Cards Grid */}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={isFavorite(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                    onSelect={(r) => setSelectedRecipe(r)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center space-y-3">
                <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-lg font-bold text-stone-800">
                  Nenhuma receita encontrada
                </h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Tente alterar os termos da busca ou desmarcar o filtro de favoritos para ver todas as opções.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('Todos');
                      setOnlyFavorites(false);
                    }}
                    className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-xl hover:bg-stone-800 transition"
                  >
                    Restaurar Todos os Filtros
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: EQUILÍBRIO & MÉTODO C.A.S.A. */}
        {activeTab === 'equilibrio' && (
          <EquilibrioTab onOpenSafetyModal={() => setShowSafetyModal(true)} />
        )}

        {/* Tab 3: ADOÇANTES */}
        {activeTab === 'adocantes' && (
          <SweetenersGuide />
        )}

        {/* Tab 4: LISTA DE COMPRAS */}
        {activeTab === 'lista' && (
          <GroceryListTab
            items={groceryItems}
            onToggleItem={toggleItem}
            onRemoveItem={removeItem}
            onClearCompleted={clearCompleted}
            onClearAll={clearAll}
            onAddCustomItem={addCustomItem}
            onGoToRecipes={() => setActiveTab('receitas')}
          />
        )}
      </main>

      {/* Recipe Detail Modal Sheet */}
      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? isFavorite(selectedRecipe.id) : false}
        onToggleFavorite={toggleFavorite}
        onAddToGroceryList={addItemsFromRecipe}
      />

      {/* Mandatory Safety / Health Warning Modal */}
      <SafetyDisclaimerModal
        isOpen={showSafetyModal}
        onClose={() => setShowSafetyModal(false)}
        onConfirm={handleConfirmSafety}
        isMandatoryInitial={!hasAcceptedSafety}
      />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomNavBar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as typeof activeTab)}
        groceryCount={groceryItems.length}
      />
    </div>
  );
}
