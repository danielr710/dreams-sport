import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_PRODUCTS } from '../data/products';
import CategoryFilter from './CategoryFilter';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ApparelGrid() {
  const { setSelectedProduct, activeCategory } = useApp();

  const filtered = activeCategory === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10" aria-label="Catálogo completo">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2">
            Catálogo Completo
          </h2>
          <p className="text-gray-400 font-medium text-lg">
            {filtered.length} productos — sneakers, hoodies y colección Mundial 2026.
          </p>
        </div>
      </div>

      <CategoryFilter />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filtered.map(product => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="group bg-[#111] border border-[#222] hover:border-brand transition-colors duration-300 glow-hover flex flex-col relative flex-1 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelectedProduct(product)}
            aria-label={`Ver ${product.name}`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#0A0A0A] relative">
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 skew-x-[-5deg]">
                  <span className="skew-x-[5deg] block">{product.badge}</span>
                </span>
              )}
              <span className="absolute top-3 right-3 z-10 text-xs bg-black/60 text-white px-2 py-1 uppercase font-bold tracking-wider backdrop-blur-sm">
                {product.category === 'sneakers' ? '👟 Sneaker' : product.category === 'futbol' ? '⚽ Fútbol' : product.category === 'mundial' ? '🏆 Mundial 2026' : '🏀 NBA'}
              </span>
              <img
                src={product.image}
                alt={product.name}
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
                <h3 className="font-display text-sm sm:text-base font-bold uppercase leading-tight mb-2 group-hover:text-brand transition-colors">
                  {product.name}
                </h3>
                <p className="text-base font-medium text-gray-300 mb-3 font-display tracking-wide">{product.price}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {product.sizes.slice(0, 4).map(size => (
                  <span key={size} className="text-[10px] bg-[#222] text-gray-400 px-2 py-1 font-mono">{size}</span>
                ))}
                {product.sizes.length > 4 && (
                  <span className="text-[10px] text-gray-500 px-2 py-1 font-mono">+{product.sizes.length - 4}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-2xl font-display font-bold uppercase">No hay productos en esta categoría</p>
        </div>
      )}
    </section>
  );
}
