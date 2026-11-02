import React from 'react';
import { ArrowRight, Cake, Heart, Sparkles, Coffee } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void;
  onViewAllProducts: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onViewAllProducts
}) => {
  const collections = [
    {
      id: 'birthday',
      title: 'Birthday Cakes',
      subtitle: 'Celebrate birthdays with delicious and beautifully designed cakes.',
      image: '/src/assets/images/hero_birthday_celebration_cake_1793608152273.jpg',
      icon: Cake,
      tag: 'Custom Themes'
    },
    {
      id: 'anniversary',
      title: 'Wedding & Anniversary Cakes',
      subtitle: 'Sweet creations for love, happiness, and togetherness.',
      image: '/src/assets/images/hero_anniversary_wedding_cake_1793608153543.jpg',
      icon: Heart,
      tag: 'Multi-Tiered'
    },
    {
      id: 'desserts',
      title: 'Cupcakes & Desserts',
      subtitle: 'Enjoy delightful treats perfect for every sweet craving.',
      image: '/src/assets/images/gmb_shop_display_counter_1793608154224.jpg',
      icon: Sparkles,
      tag: 'Daily Fresh'
    },
    {
      id: 'chocolate',
      title: 'Bakery Specialties',
      subtitle: 'Discover delicious bakery favourites for every occasion.',
      image: '/src/assets/images/hero_signature_chocolate_cake_1793608151487.jpg',
      icon: Coffee,
      tag: 'Chef Signature'
    }
  ];

  return (
    <section id="collection" className="py-20 bg-[#F4EFE6] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Delights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-4">
            Our Delicious Collection
          </h2>
          <p className="text-sm sm:text-base text-[#5C453A]">
            Discover an artisanal range of fresh sponge cakes, gourmet gateaux, and sweet confections baked daily in Karnal.
          </p>
        </div>

        {/* 4 Image-based Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {collections.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className="group relative bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFD4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1.5"
              >
                {/* Image slot */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category unboxed tag */}
                  <div className="absolute top-3 left-3 bg-[#2D1A12]/90 backdrop-blur-xs text-[#DFC28A] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#DFC28A]/30">
                    {item.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#C88D38] mb-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Kuma Specialty</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1A12] group-hover:text-[#C88D38] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#665045] leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E8DFD4] flex items-center justify-between text-xs font-semibold text-[#2D1A12] group-hover:text-[#C88D38]">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#2D1A12] hover:bg-[#C88D38] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>View All Products &amp; Flavours</span>
            <ArrowRight className="w-4 h-4 text-[#DFC28A]" />
          </button>
        </div>
      </div>
    </section>
  );
};
