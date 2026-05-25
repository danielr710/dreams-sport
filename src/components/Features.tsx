import { motion } from 'motion/react';
import { Zap, Flame, MessageSquare, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <Zap size={28} />, title: 'Entrega Rápida', desc: 'Recibes al instante en Soacha. Envíos a todo Colombia.' },
  { icon: <Flame size={28} />, title: 'Sneakers & Hoodies', desc: 'Lo más buscado en sneakers, fútbol y baloncesto.' },
  { icon: <MessageSquare size={28} />, title: 'Atención Directa', desc: 'Asesoría real por WhatsApp antes y después de comprar.' },
  { icon: <ShoppingBag size={28} />, title: 'Compra Fácil', desc: 'Elige talla, agrega y paga contra entrega en Soacha.' },
  { icon: <Truck size={28} />, title: 'Envío Gratis', desc: 'Sin costo adicional en Soacha. Recibe el mismo día.' },
  { icon: <ShieldCheck size={28} />, title: 'Productos Originales', desc: '100% auténticos. Garantía en cada compra.' },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5" aria-label="Características">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 text-white">
            ¿Por qué Dreams Sport?
          </h2>
          <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
            Más que una tienda, tu destino para el estilo urbano y deportivo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-5 bg-[#111] border border-[#222] flex items-center justify-center text-white group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:border-brand transition-all duration-300 shadow-[0_0_0_rgba(230,0,0,0)] group-hover:shadow-[0_0_20px_rgba(230,0,0,0.4)]">
                {feat.icon}
              </div>
              <h3 className="font-display text-base font-bold uppercase mb-2">{feat.title}</h3>
              <p className="text-gray-400 font-medium text-sm max-w-[220px]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
