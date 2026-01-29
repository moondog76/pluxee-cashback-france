export interface Offer {
  id: string;
  merchantId: string;
  title: string;
  featured: boolean;
}

export const offers: Offer[] = [
  {
    id: 'offer-1',
    merchantId: 'carrefour',
    title: 'Shop with Pluxee and Earn',
    featured: true,
  },
  {
    id: 'offer-2',
    merchantId: 'paul',
    title: 'Gourmet Breakfast',
    featured: true,
  },
  {
    id: 'offer-3',
    merchantId: 'bistro-regent',
    title: 'Lunch at the Bistro',
    featured: false,
  },
  {
    id: 'offer-4',
    merchantId: 'monoprix',
    title: 'City Shopping',
    featured: true,
  },
  {
    id: 'offer-5',
    merchantId: 'flunch',
    title: 'All-You-Can-Eat Buffet',
    featured: false,
  },
  {
    id: 'offer-6',
    merchantId: 'picard',
    title: 'Quality Frozen Foods',
    featured: true,
  },
  {
    id: 'offer-7',
    merchantId: 'boulangerie-louise',
    title: 'Fresh Croissants',
    featured: false,
  },
  {
    id: 'offer-8',
    merchantId: 'franprix',
    title: 'Neighborhood Shopping',
    featured: false,
  },
  {
    id: 'offer-9',
    merchantId: 'auchan',
    title: 'Big Savings at Auchan',
    featured: true,
  },
  {
    id: 'offer-10',
    merchantId: 'leclerc',
    title: 'Weekly Deals',
    featured: false,
  },
  {
    id: 'offer-11',
    merchantId: 'decathlon',
    title: 'Sports Equipment',
    featured: true,
  },
  {
    id: 'offer-12',
    merchantId: 'sephora',
    title: 'Beauty Essentials',
    featured: true,
  },
  {
    id: 'offer-13',
    merchantId: 'fnac',
    title: 'Tech & Entertainment',
    featured: false,
  },
  {
    id: 'offer-14',
    merchantId: 'darty',
    title: 'Home Appliances',
    featured: false,
  },
  {
    id: 'offer-15',
    merchantId: 'mcdonalds',
    title: 'Fast Food Favorites',
    featured: true,
  },
  {
    id: 'offer-16',
    merchantId: 'starbucks',
    title: 'Coffee Break',
    featured: true,
  },
  {
    id: 'offer-17',
    merchantId: 'zara',
    title: 'Latest Fashion Trends',
    featured: true,
  },
  {
    id: 'offer-18',
    merchantId: 'hm',
    title: 'Affordable Style',
    featured: false,
  },
  {
    id: 'offer-19',
    merchantId: 'la-poste',
    title: 'Postal Services',
    featured: false,
  },
  {
    id: 'offer-20',
    merchantId: 'total-energies',
    title: 'Fuel Savings',
    featured: false,
  },
];
