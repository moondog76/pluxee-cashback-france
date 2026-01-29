export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  cashbackPercent: number;
  fastCashback: boolean;
  logo: string;
  heroImage: string;
  description: string;
  minPurchase: number;
  currency: string;
  about: string;
  availability: string;
  locations: Location[];
}

export const merchants: Merchant[] = [
  {
    id: 'carrefour',
    name: 'Carrefour',
    category: 'groceries',
    cashbackPercent: 3,
    fastCashback: true,
    logo: '/logos/carrefour.svg',
    heroImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
    description: 'Enjoy 3% cashback with Pluxee at Carrefour for all your grocery purchases.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'Carrefour is the leading French retailer. Find all your food, fresh produce and daily essentials in over 5,000 stores across France.',
    availability: 'Available at all Carrefour, Carrefour Market and Carrefour City stores',
    locations: [
      { lat: 48.8566, lng: 2.3522, address: '15 Rue de Rivoli, 75001 Paris' },
      { lat: 48.8738, lng: 2.2950, address: '35 Avenue des Champs-Élysées, 75008 Paris' },
    ]
  },
  {
    id: 'monoprix',
    name: 'Monoprix',
    category: 'groceries',
    cashbackPercent: 4,
    fastCashback: true,
    logo: '/logos/monoprix.svg',
    heroImage: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800',
    description: 'Earn 4% cashback on your shopping at Monoprix with your Pluxee card.',
    minPurchase: 15,
    currency: 'EUR',
    about: 'Monoprix is a city-center retail chain offering food, fashion and home goods. Quality and convenience in the heart of French cities.',
    availability: 'Valid at all Monoprix and Monop\' stores',
    locations: [
      { lat: 48.8606, lng: 2.3376, address: '21 Avenue de l\'Opéra, 75001 Paris' },
    ]
  },
  {
    id: 'paul',
    name: 'PAUL',
    category: 'bakery',
    cashbackPercent: 5,
    fastCashback: true,
    logo: '/logos/paul.svg',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    description: 'Savor the delights of PAUL and earn 5% cashback on your bakery and pastry purchases.',
    minPurchase: 5,
    currency: 'EUR',
    about: 'Since 1889, PAUL has perpetuated the French baking tradition with artisan breads, viennoiseries and quality pastries.',
    availability: 'At all PAUL bakeries across France',
    locations: [
      { lat: 48.8529, lng: 2.3500, address: '77 Rue de Rennes, 75006 Paris' },
    ]
  },
  {
    id: 'boulangerie-louise',
    name: 'Boulangerie Louise',
    category: 'bakery',
    cashbackPercent: 6,
    fastCashback: false,
    logo: '/logos/louise.svg',
    heroImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
    description: 'Get 6% cashback at Boulangerie Louise for your breads, croissants and sandwiches.',
    minPurchase: 3,
    currency: 'EUR',
    about: 'Boulangerie Louise offers fresh artisan products: breads, pastries, sandwiches and salads prepared daily.',
    availability: 'Over 100 bakeries across France',
    locations: [
      { lat: 48.8844, lng: 2.3448, address: '45 Rue du Faubourg Montmartre, 75009 Paris' },
    ]
  },
  {
    id: 'flunch',
    name: 'Flunch',
    category: 'restaurant',
    cashbackPercent: 8,
    fastCashback: true,
    logo: '/logos/flunch.svg',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    description: 'Treat yourself at Flunch and enjoy 8% cashback on your bill.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'Flunch is a restaurant chain offering an all-you-can-eat buffet with varied dishes, salads, grills and desserts.',
    availability: 'At all Flunch restaurants across France',
    locations: [
      { lat: 48.8490, lng: 2.3862, address: 'Centre Commercial Bercy 2, 75012 Paris' },
    ]
  },
  {
    id: 'bistro-regent',
    name: 'Bistro Régent',
    category: 'restaurant',
    cashbackPercent: 7,
    fastCashback: true,
    logo: '/logos/bistro-regent.svg',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
    description: 'Enjoy a great meal at Bistro Régent and earn 7% cashback.',
    minPurchase: 15,
    currency: 'EUR',
    about: 'Bistro Régent offers generous French bistro cuisine with fresh seasonal products in a friendly atmosphere.',
    availability: 'Over 180 restaurants across France',
    locations: [
      { lat: 48.8667, lng: 2.3333, address: '12 Place de la Madeleine, 75008 Paris' },
    ]
  },
  {
    id: 'picard',
    name: 'Picard',
    category: 'groceries',
    cashbackPercent: 4,
    fastCashback: true,
    logo: '/logos/picard.svg',
    heroImage: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800',
    description: 'Discover Picard frozen foods and get 4% cashback on your purchases.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'Picard is the French specialist in quality frozen foods: prepared meals, vegetables, desserts and products from around the world.',
    availability: 'At all Picard stores across France',
    locations: [
      { lat: 48.8700, lng: 2.3200, address: '28 Avenue de Wagram, 75017 Paris' },
    ]
  },
  {
    id: 'franprix',
    name: 'Franprix',
    category: 'groceries',
    cashbackPercent: 3,
    fastCashback: false,
    logo: '/logos/franprix.svg',
    heroImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800',
    description: 'Shop at Franprix and earn 3% cashback with Pluxee.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'Franprix is your neighborhood city supermarket, open late with everything you need for daily life.',
    availability: 'Available at all Franprix stores',
    locations: [
      { lat: 48.8530, lng: 2.3690, address: '95 Rue de la Roquette, 75011 Paris' },
    ]
  },
];
