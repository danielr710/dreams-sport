import { waLink } from '../data/whatsapp';
import { WhatsAppSvg } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('¡Hola! Necesito ayuda con unos tenis.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center animate-pulse-soft"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppSvg width={28} height={28} />
    </a>
  );
}
