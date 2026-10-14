import React from 'react';
import { Award, Clock, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-16 bg-[#F6F1EA] border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Confectionery Discipline</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C] leading-tight">
              The 48-Hour Cold Fermentation & Valrhona Chocolate Standard.
            </h2>

            <p className="text-sm text-[#61544D] leading-relaxed">
              Atelier Velouté was founded on an unapologetic refusal to use synthetic stabilizers, hydrogenated fats, or mass-produced fondant pastes. Our sponges undergo slow, cold temperature maturation to cultivate deep, tender crumb moisture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#E5DDD2]">
                <Clock className="w-5 h-5 text-[#8B2E3E] mb-2" />
                <h3 className="font-serif-display text-sm font-semibold text-[#241E1C]">
                  48-Hour Infusion
                </h3>
                <p className="text-xs text-[#7A6D65] mt-1">
                  Pods of Tahitian vanilla and Earl Grey tea are cold-steeped in European cream to preserve volatile aromatics.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5DDD2]">
                <Award className="w-5 h-5 text-[#8B2E3E] mb-2" />
                <h3 className="font-serif-display text-sm font-semibold text-[#241E1C]">
                  Zero Synthetic Additives
                </h3>
                <p className="text-xs text-[#7A6D65] mt-1">
                  Colored strictly with botanical chlorophyll, dried beet, crushed saffron, and organic butterfly pea flower.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Story */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E0D7CB] shadow-md bg-white">
              <img
                src="/src/assets/images/product_valrhona_chocolate_cake_1791959349383.jpg"
                alt="Valrhona 70% Dark Truffle Cake in Atelier"
                className="w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-semibold text-[#F2C0B0] uppercase tracking-wider">
                  Master Pâtissier Studio
                </div>
                <div className="font-serif-display text-lg font-bold">
                  Precision Temperature Enrobing
                </div>
                <p className="text-xs text-white/80 mt-0.5">
                  Hand-brushed with 24K edible gold leaves and hand-piped single-origin Valrhona Guanaja ganache.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
