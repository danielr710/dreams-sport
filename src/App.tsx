import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, MapPin, Instagram, Facebook, ShieldCheck, Truck, Banknote, X, Send, Menu, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// --- Data ---
const SNEAKERS = [
  { id: 's1', name: 'Nike Dunk Low Retro', price: '$450.000', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', name: 'Air Jordan 1 High', price: '$650.000', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800' },
  { id: 's3', name: 'Air Force 1 \'07', price: '$400.000', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800' },
  { id: 's4', name: 'New Balance 550', price: '$520.000', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800' },
  { id: 's5', name: 'Air Jordan 4 Retro', price: '$750.000', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800' },
  { id: 's6', name: 'Adidas Yeezy Boost', price: '$850.000', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800' },
];

const CLOTHING = [
  { id: 'c1', name: 'Conjunto Deportivo Urbano', price: '$180.000', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Hoodie Oversize Essential', price: '$120.000', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
  { id: 'c3', name: 'Camiseta Graphic Street', price: '$70.000', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800' },
  { id: 'c4', name: 'Jogger Cargo Tech', price: '$140.000', image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800' },
];

const WHATSAPP_NUMBER = '573016438472';
const WHATSAPP_MSG = '¡Qué más! Vengo de la página web y quiero info de los pares.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

// --- Context ---
const AppContext = createContext<any>(null);

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, wishlist, setIsCartOpen, setIsWishlistOpen } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-display text-3xl tracking-wider ${isScrolled ? 'text-dark' : 'text-white'}`}>DREAMS<span className="text-brand">SPORT</span></a>
        
        <div className={`hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase ${isScrolled ? 'text-dark' : 'text-white'}`}>
          <a href="#sneakers" className="hover:text-brand transition-colors">Sneakers</a>
          <a href="#ropa" className="hover:text-brand transition-colors">Ropa</a>
          <a href="#ubicacion" className="hover:text-brand transition-colors">Ubicación</a>
        </div>

        <div className={`flex items-center gap-4 ${isScrolled ? 'text-dark' : 'text-white'}`}>
          <button onClick={() => setIsWishlistOpen(true)} className="relative p-2 hover:text-brand transition-colors">
            <Heart size={24} />
            {wishlist.length > 0 && <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlist.length}</span>}
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:text-brand transition-colors">
            <ShoppingCart size={24} />
            {cart.length > 0 && <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cart.length}</span>}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-6 md:hidden shadow-xl"
          >
            <a href="#sneakers" onClick={() => setMobileMenuOpen(false)} className="font-display text-2xl uppercase text-dark">Sneakers</a>
            <a href="#ropa" onClick={() => setMobileMenuOpen(false)} className="font-display text-2xl uppercase text-dark">Ropa</a>
            <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="font-display text-2xl uppercase text-dark">Ubicación</a>
            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="p-2 bg-gray-100 rounded-full text-dark"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="p-2 bg-gray-100 rounded-full text-dark"><Facebook size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Sidebars() {
  const { cart, wishlist, isCartOpen, setIsCartOpen, isWishlistOpen, setIsWishlistOpen, removeFromCart, removeFromWishlist, addToCart } = useContext(AppContext);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsText = cart.map((item: any) => `- ${item.name} (${item.price})`).join('%0A');
    const total = cart.reduce((acc: number, item: any) => acc + parseInt(item.price.replace(/[^0-9]/g, '')), 0);
    const formattedTotal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total);
    const msg = `¡Qué más! Vengo de la página web y quiero llevarme este heat:%0A%0A${itemsText}%0A%0ATotal aprox: ${formattedTotal}%0A%0A¿Tienen disponibilidad?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand text-white">
                <h2 className="font-display text-2xl tracking-wider flex items-center gap-2"><ShoppingCart /> TU CARRITO</h2>
                <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform"><X size={24} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 mt-10">
                    <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Tu carrito está vacío.</p>
                    <p className="text-sm mt-2">¡Agrega algo de heat!</p>
                  </div>
                ) : (
                  cart.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md bg-gray-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-dark">{item.name}</h4>
                        <p className="text-brand font-bold">{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(idx)} className="p-2 text-gray-400 hover:text-brand transition-colors"><Trash2 size={20} /></button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button onClick={checkoutWhatsApp} className="w-full py-4 bg-brand text-white font-display text-xl uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={24} /> Pedir por WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Wishlist Sidebar */}
      <AnimatePresence>
        {isWishlistOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsWishlistOpen(false)} className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-dark text-white">
                <h2 className="font-display text-2xl tracking-wider flex items-center gap-2"><Heart /> TUS FAVORITOS</h2>
                <button onClick={() => setIsWishlistOpen(false)} className="hover:rotate-90 transition-transform"><X size={24} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {wishlist.length === 0 ? (
                  <div className="text-center text-gray-500 mt-10">
                    <Heart size={48} className="mx-auto mb-4 opacity-20" />
                    <p>No tienes favoritos aún.</p>
                  </div>
                ) : (
                  wishlist.map((item: any) => (
                    <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md bg-gray-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-dark">{item.name}</h4>
                        <p className="text-brand font-bold">{item.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => { addToCart(item); removeFromWishlist(item.id); setIsWishlistOpen(false); setIsCartOpen(true); }} className="p-2 bg-brand text-white rounded-md hover:bg-black transition-colors"><ShoppingCart size={18} /></button>
                        <button onClick={() => removeFromWishlist(item.id)} className="p-2 text-gray-400 hover:text-brand transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=2000" 
          alt="Streetwear background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-light"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter mb-6 text-white">
            PISA FUERTE.<br/>
            <span className="text-brand">ROMPE LA CALLE.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
            El flow no se compra, pero los pares sí. Encuentra los drops más exclusivos y eleva tu outfit al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#sneakers" className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-display text-xl uppercase tracking-wider hover:bg-white hover:text-brand transition-colors">
              Fuego en stock
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-display text-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <MessageCircle size={20} />
              Hablar con un asesor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBanner() {
  return (
    <div className="bg-brand text-white py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 font-display text-xl uppercase tracking-wider">
          <Truck size={24} /> Envíos a toda Colombia
        </div>
        <div className="flex items-center gap-3 font-display text-xl uppercase tracking-wider">
          <Banknote size={24} /> Pago contra entrega
        </div>
        <div className="flex items-center gap-3 font-display text-xl uppercase tracking-wider">
          <ShieldCheck size={24} /> Compra 100% segura
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, isClothing = false }: { product: any, isClothing?: boolean }) {
  const { addToCart, addToWishlist, wishlist } = useContext(AppContext);
  const isWishlisted = wishlist.some((item: any) => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-gray-100 p-4 hover:shadow-xl transition-all duration-300"
    >
      <div className={`relative overflow-hidden mb-4 bg-gray-100 ${isClothing ? 'aspect-[3/4]' : 'aspect-square'}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 z-10">
          <button onClick={() => addToWishlist(product)} className={`p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform ${isWishlisted ? 'text-brand' : 'text-gray-400'}`}>
            <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <button onClick={() => addToCart(product)} className="px-6 py-3 bg-brand text-white font-display uppercase tracking-wider hover:bg-black transition-colors translate-y-4 group-hover:translate-y-0 duration-300">
            Agregar al Carrito
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-display text-xl tracking-wide mb-1 text-dark">{product.name}</h3>
          <p className="text-brand font-bold">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Section({ id, title, subtitle, items, isClothing = false }: { id: string, title: string, subtitle: string, items: any[], isClothing?: boolean }) {
  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-4 text-dark">{title}</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">{subtitle}</p>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest font-bold border-b border-brand text-brand pb-1 hover:text-dark hover:border-dark transition-colors">
          Ver catálogo completo
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} isClothing={isClothing} />
        ))}
      </div>
    </section>
  );
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: '¡Qué más! 👋 ¿Buscando el heat de la temporada o armando el outfit?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `
        Eres un experto en streetwear y sneakers para "Dreams Sport", una tienda en Soacha, Colombia.
        Tu objetivo es ayudar a los clientes a encontrar el "heat" (sneakers en tendencia como Nike, Jordan, Adidas, New Balance) y armar el mejor "drip" (ropa urbana).
        Usa un tono muy urbano, juvenil, directo y con jerga de sneakers (drops, heat, drip, pares, outfit, cop).
        Si el cliente quiere comprar, agregar al carrito o necesita info de tallas, invítalo a escribir al WhatsApp: ${WHATSAPP_NUMBER}.
        Mantén tus respuestas cortas y con mucha energía.
      `;

      // Format history for Gemini
      const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMsg }] });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents as any,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      if (response.text) {
        setMessages(prev => [...prev, { role: 'assistant', text: response.text! }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Ups, tuve un problema. Escríbenos mejor al WhatsApp para ayudarte rápido.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 bg-dark text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
        <span className="absolute -top-2 -right-2 bg-brand text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">1</span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] max-h-[calc(100vh-150px)]"
          >
            {/* Header */}
            <div className="bg-dark p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-display text-xl">DS</div>
                <div>
                  <h4 className="font-bold text-sm">Dreams Sport</h4>
                  <p className="text-xs text-brand">En línea</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-dark text-white self-end rounded-tr-sm' : 'bg-white border border-gray-200 text-dark self-start rounded-tl-sm'}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-white border border-gray-200 text-dark self-start rounded-2xl rounded-tl-sm p-3 text-sm flex gap-1">
                  <span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-gray-100 border border-transparent rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand focus:bg-white text-dark transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-brand text-white w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer id="ubicacion" className="bg-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="font-display text-5xl mb-6">CAE A LA<br/><span className="text-brand">TIENDA</span></h2>
          <p className="text-gray-400 mb-8 max-w-md text-lg">
            Pruébate el heat en persona. Te armamos el outfit completo en Soacha.
          </p>
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-brand shrink-0 mt-1" size={28} />
            <div>
              <h4 className="font-bold text-xl mb-1">Soacha, Colombia</h4>
              <p className="text-gray-400">Dreams Sport Tiendas de Ropa</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://www.instagram.com/tiendasdreamssport_/" target="_blank" rel="noreferrer" className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/Dreamstiendaderopa/" target="_blank" rel="noreferrer" className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Facebook size={24} />
            </a>
          </div>
        </div>
        <div className="h-[400px] md:h-full min-h-[400px] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
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
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Dreams Sport. Todos los derechos reservados.</p>
        <p>Diseñado para romperla.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const addToWishlist = (product: any) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <AppContext.Provider value={{ cart, wishlist, isCartOpen, setIsCartOpen, isWishlistOpen, setIsWishlistOpen, addToCart, removeFromCart, addToWishlist, removeFromWishlist }}>
      <div className="min-h-screen selection:bg-brand selection:text-white bg-light text-dark">
        <Navbar />
        <Sidebars />
        <Hero />
        <TrustBanner />
        <Section 
          id="sneakers" 
          title="HEAT EN TUS PIES" 
          subtitle="Los drops que todos quieren" 
          items={SNEAKERS} 
        />
        <Section 
          id="ropa" 
          title="DRIP URBANO" 
          subtitle="Viste caro, paga justo" 
          items={CLOTHING} 
          isClothing={true}
        />
        <Footer />
        
        {/* Fixed WhatsApp Button */}
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={32} />
        </a>

        <ChatBot />
      </div>
    </AppContext.Provider>
  );
}

