import React, { useState } from 'react';
import { Sparkles, MessageCircle, SlidersHorizontal, Check, Eye } from 'lucide-react';
import { PRODUCTS, CakeProduct, BAKERY_DETAILS } from '../data/bakeryData';

interface CakesCatalogProps {
  onOpenOrderDrawerWithProduct: (product: CakeProduct, weight: string, isEggless: boolean) => void;
  onViewImage: (image: string, title: string) => void;
  selectedCategoryFilter?: string;
}

export const CakesCatalog: React.FC<CakesCatalogProps> = ({
  onOpenOrderDrawerWithProduct,
  onViewImage,
  selectedCategoryFilter = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter);
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({
    'cake-choc-fudge': '1 kg',
    'cake-birthday-pastel': '1 kg',
    'cake-royal-wedding': '2 kg (2-Tier)',
    'cake-red-velvet': '1 kg',
    'cake-black-forest': '1 kg',
    'cake-designer-kids': '1 kg',
    'cake-display-pastries': 'Box of 6'
  });
  const [egglessPreferences, setEgglessPreferences] = useState<Record<string, boolean>>({
    'cake-choc-fudge': true,
    'cake-birthday-pastel': true,
    'cake-royal-wedding': true,
    'cake-red-velvet': true,
    'cake-black-forest': true,
    'cake-designer-kids': true,
    'cake-display-pastries': true
  });
  const [egglessOnlyFilter, setEgglessOnlyFilter] = useState(false);

  // Sync prop filter changes
  React.useEffect(() => {
    if (selectedCategoryFilter && selectedCategoryFilter !== 'all') {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = [
    { id: 'all', label: 'All Bakery Creations' },
    { id: 'birthday', label: 'Birthday Cakes' },
    { id: 'chocolate', label: 'Chocolate & Fudge' },
    { id: 'black-forest', label: 'Black Forest' },
    { id: 'red-velvet', label: 'Red Velvet' },
    { id: 'anniversary', label: 'Wedding & Anniversary' },
    { id: 'designer', label: 'Designer & Themes' },
    { id: 'desserts', label: 'Cupcakes & Desserts' }
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesEggless = !egglessOnlyFilter || item.isEgglessAvailable;
    return matchesCategory && matchesEggless;
  });

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleEgglessToggle = (productId: string) => {
    setEgglessPreferences((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleWhatsAppQuickOrder = (product: CakeProduct) => {
    const weight = selectedWeights[product.id] || product.weights[0];
    const isEggless = egglessPreferences[product.id] !== false;

    const message = `Hello ${BAKERY_DETAILS.name}! I would like to enquire about:
🎂 *${product.name}*
⚖️ *Weight / Size:* ${weight}
🌱 *Eggless:* ${isEggless ? 'Yes (100% Eggless)' : 'Standard'}

Could you please share the pricing, customization options, and delivery details for Karnal?`;

    const url = `https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cakes" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Bakery Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-4">
            Our Bakery Collection
          </h2>
          <p className="text-sm sm:text-base text-[#5C453A]">
            Every celebration deserves a special cake. Explore our handcrafted recipes, choose your preferred weight, customize cake text, or enquire directly via WhatsApp for custom designs and quotes.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F4EFE6] p-3 rounded-2xl border border-[#E8DFD4]">
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2D1A12] text-[#DFC28A] shadow-xs font-semibold'
                    : 'text-[#5C453A] hover:bg-[#EAE2D5] hover:text-[#2D1A12]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Eggless Toggle */}
          <div className="flex items-center gap-3 self-end md:self-auto shrink-0 pr-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C88D38]" />
            <label className="flex items-center gap-2 text-xs font-medium text-[#2D1A12] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={egglessOnlyFilter}
                onChange={(e) => setEgglessOnlyFilter(e.target.checked)}
                className="w-4 h-4 rounded text-[#C88D38] focus:ring-[#C88D38] border-[#DFC28A] cursor-pointer"
              />
              <span>100% Eggless Only</span>
            </label>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentWeight = selectedWeights[product.id] || product.weights[0];
            const isEggless = egglessPreferences[product.id] !== false;

            return (
              <div
                key={product.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E8DFD4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image slot */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Bestseller or Category tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#2D1A12]/90 text-[#DFC28A] px-2.5 py-1 rounded-md border border-[#DFC28A]/30">
                      {product.categoryLabel}
                    </span>
                    {product.isBestseller && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C88D38] text-white px-2 py-0.5 rounded-md">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Quick Zoom Preview Button */}
                  <button
                    onClick={() => onViewImage(product.image, product.name)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    title="View Image"
                    aria-label="View Full Image"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2D1A12] leading-snug mb-2 group-hover:text-[#C88D38] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#665045] leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Weight Selection Pills */}
                    <div className="mb-4">
                      <span className="text-[11px] font-semibold text-[#8C766C] uppercase tracking-wider block mb-1.5">
                        Select Weight / Size:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.weights.map((wt) => (
                          <button
                            key={wt}
                            onClick={() => handleWeightChange(product.id, wt)}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                              currentWeight === wt
                                ? 'bg-[#2D1A12] text-[#DFC28A] border-[#2D1A12]'
                                : 'bg-[#F4EFE6] text-[#4A352B] border-[#E8DFD4] hover:border-[#DFC28A]'
                            }`}
                          >
                            {wt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Eggless Option Checkbox */}
                    {product.isEgglessAvailable && (
                      <div className="flex items-center gap-2 mb-4 text-xs text-[#2D1A12]">
                        <button
                          type="button"
                          onClick={() => handleEgglessToggle(product.id)}
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors cursor-pointer ${
                            isEggless
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-stone-400 bg-white'
                          }`}
                        >
                          {isEggless && <Check className="w-3 h-3 stroke-[3]" />}
                        </button>
                        <span className="font-medium text-emerald-800">
                          100% Pure Eggless (Vegetarian)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Order / Enquiry Actions (All Prices Removed) */}
                  <div className="pt-4 border-t border-[#E8DFD4]">
                    <div className="flex items-center justify-between mb-4 text-xs">
                      <span className="text-[#8C766C]">Selected Size:</span>
                      <span className="font-semibold text-[#2D1A12] bg-[#F4EFE6] px-2.5 py-1 rounded-md border border-[#DFC28A]/40">
                        {currentWeight}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() =>
                          onOpenOrderDrawerWithProduct(product, currentWeight, isEggless)
                        }
                        className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#2D1A12] bg-[#F4EFE6] hover:bg-[#E6DEC2] border border-[#DFC28A]/60 transition-colors text-center cursor-pointer"
                      >
                        Customize &amp; Enquire
                      </button>

                      <button
                        onClick={() => handleWhatsAppQuickOrder(product)}
                        className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95 cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire Price</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Advice */}
        <div className="mt-14 text-center text-xs text-[#8C766C]">
          <p>
            * All celebration cakes are freshly baked to order at SCO 77, Nehru Palace, Karnal. Custom 2-tier and 3-tier cakes require 12–24 hours advance notice.
          </p>
        </div>
      </div>
    </section>
  );
};
