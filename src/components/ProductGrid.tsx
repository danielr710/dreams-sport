import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SNEAKERS } from '../data/products';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductGrid() {
  const { setSelectedProduct } = useApp();

  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10" aria-label="Catálogo de productos">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2">
            Heat Disponible
          </h2>
          <p className="text-gray-400 font-medium text-lg">Selecciona tu modelo y agrégalo al carrito.</p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {SNEAKERS.map(sneaker => (
          <motion.div
            key={sneaker.id}
            variants={itemVariants}
            className="group bg-[#111] border border-[#222] hover:border-brand transition-colors duration-300 glow-hover flex flex-col relative flex-1 cursor-pointer"
            onClick={() => setSelectedProduct(sneaker)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelectedProduct(sneaker)}
            aria-label={`Ver ${sneaker.name}`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#0A0A0A] relative">
              {sneaker.badge && (
                <span className="absolute top-3 left-3 z-10 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 skew-x-[-5deg]">
                  <span className="skew-x-[5deg] block">{sneaker.badge}</span>
                </span>
              )}
              <img
                src={sneaker.image}
                alt={sneaker.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 flex gap-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-brand text-white p-3 shadow-lg">
                  <ShoppingCart size={18} />
                </div>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between bg-[#111]">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase leading-tight mb-2 group-hover:text-brand transition-colors">
                  {sneaker.name}
                </h3>
                <p className="text-lg font-medium text-gray-300 mb-4 font-display tracking-wide">{sneaker.price}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {sneaker.sizes.slice(0, 3).map(size => (
                  <span key={size} className="text-xs bg-[#222] text-gray-400 px-2 py-1 font-mono">{size}</span>
                ))}
                <span className="text-xs text-gray-500 px-2 py-1 font-mono">+{sneaker.sizes.length - 3}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
