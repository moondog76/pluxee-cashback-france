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
    merchantId: 'leon',
    title: 'Mussels & Belgian Beer',
    featured: true,
  },
  {
    id: 'offer-12',
    merchantId: 'buffalo-grill',
    title: 'Grilled Steaks',
    featured: true,
  },
  {
    id: 'offer-13',
    merchantId: 'hippopotamus',
    title: 'French Steakhouse',
    featured: false,
  },
  {
    id: 'offer-14',
    merchantId: 'del-arte',
    title: 'Italian Favorites',
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
    merchantId: 'buffalo-grill',
    title: 'Steak Night',
    featured: true,
  },
  {
    id: 'offer-18',
    merchantId: 'del-arte',
    title: 'Pizza & Pasta',
    featured: false,
  },
  {
    id: 'offer-19',
    merchantId: 'courtepaille',
    title: 'Grilled Over Wood Fire',
    featured: false,
  },
  {
    id: 'offer-20',
    merchantId: 'leon',
    title: 'Belgian Classics',
    featured: false,
  },
];
