import React, { useState } from 'react';
import { CakeItem, CartItem } from '../types/cake';
import { Eye, Plus, Check, Star } from 'lucide-react';

interface CakeGridProps {
  cakes: CakeItem[];
  onSelectCake: (cake: CakeItem) => void;
  onAddToCart: (item: CartItem) => void;
}

export const CakeGrid: React.FC<CakeGridProps> = ({
  cakes,
  onSelectCake,
  onAddToCart
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (cake: CakeItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const item: CartItem = {
      cartId: `std-${cake.id}-${Date.now()}`,
      cakeId: cake.id,
      title: cake.name,
      subtitle: cake.frenchSubtitle,
      image: cake.image,
      price: cake.price,
      quantity: 1,
      selectedSize: cake.servings
    };
    onAddToCart(item);
    setJustAddedId(cake.id);
    setTimeout(() => setJustAddedId(null), 2000);
  };

  return (
    <section id="collection" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold mb-2">
              <span>Haute Pâtisserie Collection</span>
              <span aria-hidden="true">·</span>
              <span>Daily Fresh Bake</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C]">
              Signature Confections
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7A6D65] max-w-md">
            Handcrafted with single-origin Valrhona chocolate, Sicilian Bronte pistachios, and slow cold-infused cream.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              onClick={() => onSelectCake(cake)}
              className="group bg-white rounded-2xl border border-[#EAE3DA] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Product Image Slot */}
              <div className="relative aspect-[4/3] bg-[#FAF5EE] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Graceful fallback container
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#F2ECE4]');
                      const fallbackText = document.createElement('div');
                      fallbackText.className = 'text-center p-4 text-[#8B2E3E] font-serif-display text-sm';
                      fallbackText.innerText = cake.name;
                      target.parentElement.appendChild(fallbackText);
                    }
                  }}
                />

                {/* Subtle Bestseller / Lead time quiet badge */}
                {cake.bestseller && (
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#8B2E3E] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#EAE3DA] shadow-2xs">
                    Atelier Bestseller
                  </div>
                )}

                {/* Quick action buttons floating on hover */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCake(cake);
                    }}
                    title="Quick Details"
                    className="w-9 h-9 rounded-full bg-white/95 text-[#241E1C] hover:bg-[#8B2E3E] hover:text-white transition-colors flex items-center justify-center shadow-md border border-[#EAE3DA]"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => handleQuickAdd(cake, e)}
                    title="Quick Add to Bag"
                    className="w-9 h-9 rounded-full bg-[#8B2E3E] text-white hover:bg-[#6D212E] transition-colors flex items-center justify-center shadow-md"
                  >
                    {justAddedId === cake.id ? (
                      <Check className="w-4 h-4 text-emerald-300" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Product Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Rating - Zero Pill */}
                  <div className="flex items-center justify-between text-[11px] text-[#7A6D65] mb-1">
                    <span className="italic font-serif-display">{cake.frenchSubtitle}</span>
                    <span className="flex items-center gap-1 text-[#C67C4E] font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="tabular-nums">{cake.rating}</span>
                      <span className="text-[#A3968C]">({cake.reviewsCount})</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-lg font-semibold text-[#241E1C] group-hover:text-[#8B2E3E] transition-colors">
                    {cake.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#6B5E56] mt-1.5 line-clamp-2 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Unboxed Metadata Specs */}
                  <div className="mt-3 pt-3 border-t border-[#F0EAE1] flex items-center gap-2 text-[11px] text-[#85776F]">
                    <span>{cake.servings}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cake.diameter}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cake.leadTime}</span>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="mt-4 pt-3 flex items-center justify-between gap-2 border-t border-[#F0EAE1]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7D75]">Price</span>
                    <div className="font-serif-display text-lg font-bold text-[#241E1C] tabular-nums">
                      ${cake.price}
                      <span className="text-[11px] font-normal text-[#8A7D75] ml-1">USD</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCake(cake);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-lg bg-white text-[#241E1C] hover:bg-[#F2ECE5] transition-all border border-[#DED4C7]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#7A6D65]" />
                      <span>View Details</span>
                    </button>

                    <button
                      onClick={(e) => handleQuickAdd(cake, e)}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg bg-[#8B2E3E] text-white hover:bg-[#722330] transition-all shadow-2xs"
                    >
                      {justAddedId === cake.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
