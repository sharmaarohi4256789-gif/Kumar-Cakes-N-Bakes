import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { OCCASIONS_LIST, BAKERY_DETAILS } from '../data/bakeryData';

interface OccasionsSectionProps {
  onSelectOccasion: (occasionName: string) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({
  onSelectOccasion
}) => {
  return (
    <section id="occasions" className="py-20 bg-[#F4EFE6] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebration Central</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-3">
            Cakes for Every Occasion
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#C88D38] mb-4">
            Every Celebration Deserves a Cake
          </p>
          <p className="text-sm sm:text-base text-[#5C453A]">
            Whatever the occasion, we have something delicious to make it unforgettable. Let {BAKERY_DETAILS.name} craft a bespoke centerpiece cake for your loved ones.
          </p>
        </div>

        {/* Occasions 8-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {OCCASIONS_LIST.map((item, idx) => (
            <div
              key={item.name}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFD4] hover:border-[#DFC28A] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#DFC28A] bg-[#2D1A12] px-2 py-0.5 rounded-md">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#A1887F] font-medium">Bespoke Design</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2D1A12] group-hover:text-[#C88D38] transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-[#5C453A] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => onSelectOccasion(item.name)}
                className="w-full flex items-center justify-between text-xs font-semibold px-3.5 py-2.5 rounded-lg bg-[#F4EFE6] hover:bg-[#2D1A12] text-[#2D1A12] hover:text-white transition-colors cursor-pointer"
              >
                <span>Plan This Cake</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C88D38]" />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Custom Cake Banner */}
        <div className="bg-[#2D1A12] rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#DFC28A]/40">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFC28A] mb-2 block">
              Custom Theme Or Multi-Tier Cake?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Have a reference photo or special flavor request?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Send your reference design, theme, or cartoon character photo directly to our master bakers on WhatsApp. We bake customized cakes with 24 hours notice.
            </p>
          </div>

          <a
            href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
              `Hi ${BAKERY_DETAILS.name}! I have a photo of a custom cake design I would like to order in Karnal.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Design On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
