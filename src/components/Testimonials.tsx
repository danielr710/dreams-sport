import { Star } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function Testimonials() {
  const all = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5 relative" aria-label="Testimonios">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 text-white">
          Los Clientes Hablan
        </h2>
        <p className="text-brand font-bold text-lg">Feedback real. Cero bots.</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="slider-track gap-6 px-3">
          {all.map((review, idx) => (
            <div key={`${review.name}-${idx}`} className="w-[300px] sm:w-[350px] bg-[#111] p-8 border border-[#222] flex-shrink-0">
              <div className="flex text-brand mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <h4 className="font-display font-bold uppercase tracking-wider">&mdash; {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
