import type { Product, Review, Category } from '../types';

const SIZES = Array.from({ length: 11 }, (_, i) => (32 + i).toString());
const CLOTHING_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Todo', icon: '🔥' },
  { id: 'mundial', name: 'Mundial 2026', icon: '🏆' },
  { id: 'sneakers', name: 'Sneakers', icon: '👟' },
  { id: 'futbol', name: 'Fútbol', icon: '⚽' },
  { id: 'baloncesto', name: 'Baloncesto', icon: '🏀' },
];

export const FEATURED_SNEAKER: Product = {
  id: 'featured',
  name: 'Off-White x Air Jordan 1 "Chicago"',
  price: '$280.000',
  category: 'sneakers',
  image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=1200',
  description: 'Un clásico reimaginado. Perfecto para romperla en la calle.',
  sizes: SIZES,
};

export const SNEAKERS: Product[] = [
  { id: 's1', name: 'Nike Dunk Low "Panda"', price: '$180.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1658409214757-b0b2e3e67041?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Más vendido' },
  { id: 's2', name: 'New Balance 550 White/Green', price: '$195.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
  { id: 's3', name: 'Air Jordan 4 "Black Canvas"', price: '$200.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1636718282214-0b4162a154f0?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Edición limitada' },
  { id: 's4', name: 'Adidas Samba OG Black', price: '$170.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
  { id: 's5', name: 'Nike Air Max 1', price: '$190.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
  { id: 's6', name: 'Nike Air Force 1 Triple White', price: '$150.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Económico' },
  { id: 's7', name: 'Yeezy 350 V2 Zebra', price: '$350.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Premium' },
  { id: 's8', name: 'Converse Chuck 70 High', price: '$130.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
  { id: 's9', name: 'Nike Air Max 97 "Silver Bullet"', price: '$220.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Icono' },
  { id: 's10', name: 'Adidas Forum Low White', price: '$160.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed8434?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
  { id: 's11', name: 'Puma Suede Classic Black', price: '$120.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: 'Económico' },
  { id: 's12', name: 'Vans Old Skool Black/White', price: '$110.000', category: 'sneakers', image: 'https://images.unsplash.com/photo-1525966222134-fa8b7b5c0a9b?auto=format&fit=crop&q=80&w=800', sizes: SIZES, badge: null },
];

export const FUTBOL_HOODIES: Product[] = [
  { id: 'f1', name: 'Hoodie Colombia 🇨🇴 Local 2025', price: '$140.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Vendiendo rápido' },
  { id: 'f2', name: 'Hoodie Argentina 🇦🇷 Campeón del Mundo', price: '$150.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'f3', name: 'Hoodie Real Madrid 2025', price: '$145.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'UCL' },
  { id: 'f4', name: 'Hoodie FC Barcelona 2025', price: '$145.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'f5', name: 'Hoodie Manchester City 2025', price: '$140.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Premier' },
  { id: 'f6', name: 'Hoodie Juventus 2025', price: '$135.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'f7', name: 'Hoodie Liverpool FC 2025', price: '$140.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1597931759740-ee38b3af7b8d?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'f8', name: 'Hoodie AC Milan 2025', price: '$135.000', category: 'futbol', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Serie A' },
];

export const BASKET_HOODIES: Product[] = [
  { id: 'b1', name: 'Hoodie Los Angeles Lakers', price: '$150.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Más vendido' },
  { id: 'b2', name: 'Hoodie Chicago Bulls', price: '$145.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Legendario' },
  { id: 'b3', name: 'Hoodie Boston Celtics', price: '$140.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'b4', name: 'Hoodie Golden State Warriors', price: '$145.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1597931759740-ee38b3af7b8d?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Champions' },
  { id: 'b5', name: 'Hoodie NBA All-Star 2025', price: '$155.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Edición especial' },
  { id: 'b6', name: 'Hoodie Miami Heat', price: '$140.000', category: 'baloncesto', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
];

export const MUNDIAL_HOODIES: Product[] = [
  { id: 'm1', name: 'Hoodie USA 2026 – Anfitrión 🇺🇸', price: '$155.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Anfitrión' },
  { id: 'm2', name: 'Hoodie México 2026 – Anfitrión 🇲🇽', price: '$150.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Anfitrión' },
  { id: 'm3', name: 'Hoodie Canadá 2026 – Anfitrión 🇨🇦', price: '$150.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Anfitrión' },
  { id: 'm4', name: 'Hoodie Brasil 2026 🇧🇷', price: '$155.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Pentacampeón' },
  { id: 'm5', name: 'Hoodie Alemania 2026 🇩🇪', price: '$150.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'm6', name: 'Hoodie Francia 2026 🇫🇷', price: '$155.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Subcampeón' },
  { id: 'm7', name: 'Hoodie Portugal 2026 🇵🇹', price: '$150.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'm8', name: 'Hoodie Inglaterra 2026 🏴󠁧󠁢󠁥󠁮󠁧󠁿', price: '$150.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1597931759740-ee38b3af7b8d?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'm9', name: 'Hoodie Países Bajos 2026 🇳🇱', price: '$145.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: null },
  { id: 'm10', name: 'Camiseta Colombia 2026 🇨🇴 Edición Especial', price: '$175.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Nuevo diseño' },
  { id: 'm11', name: 'Hoodie Mundial 2026 – Logo Oficial', price: '$165.000', category: 'mundial', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', sizes: CLOTHING_SIZES, badge: 'Oficial' },
];

export const ALL_PRODUCTS: Product[] = [...SNEAKERS, ...FUTBOL_HOODIES, ...BASKET_HOODIES, ...MUNDIAL_HOODIES];

export const REVIEWS: Review[] = [
  { name: 'Mateo R.', text: 'El envío a Soacha fue súper rápido. 10/10.', rating: 5 },
  { name: 'Juan D.', text: 'Las Jordan están increíbles, la calidad es brutal.', rating: 5 },
  { name: 'Sebas G.', text: 'Excelente atención por WhatsApp, me guiaron con las tallas.', rating: 5 },
  { name: 'Camilo P.', text: 'Fuego puro, recomendados al cien.', rating: 5 },
  { name: 'Andrés M.', text: 'Llegaron impecables. Listo para el finde.', rating: 5 },
  { name: 'Laura H.', text: 'Compré por primera vez y todo perfecto. Volveré a comprar.', rating: 5 },
  { name: 'Carlos R.', text: 'Los tenis originales y el precio justo. Muy contento.', rating: 5 },
  { name: 'David F.', text: 'La hoodie de Colombia me llegó en 2 días. Excelente calidad.', rating: 5 },
  { name: 'Sofia M.', text: 'Compré la hoodie de los Lakers para mi novio y le encantó.', rating: 5 },
];
