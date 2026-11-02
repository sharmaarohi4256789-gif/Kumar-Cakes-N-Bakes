import React from 'react';
import { Award, Clock, Heart, Sparkles, MapPin, Star, ArrowRight } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

interface WelcomeSectionProps {
  onLearnMore: () => void;
  onExploreCakes: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onLearnMore,
  onExploreCakes
}) => {
  return (
    <section id="about-preview" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story with Google My Business Shopfront */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DFC28A]/40 bg-stone-900 aspect-4/3 sm:aspect-16/11">
              <img
                src="/src/assets/images/gmb_bakery_shopfront_1793608153579.jpg"
                alt="Kuma Cakes N Bakes Shopfront in Nehru Palace Karnal"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Verified GMB Badge on the image */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-stone-200 flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-900">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-500 font-medium">1,240+ Google Reviews</span>
                </div>
              </div>

              {/* Bottom shop caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs text-[#DFC28A] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nehru Palace, Karnal</span>
                </div>
                <p className="text-xs text-stone-200">
                  SCO 77, Dyal Singh Colony • Visit our boutique bakery store
                </p>
              </div>
            </div>

            {/* Overlapping Trust Pill Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-[#2D1A12] text-white p-4 rounded-xl shadow-xl border border-[#DFC28A]/50 max-w-xs items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#DFC28A]/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#DFC28A]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#DFC28A]">Established 2010</p>
                <p className="text-xs text-stone-300">14+ Years of Sweet Memories in Karnal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Welcome Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed subtle kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C88D38] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to {BAKERY_DETAILS.name}</span>
              <span className="text-stone-300">·</span>
              <span>Karnal, Haryana</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-5">
              Your Trusted Bakery in Karnal Since 2010
            </h2>

            <p className="text-base text-[#4A352B] leading-relaxed mb-4">
              Welcome to <strong>{BAKERY_DETAILS.name}</strong>, where passion for baking meets the joy of celebration. Since 2010, we have been serving delightful cakes and bakery treats that bring smiles to every occasion.
            </p>

            <p className="text-sm sm:text-base text-[#5C453A] leading-relaxed mb-6">
              We believe every celebration deserves something special, and our delicious creations are made to turn your memorable moments into sweeter experiences. Whether you are celebrating a birthday, anniversary, wedding, or simply enjoying a sweet craving, {BAKERY_DETAILS.name} is your destination for delicious bakery delights in Karnal.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 mb-8 border-y border-[#E8DFD4]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C88D38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2D1A12]">Baking Fresh Daily</h4>
                  <p className="text-xs text-stone-500">Oven-fresh sponges prepared every morning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#C88D38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2D1A12]">100% Eggless Option</h4>
                  <p className="text-xs text-stone-500">Pure vegetarian options for all celebrations</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2D1A12] hover:bg-[#43271B] transition-colors shadow-sm cursor-pointer"
              >
                <span>About Us &amp; Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#DFC28A]" />
              </button>

              <button
                onClick={onExploreCakes}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#2D1A12] bg-[#F4EFE6] hover:bg-[#EBE2D5] border border-[#DFC28A]/40 transition-colors cursor-pointer"
              >
                <span>Browse Cake Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
