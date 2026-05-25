import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import ApparelGrid from './components/ApparelGrid';
import Features from './components/Features';
import StepsToBuy from './components/StepsToBuy';
import CustomerService from './components/CustomerService';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Location from './components/Location';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen selection:bg-brand selection:text-white pb-20 md:pb-0">
        <Navbar />
        <CartSidebar />
        <ProductModal />

        <Hero />
        <FeaturedProduct />
        <ApparelGrid />
        <Features />
        <StepsToBuy />
        <CustomerService />
        <Testimonials />
        <FinalCTA />
        <Location />
        <FloatingWhatsApp />
      </div>
    </AppProvider>
  );
}
