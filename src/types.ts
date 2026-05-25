export interface Product {
  id: string;
  name: string;
  price: string;
  category: 'sneakers' | 'futbol' | 'baloncesto' | 'mundial';
  image: string;
  description?: string;
  sizes: string[];
  badge?: string | null;
}

export interface CartItem extends Product {
  selectedSize: string;
  cartId: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface AppContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartId: string) => void;
  formattedTotal: string;
  cartCount: number;
}
