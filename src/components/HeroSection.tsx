import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { CakeCategory } from '../types/cake';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenBespoke: () => void;
  selectedCategory: CakeCategory;
  onSelectCategory: (category: CakeCategory) => void;
  onQuickViewHeroCake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenBespoke,
  selectedCategory,
  onSelectCategory,
  onQuickViewHeroCake
}) => {
  return (
    <section className="relative pt-6 pb-14 overflow-hidden border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet text kicker - zero pill */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold">
              <span>Haute Confectionery</span>
              <span aria-hidden="true">·</span>
              <span>Bespoke Architectural Cakes</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#241E1C] leading-[1.12] tracking-tight text-balance">
              Sculpted confections for unforgettable celebrations.
            </h1>

            <p className="text-base sm:text-lg text-[#61544D] max-w-xl leading-relaxed">
              Every creation is composed like haute couture — balancing cold-pressed botanical infusions, French Grand Cru cocoa, and bespoke sculpted textures crafted by Master Pâtissiers.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBespoke}
                className="inline-flex items-center gap-2 bg-[#8B2E3E] hover:bg-[#722330] text-[#FAF8F5] text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-[#F2C0B0]" />
                Design Bespoke Cake
              </button>
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5EFEA] text-[#241E1C] border border-[#DDD5CB] text-sm font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4 text-[#7A6D65]" />
              </button>
            </div>

            {/* Unboxed Metadata Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#7A6D65] border-t border-[#ECE5DD]">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#8B2E3E]" />
                Valrhona 70% & Bronte Pistachio Certified
              </span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8B2E3E]" />
                Fresh 48-Hour Cold Infusion
              </span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B2E3E]" />
                Temperature Shielded Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2D9CF] shadow-lg bg-[#FAF5EE] group">
              <img
                src="/src/assets/images/hero_artisanal_tiered_cake_1791959346272.jpg"
                alt="The Meadow Reverie Tiered Wedding Cake"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241E1C]/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Content Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE3DA] shadow-md flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-[#8B2E3E] uppercase tracking-wider">
                    Showcase Creation
                  </div>
                  <div className="font-serif-display text-base font-semibold text-[#241E1C]">
                    The Meadow Reverie Tier
                  </div>
                  <div className="text-xs text-[#7A6D65]">
                    Four Tiers · Pressed Wild Botanicals · Serves 45–60
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-[#7A6D65]">From</div>
                  <div className="font-serif-display text-lg font-bold text-[#241E1C] tabular-nums">
                    $360
                  </div>
                  <button
                    onClick={onQuickViewHeroCake}
                    className="mt-1 text-[11px] font-semibold text-[#8B2E3E] hover:underline cursor-pointer"
                  >
                    Inspect Details →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Category Filter Bar */}
        <div className="mt-12 pt-8 border-t border-[#EAE3DA]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#241E1C]">
                Explore By Celebration
              </h2>
              <p className="text-xs text-[#7A6D65] mt-0.5">
                Curated cakes for milestone weddings, intimate dinner parties & luxury gifting
              </p>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 p-1 bg-[#F1EAE2] rounded-xl border border-[#E2D8CC] shrink-0">
              <button
                onClick={() => onSelectCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-white text-[#241E1C] shadow-xs font-semibold'
                    : 'text-[#6B5E56] hover:text-[#241E1C]'
                }`}
              >
                All Confections (5)
              </button>
              <button
                onClick={() => onSelectCategory('wedding-tiered')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'wedding-tiered'
                    ? 'bg-white text-[#241E1C] shadow-xs font-semibold'
                    : 'text-[#6B5E56] hover:text-[#241E1C]'
                }`}
              >
                Tiered & Wedding
              </button>
              <button
                onClick={() => onSelectCategory('signature-gateaux')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'signature-gateaux'
                    ? 'bg-white text-[#241E1C] shadow-xs font-semibold'
                    : 'text-[#6B5E56] hover:text-[#241E1C]'
                }`}
              >
                Signature Gâteaux
              </button>
              <button
                onClick={() => onSelectCategory('vintage-piped')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'vintage-piped'
                    ? 'bg-white text-[#241E1C] shadow-xs font-semibold'
                    : 'text-[#6B5E56] hover:text-[#241E1C]'
                }`}
              >
                Vintage Lambeth
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
