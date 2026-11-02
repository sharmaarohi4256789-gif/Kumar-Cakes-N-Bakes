export interface CakeProduct {
  id: string;
  name: string;
  category: 'birthday' | 'chocolate' | 'black-forest' | 'red-velvet' | 'anniversary' | 'designer' | 'desserts';
  categoryLabel: string;
  description: string;
  image: string;
  weights: string[];
  isEgglessAvailable: boolean;
  isBestseller?: boolean;
  flavors?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'shop' | 'cakes' | 'celebrations' | 'designer';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface GMBReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
}

export const BAKERY_DETAILS = {
  name: 'Kumar Cakes N Bakes',
  legalName: 'Kumar Cakes N Bakes',
  logo: '/assets/aistudio/Logo_0566e52e.jpg',
  tagline: 'Making Every Celebration Sweeter Since 2010',
  foundedYear: '2010',
  phone: '098969 33399',
  phoneRaw: '+919896933399',
  whatsapp: '919896933399',
  address: 'SCO 77, Nehru Palace, Dyal Singh Colony, Karnal, Haryana 132001',
  city: 'Karnal, Haryana',
  pincode: '132001',
  openingHours: 'Mon - Sun: 9:00 AM – 10:30 PM',
  googleRating: 4.9,
  totalReviews: 1240,
  googleMapsUrl: 'https://share.google/ZAPuxqhbHKroLD1Sm',
  googleMapsEmbed: 'https://maps.google.com/maps?q=SCO%2077%2C%20Nehru%20Palace%2C%20Dyal%20Singh%20Colony%2C%20Karnal%2C%20Haryana%20132001&t=&z=15&ie=UTF8&iwloc=&output=embed',
  socialLinks: {
    instagram: 'https://www.instagram.com/kumarcakes/',
    snapchat: 'https://www.google.com/goto?url=CAESsgEB6zswFdgQtR8mSy4LP7--1vU6u1wQBvId6nvxStF6teQ68s3xaY0Bwk4C4aF_QcECA-vNatQMoHKQqf9x6_EQhBC-cM6DJz63mgY4UBWmtN1ZAwXcD_KrYCvdV1pcWMsdQxlCzT0maEQ2XFKljIWdBvF_oLg3NwHjCcGc3tjnFPMJxr71Db0midOQx_e8VIltNCa8s3fUTFKPWTWQjHQRqccfaH1NeZe0j8bLzX4JeziV',
    facebook: 'https://www.facebook.com/share/1E8sNcQVcU/',
    googlePage: 'https://share.google/ZAPuxqhbHKroLD1Sm'
  },
  mission: 'To spread happiness through delicious cakes, authentic flavors, and memorable bakery experiences.',
  vision: 'To become the most cherished bakery destination in Karnal for quality, artisanal taste, and celebration.'
};

export const HERO_SLIDES = [
  {
    id: 'slider-1',
    badge: 'Main Signature Special',
    title: 'KUMAR CAKES N BAKES',
    subtitle: 'Making Every Celebration Sweeter Since 2010',
    description: 'Discover delicious cakes, delightful desserts, and freshly baked treats crafted to make your special moments unforgettable. From birthdays to anniversaries, we bring sweetness and happiness to every celebration.',
    primaryButton: 'Explore Our Cakes',
    secondaryButton: 'Enquire on WhatsApp',
    image: '/src/assets/images/hero_signature_chocolate_cake_1793608151487.jpg',
    accentText: 'Freshly Baked Daily'
  },
  {
    id: 'slider-2',
    badge: 'Birthday Special Collection',
    title: 'Celebrate Every Birthday with Sweetness',
    subtitle: 'Artisan Designs & Irresistible Flavors',
    description: 'Make every birthday memorable with beautifully designed cakes and irresistible flavours. Custom cakes handcrafted with premium ingredients to add happiness to your celebrations in Karnal.',
    primaryButton: 'Discover Birthday Cakes',
    secondaryButton: 'Custom Cake Enquiry',
    image: '/src/assets/images/hero_birthday_celebration_cake_1793608152273.jpg',
    accentText: 'Custom Theme Cakes'
  },
  {
    id: 'slider-3',
    badge: 'Special Occasions & Milestones',
    title: 'Cakes Made for Your Special Moments',
    subtitle: 'Love, Happiness & Togetherness',
    description: 'Celebrate love, happiness, and togetherness with delicious multi-tiered cakes made for weddings, anniversaries, and engagements. Let Kumar Cakes N Bakes make your moments extra special.',
    primaryButton: 'Explore Anniversary & Wedding',
    secondaryButton: 'Plan Cake Tasting',
    image: '/src/assets/images/hero_anniversary_wedding_cake_1793608153543.jpg',
    accentText: 'Handcrafted Sugar Flowers'
  }
];

