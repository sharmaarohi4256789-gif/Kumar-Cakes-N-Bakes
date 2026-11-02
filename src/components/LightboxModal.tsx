import React from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title
}) => {
  if (!isOpen) return null;

  const handleOrderThis = () => {
    const text = `Hi ${BAKERY_DETAILS.name}! I saw this photo on your website: "${title}" and would like to enquire about ordering it in Karnal.`;
    window.open(`https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-4xl w-full bg-[#180D07] rounded-2xl overflow-hidden border border-[#DFC28A]/40 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-[#2D1A12] text-white">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm sm:text-base font-semibold truncate max-w-md">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-hidden flex items-center justify-center bg-black/50 p-2 sm:p-4">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer controls */}
        <div className="px-5 py-3.5 bg-[#2D1A12] border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
          <span>{BAKERY_DETAILS.name} • SCO 77 Nehru Palace, Karnal</span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOrderThis}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire This on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
