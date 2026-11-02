import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, Navigation, ExternalLink, Globe, Instagram } from 'lucide-react';
import { BAKERY_DETAILS } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    occasion: 'Birthday Celebration',
    weight: '1 kg',
    isEggless: true,
    cakeMessage: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*New Cake Enquiry for ${BAKERY_DETAILS.name}:*
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🎉 *Occasion:* ${formData.occasion}
📅 *Date:* ${formData.date || 'Soon'}
⚖️ *Weight:* ${formData.weight}
🌱 *Eggless:* ${formData.isEggless ? 'Yes (100% Eggless)' : 'Standard'}
✍️ *Message on Cake:* ${formData.cakeMessage || 'None specified'}
📝 *Special Notes:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/${BAKERY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EFE6] border-b border-[#E8DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C88D38] mb-2.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2D1A12] leading-tight mb-3">
            Contact {BAKERY_DETAILS.name}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#C88D38] mb-4">
            Let's Make Your Celebration Sweeter!
          </p>
          <p className="text-sm sm:text-base text-[#5C453A]">
            Looking for delicious cakes in Karnal? Visit {BAKERY_DETAILS.name} at Nehru Palace or reach out directly to enquire about flavors, custom theme cakes, and doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFD4] shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D1A12]">Bakery Address</h4>
                  <p className="text-xs sm:text-sm text-[#5C453A] mt-1 leading-relaxed">
                    {BAKERY_DETAILS.address}
                  </p>
                  <p className="text-[11px] text-[#8C766C] mt-0.5">Near Dyal Singh College Road, Karnal</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-[#E8DFD4]">
                <div className="w-10 h-10 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D1A12]">Phone &amp; WhatsApp</h4>
                  <p className="text-sm font-semibold text-[#2D1A12] mt-1">
                    <a href={`tel:${BAKERY_DETAILS.phoneRaw}`} className="hover:text-[#C88D38]">
                      {BAKERY_DETAILS.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#5C453A]">Available 9:00 AM – 10:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-[#E8DFD4]">
                <div className="w-10 h-10 rounded-xl bg-[#2D1A12] text-[#DFC28A] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D1A12]">Opening Hours</h4>
                  <p className="text-xs sm:text-sm text-[#5C453A] mt-1">
                    {BAKERY_DETAILS.openingHours}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Open All 7 Days</p>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-3 border-t border-[#E8DFD4]">
                <p className="text-[11px] font-semibold text-[#8C766C] uppercase tracking-wider mb-2">
                  Official Channels &amp; Pages:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={BAKERY_DETAILS.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5 border border-blue-200"
                  >
                    <span className="font-bold">f</span>
                    <span>Facebook</span>
                  </a>
                  <a
                    href={BAKERY_DETAILS.socialLinks.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 hover:bg-[#FFFC00] hover:text-black transition-colors text-xs font-medium flex items-center gap-1.5 border border-amber-200"
                  >
                    <span>👻</span>
                    <span>Snapchat</span>
                  </a>
                  <a
                    href={BAKERY_DETAILS.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5 border border-pink-200"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BAKERY_DETAILS.socialLinks.googlePage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-[#4285F4] hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5 border border-blue-200"
                  >
                    <span className="font-bold">G</span>
                    <span>Google Page</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons: Call Now, Get Directions */}
              <div className="pt-3 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BAKERY_DETAILS.phoneRaw}`}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#2D1A12] hover:bg-[#43271B] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFC28A]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BAKERY_DETAILS.socialLinks.googlePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#2D1A12] bg-[#FAF7F2] hover:bg-[#EAE2D5] border border-[#DFC28A] transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C88D38]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD4] shadow-xs bg-stone-200 h-[220px] relative">
              <iframe
                title={`${BAKERY_DETAILS.name} Location Map`}
                src={BAKERY_DETAILS.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-semibold text-stone-700 shadow-xs">
                SCO 77 Nehru Palace Karnal
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cake Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E8DFD4] shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C88D38] block mb-1">
                  Enquire About Cakes
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2D1A12]">
                  Send Your Custom Cake Details
                </h3>
                <p className="text-xs sm:text-sm text-[#665045] mt-1">
                  Fill in your celebration requirements and our master baker will confirm pricing and delivery schedule immediately.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2D1A12]">
                    Enquiry Prepared!
                  </h4>
                  <p className="text-sm text-[#5C453A] max-w-md mx-auto">
                    Your celebration details have been dispatched to {BAKERY_DETAILS.name} on WhatsApp (+91 98969 33399). We will respond promptly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#C88D38] hover:underline pt-2 cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98969 XXXXX"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                        Celebration Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                      >
                        <option>Birthday Celebration</option>
                        <option>Wedding Ceremony</option>
                        <option>Anniversary Celebration</option>
                        <option>Engagement Party</option>
                        <option>Baby Shower</option>
                        <option>Family Gathering</option>
                        <option>Corporate Event</option>
                        <option>Other Special Day</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                        Weight / Size
                      </label>
                      <select
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                      >
                        <option>0.5 kg</option>
                        <option>1 kg</option>
                        <option>1.5 kg</option>
                        <option>2 kg (2-Tier)</option>
                        <option>3 kg (3-Tier)</option>
                        <option>5 kg+ Grand Tier</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                      />
                    </div>
                  </div>

                  {/* Eggless Option */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="egglessContact"
                      checked={formData.isEggless}
                      onChange={(e) => setFormData({ ...formData, isEggless: e.target.checked })}
                      className="w-4 h-4 rounded text-[#C88D38] focus:ring-[#C88D38] border-[#DFC28A]"
                    />
                    <label htmlFor="egglessContact" className="text-xs font-medium text-[#2D1A12] cursor-pointer">
                      I require 100% Eggless (Pure Vegetarian) preparation
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                      Text to Write on Cake
                    </label>
                    <input
                      type="text"
                      value={formData.cakeMessage}
                      onChange={(e) => setFormData({ ...formData, cakeMessage: e.target.value })}
                      placeholder="e.g. Happy 25th Anniversary Mom & Dad"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D1A12] mb-1">
                      Design Theme &amp; Delivery Address in Karnal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Chocolate truffle flavor, delivery to Sector 13 Karnal at 7:00 PM."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E8DFD4] bg-white text-[#2D1A12] focus:outline-hidden focus:border-[#C88D38]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry to Bakery on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
