import React from 'react';
import { REVIEWS } from '../data/cakes';
import { Star, Quote, Award } from 'lucide-react';

export const ClientJournal: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-[#FAF8F5] border-b border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8B2E3E] font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Patron Reviews</span>
              <span aria-hidden="true">·</span>
              <span>4.9 / 5.0 Composite Rating</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#241E1C]">
              Celebration Journal
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7A6D65] max-w-md">
            Memories created at historic châteaux, intimate rooftop dinners, and black-tie galas across the globe.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-white rounded-2xl border border-[#E8DFC9] shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C67C4E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#A3968C]">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#594E47] leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE5]">
                <div className="font-serif-display text-sm font-semibold text-[#241E1C]">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#7A6D65]">{review.role}</div>
                <div className="mt-1 text-[10px] text-[#8B2E3E] font-medium uppercase tracking-wider">
                  Selected: {review.event}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
