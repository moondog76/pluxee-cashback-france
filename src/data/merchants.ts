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
    description: 'Profitez de 3% de cashback avec Pluxee chez Carrefour pour tous vos achats alimentaires.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'Carrefour est le leader français de la grande distribution. Retrouvez tous vos produits alimentaires, frais et du quotidien dans plus de 5 000 magasins en France.',
    availability: 'Disponible dans tous les Carrefour, Carrefour Market et Carrefour City',
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
    description: 'Gagnez 4% de cashback sur vos courses chez Monoprix avec votre carte Pluxee.',
    minPurchase: 15,
    currency: 'EUR',
    about: 'Monoprix est une enseigne de magasins de centre-ville proposant alimentation, mode et maison. Qualité et praticité au cœur des villes françaises.',
    availability: 'Valable dans tous les magasins Monoprix et Monop\'',
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
    description: 'Savourez les délices de PAUL et gagnez 5% de cashback sur vos achats boulangerie et pâtisserie.',
    minPurchase: 5,
    currency: 'EUR',
    about: 'Depuis 1889, PAUL perpétue la tradition boulangère française avec des pains artisanaux, viennoiseries et pâtisseries de qualité.',
    availability: 'Dans toutes les boulangeries PAUL de France',
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
    description: 'Obtenez 6% de cashback chez Boulangerie Louise pour vos pains, croissants et sandwiches.',
    minPurchase: 3,
    currency: 'EUR',
    about: 'Boulangerie Louise propose des produits frais et artisanaux : pains, viennoiseries, sandwiches et salades préparés chaque jour.',
    availability: 'Plus de 100 boulangeries en France',
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
    description: 'Régalez-vous chez Flunch et profitez de 8% de cashback sur votre addition.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'Flunch est une chaîne de restaurants proposant une formule buffet à volonté avec des plats variés, salades, grillades et desserts.',
    availability: 'Dans tous les restaurants Flunch de France',
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
    description: 'Dégustez un bon repas au Bistro Régent et gagnez 7% de cashback.',
    minPurchase: 15,
    currency: 'EUR',
    about: 'Bistro Régent propose une cuisine bistrot française généreuse avec des produits frais et de saison, dans une ambiance conviviale.',
    availability: 'Plus de 180 restaurants en France',
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
    description: 'Découvrez les surgelés Picard et bénéficiez de 4% de cashback sur vos achats.',
    minPurchase: 20,
    currency: 'EUR',
    about: 'Picard est le spécialiste français des surgelés de qualité : plats cuisinés, légumes, desserts et produits du monde entier.',
    availability: 'Dans tous les magasins Picard de France',
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
    description: 'Faites vos courses chez Franprix et gagnez 3% de cashback avec Pluxee.',
    minPurchase: 10,
    currency: 'EUR',
    about: 'Franprix est votre supermarché de proximité en ville, ouvert tard avec tout ce qu\'il vous faut au quotidien.',
    availability: 'Disponible dans tous les magasins Franprix',
    locations: [
      { lat: 48.8530, lng: 2.3690, address: '95 Rue de la Roquette, 75011 Paris' },
    ]
  },
];
