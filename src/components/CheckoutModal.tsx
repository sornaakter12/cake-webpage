import React, { useState } from 'react';
import { CartItem } from '../types/cake';
import { X, CheckCircle, ShieldCheck, MapPin, CreditCard, Clock, Calendar, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [fullName, setFullName] = useState('Eleanor Vance');
  const [email, setEmail] = useState('eleanor.vance@example.com');
  const [phone, setPhone] = useState('+1 (555) 234-8900');
  const [address, setAddress] = useState('742 Evergreen Terrace, Suite 4B');
  const [city, setCity] = useState('Paris & Île-de-France');
  const [postalCode, setPostalCode] = useState('75001');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 150 ? 0 : 15;
  const grandTotal = subtotal + (subtotal > 0 ? deliveryFee : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `AV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('success');
  };

  const handleFinish = () => {
    onOrderComplete();
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E2D9CF] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3DA] bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-[#8B2E3E] uppercase tracking-wider">
              {step === 'form' ? 'Secure Reservation & Checkout' : 'Order Confirmed'}
            </div>
            <h2 className="font-serif-display text-2xl font-semibold text-[#241E1C]">
              {step === 'form' ? 'Handcrafted Delivery Schedule' : 'We Have Received Your Celebration Order'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="w-8 h-8 rounded-full border border-[#DED4C7] bg-white text-[#241E1C] flex items-center justify-center hover:bg-[#F2ECE5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Contact details */}
            <div className="space-y-4">
              <h3 className="font-serif-display text-base font-semibold text-[#241E1C]">
                1. Recipient Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Email for Courier Live Tracking</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Phone (for Delivery Driver Call)</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Delivery Region / Hub</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4 pt-4 border-t border-[#ECE5DD]">
              <h3 className="font-serif-display text-base font-semibold text-[#241E1C]">
                2. Venue or Residence Delivery Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Street Address, Suite / Floor</label>
                  <input
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5049] mb-1">Postal Code</label>
                  <input
                    required
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8CEC3] rounded-lg text-xs text-[#241E1C] bg-[#FAF8F5] focus:outline-none focus:border-[#8B2E3E]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4 pt-4 border-t border-[#ECE5DD]">
              <h3 className="font-serif-display text-base font-semibold text-[#241E1C]">
                3. Payment Preference
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-[#8B2E3E] bg-[#FAF5EE] ring-1 ring-[#8B2E3E]' 
                    : 'border-[#E2D9CF] bg-white'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="accent-[#8B2E3E]"
                  />
                  <CreditCard className="w-5 h-5 text-[#8B2E3E]" />
                  <div>
                    <div className="text-xs font-semibold text-[#241E1C]">Credit / Debit Card</div>
                    <div className="text-[11px] text-[#7A6D65]">Encrypted payment on dispatch</div>
                  </div>
                </label>

                <label className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'cod' 
                    ? 'border-[#8B2E3E] bg-[#FAF5EE] ring-1 ring-[#8B2E3E]' 
                    : 'border-[#E2D9CF] bg-white'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-[#8B2E3E]"
                  />
                  <ShieldCheck className="w-5 h-5 text-[#8B2E3E]" />
                  <div>
                    <div className="text-xs font-semibold text-[#241E1C]">Pay Upon Handover / Studio Pickup</div>
                    <div className="text-[11px] text-[#7A6D65]">Inspect presentation before payment</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Price breakdown summary */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3DA] space-y-2 text-xs">
              <div className="flex justify-between text-[#6B5E56]">
                <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                <span className="font-medium text-[#241E1C] tabular-nums">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#6B5E56]">
                <span>Temperature-Shielded Courier</span>
                <span className="font-medium text-[#241E1C] tabular-nums">
                  {deliveryFee === 0 ? <span className="text-[#8B2E3E] font-semibold">Free</span> : `$${deliveryFee}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#EAE3DA] flex justify-between text-sm font-semibold text-[#241E1C]">
                <span>Total Due</span>
                <span className="font-serif-display text-lg font-bold text-[#8B2E3E] tabular-nums">
                  ${grandTotal} USD
                </span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#8B2E3E] hover:bg-[#722330] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F2C0B0]" />
              <span>Confirm Celebration Reservation (${grandTotal} USD)</span>
            </button>
          </form>
        ) : (
          /* Confirmation Receipt State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#8B2E3E] uppercase tracking-wider">
                Order #{orderNumber}
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#241E1C]">
                Merci Beaucoup, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6D65] max-w-md mx-auto">
                Your order is confirmed and scheduled with our master pâtissier. A confirmation and live temperature tracking link has been dispatched to <strong className="text-[#241E1C]">{email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3DA] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between pb-2 border-b border-[#EAE3DA] font-semibold text-[#241E1C]">
                <span>Destination:</span>
                <span>{address}, {city}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#EAE3DA] text-[#6B5E56]">
                <span>Payment Mode:</span>
                <span className="font-medium text-[#241E1C]">{paymentMethod === 'card' ? 'Credit Card on Dispatch' : 'Handover / Studio Pickup'}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#8B2E3E] pt-1">
                <span>Grand Total:</span>
                <span className="tabular-nums font-serif-display text-base">${grandTotal} USD</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="py-3 px-6 bg-[#241E1C] hover:bg-[#3D332F] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Return to Atelier Collection
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
