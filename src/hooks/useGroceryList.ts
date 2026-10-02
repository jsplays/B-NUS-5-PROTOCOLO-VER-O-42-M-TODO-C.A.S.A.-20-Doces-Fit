import { useState, useEffect } from 'react';

export interface GroceryItem {
  id: string;
  name: string;
  sourceRecipeTitle?: string;
  completed: boolean;
}

const STORAGE_KEY = 'doces_fit_grocery_list';

export function useGroceryList() {
  const [items, setItems] = useState<GroceryItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save grocery items', e);
    }
  }, [items]);

  const addItemsFromRecipe = (recipeTitle: string, ingredientNames: string[]) => {
    const newItems: GroceryItem[] = ingredientNames.map((name, index) => ({
      id: `${Date.now()}-${index}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      sourceRecipeTitle: recipeTitle,
      completed: false,
    }));

    setItems(prev => [...prev, ...newItems]);
  };

  const addCustomItem = (name: string) => {
    if (!name.trim()) return;
    const newItem: GroceryItem = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      sourceRecipeTitle: 'Adicionado avulso',
      completed: false,
    };
    setItems(prev => [newItem, ...prev]);
  };

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    setItems(prev => prev.filter(item => !item.completed));
  };

  const clearAll = () => {
    setItems([]);
  };

  return {
    items,
    addItemsFromRecipe,
    addCustomItem,
    toggleItem,
    removeItem,
    clearCompleted,
    clearAll,
  };
}