export const PRODUCTS: CakeProduct[] = [
  {
    id: 'cake-choc-fudge',
    name: 'Belgian Chocolate Fudge Drip Cake',
    category: 'chocolate',
    categoryLabel: 'Chocolate Cakes',
    description: 'Decadent Belgian dark chocolate layers drenched in silky warm chocolate ganache drip, topped with fresh forest berries and golden chocolate curls.',
    image: '/src/assets/images/hero_signature_chocolate_cake_1793608151487.jpg',
    weights: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Belgian Dark', 'Truffle Ganache', 'Nutella Swirl']
  },
  {
    id: 'cake-birthday-pastel',
    name: 'Whimsical Pastel Macaron Birthday Cake',
    category: 'birthday',
    categoryLabel: 'Birthday Cakes',
    description: 'Three-tiered ombre vanilla bean sponge with Swiss meringue buttercream, French macarons, edible gold leaf, and celebratory handcrafted piping.',
    image: '/src/assets/images/hero_birthday_celebration_cake_1793608152273.jpg',
    weights: ['1 kg', '1.5 kg', '2 kg', '3 kg (2-Tier)'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Vanilla Buttercream', 'Strawberry Cream', 'White Chocolate']
  },
  {
    id: 'cake-royal-wedding',
    name: 'Ivory Rose & Gold Anniversary Cake',
    category: 'anniversary',
    categoryLabel: 'Wedding & Anniversary',
    description: 'Magnificent tiered celebration cake draped in ivory silk buttercream with handcrafted sugar blush roses and delicate 24k gold foil trims.',
    image: '/src/assets/images/hero_anniversary_wedding_cake_1793608153543.jpg',
    weights: ['2 kg (2-Tier)', '3 kg (3-Tier)', '5 kg (Multi-Tier)'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Royal Almond', 'Red Velvet with Vanilla', 'Hazelnut Praline']
  },
  {
    id: 'cake-red-velvet',
    name: 'Southern Classic Red Velvet Rosette Cake',
    category: 'red-velvet',
    categoryLabel: 'Red Velvet',
    description: 'Traditional crimson cocoa sponge piped with luxurious Philadelphia cream cheese rosettes and sprinkled with delicate red velvet crumble.',
    image: '/src/assets/images/cake_red_velvet_delight_1793608173951.jpg',
    weights: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Classic Cream Cheese', 'Red Velvet Oreo']
  },
  {
    id: 'cake-black-forest',
    name: 'Authentic Bavarian Black Forest Gateau',
    category: 'black-forest',
    categoryLabel: 'Black Forest',
    description: 'Layers of moist chocolate sponge infused with sweet cherry glaze, filled with fresh whipped dairy cream and topped with dark Belgian chocolate shavings.',
    image: '/src/assets/images/cake_black_forest_cherry_1793608173436.jpg',
    weights: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Traditional Cherry Cream', 'Double Chocolate Black Forest']
  },
  {
    id: 'cake-designer-kids',
    name: 'Enchanted Star & Balloon Designer Theme Cake',
    category: 'designer',
    categoryLabel: 'Designer & Theme Cakes',
    description: 'Custom handcrafted celebratory theme cake with vibrant artistic brushstrokes, sugar star toppers, mini pastel balloons, and custom name plaque.',
    image: '/src/assets/images/cake_designer_party_theme_1793608175117.jpg',
    weights: ['1 kg', '1.5 kg', '2 kg', '3 kg'],
    isEgglessAvailable: true,
    isBestseller: false,
    flavors: ['Rainbow Vanilla', 'Chocolate Truffle', 'Butterscotch Crunch']
  },
  {
    id: 'cake-display-pastries',
    name: 'Fresh Bakery Cupcakes & Artisanal Fruit Tart Box',
    category: 'desserts',
    categoryLabel: 'Cupcakes & Desserts',
    description: 'Handcrafted box of 6 gourmet cupcakes (Salted Caramel, Red Velvet, Blueberry Crumble) alongside fresh custard fruit tarts from our display.',
    image: '/src/assets/images/gmb_shop_display_counter_1793608154224.jpg',
    weights: ['Box of 4', 'Box of 6', 'Box of 12'],
    isEgglessAvailable: true,
    isBestseller: true,
    flavors: ['Assorted Chef Special', 'All Chocolate Selection']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Kumar Cakes N Bakes Karnal Storefront',
    category: 'shop',
    categoryLabel: 'Bakery Shop & Ambiance',
    image: '/src/assets/images/gmb_bakery_shopfront_1793608153579.jpg',
    description: 'Our welcoming bakery shop at SCO 77, Nehru Palace, Karnal with warm ambient lighting and daily fresh bakes.'
  },
  {
    id: 'gal-2',
    title: 'Signature Chocolate Drip Cake',
    category: 'cakes',
    categoryLabel: 'Artisan Cakes',
    image: '/src/assets/images/hero_signature_chocolate_cake_1793608151487.jpg',
    description: 'Fresh Belgian chocolate fudge celebration cake crafted for special occasions.'
  },
  {
    id: 'gal-3',
    title: 'Daily Fresh Pastry & Cake Counter',
    category: 'shop',
    categoryLabel: 'Bakery Shop & Ambiance',
    image: '/src/assets/images/gmb_shop_display_counter_1793608154224.jpg',
    description: 'Pristine glass display case filled with fresh gourmet cupcakes, pastries, fruit tarts, and cake slices.'
  },
  {
    id: 'gal-4',
    title: 'Pastel Birthday Celebration Cake',
    category: 'celebrations',
    categoryLabel: 'Birthday Celebrations',
    image: '/src/assets/images/hero_birthday_celebration_cake_1793608152273.jpg',
    description: 'Custom birthday cake decorated with pastel ombre buttercream and French macarons.'
  },
  {
    id: 'gal-5',
    title: 'Grand Anniversary Rose Cake',
    category: 'celebrations',
    categoryLabel: 'Weddings & Anniversaries',
    image: '/src/assets/images/hero_anniversary_wedding_cake_1793608153543.jpg',
    description: 'Four-tiered romantic ivory rose celebration cake with gold leaf detailing.'
  },
  {
    id: 'gal-6',
    title: 'Southern Red Velvet Rosette Cake',
    category: 'cakes',
    categoryLabel: 'Artisan Cakes',
    image: '/src/assets/images/cake_red_velvet_delight_1793608173951.jpg',
    description: 'Velvety cream cheese frosting rosettes and authentic red velvet sponge.'
  },
  {
    id: 'gal-7',
    title: 'Classic German Black Forest Gateau',
    category: 'cakes',
    categoryLabel: 'Artisan Cakes',
    image: '/src/assets/images/cake_black_forest_cherry_1793608173436.jpg',
    description: 'Chocolate shavings and glazed maraschino cherries on fresh dairy whipped cream.'
  },
  {
    id: 'gal-8',
    title: 'Custom Kids Party Theme Cake',
    category: 'designer',
    categoryLabel: 'Designer & Theme Cakes',
    image: '/src/assets/images/cake_designer_party_theme_1793608175117.jpg',
    description: 'Whimsical customized fondant character cake for children birthdays.'
  }
];

export const GMB_REVIEWS: GMBReview[] = [
  {
    id: 'rev-1',
    author: 'Rajeev Singla',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best bakery in Karnal by far! We ordered a 2-tier chocolate fudge cake for my parents’ 25th anniversary from Nehru Palace. The taste was rich, not too sweet, and 100% eggless as requested. Everyone loved it!',
    location: 'Sector 13, Karnal'
  },
  {
    id: 'rev-2',
    author: 'Pooja Verma',
    rating: 5,
    date: '1 month ago',
    comment: 'Have been purchasing birthday cakes from Kumar Cakes N Bakes since 2012. Always consistent quality, soft sponge, and beautiful custom decorations. The red velvet cake was exceptional!',
    location: 'Model Town, Karnal'
  },
  {
    id: 'rev-3',
    author: 'Amit Chopra',
    rating: 5,
    date: '2 months ago',
    comment: 'Ordered through WhatsApp for urgent delivery at Dyal Singh Colony. The cake arrived in pristine condition within 45 minutes, freshly baked and looking just like the photo. Highly recommended!',
    location: 'Dyal Singh Colony, Karnal'
  },
  {
    id: 'rev-4',
    author: 'Dr. Neha Sharma',
    rating: 5,
    date: '3 months ago',
    comment: 'The bakery shop in Nehru Palace is so clean and inviting. Their cupcakes and Black Forest gateau are our family favorites for every celebration. Very courteous staff!',
    location: 'Urban Estate, Karnal'
  }
];

export const OCCASIONS_LIST = [
  { name: 'Birthday Celebrations', desc: 'Custom milestone numbers, themes, and personalized names' },
  { name: 'Wedding Ceremonies', desc: 'Grand multi-tiered luxury cakes tailored to wedding themes' },
  { name: 'Anniversary Celebrations', desc: 'Romantic floral designs, gold accents, and sweet memories' },
  { name: 'Engagement Parties', desc: 'Modern minimalist elegance and delicate ring presentation cakes' },
  { name: 'Baby Showers', desc: 'Soft pastel gender reveals and cute nursery themed creations' },
  { name: 'Family Gatherings', desc: 'Delicious tea-time cakes, cupcakes, and party platters' },
  { name: 'Corporate Celebrations', desc: 'Brand logo cakes and celebration treats for team milestones' },
  { name: 'Festive Occasions', desc: 'Diwali, New Year, Christmas, and Rakhi special dessert hampers' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Since 2010',
    description: 'Over 14 years of trusted baking experience in Karnal, serving thousands of happy families.'
  },
  {
    title: 'Delicious Taste',
    description: 'Irresistible recipes honed to perfection with moist sponges and balanced gourmet frostings.'
  },
  {
    title: 'Beautiful Designs',
    description: 'Cakes that look as wonderful as they taste.'
  },
  {
    title: 'Quality Ingredients',
    description: 'Pure dairy creams, premium chocolates, real fruit purees, and zero artificial shortcuts.'
  },
  {
    title: 'Perfect for Every Occasion',
    description: 'From intimate birthdays to grand 500-guest weddings, we craft bespoke centerpiece cakes.'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your joy is our sweetness. Prompt delivery across Karnal and personalized customer care.'
  }
];
