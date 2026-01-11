import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { CustomDesigner } from './components/CustomDesigner';
import { ProductDiscovery } from './components/ProductDiscovery';
import { ProductDetail } from './components/ProductDetail';
import { AboutStory } from './components/AboutStory';
import { Contact } from './components/Contact';
import { UserDashboard } from './components/UserDashboard';
import { Blog } from './components/Blog';
import { Navigation } from './components/Navigation';
import { AIAssistant } from './components/AIAssistant';
import { ThemeProvider } from './components/ThemeContext';
import { CartProvider } from './components/CartContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          
          <main>
            {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
            {currentPage === 'designer' && <CustomDesigner />}
            {currentPage === 'shop' && (
              <ProductDiscovery 
                onNavigate={setCurrentPage}
                onSelectProduct={setSelectedProductId}
              />
            )}
            {currentPage === 'product' && (
              <ProductDetail 
                productId={selectedProductId}
                onNavigate={setCurrentPage}
              />
            )}
            {currentPage === 'about' && <AboutStory />}
            {currentPage === 'contact' && <Contact />}
            {currentPage === 'dashboard' && <UserDashboard />}
            {currentPage === 'blog' && <Blog />}
          </main>

          <AIAssistant />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
