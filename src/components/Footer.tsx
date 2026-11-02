import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ArrowUp, ExternalLink, Globe, Instagram } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#180D07] text-[#FAF7F2] border-t border-stone-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black p-0.5 border border-[#DFC28A]/50 shrink-0">
                <img
                  src={BAKERY_DETAILS.logo}
                  alt="Kumar Cakes N Bakes Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2] block leading-tight">
                  {BAKERY_DETAILS.name}
                </span>
                <span className="text-xs text-[#DFC28A] tracking-wider uppercase font-medium">
                  Since 2010 • Karnal
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Discover delicious cakes, delightful desserts, and freshly baked treats crafted to make your special moments unforgettable. From birthdays to anniversaries, we bring sweetness and happiness to every celebration in Karnal.
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DFC28A] mb-3">
                Follow &amp; Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Facebook Page */}
                <a
                  href={BAKERY_DETAILS.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#1877F2] text-stone-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Follow Kumar Cakes N Bakes on Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Snapchat Page */}
                <a
                  href={BAKERY_DETAILS.socialLinks.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#FFFC00] text-stone-300 hover:text-black transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Follow Kumar Cakes N Bakes on Snapchat"
                >
                  <span className="text-xs font-bold">👻</span>
                  <span>Snapchat</span>
                </a>

                {/* Instagram Channel */}
                <a
                  href={BAKERY_DETAILS.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] text-stone-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Follow Kumar Cakes N Bakes on Instagram (@kumarcakes)"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                {/* Google Page Link */}
                <a
                  href={BAKERY_DETAILS.socialLinks.googlePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#4285F4] text-stone-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Google Business Page"
                >
                  <span className="font-bold">G</span>
                  <span>Google Page</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BAKERY_DETAILS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#DFC28A]">Quick Links</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cakes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Cakes Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('occasions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Occasions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gmb-store')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Google Store &amp; Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Cake Specialities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#DFC28A]">Our Specialities</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>• Birthday Custom Cakes</li>
              <li>• Belgian Chocolate Fudge Gateau</li>
              <li>• Bavarian Black Forest Cake</li>
              <li>• Classic Southern Red Velvet</li>
              <li>• Grand Multi-Tier Wedding Cakes</li>
              <li>• Kids 3D Theme &amp; Balloon Cakes</li>
              <li>• Fresh Gourmet Cupcakes &amp; Tarts</li>
              <li>• 100% Pure Eggless Options</li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#DFC28A]">Store Location</h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DFC28A] shrink-0 mt-0.5" />
                <p>
                  SCO 77, Nehru Palace, Dyal Singh Colony, Karnal, Haryana 132001
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DFC28A] shrink-0" />
                <a href={`tel:${BAKERY_DETAILS.phoneRaw}`} className="hover:text-white font-medium">
                  {BAKERY_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#DFC28A] shrink-0" />
                <p>9:00 AM – 10:30 PM (Daily)</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BAKERY_DETAILS.socialLinks.googlePage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFC28A] hover:underline"
              >
                <span>Visit Google Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {BAKERY_DETAILS.name}. All rights reserved. Baking happiness in Karnal since 2010.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-300 hover:text-[#DFC28A] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
