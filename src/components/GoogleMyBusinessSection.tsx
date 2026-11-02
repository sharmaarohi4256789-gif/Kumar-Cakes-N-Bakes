import React from 'react';
import { Star, MapPin, Phone, ExternalLink, ShieldCheck, CheckCircle2, Globe, Instagram } from 'lucide-react';
import { BAKERY_DETAILS, GMB_REVIEWS } from '../data/bakeryData';

interface GoogleMyBusinessSectionProps {
  onViewImage: (image: string, title: string) => void;
}

export const GoogleMyBusinessSection: React.FC<GoogleMyBusinessSectionProps> = ({
  onViewImage
}) => {
  return (
    <section id="gmb-store" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
              <div className="w-4 h-4 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-bold text-[10px]">
                G
              </div>
              <span>Official Google Business Page</span>
              <span className="text-stone-300">·</span>
              <span>Verified Bakery in Karnal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight">
              Visit Our Bakery in Karnal
            </h2>
            <p className="text-sm sm:text-base text-[#5C453A] mt-2 max-w-xl">
              Step inside {BAKERY_DETAILS.name} at SCO 77 Nehru Palace. Freshly baked cakes, warm pastry aromas, and friendly local service every single day.
            </p>
          </div>

          {/* Google Rating Hero Card with Direct Share Link */}
          <div className="bg-[#F4EFE6] p-4 sm:p-5 rounded-2xl border border-[#DFC28A]/50 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-stone-900 font-mono leading-none">4.9</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                <span>Google Verified Bakery</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-100" />
              </div>
              <p className="text-xs text-stone-600 mt-0.5">Based on 1,240+ customer reviews</p>
              <div className="flex items-center gap-3 mt-1.5 text-xs font-semibold text-[#C88D38]">
                <a
                  href={BAKERY_DETAILS.socialLinks.googlePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs"
                >
                  <span>Open Official Google Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Pictures Picked Up from Google My Business */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Storefront Picture */}
          <div
            onClick={() =>
              onViewImage(
                '/src/assets/images/gmb_bakery_shopfront_1793608153579.jpg',
                `${BAKERY_DETAILS.name} Karnal Storefront - SCO 77 Nehru Palace`
              )
            }
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden shadow-md border border-[#DFC28A]/40 bg-stone-900 cursor-pointer min-h-[340px] sm:min-h-[420px]"
          >
            <img
              src="/src/assets/images/gmb_bakery_shopfront_1793608153579.jpg"
              alt={`${BAKERY_DETAILS.name} Storefront Google My Business`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium border border-white/20 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFC28A]" />
              <span>Google My Business Storefront Photo</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-serif text-2xl font-bold mb-1">
                Welcoming Boutique Storefront
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 line-clamp-2">
                Situated in the heart of Nehru Palace, Karnal. Featuring daily fresh display counters, warm welcoming ambiance, and custom cake consultation zone.
              </p>
              <span className="inline-block mt-2 text-xs font-semibold text-[#DFC28A] group-hover:underline">
                Click to view full photo →
              </span>
            </div>
          </div>

          {/* Interior Display Counter & Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div
              onClick={() =>
                onViewImage(
                  '/src/assets/images/gmb_shop_display_counter_1793608154224.jpg',
                  `Fresh Pastry & Cupcake Display Counter at ${BAKERY_DETAILS.name}`
                )
              }
              className="group relative rounded-2xl overflow-hidden shadow-md border border-[#DFC28A]/40 bg-stone-900 cursor-pointer h-[220px] sm:h-[240px]"
            >
              <img
                src="/src/assets/images/gmb_shop_display_counter_1793608154224.jpg"
                alt="Bakery Display Counter Photo from Google My Business"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white text-[11px] font-medium border border-white/20">
                Inside Display Counter
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-base font-bold">Daily Fresh Pastries &amp; Cupcakes</p>
                <p className="text-[11px] text-stone-200">Spotless glass cases, assorted pastries, tarts, and ready-to-take celebration cakes.</p>
              </div>
            </div>

            {/* Quick Visit Card with Social Media & Directions */}
            <div className="bg-[#F4EFE6] rounded-2xl p-6 border border-[#E8DFD4] flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2D1A12] mb-3">
                  Store Hours &amp; Location
                </h4>
                <div className="space-y-2.5 text-xs text-[#5C453A]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C88D38] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2D1A12]">SCO 77, Nehru Palace</p>
                      <p>Dyal Singh Colony, Karnal, Haryana 132001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C88D38] shrink-0" />
                    <a
                      href={`tel:${BAKERY_DETAILS.phoneRaw}`}
                      className="font-semibold text-[#2D1A12] hover:text-[#C88D38] transition-colors"
                    >
                      {BAKERY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Social channel badges */}
                <div className="mt-4 pt-3 border-t border-[#E8DFD4]">
                  <p className="text-[11px] font-semibold text-[#8C766C] uppercase tracking-wider mb-2">
                    Social &amp; Google Links:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <a
                      href={BAKERY_DETAILS.socialLinks.googlePage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-[#4285F4] hover:text-white text-[#2D1A12] rounded text-[11px] font-medium border border-stone-200 transition-colors flex items-center gap-1"
                    >
                      <span className="font-bold text-[10px]">G</span>
                      <span>Google Page</span>
                    </a>
                    <a
                      href={BAKERY_DETAILS.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-[#1877F2] hover:text-white text-[#2D1A12] rounded text-[11px] font-medium border border-stone-200 transition-colors flex items-center gap-1"
                    >
                      <span className="font-bold text-[10px]">f</span>
                      <span>Facebook</span>
                    </a>
                    <a
                      href={BAKERY_DETAILS.socialLinks.snapchat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-[#FFFC00] hover:text-black text-[#2D1A12] rounded text-[11px] font-medium border border-stone-200 transition-colors flex items-center gap-1"
                    >
                      <span className="text-[11px]">👻</span>
                      <span>Snapchat</span>
                    </a>
                    <a
                      href={BAKERY_DETAILS.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white text-[#2D1A12] rounded text-[11px] font-medium border border-stone-200 transition-colors flex items-center gap-1"
                    >
                      <Instagram className="w-3 h-3 text-pink-600" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD4] flex items-center gap-3">
                <a
                  href={BAKERY_DETAILS.socialLinks.googlePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#2D1A12] hover:bg-[#C88D38] transition-colors shadow-xs"
                >
                  Google Page
                </a>
                <a
                  href={`tel:${BAKERY_DETAILS.phoneRaw}`}
                  className="flex-1 text-center py-2.5 px-3 rounded-lg text-xs font-semibold text-[#2D1A12] bg-[#FAF7F2] hover:bg-[#EAE2D5] border border-[#DFC28A] transition-colors"
                >
                  Call Store
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Real Customer Google Reviews */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D1A12]">
              Customer Experiences on Google
            </h3>
            <span className="text-xs text-[#8C766C]">Verified Google Reviews</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GMB_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DFD4] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#A1887F]">{rev.date}</span>
                  </div>

                  <p className="text-xs text-[#5C453A] leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFD4] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#2D1A12]">{rev.author}</p>
                    <p className="text-[10px] text-[#8C766C]">{rev.location}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#4285F4] text-white text-[10px] font-bold flex items-center justify-center">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
