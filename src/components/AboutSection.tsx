import React from 'react';
import { Target, Compass, Sparkles, Award, Heart, CheckCircle2, Globe, ExternalLink, Instagram } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us</span>
              <span className="text-stone-300">·</span>
              <span>Since 2010</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-4">
              Baking Happiness Since 2010
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#C88D38] mb-6">
              Karnal's Beloved Destination for Handcrafted Cakes &amp; Confections
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#4A352B] leading-relaxed">
              <p>
                <strong>{BAKERY_DETAILS.name}</strong> is a trusted bakery in Karnal, Haryana, dedicated to making every celebration special with delicious cakes and bakery treats.
              </p>
              <p>
                Since our establishment in 2010, our passion has been to bring people together through the joy of baking. We understand that every cake represents a special moment, a celebration, or a heartfelt emotion.
              </p>
              <p>
                Our goal is to provide delightful bakery experiences with wonderful taste, attractive presentation, and customer satisfaction. From birthday celebrations to weddings, anniversaries, and everyday sweet cravings, {BAKERY_DETAILS.name} is here to add sweetness to your life.
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                'Freshly baked sponges prepared daily',
                '100% vegetarian & eggless options',
                'Artisan Belgium chocolate & dairy cream',
                'Custom photo & 3D designer cakes',
                'Same-day doorstep delivery across Karnal',
                'Sanitized, spotless hygienic kitchen'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#2D1A12]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side & Logo Badge */}
          <div className="lg:col-span-5">
            <div className="bg-[#2D1A12] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#DFC28A]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFC28A]/10 rounded-full blur-2xl" />

              <div className="w-20 h-20 rounded-full overflow-hidden bg-black p-1 border-2 border-[#DFC28A] mb-6 shadow-md">
                <img
                  src={BAKERY_DETAILS.logo}
                  alt="Kumar Cakes n Bakes Official Monogram"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-[#DFC28A] uppercase">
                Artisan Heritage
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1 mb-3">
                {BAKERY_DETAILS.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                Rooted at SCO 77 Nehru Palace, Karnal. From simple beginnings in 2010 to crafting over 25,000 celebration centerpieces, we remain committed to true artisanal baking without compromise.
              </p>

              {/* Social links row inside About badge */}
              <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center gap-2 mb-6">
                <a
                  href={BAKERY_DETAILS.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#1877F2] text-xs text-stone-200 transition-colors flex items-center gap-1"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={BAKERY_DETAILS.socialLinks.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#FFFC00] hover:text-black text-xs text-stone-200 transition-colors flex items-center gap-1"
                >
                  <span>Snapchat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={BAKERY_DETAILS.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-xs text-stone-200 transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>Instagram</span>
                </a>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <p className="text-[#DFC28A] font-bold text-lg font-mono">14+ Years</p>
                  <p className="text-stone-400">Trusted in Karnal</p>
                </div>
                <div>
                  <p className="text-[#DFC28A] font-bold text-lg font-mono">25,000+</p>
                  <p className="text-stone-400">Cakes Baked</p>
                </div>
                <div>
                  <p className="text-[#DFC28A] font-bold text-lg font-mono">4.9 ★</p>
                  <p className="text-stone-400">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#F4EFE6] rounded-2xl p-8 border border-[#E8DFD4] relative">
            <div className="w-12 h-12 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C88D38]">Purpose</span>
            <h3 className="font-serif text-2xl font-bold text-[#2D1A12] mt-1 mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-[#5C453A] leading-relaxed">
              {BAKERY_DETAILS.mission} We strive to deliver the highest standard of freshness, visual delight, and warmth with every box leaving our ovens.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F4EFE6] rounded-2xl p-8 border border-[#E8DFD4] relative">
            <div className="w-12 h-12 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C88D38]">Future</span>
            <h3 className="font-serif text-2xl font-bold text-[#2D1A12] mt-1 mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-[#5C453A] leading-relaxed">
              {BAKERY_DETAILS.vision} Continuing to innovate handcrafted recipes, bespoke artistry, and delightful guest experiences for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
