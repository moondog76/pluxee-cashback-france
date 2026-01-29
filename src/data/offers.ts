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
];
