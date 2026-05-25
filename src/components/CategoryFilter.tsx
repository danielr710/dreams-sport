import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/products';

export default function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useApp();

  return (
    <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Filtrar por categoría">
      {CATEGORIES.map(cat => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          role="tab"
          aria-selected={activeCategory === cat.id}
          className={`px-5 py-3 font-display font-bold uppercase text-sm tracking-wider transition-all cursor-pointer ${
            activeCategory === cat.id
              ? 'bg-brand text-white shadow-[0_0_20px_rgba(230,0,0,0.3)]'
              : 'bg-[#111] text-gray-400 border border-[#222] hover:border-brand hover:text-white'
          }`}
        >
          <span className="mr-2">{cat.icon}</span>
          {cat.name}
        </button>
      ))}
    </div>
  );
}
