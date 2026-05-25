import { motion } from 'motion/react';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import { waLink } from '../data/whatsapp';
import { WhatsAppSvg } from './Icons';

export default function Location() {
  return (
    <footer className="bg-dark border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-brand text-white w-8 h-8 flex items-center justify-center font-display font-bold text-xl skew-x-[-10deg]">
                <span className="skew-x-[10deg] block">DS</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                Dreams<span className="text-brand">Sport</span>
              </span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-6 leading-tight">
            Visítanos y pruébate el estilo.
          </h2>
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#111] p-3 text-brand border border-[#222] flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1 text-white">Soacha, Colombia</h4>
              <p className="text-gray-400">Dreams Sport Tiendas de Ropa.</p>
              <p className="text-gray-500 text-sm mt-1">Entregas directas o envíos.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-brand hover:text-white text-white p-4 transition-all hover:scale-110 border border-[#222] hover:border-brand glow-hover" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-brand hover:text-white text-white p-4 transition-all hover:scale-110 border border-[#222] hover:border-brand glow-hover" aria-label="Facebook">
              <Facebook size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 h-[400px] bg-[#111] border border-[#222] grayscale hover:grayscale-0 transition-all duration-700"
        >
          <iframe
            src="https://maps.google.com/maps?q=4.5701341,-74.2372575&hl=es&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación Dreams Sport"
          />
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#111] text-center text-sm font-bold uppercase tracking-widest text-[#333]">
        &copy; {new Date().getFullYear()} Dreams Sport. Diseñado para vender.
      </div>
    </footer>
  );
}
