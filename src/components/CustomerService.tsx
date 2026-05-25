import { motion } from 'motion/react';
import { Truck, ShieldCheck, RotateCcw, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '¿Hacen envíos a todo Colombia?',
    a: 'Sí, enviamos a todo el país. El envío en Soacha es gratuito y llega el mismo día. Para otras ciudades, el tiempo estimado es de 2 a 5 días hábiles.',
    icon: <Truck size={20} />,
  },
  {
    q: '¿Cómo sé mi talla correcta?',
    a: 'Cada producto tiene su guía de tallas. Si tienes dudas, escríbenos al WhatsApp y te asesoramos personalmente. Para sneakers, recomendamos pedir la talla que usas normalmente en Nike/Adidas.',
    icon: <HelpCircle size={20} />,
  },
  {
    q: '¿Los productos son originales?',
    a: '100% originales. Trabajamos con distribuidores autorizados y cada par viene con su caja original y etiquetas de garantía.',
    icon: <ShieldCheck size={20} />,
  },
  {
    q: '¿Puedo cambiar o devolver un producto?',
    a: 'Sí, tienes 15 días para cambios por talla o defecto de fábrica. El producto debe estar sin uso y con su empaque original. Los cambios se coordinan por WhatsApp.',
    icon: <RotateCcw size={20} />,
  },
];

const benefits = [
  { title: 'Envío gratis en Soacha', desc: 'Recibes el mismo día sin costo adicional.' },
  { title: 'Paga contra entrega', desc: 'Solo en Soacha. Pagas cuando recibes.' },
  { title: 'Asesoría personalizada', desc: 'Te guiamos por WhatsApp con tallas y estilos.' },
  { title: 'Cambios sin complicaciones', desc: '15 días para cambios, sin preguntas.' },
  { title: 'Productos originales', desc: 'Todos nuestros pares son 100% auténticos.' },
  { title: 'Atención post-venta', desc: 'Seguimiento después de tu compra.' },
];

export default function CustomerService() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10" aria-label="Atención al cliente">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
          Atención al Cliente
        </h2>
        <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
          Resolvemos todas tus dudas. Así de fácil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold uppercase mb-6 text-white flex items-center gap-3">
            Preguntas Frecuentes
          </h3>
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#111] border border-[#222] open:border-brand transition-colors overflow-hidden"
            >
              <summary className="flex items-center gap-4 p-5 cursor-pointer hover:text-brand transition-colors list-none">
                <span className="text-brand flex-shrink-0">{faq.icon}</span>
                <span className="font-bold uppercase text-sm tracking-wider flex-1">{faq.q}</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform text-lg">▼</span>
              </summary>
              <div className="px-5 pb-5 pl-14">
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </motion.details>
          ))}
        </div>

        {/* Benefits Grid */}
        <div>
          <h3 className="font-display text-2xl font-bold uppercase mb-6 text-white flex items-center gap-3">
            Por qué elegirnos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#111] border border-[#222] p-5 hover:border-brand/50 transition-colors"
              >
                <h4 className="font-display font-bold uppercase text-sm mb-2 text-white">{b.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-brand/10 border border-brand/30 p-6 text-center"
          >
            <p className="text-white font-display font-bold uppercase text-lg mb-2">
              ¿Sigues con dudas?
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Escríbenos directo y te respondemos al instante.
            </p>
            <a
              href="https://wa.me/573016438472?text=¡Hola! Tengo una consulta sobre los productos."
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-brand text-white px-8 py-4 font-display font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all glow-hover"
            >
              Preguntar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
