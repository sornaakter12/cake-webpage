import React, { useState } from 'react';
import { CartItem } from '../types/cake';
import { X, Trash2, Sparkles, ShieldCheck, Gift, Calendar, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [addCandles, setAddCandles] = useState(true);
  const [giftNote, setGiftNote] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('2026-10-18');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 150 ? 0 : 15;
  const grandTotal = subtotal + (subtotal > 0 ? deliveryFee : 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E2D9CF]">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EAE3DA] flex items-center justify-between bg-[#FAF8F5]">
            <div>
              <h2 className="font-serif-display text-lg font-semibold text-[#241E1C]">
                Your Tasting & Cake Bag
              </h2>
              <div className="text-xs text-[#7A6D65] mt-0.5">
                {items.length === 0 ? 'Empty bag' : `${items.reduce((s, i) => s + i.quantity, 0)} confections queued`}
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full border border-[#DED4C7] bg-white text-[#241E1C] flex items-center justify-center hover:bg-[#F2ECE5] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF5EE] text-[#8B2E3E] flex items-center justify-center mx-auto border border-[#EAE3DA]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-base font-semibold text-[#241E1C]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#7A6D65] max-w-xs mx-auto">
                  Explore our signature confections or open the Bespoke Studio to customize a multi-tier masterpiece.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.cartId}
                  className="p-3.5 rounded-xl border border-[#EAE3DA] bg-[#FAF8F5] flex gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover border border-[#E0D7CB] shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-display text-sm font-semibold text-[#241E1C] truncate">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          aria-label="Remove item"
                          className="text-[#9E9086] hover:text-[#8B2E3E] transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#7A6D65] truncate">
                        {item.subtitle}
                      </div>

                      {/* Custom inscription note */}
                      {item.customInscription && (
                        <div className="mt-1 text-[10px] text-[#8B2E3E] bg-white px-2 py-0.5 rounded border border-[#E8DFC9] inline-block max-w-full truncate">
                          Plaque: "{item.customInscription}"
                        </div>
                      )}
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#DDD3C7] rounded bg-white px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, -1)}
                          className="px-1.5 text-xs text-[#7A6D65] hover:text-[#241E1C]"
                        >
                          -
                        </button>
                        <span className="px-1.5 text-xs font-semibold tabular-nums text-[#241E1C]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, 1)}
                          className="px-1.5 text-xs text-[#7A6D65] hover:text-[#241E1C]"
                        >
                          +
                        </button>
                      </div>

                      <div className="font-serif-display text-sm font-bold text-[#241E1C] tabular-nums">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Extras Section (Candles & Gift Card) */}
            {items.length > 0 && (
              <div className="pt-3 space-y-3 border-t border-[#EAE3DA]">
                {/* Free Candles Toggle */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-[#E5DDD2] bg-[#FAF8F5] cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C67C4E]" />
                    <div>
                      <div className="font-semibold text-[#241E1C]">Complimentary Gold Taper Candles</div>
                      <div className="text-[11px] text-[#7A6D65]">Set of 6 luxury slender candles</div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={addCandles}
                    onChange={(e) => setAddCandles(e.target.checked)}
                    className="accent-[#8B2E3E] w-4 h-4 rounded"
                  />
                </label>

                {/* Gift Card Note */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#241E1C] mb-1">
                    <Gift className="w-3.5 h-3.5 text-[#8B2E3E]" />
                    <span>Calligraphy Gift Message (Complimentary)</span>
                  </div>
                  <textarea
                    rows={2}
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Write a heartfelt note for the recipient..."
                    className="w-full p-2.5 text-xs border border-[#D8CEC3] rounded-lg bg-[#FAF8F5] text-[#241E1C] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#EAE3DA] bg-[#FAF8F5] space-y-3">
              <div className="space-y-1.5 text-xs text-[#6B5E56]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#241E1C] tabular-nums">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>White Glove Refrigerated Courier</span>
                  <span className="font-medium text-[#241E1C] tabular-nums">
                    {deliveryFee === 0 ? <span className="text-[#8B2E3E] font-semibold">Complimentary</span> : `$${deliveryFee}`}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <div className="text-[10px] text-[#7A6D65]">
                    Add ${(150 - subtotal)} more for free courier
                  </div>
                )}
                <div className="pt-2 border-t border-[#EAE3DA] flex justify-between text-sm font-semibold text-[#241E1C]">
                  <span>Total</span>
                  <span className="font-serif-display text-lg font-bold text-[#8B2E3E] tabular-nums">
                    ${grandTotal} USD
                  </span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 bg-[#8B2E3E] hover:bg-[#722330] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Reservation & Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7A6D65]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B2E3E]" />
                <span>Cold-chain temperature guaranteed upon doorstep handover</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
