import React from 'react';
import { ShoppingBag, Sparkles, Search, MapPin } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenBespoke: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  onOpenBespoke,
  selectedCity,
  onSelectCity
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3DA]">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#241E1C] text-[#F5EFEA] text-[11px] py-1.5 px-4 text-center tracking-wider uppercase font-medium">
        <span>Complimentary temperature-controlled white glove courier on all celebratory tiered cakes</span>
        <span className="mx-2 opacity-40">·</span>
        <span className="text-[#C67C4E]">Delivery slots open for this weekend</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button 
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-serif-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#241E1C] group-hover:text-[#8B2E3E] transition-colors whitespace-nowrap">
            Atelier Velouté
          </span>
          <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[#7A6D65] uppercase">
            Haute Pâtisserie & Bespoke Studio
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#594E47]">
          <button 
            onClick={() => onNavigate('collection')}
            className="hover:text-[#241E1C] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8B2E3E]"
          >
            Collection
          </button>
          <button 
            onClick={() => onNavigate('bespoke-studio')}
            className="flex items-center gap-1.5 text-[#8B2E3E] hover:text-[#6D212E] transition-colors whitespace-nowrap shrink-0 py-1 font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Studio
          </button>
          <button 
            onClick={() => onNavigate('flavors')}
            className="hover:text-[#241E1C] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8B2E3E]"
          >
            Flavor Atelier
          </button>
          <button 
            onClick={() => onNavigate('reviews')}
            className="hover:text-[#241E1C] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8B2E3E]"
          >
            Client Journal
          </button>
          <button 
            onClick={() => onNavigate('craft')}
            className="hover:text-[#241E1C] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#8B2E3E]"
          >
            The Atelier
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Quick city delivery indicator */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-[#7A6D65] bg-[#F3EDE6] px-2.5 py-1.5 rounded-md border border-[#E5DDD2]">
            <MapPin className="w-3.5 h-3.5 text-[#8B2E3E]" />
            <select
              value={selectedCity}
              onChange={(e) => onSelectCity(e.target.value)}
              aria-label="Delivery city"
              className="bg-transparent text-[#241E1C] font-medium focus:outline-none cursor-pointer text-xs"
            >
              <option value="Paris & Île-de-France">Paris & Île-de-France</option>
              <option value="London & Greater London">London & Greater London</option>
              <option value="New York City Metro">New York City Metro</option>
              <option value="San Francisco Bay Area">San Francisco Bay Area</option>
            </select>
          </div>

          <button
            onClick={onOpenBespoke}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5EFEA] bg-[#8B2E3E] hover:bg-[#722330] transition-colors px-3.5 py-2 rounded-lg whitespace-nowrap shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Build Custom Cake
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-[#E2D9CF] bg-white text-[#241E1C] hover:border-[#8B2E3E] transition-colors focus-visible:outline-none"
          >
            <ShoppingBag className="w-4 h-4 text-[#241E1C]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8B2E3E] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
