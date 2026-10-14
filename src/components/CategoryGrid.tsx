import React from 'react';
import { CakeCategory, CakeItem } from '../types/cake';
import { Sparkles, ArrowRight, Eye, Layers } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: CakeCategory) => void;
  onViewCategoryDetails: (category: CakeCategory) => void;
}

interface CategoryCard {
  id: CakeCategory;
  title: string;
  frenchTitle: string;
  description: string;
  image: string;
  itemCount: number;
  startingPrice: number;
  highlightNote: string;
  servingsRange: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 'wedding-tiered',
    title: 'Tiered & Grand Celebrations',
    frenchTitle: 'Pièces Montées & Noces',
    description: 'Sculptural multi-tier architectural centerpieces enveloped in textured ivory buttercream, pressed edible wildflowers, and 24K gold leaves.',
    image: '/src/assets/images/hero_artisanal_tiered_cake_1791959346272.jpg',
    itemCount: 4,
    startingPrice: 320,
    highlightNote: 'Pressed English Meadow Botanicals',
    servingsRange: '40 - 65 guests'
  },
  {
    id: 'signature-gateaux',
    title: 'Signature Contemporary Gâteaux',
    frenchTitle: 'Gâteaux de Haute Pâtisserie',
    description: 'Silky velvet mousse creations featuring Bronte pistachios, cold-pressed wild berries, and Valrhona 70% dark cocoa with dacquoise bases.',
    image: '/src/assets/images/product_pistachio_raspberry_cake_1791959347009.jpg',
    itemCount: 6,
    startingPrice: 88,
    highlightNote: 'Velvet Cocoa Butter Airbrush Finish',
    servingsRange: '8 - 12 guests'
  },
  {
    id: 'vintage-piped',
    title: 'Vintage Victorian Lambeth',
    frenchTitle: 'Gâteaux d’Antan & Dentelles',
    description: 'Time-honored 19th-century royal French shell and rococo scallop swags, infused with organic bergamot tea and Provence lavender honey.',
    image: '/src/assets/images/product_earl_grey_lavender_cake_1791959350057.jpg',
    itemCount: 3,
    startingPrice: 115,
    highlightNote: 'Handcrafted Victorian Royal Piping',
    servingsRange: '12 - 16 guests'
  }
];

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  onViewCategoryDetails
}) => {
  return (
    <section className="py-16 bg-[#FAF5EE] border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Curated Collections</span>
              <span aria-hidden="true">·</span>
              <span>By Artisan Discipline</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C]">
              Cake Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7A6D65] max-w-md">
            Explore our curated confection disciplines, from multi-tier botanical wedding towers to delicate royal vintage piping.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl border border-[#E8DFC9] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] bg-[#F5EFEA] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top French Category Subtitle */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#8B2E3E] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#EAE3DA] shadow-2xs">
                    {category.frenchTitle}
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5 drop-shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#F2C0B0]" />
                      <span>{category.highlightNote}</span>
                    </span>
                    <span className="text-[11px] text-white/90 drop-shadow-xs">
                      {category.servingsRange}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-[#7A6D65] mb-1">
                    <span>Category Discipline</span>
                    <span className="font-medium text-[#8B2E3E]">{category.itemCount} Designs</span>
                  </div>

                  <h3 className="font-serif-display text-xl font-semibold text-[#241E1C] group-hover:text-[#8B2E3E] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs text-[#685A52] mt-2.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="p-6 pt-0 mt-2 border-t border-[#F2ECE5] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase text-[#8A7D75]">Starting at</span>
                  <div className="font-serif-display text-lg font-bold text-[#241E1C] tabular-nums">
                    ${category.startingPrice}
                    <span className="text-xs font-normal text-[#8A7D75] ml-1">USD</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewCategoryDetails(category.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#FAF5EE] text-[#8B2E3E] hover:bg-[#8B2E3E] hover:text-white transition-all border border-[#E8DFC9] cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onSelectCategory(category.id)}
                    aria-label={`Explore ${category.title} category`}
                    className="w-9 h-9 rounded-lg bg-white border border-[#DED4C7] hover:border-[#8B2E3E] text-[#241E1C] hover:text-[#8B2E3E] transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
