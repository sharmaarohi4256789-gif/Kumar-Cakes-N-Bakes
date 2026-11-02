import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { WelcomeSection } from './components/WelcomeSection';
import { CategoriesSection } from './components/CategoriesSection';
import { CakesCatalog } from './components/CakesCatalog';
import { OccasionsSection } from './components/OccasionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleMyBusinessSection } from './components/GoogleMyBusinessSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer, OrderItem } from './components/OrderDrawer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { CakeProduct } from './data/bakeryData';

export default function App() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      const navHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenOrderWithProduct = (
    product: CakeProduct,
    weight: string,
    isEggless: boolean
  ) => {
    const newItem: OrderItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      weight,
      isEggless
    };

    setOrderItems((prev) => [...prev, newItem]);
    setIsOrderDrawerOpen(true);
  };

  const handleRemoveOrderItem = (index: number) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearOrderItems = () => {
    setOrderItems([]);
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    scrollToSection('cakes');
  };

  const handleSelectOccasion = (occasionName: string) => {
    scrollToSection('contact');
  };

  const handleEnquireDesign = (designTitle: string) => {
    scrollToSection('contact');
  };

  const handleViewImage = (image: string, title: string) => {
    setLightboxData({ url: image, title });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D1A12] flex flex-col font-sans selection:bg-[#DFC28A] selection:text-[#180D07]">
      {/* Top Header */}
      <Header
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        orderItemsCount={orderItems.length}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Slider */}
        <div id="home">
          <HeroSlider
            onExploreCakes={() => scrollToSection('cakes')}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          />
        </div>

        {/* Welcome Section */}
        <WelcomeSection
          onLearnMore={() => scrollToSection('about')}
          onExploreCakes={() => scrollToSection('cakes')}
        />

        {/* Categories Section (4 Image-Based Cards) */}
        <CategoriesSection
          onSelectCategory={handleSelectCategory}
          onViewAllProducts={() => {
            setSelectedCategoryFilter('all');
            scrollToSection('cakes');
          }}
        />

        {/* Cakes Catalog */}
        <CakesCatalog
          onOpenOrderDrawerWithProduct={handleOpenOrderWithProduct}
          onViewImage={handleViewImage}
          selectedCategoryFilter={selectedCategoryFilter}
        />

        {/* Occasions Section */}
        <OccasionsSection onSelectOccasion={handleSelectOccasion} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Google My Business Section with Shop Pictures */}
        <GoogleMyBusinessSection onViewImage={handleViewImage} />

        {/* Gallery Section with Lightbox */}
        <GallerySection
          onViewImage={handleViewImage}
          onEnquireDesign={handleEnquireDesign}
        />

        {/* Full About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Slide-out Order / Enquiry Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={orderItems}
        onRemoveItem={handleRemoveOrderItem}
        onClearItems={handleClearOrderItems}
      />

      {/* Photo Lightbox Modal */}
      <LightboxModal
        isOpen={!!lightboxData}
        onClose={() => setLightboxData(null)}
        imageUrl={lightboxData?.url || ''}
        title={lightboxData?.title || ''}
      />

      {/* Sticky Quick Actions */}
      <FloatingActions
        orderCount={orderItems.length}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />
    </div>
  );
}
