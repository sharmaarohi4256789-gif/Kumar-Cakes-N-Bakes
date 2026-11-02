import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

interface FloatingActionsProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  orderCount,
  onOpenOrderDrawer
}) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Bubble */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
            `Hello ${BAKERY_DETAILS.name}! I would like to enquire about ordering a cake.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="text-xs font-bold tracking-wide">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar (Slim, <= 56px to strictly honor 15% mobile viewport cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD4] shadow-lg px-3 py-2">
        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
          {/* Call Now */}
          <a
            href={`tel:${BAKERY_DETAILS.phoneRaw}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#2D1A12] text-white text-[11px] font-semibold active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#DFC28A] mb-0.5" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Order */}
          <a
            href={`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(
              `Hello ${BAKERY_DETAILS.name}! I would like to order a cake in Karnal.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#25D366] text-white text-[11px] font-semibold active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire Cart */}
          <button
            onClick={onOpenOrderDrawer}
            className="relative flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#F4EFE6] text-[#2D1A12] border border-[#DFC28A]/50 text-[11px] font-semibold active:scale-95 transition-transform cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#C88D38] mb-0.5" />
            <span>Enquire</span>
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C88D38] text-white text-[9px] font-bold flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
