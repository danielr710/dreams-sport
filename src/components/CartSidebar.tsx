import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { waLink } from '../data/whatsapp';
import { WhatsAppSvg } from './Icons';

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, formattedTotal } = useApp();

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart
      .map(item => `- ${item.name} (Talla: ${item.selectedSize}) - ${item.price}`)
      .join('%0A');
    const msg = `¡Hola! Vengo de la página web y quiero llevarme estos sneakers:%0A%0A${itemsText}%0A%0A*Total:* ${formattedTotal}%0A%0A¿Para dónde transfiero?`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] z-50 shadow-2xl flex flex-col border-l border-[#222]"
            role="dialog"
            aria-label="Carrito de compras"
          >
            <div className="p-6 border-b border-[#222] flex justify-between items-center bg-[#111] text-white">
              <h2 className="font-display font-bold text-2xl uppercase tracking-wider flex items-center gap-3">
                <ShoppingCart className="text-brand" size={24} /> Tu Carrito
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-brand text-gray-400 transition-colors cursor-pointer" aria-label="Cerrar carrito">
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 text-white bg-dark">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10 flex flex-col items-center">
                  <div className="w-24 h-24 mb-6 bg-[#111] flex items-center justify-center border border-[#222]">
                    <ShoppingBag size={40} className="opacity-50" />
                  </div>
                  <p className="text-xl font-display font-bold uppercase tracking-wide text-white">Vacío</p>
                  <p className="text-sm mt-2">Agrega algo de heat para continuar.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.cartId} className="flex gap-4 items-center bg-[#111] p-3 border border-[#222]">
                    <div className="w-20 h-20 bg-[#0a0a0a] flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-bold text-white uppercase text-sm leading-tight truncate mb-1">{item.name}</h4>
                      <div className="inline-block px-2 py-0.5 bg-brand/10 border border-brand/30 text-brand text-xs font-bold mb-2">
                        Talla: {item.selectedSize}
                      </div>
                      <p className="text-white font-bold font-display tracking-widest text-sm">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.cartId)} className="p-3 text-gray-500 hover:text-brand hover:bg-brand/10 transition-colors cursor-pointer" aria-label={`Eliminar ${item.name}`}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-[#222] bg-[#111]">
                <div className="flex justify-between items-center mb-4 text-white">
                  <span className="font-display font-bold uppercase tracking-wider">Total</span>
                  <span className="font-display font-bold text-xl tracking-widest text-brand">{formattedTotal}</span>
                </div>
                <button
                  onClick={checkoutWhatsApp}
                  className="w-full py-5 bg-brand text-white font-display font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(230,0,0,0.3)] btn-ripple skew-x-[-5deg] cursor-pointer"
                >
                  <span className="skew-x-[5deg] flex items-center gap-2">
                    <WhatsAppSvg width={22} height={22} /> Comprar por WhatsApp
                  </span>
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
