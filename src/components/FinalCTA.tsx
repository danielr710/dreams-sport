import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-white/10" aria-label="Llamado a la acción">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.1] mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SI YA ELEGISTE,</span>
          <br />
          PÍDELOS AHORA.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Sneakers, hoodies de fútbol y baloncesto. Agrega todo al carrito con tu talla y nosotros nos encargamos.
        </p>

        <a
          href="#catalogo"
          className="inline-flex bg-brand text-white px-10 py-6 font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide items-center justify-center gap-4 skew-x-[-10deg] animate-pulse-soft hover:bg-white hover:text-black transition-colors w-full sm:w-auto btn-ripple"
        >
          <span className="skew-x-[10deg] flex items-center gap-3">
            <ShoppingBag size={26} /> Volver al Catálogo
          </span>
        </a>
      </motion.div>
    </section>
  );
}
