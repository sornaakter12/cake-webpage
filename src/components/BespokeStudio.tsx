import React, { useState } from 'react';
import { Sparkles, Check, Info, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { 
  BESPOKE_TIER_OPTIONS, 
  SPONGE_FLAVORS, 
  FILLING_FLAVORS, 
  FINISH_STYLES, 
  COLOR_TONES, 
  BOTANICAL_ACCENTS 
} from '../data/cakes';
import { BespokeCakeConfig, CartItem } from '../types/cake';

interface BespokeStudioProps {
  onAddBespokeToCart: (item: CartItem) => void;
}

export const BespokeStudio: React.FC<BespokeStudioProps> = ({ onAddBespokeToCart }) => {
  const [tiers, setTiers] = useState<'single' | 'two-tier' | 'three-tier'>('two-tier');
  const [sponge, setSponge] = useState(SPONGE_FLAVORS[0].id);
  const [filling, setFilling] = useState(FILLING_FLAVORS[1].id);
  const [finish, setFinish] = useState(FINISH_STYLES[0].id);
  const [color, setColor] = useState(COLOR_TONES[0].id);
  const [botanical, setBotanical] = useState(BOTANICAL_ACCENTS[0].id);
  const [inscription, setInscription] = useState('Happy Celebration');
  const [fontStyle, setFontStyle] = useState('calligraphy');
  const [deliveryDate, setDeliveryDate] = useState('2026-10-18');
  const [deliverySlot, setDeliverySlot] = useState('11:00 AM - 2:00 PM');
  const [specialNotes, setSpecialNotes] = useState('');
  const [activeTab, setActiveTab] = useState<'tier' | 'flavor' | 'finish' | 'plaque'>('tier');
  const [addedToast, setAddedToast] = useState(false);

  // Price Calculation
  const selectedTierObj = BESPOKE_TIER_OPTIONS.find(t => t.id === tiers)!;
  const selectedSpongeObj = SPONGE_FLAVORS.find(s => s.id === sponge)!;
  const selectedBotanicalObj = BOTANICAL_ACCENTS.find(b => b.id === botanical)!;
  const selectedColorObj = COLOR_TONES.find(c => c.id === color)!;
  const selectedFinishObj = FINISH_STYLES.find(f => f.id === finish)!;
  const selectedFillingObj = FILLING_FLAVORS.find(f => f.id === filling)!;

  const totalPrice = selectedTierObj.basePrice + selectedSpongeObj.priceAdd + selectedBotanicalObj.priceAdd;

  const handleAddToCart = () => {
    const config: BespokeCakeConfig = {
      tiers,
      spongeFlavor: selectedSpongeObj.name,
      fillingFlavor: selectedFillingObj.name,
      finishStyle: selectedFinishObj.name,
      colorTone: selectedColorObj.name,
      botanicalAccent: selectedBotanicalObj.name,
      customPlaqueText: inscription,
      fontStyle,
      presentationBox: 'Luxury Thermal Atelier Hatbox',
      deliveryDate,
      deliverySlot,
      specialNotes
    };

    const cartItem: CartItem = {
      cartId: `bespoke-${Date.now()}`,
      title: `Bespoke ${selectedTierObj.title}`,
      subtitle: `${selectedSpongeObj.name} · ${selectedFinishObj.name}`,
      image: tiers === 'single'
        ? '/src/assets/images/product_pistachio_raspberry_cake_1791959347009.jpg'
        : tiers === 'two-tier'
        ? '/src/assets/images/product_earl_grey_lavender_cake_1791959350057.jpg'
        : '/src/assets/images/hero_artisanal_tiered_cake_1791959346272.jpg',
      price: totalPrice,
      quantity: 1,
      isBespoke: true,
      bespokeDetails: config,
      customInscription: inscription,
      selectedSize: selectedTierObj.servings
    };

    onAddBespokeToCart(cartItem);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <section id="bespoke-studio" className="py-16 bg-[#F6F2EC] border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Custom Atelier</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C]">
            Compose your bespoke celebration cake.
          </h2>
          <p className="text-sm sm:text-base text-[#685A52] mt-2">
            Tailor each tier, crumb profile, whipped filling, and hand-piped embellishment with guidance from our pastry master.
          </p>
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Cake Canvas */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#E2D9CF] shadow-sm relative overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
              
              {/* Background ambient light */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: selectedColorObj.hex }}
              />

              {/* Graphical Bespoke Cake Representation */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center my-6">
                
                {/* Botanical / Topper Graphic */}
                <div className="text-center mb-1 text-xs text-[#8B2E3E] font-medium tracking-wide flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EAE3DA] shadow-2xs">
                  <Sparkles className="w-3 h-3 text-[#C67C4E]" />
                  <span>{selectedBotanicalObj.name}</span>
                </div>

                {/* Tier 3 (Top) */}
                <div 
                  className="w-28 h-14 rounded-t-lg border-2 border-black/10 shadow-md relative transition-all duration-300 flex items-center justify-center text-center px-1"
                  style={{ backgroundColor: selectedColorObj.hex }}
                >
                  <span className="text-[10px] font-medium text-[#241E1C]/80">6" Top Tier</span>
                  {finish === 'vintage-lambeth' && (
                    <div className="absolute inset-0 border-b-2 border-dotted border-white/60 pointer-events-none" />
                  )}
                </div>

                {/* Tier 2 (Middle) - shown if two-tier or three-tier */}
                {(tiers === 'two-tier' || tiers === 'three-tier') && (
                  <div 
                    className="w-40 h-16 rounded-sm border-2 border-t-0 border-black/10 shadow-md relative transition-all duration-300 flex items-center justify-center text-center px-2"
                    style={{ backgroundColor: selectedColorObj.hex }}
                  >
                    <span className="text-[11px] font-medium text-[#241E1C]/80">8" Center Tier</span>
                    {finish === 'concrete-limestone' && (
                      <div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-amber-400 opacity-80" />
                    )}
                  </div>
                )}

                {/* Tier 1 (Base) - shown only if three-tier */}
                {tiers === 'three-tier' && (
                  <div 
                    className="w-56 h-18 rounded-b-md border-2 border-t-0 border-black/10 shadow-lg relative transition-all duration-300 flex items-center justify-center text-center px-2"
                    style={{ backgroundColor: selectedColorObj.hex }}
                  >
                    <span className="text-xs font-medium text-[#241E1C]/80">10" Grand Base Tier</span>
                  </div>
                )}

                {/* Cake Pedestal Stand */}
                <div className="w-48 h-3.5 bg-[#D6CDC3] rounded-t-sm shadow-inner mt-1" />
                <div className="w-16 h-6 bg-[#C4B9AD] rounded-b-sm shadow-md" />
                <div className="w-32 h-2.5 bg-[#B8ABA0] rounded-full shadow-lg" />

                {/* Personalized Inscription Plaque Live View */}
                {inscription.trim() && (
                  <div className="mt-4 px-4 py-1.5 bg-[#FAF8F5] border border-[#DDD3C7] rounded-md shadow-xs text-center max-w-xs">
                    <div className="text-[10px] uppercase text-[#7A6D65] tracking-widest">Hand-Piped Plaque</div>
                    <div className="font-serif-display italic text-[#8B2E3E] text-sm font-semibold truncate">
                      "{inscription}"
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Metrics */}
              <div className="w-full mt-4 pt-4 border-t border-[#ECE5DD] flex items-center justify-between text-xs text-[#6B5E56]">
                <div>
                  <span className="text-[#8B2E3E] font-semibold">{selectedTierObj.servings}</span>
                </div>
                <div className="text-right">
                  <span className="font-serif-display text-xl font-bold text-[#241E1C] tabular-nums">
                    ${totalPrice}
                  </span>
                  <span className="text-[11px] text-[#7A6D65] ml-1">USD</span>
                </div>
              </div>

            </div>

            {/* Quality Note */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE3DA] text-xs text-[#6B5E56] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#8B2E3E] shrink-0" />
              <span>Includes bespoke thermal hatbox, crystal serving knife & cake care guide.</span>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CF] shadow-sm space-y-8">
            
            {/* Step Tabs Navigation */}
            <div className="flex items-center gap-1 p-1 bg-[#F5EFEA] rounded-xl border border-[#E5DCD2] overflow-x-auto">
              <button
                onClick={() => setActiveTab('tier')}
                className={`flex-1 min-w-[100px] py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-center ${
                  activeTab === 'tier' ? 'bg-white text-[#241E1C] shadow-xs' : 'text-[#685A52] hover:text-[#241E1C]'
                }`}
              >
                1. Tiers & Scale
              </button>
              <button
                onClick={() => setActiveTab('flavor')}
                className={`flex-1 min-w-[100px] py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-center ${
                  activeTab === 'flavor' ? 'bg-white text-[#241E1C] shadow-xs' : 'text-[#685A52] hover:text-[#241E1C]'
                }`}
              >
                2. Flavor Profile
              </button>
              <button
                onClick={() => setActiveTab('finish')}
                className={`flex-1 min-w-[100px] py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-center ${
                  activeTab === 'finish' ? 'bg-white text-[#241E1C] shadow-xs' : 'text-[#685A52] hover:text-[#241E1C]'
                }`}
              >
                3. Texture & Finish
              </button>
              <button
                onClick={() => setActiveTab('plaque')}
                className={`flex-1 min-w-[100px] py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-center ${
                  activeTab === 'plaque' ? 'bg-white text-[#241E1C] shadow-xs' : 'text-[#685A52] hover:text-[#241E1C]'
                }`}
              >
                4. Plaque & Date
              </button>
            </div>

            {/* TAB 1: Tiers & Scale */}
            {activeTab === 'tier' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-lg font-semibold text-[#241E1C]">
                    Select Celebration Scale & Tiers
                  </h3>
                  <span className="text-xs text-[#7A6D65]">Step 1 of 4</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BESPOKE_TIER_OPTIONS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setTiers(tier.id as any)}
                      className={`text-left p-4 rounded-xl border transition-all text-xs ${
                        tiers === tier.id 
                          ? 'border-[#8B2E3E] bg-[#FAF5EE] ring-1 ring-[#8B2E3E]' 
                          : 'border-[#E5DCD2] hover:border-[#C4B7AA] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[#241E1C]">{tier.title}</span>
                        {tiers === tier.id && <Check className="w-4 h-4 text-[#8B2E3E]" />}
                      </div>
                      <div className="text-[#8B2E3E] font-medium mt-1">{tier.servings}</div>
                      <div className="text-[#7A6D65] text-[11px] mt-2 leading-relaxed">{tier.description}</div>
                      <div className="mt-3 font-serif-display text-sm font-bold text-[#241E1C] tabular-nums">
                        ${tier.basePrice} base
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveTab('flavor')}
                    className="text-xs font-semibold text-white bg-[#241E1C] hover:bg-[#3D332F] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Next: Sponge & Fillings →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: Flavor Profile */}
            {activeTab === 'flavor' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-display text-lg font-semibold text-[#241E1C] mb-1">
                    Select Artisan Sponge Crumb
                  </h3>
                  <p className="text-xs text-[#7A6D65] mb-3">Slow-baked with European high-fat butter and organic flours</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SPONGE_FLAVORS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSponge(s.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${
                          sponge === s.id
                            ? 'border-[#8B2E3E] bg-[#FAF5EE] font-semibold text-[#241E1C]'
                            : 'border-[#E5DCD2] text-[#594E47] hover:border-[#C4B7AA]'
                        }`}
                      >
                        <div>
                          <div className="font-medium text-[#241E1C]">{s.name}</div>
                          <div className="text-[11px] text-[#7A6D65]">{s.desc}</div>
                        </div>
                        {sponge === s.id && <Check className="w-4 h-4 text-[#8B2E3E] shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#ECE5DD]">
                  <h3 className="font-serif-display text-lg font-semibold text-[#241E1C] mb-1">
                    Select Gourmet Crème Filling
                  </h3>
                  <p className="text-xs text-[#7A6D65] mb-3">Layered between sponge disks for maximum moisture and aromatics</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FILLING_FLAVORS.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFilling(f.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${
                          filling === f.id
                            ? 'border-[#8B2E3E] bg-[#FAF5EE] font-semibold text-[#241E1C]'
                            : 'border-[#E5DCD2] text-[#594E47] hover:border-[#C4B7AA]'
                        }`}
                      >
                        <div>
                          <div className="font-medium text-[#241E1C]">{f.name}</div>
                          <div className="text-[11px] text-[#7A6D65]">{f.desc}</div>
                        </div>
                        {filling === f.id && <Check className="w-4 h-4 text-[#8B2E3E] shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setActiveTab('tier')}
                    className="text-xs text-[#6B5E56] hover:text-[#241E1C] py-2 px-3"
                  >
                    ← Back to Tiers
                  </button>
                  <button
                    onClick={() => setActiveTab('finish')}
                    className="text-xs font-semibold text-white bg-[#241E1C] hover:bg-[#3D332F] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Next: Finish & Botanicals →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: Texture & Finish */}
            {activeTab === 'finish' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif-display text-lg font-semibold text-[#241E1C] mb-1">
                    Select Exterior Frosting & Piping
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                    {FINISH_STYLES.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFinish(f.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${
                          finish === f.id
                            ? 'border-[#8B2E3E] bg-[#FAF5EE] font-semibold text-[#241E1C]'
                            : 'border-[#E5DCD2] text-[#594E47] hover:border-[#C4B7AA]'
                        }`}
                      >
                        <div>
                          <div className="font-medium text-[#241E1C]">{f.name}</div>
                          <div className="text-[11px] text-[#7A6D65]">{f.desc}</div>
                        </div>
                        {finish === f.id && <Check className="w-4 h-4 text-[#8B2E3E] shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#ECE5DD]">
                  <h3 className="font-serif-display text-base font-semibold text-[#241E1C] mb-2">
                    Palette Tint
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {COLOR_TONES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setColor(c.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                          color === c.id
                            ? 'border-[#8B2E3E] bg-[#FAF5EE] font-semibold text-[#241E1C]'
                            : 'border-[#E5DCD2] text-[#594E47] hover:border-[#C4B7AA]'
                        }`}
                      >
                        <span 
                          className="w-4 h-4 rounded-full border border-black/15 shrink-0" 
                          style={{ backgroundColor: c.hex }} 
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#ECE5DD]">
                  <h3 className="font-serif-display text-base font-semibold text-[#241E1C] mb-2">
                    Botanicals & Accents
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {BOTANICAL_ACCENTS.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setBotanical(b.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${
                          botanical === b.id
                            ? 'border-[#8B2E3E] bg-[#FAF5EE] font-semibold text-[#241E1C]'
                            : 'border-[#E5DCD2] text-[#594E47] hover:border-[#C4B7AA]'
                        }`}
                      >
                        <div>
                          <div className="font-medium text-[#241E1C]">{b.name}</div>
                          <div className="text-[11px] text-[#7A6D65]">{b.desc}</div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <span className="font-serif-display text-xs text-[#8B2E3E] font-semibold">
                            {b.priceAdd === 0 ? 'Included' : `+$${b.priceAdd}`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setActiveTab('flavor')}
                    className="text-xs text-[#6B5E56] hover:text-[#241E1C] py-2 px-3"
                  >
                    ← Back to Flavors
                  </button>
                  <button
                    onClick={() => setActiveTab('plaque')}
                    className="text-xs font-semibold text-white bg-[#241E1C] hover:bg-[#3D332F] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Next: Personal Plaque & Date →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: Plaque & Date */}
            {activeTab === 'plaque' && (
              <div className="space-y-5">
                <div>
                  <label className="block font-serif-display text-base font-semibold text-[#241E1C] mb-1">
                    Custom Plaque Inscription
                  </label>
                  <p className="text-xs text-[#7A6D65] mb-2">
                    Hand-piped in dark cocoa butter onto an edible sugar plaque
                  </p>
                  <input
                    type="text"
                    value={inscription}
                    onChange={(e) => setInscription(e.target.value)}
                    maxLength={40}
                    placeholder="e.g. Happy 30th Sophia, Forever & Always"
                    className="w-full px-3.5 py-2.5 border border-[#D8CEC3] rounded-lg text-sm text-[#241E1C] focus:outline-none focus:border-[#8B2E3E] bg-[#FAF8F5]"
                  />
                  <div className="flex justify-between text-[11px] text-[#7A6D65] mt-1">
                    <span>Complimentary with all bespoke creations</span>
                    <span>{inscription.length}/40 characters</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#ECE5DD]">
                  <div>
                    <label className="block text-xs font-semibold text-[#241E1C] mb-1">
                      Celebration Date (48h Lead Time)
                    </label>
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#241E1C] mb-1">
                      Delivery Arrival Window
                    </label>
                    <select
                      value={deliverySlot}
                      onChange={(e) => setDeliverySlot(e.target.value)}
                      className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                    >
                      <option value="9:00 AM - 12:00 PM">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="12:00 PM - 3:00 PM">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="3:00 PM - 6:00 PM">Evening (3:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241E1C] mb-1">
                    Special Dietary or Stylistic Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Please avoid edible viola flowers due to guest allergy, deliver to concierge at 2pm."
                    className="w-full px-3.5 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => setActiveTab('finish')}
                    className="text-xs text-[#6B5E56] hover:text-[#241E1C] py-2 px-3"
                  >
                    ← Back to Finish
                  </button>
                  <div className="text-right">
                    <span className="text-xs text-[#7A6D65] mr-2">Total:</span>
                    <span className="font-serif-display text-xl font-bold text-[#8B2E3E] tabular-nums">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Final Action Bar */}
            <div className="pt-6 border-t border-[#ECE5DD] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#685A52]">
                <div className="font-semibold text-[#241E1C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B2E3E]" />
                  <span>Bespoke Creation #{tiers.slice(0, 3).toUpperCase()}-{sponge.slice(0, 3).toUpperCase()}</span>
                </div>
                <div className="text-[11px] text-[#7A6D65] mt-0.5">
                  {selectedTierObj.servings} · Lead time ~48h
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B2E3E] hover:bg-[#722330] text-white text-xs font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F2C0B0]" />
                <span>Add Bespoke Creation to Bag (${totalPrice})</span>
              </button>
            </div>

            {addedToast && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bespoke creation successfully added to your shopping bag!</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
