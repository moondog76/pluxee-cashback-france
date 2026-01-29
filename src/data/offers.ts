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
    title: 'Achetez avec Pluxee et Gagnez',
    featured: true,
  },
  {
    id: 'offer-2',
    merchantId: 'paul',
    title: 'Petit-déjeuner gourmand',
    featured: true,
  },
  {
    id: 'offer-3',
    merchantId: 'bistro-regent',
    title: 'Déjeuner au Bistro',
    featured: false,
  },
  {
    id: 'offer-4',
    merchantId: 'monoprix',
    title: 'Courses en ville',
    featured: true,
  },
  {
    id: 'offer-5',
    merchantId: 'flunch',
    title: 'Buffet à volonté',
    featured: false,
  },
  {
    id: 'offer-6',
    merchantId: 'picard',
    title: 'Surgelés de qualité',
    featured: true,
  },
  {
    id: 'offer-7',
    merchantId: 'boulangerie-louise',
    title: 'Croissants frais',
    featured: false,
  },
  {
    id: 'offer-8',
    merchantId: 'franprix',
    title: 'Courses de proximité',
    featured: false,
  },
];
