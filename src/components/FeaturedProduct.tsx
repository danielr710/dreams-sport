import { motion } from 'motion/react';
import { Flame, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FEATURED_SNEAKER } from '../data/products';

export default function FeaturedProduct() {
  const { setSelectedProduct } = useApp();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10" aria-label="Producto destacado">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand border border-brand/30 px-3 py-1 mb-6 w-fit uppercase font-bold text-sm tracking-wider font-display">
            <Flame size={16} /> El más pedido ahora
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.1] mb-6 tracking-tight">
            {FEATURED_SNEAKER.name}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 font-medium leading-relaxed">
            {FEATURED_SNEAKER.description}
          </p>
          <p className="text-2xl md:text-3xl font-bold font-display text-white mb-8 border-l-4 border-brand pl-4">
            {FEATURED_SNEAKER.price}
          </p>
          <button
            onClick={() => setSelectedProduct(FEATURED_SNEAKER)}
            className="bg-white text-black px-8 py-5 font-display font-bold text-lg md:text-xl uppercase tracking-wider flex items-center justify-center gap-3 skew-x-[-10deg] hover:bg-brand hover:text-white transition-all glow-hover btn-ripple w-fit cursor-pointer"
          >
            <span className="skew-x-[10deg] flex items-center gap-2"><ShoppingBag size={20} /> Lo quiero</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-[4/3] sm:aspect-square bg-[#111] overflow-hidden border border-[#222]">
            <motion.img
              whileHover={{ scale: 1.05, rotateZ: -2, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              src={FEATURED_SNEAKER.image}
              alt={FEATURED_SNEAKER.name}
              className="w-full h-full object-cover transform origin-center shadow-2xl cursor-pointer"
              onClick={() => setSelectedProduct(FEATURED_SNEAKER)}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
