import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Instagram, ShieldCheck, Truck, Zap, ShoppingBag, MessageSquare, Star, ArrowRight, Flame, Facebook, ShoppingCart, X, Trash2 } from 'lucide-react';

const WHATSAPP_NUMBER = '573016438472';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const generateWaLink = (msg: string) => `${WHATSAPP_BASE_URL}${encodeURIComponent(msg)}`;

const SIZES = Array.from({ length: 11 }, (_, i) => (32 + i).toString());

const FEATURED_SNEAKER = {
  id: 'featured',
  name: 'Off-White x Air Jordan 1 "Chicago"',
  price: '$280.000',
  image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=1200',
  description: 'Un clásico reimaginado. Perfecto para romperla en la calle.',
  sizes: SIZES,
};

const SNEAKERS = [
  { id: 's1', name: 'Nike Dunk Low "Panda"', price: '$180.000', image: 'https://images.unsplash.com/photo-1658409214757-b0b2e3e67041?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
  { id: 's2', name: 'New Balance 550 White/Green', price: '$195.000', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
  { id: 's3', name: 'Air Jordan 4 "Black Canvas"', price: '$200.000', image: 'https://images.unsplash.com/photo-1636718282214-0b4162a154f0?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
  { id: 's4', name: 'Adidas Samba OG Black', price: '$170.000', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
  { id: 's5', name: 'Nike Air Max 1', price: '$190.000', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
  { id: 's6', name: 'Nike Air Force 1 Triple White', price: '$150.000', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800', sizes: SIZES },
];

const REVIEWS = [
  { name: 'Mateo R.', text: 'El envío a Soacha fue súper rápido. 10/10.', rating: 5 },
  { name: 'Juan D.', text: 'Las Jordan están increíbles, la cálidad es brutal.', rating: 5 },
  { name: 'Sebas G.', text: 'Excelente atención por WhatsApp, me guiaron con las tallas.', rating: 5 },
  { name: 'Camilo P.', text: 'Fuego puro, recomendados al cien.', rating: 5 },
  { name: 'Andrés M.', text: 'Llegaron impecables. Listo para el finde.', rating: 5 },
];

// Context
const AppContext = createContext<any>(null);

function WhatsAppIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#E60000] text-white w-8 h-8 flex items-center justify-center font-display font-bold text-xl skew-x-[-10deg]">
        <span className="skew-x-[10deg] block">DS</span>
      </div>
      <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
        Dreams<span className="text-[#E60000]">Sport</span>
      </span>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cart, setIsCartOpen } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#"><Logo /></a>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="text-white hover:text-[#E60000] transition-colors hidden sm:block">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="text-white hover:text-[#E60000] transition-colors hidden sm:block">
            <Facebook size={24} />
          </a>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-white hover:text-[#E60000] transition-colors flex items-center justify-center p-2"
          >
            <ShoppingCart size={28} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#E60000] text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center animate-pulse-soft">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useContext(AppContext);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart.map((item: any) => `- ${item.name} (Talla: ${item.selectedSize}) - ${item.price}`).join('%0A');
    const total = cart.reduce((acc: number, item: any) => acc + parseInt(item.price.replace(/[^0-9]/g, '')), 0);
    const formattedTotal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total);
    const msg = `¡Hola! Vengo de la página web y quiero llevarme estos sneakers:%0A%0A${itemsText}%0A%0A*Total:* ${formattedTotal}%0A%0A¿Para dónde transfiero?`;
    window.open(generateWaLink(msg), '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] z-50 shadow-2xl flex flex-col border-l border-[#222]">
            <div className="p-6 border-b border-[#222] flex justify-between items-center bg-[#111] text-white">
              <h2 className="font-display font-bold text-2xl uppercase tracking-wider flex items-center gap-3">
                <ShoppingCart className="text-[#E60000]" /> Tu Carrito
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-[#E60000] text-gray-400 transition-colors"><X size={28} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 text-white bg-[#050505]">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10 flex flex-col items-center">
                  <div className="w-24 h-24 mb-6 rounded-full bg-[#111] flex items-center justify-center border border-[#222]">
                    <ShoppingBag size={40} className="opacity-50" />
                  </div>
                  <p className="text-xl font-display font-bold uppercase tracking-wide text-white">Vacío</p>
                  <p className="text-sm mt-2">Agrega algo de heat para continuar.</p>
                </div>
              ) : (
                cart.map((item: any) => (
                  <div key={item.cartId} className="flex gap-4 items-center bg-[#111] p-3 border border-[#222]">
                    <div className="w-24 h-24 bg-[#0a0a0a] flex-shrink-0 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-bold text-white uppercase text-sm leading-tight truncate mb-1">{item.name}</h4>
                      <div className="inline-block px-2 py-0.5 bg-[#E60000]/10 border border-[#E60000]/30 text-[#E60000] text-xs font-bold mb-2">
                        Talla: {item.selectedSize}
                      </div>
                      <p className="text-white font-bold font-display tracking-widest">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.cartId)} className="p-3 text-gray-500 hover:text-[#E60000] hover:bg-[#E60000]/10 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#222] bg-[#111]">
                <button onClick={checkoutWhatsApp} className="w-full py-5 bg-[#E60000] text-white font-display font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(230,0,0,0.3)] btn-ripple skew-x-[-5deg]">
                  <span className="skew-x-[5deg] flex items-center gap-2">
                    <WhatsAppIcon size={24} /> Comprar por WhatsApp
                  </span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useContext(AppContext);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectedSize(null);
    setError(false);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    const cartItem = {
      ...selectedProduct,
      selectedSize,
      cartId: `${selectedProduct.id}-${selectedSize}-${Date.now()}`
    };
    addToCart(cartItem);
    setSelectedProduct(null);
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={() => setSelectedProduct(null)}
      >
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.95 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }} 
          exit={{ y: 50, opacity: 0, scale: 0.95 }} 
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-[#0a0a0a] w-full max-w-4xl flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#222] my-8 relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-[#E60000] border border-white/10 backdrop-blur-sm transition-colors rounded-full">
            <X size={24} />
          </button>
          
          <div className="w-full md:w-1/2 bg-[#050505] p-6 sm:p-10 flex items-center justify-center border-r border-[#222]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
              className="relative w-full aspect-square"
            >
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover shadow-2xl" />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-[#111]">
            <h2 className="font-display text-3xl sm:text-4xl uppercase font-bold mb-4 leading-[1.1] text-white">
              {selectedProduct.name}
            </h2>
            <p className="text-[#E60000] font-bold text-3xl font-display tracking-wider mb-8">
              {selectedProduct.price}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="uppercase tracking-widest font-bold text-sm text-gray-400">Selecciona Talla (EUR)</p>
                {error && <p className="text-[#E60000] text-xs font-bold animate-pulse uppercase tracking-wider">¡Elige una talla!</p>}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {selectedProduct.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setError(false); }}
                    className={`h-12 flex items-center justify-center font-bold font-mono transition-all border ${selectedSize === size ? 'bg-[#E60000] text-white border-[#E60000] scale-105' : 'bg-transparent text-gray-300 border-[#333] hover:border-gray-500 hover:bg-[#222]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleAddToCart} className="w-full py-5 bg-white text-black font-display text-xl uppercase font-bold tracking-wider hover:bg-[#E60000] hover:text-white transition-all flex items-center justify-center gap-3 btn-ripple glow-hover">
              <ShoppingCart size={22} /> Agregar al Carrito
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Hero() {
  const { setSelectedProduct } = useContext(AppContext);
  return (
    <section className="relative min-h-[90vh] pb-12 pt-32 flex flex-col justify-center overflow-hidden">
      {/* Background Image with Parallax & Fade-in + Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=2000" 
          alt="Sneakers background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full w-full">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 bg-[#E60000]/10 backdrop-blur-md border border-[#E60000]/30 px-4 py-2 w-fit mb-8"
        >
          <span className="text-[#E60000]"><Zap size={16} fill="currentColor" /></span>
          <span className="text-sm font-bold tracking-wide uppercase text-[#E60000]">Entrega Rápida en Soacha</span>
        </motion.div>

        {/* Big Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-display font-bold leading-[1] mb-6 tracking-tighter uppercase max-w-4xl"
        >
          Los Sneakers Que <span className="text-white">No</span> Ves En <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60000] to-[#ff3333]">Todos Lados.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium mb-10"
        >
          Modelos en tendencia listos para entrega en Soacha. Elige talla, agrega al carrito y recibe.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => setSelectedProduct(FEATURED_SNEAKER)}
            className="bg-[#E60000] text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 skew-x-[-10deg] glow-hover btn-ripple w-full sm:w-auto"
          >
            <span className="skew-x-[10deg] flex items-center gap-2">Comprar Exclusivos <ArrowRight size={20}/></span>
          </button>
          <a href="#catalogo" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 font-display font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 skew-x-[-10deg] hover:bg-white/20 transition-colors btn-ripple w-full sm:w-auto">
            <span className="skew-x-[10deg]">Ver catálogo completo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProduct() {
  const { setSelectedProduct } = useContext(AppContext);
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Product Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#E60000]/10 text-[#E60000] border border-[#E60000]/30 px-3 py-1 mb-6 w-fit uppercase font-bold text-sm tracking-wider font-display">
            <Flame size={16} /> El más pedido ahora
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold uppercase leading-[1.1] mb-6 tracking-tight">
            {FEATURED_SNEAKER.name}
          </h2>
          <p className="text-xl text-gray-400 mb-6 font-medium">
            {FEATURED_SNEAKER.description}
          </p>
          <p className="text-3xl font-bold font-display text-white mb-8 border-l-4 border-[#E60000] pl-4">
            {FEATURED_SNEAKER.price}
          </p>
          <button 
            onClick={() => setSelectedProduct(FEATURED_SNEAKER)} 
            className="bg-white text-black px-8 py-5 font-display font-bold text-xl uppercase tracking-wider flex items-center justify-center gap-3 skew-x-[-10deg] hover:bg-[#E60000] hover:text-white transition-all glow-hover btn-ripple w-fit"
          >
            <span className="skew-x-[10deg] flex items-center gap-2"><ShoppingBag size={20}/> Lo quiero</span>
          </button>
        </motion.div>

        {/* Right Side: Big Image with 3D hover */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-[4/3] sm:aspect-square bg-[#111] overflow-hidden border border-[#222]">
            <motion.img 
              whileHover={{ scale: 1.05, rotateZ: -2, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              src={FEATURED_SNEAKER.image} 
              alt={FEATURED_SNEAKER.name} 
              className="w-full h-full object-cover transform origin-center shadow-2xl cursor-pointer"
              onClick={() => setSelectedProduct(FEATURED_SNEAKER)}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ProductGrid() {
  const { setSelectedProduct } = useContext(AppContext);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2">🔥 Heat Disponible</h2>
          <p className="text-gray-400 font-medium text-lg">Selecciona tu modelo y agrégalo al carrito.</p>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SNEAKERS.map((sneaker) => (
          <motion.div key={sneaker.id} variants={item} className="group bg-[#111] border border-[#222] hover:border-[#E60000] transition-colors duration-300 glow-hover flex flex-col relative flex-1 cursor-pointer" onClick={() => setSelectedProduct(sneaker)}>
            <div className="aspect-[4/3] overflow-hidden bg-[#0A0A0A] relative">
              <img 
                src={sneaker.image} 
                alt={sneaker.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 flex gap-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-[#E60000] text-white p-3 shadow-lg">
                  <ShoppingCart size={20} />
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between bg-[#111]">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase leading-tight mb-2 group-hover:text-[#E60000] transition-colors">{sneaker.name}</h3>
                <p className="text-xl font-medium text-gray-300 mb-6 font-display">{sneaker.price}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                    {sneaker.sizes.slice(0, 3).map(size => (
                      <span key={size} className="text-xs bg-[#222] text-gray-400 px-2 py-1 font-mono">{size}</span>
                    ))}
                    <span className="text-xs text-gray-500 px-2 py-1 font-mono">+{sneaker.sizes.length - 3}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: <Zap size={32} />, title: 'Entrega Rápida', desc: 'Recibes al instante en Soacha.' },
    { icon: <Flame size={32} />, title: 'Pares en Tendencia', desc: 'Solo traemos el heat más buscado.' },
    { icon: <MessageSquare size={32} />, title: 'Atención Directa', desc: 'Asesoría real por WhatsApp.' },
    { icon: <ShoppingBag size={32} />, title: 'Compra Fácil', desc: 'Elige talla, agrega y paga al recibir.' },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-6 bg-[#111] border border-[#222] rounded-full flex items-center justify-center text-white group-hover:bg-[#E60000] group-hover:text-white group-hover:scale-110 group-hover:border-[#E60000] transition-all duration-300 shadow-[0_0_0_rgba(230,0,0,0)] group-hover:shadow-[0_0_20px_rgba(230,0,0,0.4)]">
                {feat.icon}
              </div>
              <h3 className="font-display text-xl font-bold uppercase mb-2">{feat.title}</h3>
              <p className="text-gray-400 font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsToBuy() {
  const steps = [
    { num: '01', title: 'ENCUENTRA EL HEAT', desc: 'Elige tu par favorito y selecciona tu talla (Desde la 32 hasta la 42).' },
    { num: '02', title: 'AGREGA AL CARRITO', desc: 'Añádelo al carrito de compras, puedes elegir más de uno.' },
    { num: '03', title: 'PIDE POR WHATSAPP', desc: 'Dale click a comprar y un asesor finaliza tu compra al instante.' },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">📲 CÓMO COMPRAR</h2>
        <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">Selecciona tus tallas y cierra el pedido en segundos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-[#111] p-8 border border-[#222] relative overflow-hidden group hover:border-[#E60000] transition-colors"
          >
            <div className="text-[6rem] font-display font-black text-white/5 absolute -top-8 -right-4 group-hover:text-[#E60000]/10 transition-colors pointer-events-none">
              {step.num}
            </div>
            <div className="relative z-10">
              <span className="inline-block text-[#E60000] font-bold font-mono mb-4 border border-[#E60000]/30 px-2 py-1 text-sm bg-[#E60000]/10">PASO {step.num}</span>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">{step.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,0,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 text-white">⭐ Los Clientes Hablan</h2>
        <p className="text-[#E60000] font-bold text-lg">Puro feedback real. Cero bots.</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="slider-track gap-6 px-3">
          {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
            <div key={idx} className="w-[300px] sm:w-[350px] bg-[#111] p-8 border border-[#222] flex-shrink-0">
              <div className="flex text-[#E60000] mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <h4 className="font-display font-bold uppercase tracking-wider">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold uppercase leading-[1.1] mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SI YA ELEGISTE,</span><br/>
          PÍDELOS AHORA.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Sube, agrégalos al carrito con tu talla y nosotros nos encargamos del resto.
        </p>

        <a 
          href="#catalogo"
          className="inline-flex bg-[#E60000] text-white px-10 py-6 font-display font-black text-xl sm:text-2xl uppercase tracking-wide items-center justify-center gap-4 skew-x-[-10deg] animate-pulse-soft hover:bg-white hover:text-black transition-colors w-full sm:w-auto btn-ripple"
        >
          <span className="skew-x-[10deg] flex items-center gap-3">
            <ShoppingBag size={28} /> Volver al Catálogo
          </span>
        </a>
      </motion.div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-[#050505] border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <div className="mb-8">
            <Logo />
          </div>
          <h2 className="text-3xl font-display font-bold uppercase mb-6">Visítanos y pruébate el estilo.</h2>
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#111] p-3 text-[#E60000] rounded-full border border-[#222]">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1 text-white">Soacha, Colombia</h4>
              <p className="text-gray-400">Dreams Sport Tiendas de Ropa.</p>
              <p className="text-gray-500 text-sm mt-1">Entregas directas o envíos.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#E60000] hover:text-white text-white p-4 transition-all hover:scale-110 border border-[#222] hover:border-[#E60000] glow-hover">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#E60000] hover:text-white text-white p-4 transition-all hover:scale-110 border border-[#222] hover:border-[#E60000] glow-hover">
              <Facebook size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 h-[450px] bg-[#111] border border-[#222] grayscale hover:grayscale-0 transition-all duration-700"
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
          ></iframe>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-[#111] text-center text-sm font-bold uppercase tracking-widest text-[#333]">
        &copy; {new Date().getFullYear()} Dreams Sport. Diseñado para vender.
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a 
      href={generateWaLink('¡Hola! Necesito ayuda con unos tenis.')} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center animate-pulse-soft"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const addToCart = (item: any) => {
    setCart(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <AppContext.Provider value={{ cart, isCartOpen, setIsCartOpen, selectedProduct, setSelectedProduct, addToCart, removeFromCart }}>
      <div className="min-h-screen selection:bg-[#E60000] selection:text-white pb-20 md:pb-0">
        <Navbar />
        <CartSidebar />
        <ProductModal />
        
        <Hero />
        <FeaturedProduct />
        <ProductGrid />
        <Features />
        <StepsToBuy />
        <Testimonials />
        <FinalCTA />
        <Location />
        <FloatingWhatsApp />
      </div>
    </AppContext.Provider>
  );
}
