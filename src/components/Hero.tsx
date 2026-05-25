import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FEATURED_SNEAKER } from '../data/products';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const { setSelectedProduct } = useApp();

  return (
    <section className="relative min-h-[90vh] pb-12 pt-32 flex flex-col justify-center overflow-hidden" aria-label="Hero principal">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=2000"
          alt=""
          className="w-full h-full object-cover grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full w-full"
      >
        <motion.div variants={childVariants} className="flex items-center gap-2 bg-brand/10 backdrop-blur-md border border-brand/30 px-4 py-2 w-fit mb-8">
          <span className="text-brand"><Zap size={16} /></span>
          <span className="text-sm font-bold tracking-wide uppercase text-brand">Entrega Rápida en Soacha</span>
        </motion.div>

        <motion.h1 variants={childVariants} className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-display font-bold leading-[1] mb-6 tracking-tighter uppercase max-w-4xl">
          Los Sneakers Que <span className="text-white">No</span> Ves En <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#ff3333]">Todos Lados.</span>
        </motion.h1>

        <motion.p variants={childVariants} className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium mb-10 leading-relaxed">
          Sneakers, hoodies de fútbol y baloncesto. Todo original, listo para entregar en Soacha.
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setSelectedProduct(FEATURED_SNEAKER)}
            className="bg-brand text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 skew-x-[-10deg] glow-hover btn-ripple w-full sm:w-auto cursor-pointer"
          >
            <span className="skew-x-[10deg] flex items-center gap-2">Comprar Exclusivos <ArrowRight size={20} /></span>
          </button>
          <a
            href="#catalogo"
            className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 font-display font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 skew-x-[-10deg] hover:bg-white/20 transition-colors btn-ripple w-full sm:w-auto"
          >
            <span className="skew-x-[10deg]">Ver catálogo completo</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
