import React, { useState } from 'react';
import { CakeItem, CartItem } from '../types/cake';
import { X, Star, Check, Sparkles, Clock, Users, ShieldCheck, Heart } from 'lucide-react';

interface ProductDetailModalProps {
  cake: CakeItem | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  cake,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [inscription, setInscription] = useState('');
  const [selectedSize, setSelectedSize] = useState('Standard Size');
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'care'>('overview');
  const [added, setAdded] = useState(false);

  if (!cake) return null;

  const handleAdd = () => {
    const item: CartItem = {
      cartId: `modal-${cake.id}-${Date.now()}`,
      cakeId: cake.id,
      title: cake.name,
      subtitle: cake.frenchSubtitle,
      image: cake.image,
      price: cake.price,
      quantity,
      customInscription: inscription.trim() ? inscription : undefined,
      selectedSize: cake.servings
    };
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E2D9CF] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#241E1C] flex items-center justify-center shadow-xs transition-colors border border-[#EAE3DA]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Visual Asset Gallery */}
          <div className="md:col-span-6 bg-[#FAF5EE] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE3DA]">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm border border-[#E8DFC9]">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#8B2E3E] tracking-wider uppercase border border-[#EAE3DA]">
                {cake.category.replace('-', ' ')}
              </div>
            </div>

            {/* Flavor Notes Tag Cloud (Unboxed) */}
            <div className="mt-6 pt-4 border-t border-[#ECE5DD]">
              <div className="text-[11px] font-semibold text-[#7A6D65] uppercase tracking-wider mb-2">
                Palate & Flavor Notes
              </div>
              <div className="flex flex-wrap gap-y-1.5 gap-x-3 text-xs text-[#594E47]">
                {cake.flavorNotes.map((note, index) => (
                  <span key={index} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B2E3E]" />
                    <span>{note}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Storage / Serving note */}
            <div className="mt-4 p-3 bg-[#F4EDE5] rounded-xl text-[11px] text-[#6B5E56] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8B2E3E] shrink-0" />
              <span>Chilled courier delivery. Bring to room temperature 30 mins before slicing.</span>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-xs text-[#7A6D65] mb-1">
                <span className="italic font-serif-display text-sm">{cake.frenchSubtitle}</span>
                <span className="flex items-center gap-1 text-[#C67C4E] font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="tabular-nums font-semibold">{cake.rating}</span>
                  <span className="text-[#A3968C]">({cake.reviewsCount} reviews)</span>
                </span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#241E1C]">
                {cake.name}
              </h2>

              {/* Price & Lead time */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-serif-display text-2xl font-bold text-[#8B2E3E] tabular-nums">
                  ${cake.price}
                </span>
                <span className="text-xs text-[#7A6D65]">USD · Tax included</span>
              </div>

              {/* Specs inline */}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#7A6D65] py-2 border-y border-[#ECE5DD]">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#8B2E3E]" />
                  <span>{cake.servings}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{cake.diameter}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8B2E3E]" />
                  <span>{cake.leadTime}</span>
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex gap-4 border-b border-[#ECE5DD] mt-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'overview'
                      ? 'text-[#8B2E3E] border-b-2 border-[#8B2E3E]'
                      : 'text-[#7A6D65] hover:text-[#241E1C]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'ingredients'
                      ? 'text-[#8B2E3E] border-b-2 border-[#8B2E3E]'
                      : 'text-[#7A6D65] hover:text-[#241E1C]'
                  }`}
                >
                  Layers & Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'care'
                      ? 'text-[#8B2E3E] border-b-2 border-[#8B2E3E]'
                      : 'text-[#7A6D65] hover:text-[#241E1C]'
                  }`}
                >
                  Dietary & Care
                </button>
              </div>

              {/* Tab Content */}
              <div className="py-3 text-xs text-[#5C5049] leading-relaxed">
                {activeTab === 'overview' && (
                  <p>{cake.longDescription}</p>
                )}
                {activeTab === 'ingredients' && (
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold text-[#241E1C]">Sponge Base:</span> {cake.sponge}
                    </div>
                    <div>
                      <span className="font-semibold text-[#241E1C]">Filling & Crème:</span> {cake.filling}
                    </div>
                    <div>
                      <span className="font-semibold text-[#241E1C]">Exterior Finish:</span> {cake.exterior}
                    </div>
                  </div>
                )}
                {activeTab === 'care' && (
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold text-[#241E1C]">Dietary Attributes:</span> {cake.dietary.join(', ')}
                    </div>
                    <div>
                      <span className="font-semibold text-[#241E1C]">Shelf Life:</span> Best enjoyed within 48 hours of delivery. Keep refrigerated below 4°C.
                    </div>
                  </div>
                )}
              </div>

              {/* Custom Celebration Plaque Input */}
              <div className="mt-3 pt-3 border-t border-[#ECE5DD]">
                <label className="block text-xs font-semibold text-[#241E1C] mb-1">
                  Complimentary Sugar Plaque Inscription (Optional)
                </label>
                <input
                  type="text"
                  maxLength={35}
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  placeholder="e.g. Joyeux Anniversaire Camille!"
                  className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                />
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="pt-4 border-t border-[#ECE5DD] flex items-center gap-3">
              <div className="flex items-center border border-[#D8CEC3] rounded-lg bg-[#FAF8F5] px-2 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-sm font-semibold text-[#7A6D65] hover:text-[#241E1C]"
                >
                  -
                </button>
                <span className="px-2 text-xs font-bold tabular-nums text-[#241E1C]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-sm font-semibold text-[#7A6D65] hover:text-[#241E1C]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#8B2E3E] hover:bg-[#722330] text-white text-xs font-semibold py-3 px-4 rounded-lg shadow-sm transition-all"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#F2C0B0]" />
                    <span>Add to Bag · ${(cake.price * quantity)}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
