import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingBag, MapPin, Clock } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

interface HeaderProps {
  onOpenOrderDrawer: () => void;
  orderItemsCount: number;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOrderDrawer,
  orderItemsCount,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'cakes', label: 'Our Cakes' },
    { id: 'occasions', label: 'Occasions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'gmb-store', label: 'Shop & Store' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD4] shadow-xs transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#2D1A12] text-[#F4EFE6] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#DFC28A]">
              <Clock className="w-3.5 h-3.5" />
              <span>Open Daily: 9:00 AM – 10:30 PM</span>
            </span>
            <span className="text-[#8C766C]">|</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#DFC28A]" />
              <span>SCO 77, Nehru Palace, Karnal</span>
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <span>Baking Happiness Since 2010</span>
            <span className="text-[#8C766C]">·</span>
            <a
              href={`tel:${BAKERY_DETAILS.phoneRaw}`}
              className="flex items-center gap-1 text-[#DFC28A] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BAKERY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Zone */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none shrink-0 group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-black p-0.5 border border-[#DFC28A]/50 shadow-xs flex items-center justify-center">
              <img
                src={BAKERY_DETAILS.logo}
                alt="Kumar Cakes N Bakes Logo"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D1A12] leading-tight">
                {BAKERY_DETAILS.name}
              </span>
              <span className="text-[11px] font-medium tracking-widest text-[#C88D38] uppercase">
                Since 2010 • Karnal
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A352B]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors whitespace-nowrap hover:text-[#C88D38] ${
                  activeSection === item.id
                    ? 'text-[#C88D38] font-semibold'
                    : 'text-[#4A352B]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C88D38] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Enquiry Drawer Button */}
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2.5 rounded-full text-[#2D1A12] bg-[#F4EFE6] hover:bg-[#EBE2D5] transition-colors border border-[#DFC28A]/40"
              title="View Cake Enquiry List"
              aria-label="View Cake Enquiry List"
            >
              <ShoppingBag className="w-5 h-5 text-[#2D1A12]" />
              {orderItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C88D38] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {orderItemsCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
                'Hello Kumar Cakes N Bakes! I would like to enquire about ordering a cake for my celebration.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2D1A12] hover:bg-[#F4EFE6]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DFD4] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#F4EFE6] text-[#C88D38] font-semibold'
                    : 'text-[#2D1A12] hover:bg-[#F4EFE6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8DFD4] flex flex-col gap-2">
            <a
              href={`tel:${BAKERY_DETAILS.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#2D1A12] text-white text-xs font-medium"
            >
              <Phone className="w-4 h-4 text-[#DFC28A]" />
              <span>Call: {BAKERY_DETAILS.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
                'Hello Kumar Cakes N Bakes! I would like to enquire about ordering a cake.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#25D366] text-white text-xs font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
