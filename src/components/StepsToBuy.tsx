import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'EXPLORA EL CATÁLOGO', desc: 'Encuentra sneakers, hoodies de fútbol y baloncesto. Filtra por tu deporte favorito.' },
  { num: '02', title: 'ELIGE TALLA Y AGREGA', desc: 'Selecciona tu talla (desde la 32 hasta la 42 en sneakers, S-XXL en hoodies) y agrega al carrito.' },
  { num: '03', title: 'PIDE POR WHATSAPP', desc: 'Dale click a comprar y un asesor finaliza tu pedido al instante. Paga contra entrega en Soacha.' },
];

export default function StepsToBuy() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10" aria-label="Cómo comprar">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
          Cómo Comprar
        </h2>
        <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
          Así de fácil. 3 pasos y tienes tu outfit listo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-[#111] p-8 border border-[#222] relative overflow-hidden group hover:border-brand transition-colors"
          >
            <div className="text-[6rem] font-display font-black text-white/5 absolute -top-8 -right-4 group-hover:text-brand/10 transition-colors pointer-events-none select-none">
              {step.num}
            </div>
            <div className="relative z-10">
              <span className="inline-block text-brand font-bold font-mono mb-4 border border-brand/30 px-2 py-1 text-sm bg-brand/10">
                PASO {step.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase mb-4">{step.title}</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
