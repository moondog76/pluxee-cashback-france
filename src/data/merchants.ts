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
    cashbackPercent: 8,
    logo: '/logos/carrefour.svg',
    heroImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
    description: 'Enjoy 8% cashback with Pluxee at Carrefour for all your grocery purchases.',
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
    cashbackPercent: 12,
    logo: '/logos/monoprix.svg',
    heroImage: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800',
    description: 'Earn 12% cashback on your shopping at Monoprix with your Pluxee card.',
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
    cashbackPercent: 15,
    logo: '/logos/paul.svg',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    description: 'Savor the delights of PAUL and earn 15% cashback on your bakery and pastry purchases.',
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
    cashbackPercent: 18,
    logo: '/logos/louise.svg',
    heroImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
    description: 'Get 18% cashback at Boulangerie Louise for your breads, croissants and sandwiches.',
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
    cashbackPercent: 25,
    logo: '/logos/flunch.svg',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    description: 'Treat yourself at Flunch and enjoy 25% cashback on your bill.',
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
    cashbackPercent: 20,
    logo: '/logos/bistro-regent.svg',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
    description: 'Enjoy a great meal at Bistro Régent and earn 20% cashback.',
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
    cashbackPercent: 10,
    logo: '/logos/picard.svg',
    heroImage: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800',
    description: 'Discover Picard frozen foods and get 10% cashback on your purchases.',
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
    cashbackPercent: 7,
    logo: '/logos/franprix.svg',
    heroImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800',
    description: 'Shop at Franprix and earn 7% cashback with Pluxee.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'Franprix is your neighborhood city supermarket, open late with everything you need for daily life.',
    availability: 'Available at all Franprix stores',
    locations: [
      { lat: 48.8530, lng: 2.3690, address: '95 Rue de la Roquette, 75011 Paris' },
    ]
  },
  {
    id: 'auchan',
    name: 'Auchan',
    category: 'groceries',
    cashbackPercent: 9,
    logo: '/logos/auchan.svg',
    heroImage: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800',
    description: 'Get 9% cashback with Pluxee at Auchan hypermarkets.',
    minPurchase: 25,
    currency: 'EUR',
    about: 'Auchan is one of France\'s largest hypermarket chains, offering everything from groceries to electronics and clothing.',
    availability: 'Available at all Auchan hypermarkets nationwide',
    locations: [
      { lat: 48.8920, lng: 2.2380, address: 'Centre Commercial Les 4 Temps, 92800 Puteaux' },
    ]
  },
  {
    id: 'leclerc',
    name: 'E.Leclerc',
    category: 'groceries',
    cashbackPercent: 6,
    logo: '/logos/leclerc.svg',
    heroImage: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=800',
    description: 'Shop at E.Leclerc and enjoy 6% cashback on all purchases.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'E.Leclerc is France\'s largest supermarket chain, known for competitive prices and wide selection.',
    availability: 'Valid at all E.Leclerc stores',
    locations: [
      { lat: 48.8410, lng: 2.3200, address: 'Boulevard de Port Royal, 75013 Paris' },
    ]
  },
  {
    id: 'decathlon',
    name: 'Decathlon',
    category: 'sports',
    cashbackPercent: 12,
    logo: '/logos/decathlon.svg',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    description: 'Get 12% cashback on sports gear and equipment at Decathlon.',
    minPurchase: 30,
    currency: 'EUR',
    about: 'Decathlon is Europe\'s leading sports retailer, offering equipment for over 80 sports at affordable prices.',
    availability: 'At all Decathlon stores across France',
    locations: [
      { lat: 48.8270, lng: 2.3770, address: '26 Avenue d\'Ivry, 75013 Paris' },
    ]
  },
  {
    id: 'sephora',
    name: 'Sephora',
    category: 'beauty',
    cashbackPercent: 15,
    logo: '/logos/sephora.svg',
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
    description: 'Earn 15% cashback on beauty and cosmetics at Sephora.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'Sephora is a leading beauty retailer offering makeup, skincare, fragrance and haircare from top brands.',
    availability: 'Valid at all Sephora stores and online',
    locations: [
      { lat: 48.8698, lng: 2.3075, address: '70 Avenue des Champs-Élysées, 75008 Paris' },
    ]
  },
  {
    id: 'fnac',
    name: 'Fnac',
    category: 'electronics',
    cashbackPercent: 8,
    logo: '/logos/fnac.svg',
    heroImage: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
    description: 'Get 8% cashback on electronics, books and media at Fnac.',
    minPurchase: 40,
    currency: 'EUR',
    about: 'Fnac is a French retail chain selling electronics, books, music, movies and cultural products.',
    availability: 'At all Fnac stores nationwide',
    locations: [
      { lat: 48.8656, lng: 2.3212, address: '74 Avenue des Ternes, 75017 Paris' },
    ]
  },
  {
    id: 'darty',
    name: 'Darty',
    category: 'electronics',
    cashbackPercent: 10,
    logo: '/logos/darty.svg',
    heroImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800',
    description: 'Enjoy 10% cashback on appliances and electronics at Darty.',
    minPurchase: 50,
    currency: 'EUR',
    about: 'Darty specializes in household appliances, electronics and tech products with excellent after-sales service.',
    availability: 'Valid at all Darty stores',
    locations: [
      { lat: 48.8442, lng: 2.3470, address: '85 Boulevard Saint-Germain, 75006 Paris' },
    ]
  },
  {
    id: 'mcdonalds',
    name: 'McDonald\'s',
    category: 'restaurant',
    cashbackPercent: 20,
    logo: '/logos/mcdonalds.svg',
    heroImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    description: 'Get 20% cashback on your McDonald\'s meals.',
    minPurchase: 5,
    currency: 'EUR',
    about: 'McDonald\'s offers fast food favorites including burgers, fries, breakfast items and more.',
    availability: 'At participating McDonald\'s locations',
    locations: [
      { lat: 48.8584, lng: 2.2945, address: '119 Avenue des Champs-Élysées, 75008 Paris' },
    ]
  },
  {
    id: 'starbucks',
    name: 'Starbucks',
    category: 'cafe',
    cashbackPercent: 18,
    logo: '/logos/starbucks.svg',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    description: 'Earn 18% cashback on coffee and beverages at Starbucks.',
    minPurchase: 5,
    currency: 'EUR',
    about: 'Starbucks is a global coffeehouse chain serving handcrafted beverages, fresh food and premium coffee.',
    availability: 'At all Starbucks cafés in France',
    locations: [
      { lat: 48.8656, lng: 2.3075, address: '33 Avenue de l\'Opéra, 75002 Paris' },
    ]
  },
  {
    id: 'zara',
    name: 'Zara',
    category: 'fashion',
    cashbackPercent: 14,
    logo: '/logos/zara.svg',
    heroImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
    description: 'Shop at Zara and get 14% cashback on fashion.',
    minPurchase: 30,
    currency: 'EUR',
    about: 'Zara offers the latest fashion trends for women, men and children with new collections every week.',
    availability: 'Valid at all Zara stores',
    locations: [
      { lat: 48.8698, lng: 2.3075, address: '44 Avenue des Champs-Élysées, 75008 Paris' },
    ]
  },
  {
    id: 'hm',
    name: 'H&M',
    category: 'fashion',
    cashbackPercent: 12,
    logo: '/logos/hm.svg',
    heroImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    description: 'Earn 12% cashback on H&M fashion and accessories.',
    minPurchase: 25,
    currency: 'EUR',
    about: 'H&M offers fashion and quality at the best price in a sustainable way for women, men, teenagers and children.',
    availability: 'At all H&M stores nationwide',
    locations: [
      { lat: 48.8670, lng: 2.3210, address: '120 Rue de Rivoli, 75001 Paris' },
    ]
  },
  {
    id: 'la-poste',
    name: 'La Poste',
    category: 'services',
    cashbackPercent: 5,
    logo: '/logos/laposte.svg',
    heroImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800',
    description: 'Get 5% cashback on postal and financial services at La Poste.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'La Poste provides postal services, banking, insurance and mobile phone services across France.',
    availability: 'At all La Poste offices',
    locations: [
      { lat: 48.8686, lng: 2.3416, address: '52 Rue du Louvre, 75001 Paris' },
    ]
  },
  {
    id: 'total-energies',
    name: 'TotalEnergies',
    category: 'fuel',
    cashbackPercent: 7,
    logo: '/logos/total.svg',
    heroImage: 'https://images.unsplash.com/photo-1545262810-77515befe149?w=800',
    description: 'Earn 7% cashback on fuel at TotalEnergies stations.',
    minPurchase: 30,
    currency: 'EUR',
    about: 'TotalEnergies operates gas stations across France providing fuel, car wash and convenience store services.',
    availability: 'At participating TotalEnergies stations',
    locations: [
      { lat: 48.8566, lng: 2.3522, address: '24 Rue de Rivoli, 75004 Paris' },
    ]
  },
];
