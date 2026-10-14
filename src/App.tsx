import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { BespokeStudio } from './components/BespokeStudio';
import { CakeGrid } from './components/CakeGrid';
import { FlavorAtelier } from './components/FlavorAtelier';
import { ClientJournal } from './components/ClientJournal';
import { CraftSection } from './components/CraftSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CAKE_CATALOG } from './data/cakes';
import { CakeCategory, CakeItem, CartItem } from './types/cake';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>('all');
  const [selectedCity, setSelectedCity] = useState('Paris & Île-de-France');
  const [selectedCake, setSelectedCake] = useState<CakeItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      cartId: 'preset-pistache-1',
      cakeId: 'opera-pistache-framboise',
      title: 'Pistache & Framboise Sauvage',
      subtitle: 'Gâteau Velouté à la Pistache de Sicile',
      image: '/src/assets/images/product_pistachio_raspberry_cake_1791959347009.jpg',
      price: 88,
      quantity: 1,
      selectedSize: '8 - 10 guests',
      customInscription: 'Joyeux Anniversaire'
    }
  ]);

  // Filtered cakes based on selected category
  const filteredCakes = selectedCategory === 'all'
    ? CAKE_CATALOG
    : CAKE_CATALOG.filter(c => c.category === selectedCategory);

  // Cart operations
  const handleAddToCart = (newItem: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => 
        !item.isBespoke && item.cakeId === newItem.cakeId && item.customInscription === newItem.customInscription
      );
      if (existing) {
        return prev.map(item => 
          item.cartId === existing.cartId 
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleOrderComplete = () => {
    setCartItems([]);
  };

  // Smooth scroll
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBespoke = () => {
    handleNavigate('bespoke-studio');
  };

  const handleViewCategoryDetails = (category: CakeCategory) => {
    setSelectedCategory(category);
    // Find representative cake for that category and open modal
    const matchedCake = CAKE_CATALOG.find(c => c.category === category) || CAKE_CATALOG[0];
    setSelectedCake(matchedCake);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#241E1C] flex flex-col font-sans-body selection:bg-[#F2C0B0] selection:text-[#8B2E3E]">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        onOpenBespoke={handleOpenBespoke}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />

      <main className="flex-1">
        {/* Split Editorial Hero Section */}
        <div id="hero">
          <HeroSection
            onExploreClick={() => handleNavigate('collection')}
            onOpenBespoke={handleOpenBespoke}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onQuickViewHeroCake={() => {
              const weddingCake = CAKE_CATALOG.find(c => c.id === 'botanical-meadow-wedding-tier');
              if (weddingCake) setSelectedCake(weddingCake);
            }}
          />
        </div>

        {/* Responsive Cake Categories Grid */}
        <CategoryGrid
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            handleNavigate('collection');
          }}
          onViewCategoryDetails={handleViewCategoryDetails}
        />

        {/* Interactive Custom Cake Studio */}
        <BespokeStudio
          onAddBespokeToCart={(item) => {
            handleAddToCart(item);
            setIsCartOpen(true);
          }}
        />

        {/* Product Collection Grid */}
        <CakeGrid
          cakes={filteredCakes}
          onSelectCake={(cake) => setSelectedCake(cake)}
          onAddToCart={handleAddToCart}
        />

        {/* Terroir & Flavor Atelier */}
        <FlavorAtelier />

        {/* The Atelier Standards & Craft Story */}
        <CraftSection />

        {/* Client Journal & Social Proof */}
        <ClientJournal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductDetailModal
        cake={selectedCake}
        onClose={() => setSelectedCake(null)}
        onAddToCart={(item) => {
          handleAddToCart(item);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={handleOrderComplete}
      />

    </div>
  );
}
