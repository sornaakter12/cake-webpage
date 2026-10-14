import React, { useState } from 'react';
import { Sparkles, MapPin, Mail, Check, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#211B19] text-[#E8DFC9] pt-16 pb-12 border-t border-[#382E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif-display text-2xl font-bold tracking-tight text-[#FAF5EE]">
              Atelier Velouté
            </span>
            <p className="text-xs text-[#A89C92] leading-relaxed max-w-sm">
              Haute confectionery atelier creating bespoke architectural celebration cakes, botanical multi-tier creations, and artisanal French gateaux.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C67C4E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chilled White-Glove Handover Guaranteed</span>
            </div>
          </div>

          {/* Salons & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-display text-sm font-semibold text-[#FAF5EE] uppercase tracking-wider">
              Tasting Salons
            </h4>
            <div className="space-y-2 text-xs text-[#A89C92]">
              <div>
                <strong className="text-[#ECE5DD] block">Paris Flagship & Lab</strong>
                14 Rue de Castiglione, 75001 Paris
              </div>
              <div>
                <strong className="text-[#ECE5DD] block">London Atelier</strong>
                28 Mount Street, Mayfair, London W1K
              </div>
              <div className="pt-1 text-[11px] text-[#7A6D65]">
                Tasting consultations by prior reservation only.
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-display text-sm font-semibold text-[#FAF5EE] uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#A89C92]">
              <li><a href="#collection" className="hover:text-white transition-colors">Tiered Wedding Cakes</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Contemporary Gâteaux</a></li>
              <li><a href="#bespoke-studio" className="hover:text-white transition-colors">Bespoke Studio</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Terroir & Ingredients</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Newsletter / Seasonal Tasting Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-display text-sm font-semibold text-[#FAF5EE] uppercase tracking-wider">
              The Seasonal Gazette
            </h4>
            <p className="text-xs text-[#A89C92] leading-relaxed">
              Receive private invitations to quarterly tasting sessions and new limited confection releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@example.com"
                  className="w-full px-3 py-2 text-xs bg-[#2E2623] border border-[#453833] rounded-lg text-white placeholder-[#7A6D65] focus:outline-none focus:border-[#C67C4E]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-[#8B2E3E] hover:bg-[#722330] text-white rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Merci! You are now subscribed to the Gazette.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#332A27] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7D75] gap-4">
          <div>
            © {new Date().getFullYear()} Atelier Velouté Pâtisserie S.A. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Allergen Transparency</span>
            <span aria-hidden="true">·</span>
            <span>Temperature Shield Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
