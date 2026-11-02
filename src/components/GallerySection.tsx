import React, { useState } from 'react';
import { Sparkles, Eye, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BAKERY_DETAILS } from '../data/bakeryData';

interface GallerySectionProps {
  onViewImage: (image: string, title: string) => void;
  onEnquireDesign: (designTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onViewImage,
  onEnquireDesign
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Creations' },
    { id: 'shop', label: 'Bakery Shop & Store' },
    { id: 'cakes', label: 'Signature Cakes' },
    { id: 'celebrations', label: 'Celebrations & Weddings' },
    { id: 'designer', label: 'Designer Themes' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-[#F4EFE6] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-4">
            Our Sweet Creations Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#5C453A]">
            Explore our collection of beautifully designed cakes and delicious bakery creations. Every cake tells a story of celebration, happiness, and unforgettable memories.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#2D1A12] text-[#DFC28A] shadow-xs font-semibold'
                  : 'bg-[#FAF7F2] text-[#4A352B] hover:bg-[#EAE2D5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 shadow-xs hover:shadow-xl transition-all duration-300 aspect-4/3 sm:aspect-square border border-[#E8DFD4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

              {/* Hover content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-xs text-[#DFC28A] px-2.5 py-1 rounded">
                    {item.categoryLabel}
                  </span>
                  <button
                    onClick={() => onViewImage(item.image, item.title)}
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                    title="Zoom in"
                    aria-label="Zoom in"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEnquireDesign(item.title)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-[#DFC28A] hover:bg-[#C88D38] text-[#180D07] hover:text-white transition-colors text-center cursor-pointer"
                    >
                      Enquire This Design
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8C766C] mb-3">
            Looking for something unique? We bake custom cakes from any reference photo or sketch.
          </p>
          <a
            href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
              `Hi ${BAKERY_DETAILS.name}! I was browsing your sweet creations gallery and would like to order a custom design.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with our decorator on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
