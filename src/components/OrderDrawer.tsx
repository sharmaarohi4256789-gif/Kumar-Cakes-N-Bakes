import React, { useState } from 'react';
import { X, Trash2, MessageCircle, Cake, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import { CakeProduct, BAKERY_DETAILS } from '../data/bakeryData';

export interface OrderItem {
  id: string;
  product: CakeProduct;
  weight: string;
  isEggless: boolean;
  customMessage?: string;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onRemoveItem: (index: number) => void;
  onClearItems: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearItems
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [globalMessage, setGlobalMessage] = useState('');

  if (!isOpen) return null;

  const handleSendOrderWhatsApp = () => {
    let orderDetailsText = '';

    if (items.length === 0) {
      orderDetailsText = `I would like to enquire about ordering a custom cake for my upcoming celebration in Karnal.`;
    } else {
      orderDetailsText = items
        .map(
          (item, idx) =>
            `🎂 *Item ${idx + 1}: ${item.product.name}*\n   • Weight / Size: ${item.weight}\n   • Preference: ${
              item.isEggless ? '100% Eggless (Veg)' : 'Regular'
            }${item.customMessage ? `\n   • Message on Cake: "${item.customMessage}"` : ''}`
        )
        .join('\n\n');
    }

    const fullMessage = `*New Cake Order / Enquiry for ${BAKERY_DETAILS.name}:*

${orderDetailsText}

👤 *Customer:* ${customerName || 'Website Customer'}
📱 *Phone:* ${customerPhone || 'Provided in chat'}
📅 *Required By:* ${deliveryDate || 'Soon'}
📍 *Fulfillment:* ${deliveryType === 'pickup' ? 'Store Pickup at SCO 77 Nehru Palace' : `Doorstep Delivery in Karnal: ${deliveryAddress || 'Address will share in chat'}`}
${globalMessage ? `📝 *Special Notes:* ${globalMessage}` : ''}

Please share the pricing quote, confirmation, and baking schedule!`;

    const url = `https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col border-l border-[#DFC28A]/40 overflow-hidden">
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[#2D1A12] text-white flex items-center justify-between border-b border-[#DFC28A]/30">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#DFC28A]" />
            <div>
              <h3 className="font-serif text-lg font-bold">Cake Enquiry List</h3>
              <p className="text-[11px] text-stone-300">{BAKERY_DETAILS.name} • Karnal</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#DFC28A]/40 flex items-center justify-center mx-auto text-[#C88D38]">
                <Cake className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-[#2D1A12]">
                Your cake list is empty
              </p>
              <p className="text-xs text-[#665045] max-w-xs mx-auto">
                Select cakes from our collection or send a direct custom request via WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-[#8C766C]">
                <span>Selected Cakes ({items.length})</span>
                <button
                  onClick={onClearItems}
                  className="text-red-700 hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-[#F4EFE6] rounded-xl p-3.5 border border-[#E8DFD4] relative flex gap-3 items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg shrink-0 bg-stone-900 border border-[#DFC28A]/30"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <h4 className="font-serif text-sm font-bold text-[#2D1A12] truncate">
                      {item.product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[#5C453A] mt-0.5">
                      <span className="font-medium text-[#2D1A12]">{item.weight}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-medium">
                        {item.isEggless ? 'Eggless' : 'Regular'}
                      </span>
                    </div>

                    {item.customMessage && (
                      <p className="text-[11px] text-[#8C766C] italic mt-1 truncate">
                        Msg: "{item.customMessage}"
                      </p>
                    )}

                    <p className="text-xs text-[#C88D38] font-medium mt-1">
                      Custom Made to Order
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="absolute top-3 right-3 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Delivery & Contact Details Form */}
          <div className="pt-4 border-t border-[#E8DFD4] space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C88D38]">
              Celebration &amp; Delivery Details
            </h4>

            <div>
              <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                WhatsApp Phone
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="098969 XXXXX"
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                Required Date &amp; Time
              </label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
              />
            </div>

            {/* Delivery Type */}
            <div>
              <label className="block text-xs font-semibold text-[#2D1A12] mb-1.5">
                Fulfillment Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                    deliveryType === 'delivery'
                      ? 'bg-[#2D1A12] text-white border-[#2D1A12]'
                      : 'bg-white text-[#4A352B] border-[#E8DFD4]'
                  }`}
                >
                  Doorstep Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                    deliveryType === 'pickup'
                      ? 'bg-[#2D1A12] text-white border-[#2D1A12]'
                      : 'bg-white text-[#4A352B] border-[#E8DFD4]'
                  }`}
                >
                  Pickup at SCO 77
                </button>
              </div>
            </div>

            {deliveryType === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                  Delivery Address in Karnal
                </label>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="e.g. Sector 13, Karnal"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                Custom Message on Cake or Requests
              </label>
              <input
                type="text"
                value={globalMessage}
                onChange={(e) => setGlobalMessage(e.target.value)}
                placeholder="e.g. Write: Happy Birthday Dad, Less Cream"
                className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 bg-white border-t border-[#E8DFD4] space-y-3">
          <button
            onClick={handleSendOrderWhatsApp}
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Enquiry via WhatsApp to 098969 33399</span>
          </button>

          <p className="text-[10px] text-center text-[#8C766C]">
            * Our bakers will immediately confirm design options, quote, and delivery schedule on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};
