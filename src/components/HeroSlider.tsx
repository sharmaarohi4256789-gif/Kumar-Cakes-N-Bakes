import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { HERO_SLIDES, BAKERY_DETAILS } from '../data/bakeryData';

interface HeroSliderProps {
  onExploreCakes: () => void;
  onOpenOrderDrawer: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onExploreCakes,
  onOpenOrderDrawer
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isPaused, currentIndex]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] overflow-hidden bg-[#180D07]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Bakery Highlights Slider"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Measured Dark Gradient Scrim for WCAG AA readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Slide Content Overlays */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          {/* Tag & Established notice */}
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#DFC28A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentSlide.badge}</span>
            <span className="text-[#A1887F]">·</span>
            <span>Est. 2010 Karnal</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight mb-4 text-balance drop-shadow-md">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-lg sm:text-2xl text-[#DFC28A] font-medium mb-4">
            {currentSlide.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed mb-8 max-w-xl font-normal">
            {currentSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={onExploreCakes}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#180D07] bg-[#DFC28A] hover:bg-[#C88D38] hover:text-white rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>{currentSlide.primaryButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenOrderDrawer}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2D1A12]/80 hover:bg-[#2D1A12] border border-[#DFC28A]/50 rounded-lg shadow-sm backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>{currentSlide.secondaryButton}</span>
            </button>

            <a
              href={`tel:${BAKERY_DETAILS.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-stone-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#DFC28A]" />
              <span>Call: {BAKERY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Chevrons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 transition-all backdrop-blur-xs hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 transition-all backdrop-blur-xs hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Controls Strip: Slide numbers & interactive dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Slide dots */}
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 h-2 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? 'w-8 bg-[#DFC28A]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-xs font-mono text-[#DFC28A] tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
            0{currentIndex + 1} / 0{totalSlides}
          </div>
        </div>
      </div>
    </section>
  );
};
