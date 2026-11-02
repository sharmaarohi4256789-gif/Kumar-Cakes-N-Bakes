import React from 'react';
import { Award, Utensils, Sparkles, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/bakeryData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Award, Utensils, Sparkles, ShieldCheck, HeartHandshake, Smile];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-3">
            Why Choose Kuma Cakes N Bakes?
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#C88D38]">
            Sweetness You Can Trust
          </p>
        </div>

        {/* 6 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="bg-[#F4EFE6]/70 rounded-2xl p-7 border border-[#E8DFD4] hover:border-[#DFC28A] hover:bg-[#F4EFE6] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2D1A12] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5C453A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFD4]/80 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-500">
                  <span>Standard 0{index + 1}</span>
                  <span className="text-[#C88D38]">Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
