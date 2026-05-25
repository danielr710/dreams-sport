import { useState, useEffect } from 'react';
import { ShoppingCart, Instagram, Facebook } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" aria-label="Dreams Sport - Inicio">
          <div className="flex items-center gap-2">
            <div className="bg-brand text-white w-8 h-8 flex items-center justify-center font-display font-bold text-xl skew-x-[-10deg]">
              <span className="skew-x-[10deg] block">DS</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
              Dreams<span className="text-brand">Sport</span>
            </span>
          </div>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="text-white hover:text-brand transition-colors hidden sm:block" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="text-white hover:text-brand transition-colors hidden sm:block" aria-label="Facebook">
            <Facebook size={22} />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-white hover:text-brand transition-colors flex items-center justify-center p-2 cursor-pointer"
            aria-label={`Carrito con ${cartCount} productos`}
          >
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center animate-pulse-soft">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
