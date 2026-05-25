import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useApp();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectedSize(null);
    setError(false);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addToCart({
      ...selectedProduct,
      selectedSize,
      cartId: `${selectedProduct.id}-${selectedSize}-${Date.now()}`,
    });
    setSelectedProduct(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={() => setSelectedProduct(null)}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-[#0a0a0a] w-full max-w-4xl flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#222] my-8 relative overflow-hidden"
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-label={`Detalle de ${selectedProduct.name}`}
        >
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-brand border border-white/10 backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <div className="w-full md:w-1/2 bg-dark p-6 sm:p-10 flex items-center justify-center border-r border-[#222]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative w-full aspect-square"
            >
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover shadow-2xl" />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-[#111]">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-4 leading-[1.1] text-white">
              {selectedProduct.name}
            </h2>
            <p className="text-brand font-bold text-2xl md:text-3xl font-display tracking-wider mb-8">
              {selectedProduct.price}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="uppercase tracking-widest font-bold text-sm text-gray-400">Selecciona Talla (EUR)</p>
                {error && <p className="text-brand text-xs font-bold animate-pulse uppercase tracking-wider">¡Elige una talla!</p>}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {selectedProduct.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setError(false); }}
                    className={`h-12 flex items-center justify-center font-bold font-mono transition-all border cursor-pointer ${
                      selectedSize === size
                        ? 'bg-brand text-white border-brand scale-105'
                        : 'bg-transparent text-gray-300 border-[#333] hover:border-gray-500 hover:bg-[#222]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-5 bg-white text-black font-display text-lg md:text-xl uppercase font-bold tracking-wider hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-3 btn-ripple glow-hover cursor-pointer"
            >
              <ShoppingCart size={20} /> Agregar al Carrito
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
