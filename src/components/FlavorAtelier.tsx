import React, { useState } from 'react';
import { TASTING_NOTES } from '../data/cakes';
import { Sparkles, Compass } from 'lucide-react';

export const FlavorAtelier: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState(0);

  return (
    <section id="flavors" className="py-16 bg-[#FAF5EE] border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Terroir & Ingredients</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C]">
            The Flavor Atelier
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6D65] mt-2 leading-relaxed">
            We partner exclusively with sustainable estates and heritage purveyors across Europe and the Pacific.
          </p>
        </div>

        {/* Interactive Terroir Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Selector List */}
          <div className="md:col-span-5 space-y-3">
            {TASTING_NOTES.map((note, index) => (
              <button
                key={index}
                onClick={() => setSelectedNote(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedNote === index
                    ? 'border-[#8B2E3E] bg-white shadow-sm ring-1 ring-[#8B2E3E]'
                    : 'border-[#E5DDD2] bg-[#F5EFE8] hover:bg-white text-[#5C5049]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-serif-display text-base font-semibold text-[#241E1C]">
                    {note.name}
                  </div>
                  {selectedNote === index && (
                    <Sparkles className="w-3.5 h-3.5 text-[#8B2E3E]" />
                  )}
                </div>
                <div className="text-xs text-[#8A7D75] mt-1">{note.origin}</div>
              </button>
            ))}
          </div>

          {/* Deep Exploration Card */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold text-[#8B2E3E] uppercase tracking-wider mb-1">
                Terroir Dossier
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#241E1C]">
                {TASTING_NOTES[selectedNote].name}
              </h3>
              <div className="text-xs text-[#7A6D65] mt-0.5">
                Heritage Provenance: {TASTING_NOTES[selectedNote].origin}
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[#241E1C] uppercase tracking-wider mb-1">
                    Aromatic Cupping Notes
                  </div>
                  <p className="text-sm text-[#61544D] leading-relaxed">
                    {TASTING_NOTES[selectedNote].aroma}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE5DD]">
                  <div className="text-xs font-semibold text-[#241E1C] uppercase tracking-wider mb-1">
                    Harmonic Flavor Pairings
                  </div>
                  <p className="text-sm text-[#61544D] leading-relaxed">
                    {TASTING_NOTES[selectedNote].pairing}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#ECE5DD] flex items-center justify-between text-xs text-[#7A6D65]">
              <span>Cold-infused for 48 hours to preserve volatile essential oils</span>
              <span className="font-medium text-[#8B2E3E]">100% Traceable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
