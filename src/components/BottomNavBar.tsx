import React from 'react';
import { BookOpen, Sparkles, ShoppingBag, Utensils } from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  groceryCount: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onTabChange,
  groceryCount,
}) => {
  const tabs = [
    { id: 'receitas', label: 'Receitas', icon: Utensils },
    { id: 'equilibrio', label: 'Equilíbrio', icon: Sparkles },
    { id: 'adocantes', label: 'Adoçantes', icon: BookOpen },
    { id: 'lista', label: 'Lista', icon: ShoppingBag, badge: groceryCount },
  ];

  return (
    <nav 
      aria-label="Navegação inferior principal"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg pb-safe"
    >
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center min-h-[44px] relative transition-colors ${
                isActive ? 'text-amber-900 font-bold' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-amber-900' : 'text-stone-500'}`} />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-amber-700 text-white font-mono text-[9px] font-bold flex items-center justify-center">
                    {tab.badge > 9 ? '9+' : tab.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate ${isActive ? 'font-bold text-amber-900' : 'font-medium'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-amber-800 absolute bottom-1.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
