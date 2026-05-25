import { createContext, useContext, useState, useCallback } from 'react';
import type { AppContextType, Product, CartItem } from '../types';

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => [...prev, item]);
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  }, []);

  const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace(/[^0-9]/g, '')), 0);
  const formattedTotal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total);

  return (
    <AppContext.Provider
      value={{
        cart, isCartOpen, setIsCartOpen,
        selectedProduct, setSelectedProduct,
        activeCategory, setActiveCategory,
        addToCart, removeFromCart,
        formattedTotal, cartCount: cart.length,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider');
  return ctx;
}
