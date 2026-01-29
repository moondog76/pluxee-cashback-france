# Pluxee Cashback France - Complete Builder Plan

## Project Overview

Build a mobile-first web application showcasing the Pluxee Cashback experience for the French market. This is a **demo/prototype application** with hardcoded mock data - no database or authentication required.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Railway
- **Development**: GitHub Codespaces with Claude Code

---

## Brand Guidelines Summary

### Colors (Tailwind Config)
```javascript
colors: {
  'deep-blue': '#221C46',      // Primary text, headers, dark backgrounds
  'ultra-green': '#00EB5E',    // Primary accent, CTAs, highlights
  'boldly-blue': '#17CCF9',    // Secondary accent
  'very-yellow': '#FFDC37',    // Tertiary accent
  'confidently-coral': '#FF7375', // Warning/delete actions
  'simply-white': '#FFFFFF',   // Backgrounds
}
```

### Typography
- **Font Family**: Use system fonts that mimic "TT Travels" - suggest Inter or system-ui
- **Headings**: Bold/DemiBold, Deep Blue or White
- **Body**: Regular weight, sentence case
- **Never use bullet points in UI** - use proper list styling with the numbering system

### Key Brand Elements
- **X-mark**: The signature Pluxee symbol - use as decorative element, photo aperture, or message punctuation
- **Holding shapes**: Rectangles with incisions (triangle cut-outs) or chamfers (angled corners)
- **Green accent indicators**: Vertical green bars on the left side of offer cards
- **"Fast cashback" badges**: Green pill-shaped badges with X icon

---

## Application Structure

### Navigation (Bottom Tab Bar)
Four tabs matching the screenshots:
1. **Home** (house icon) - Main feed with offers
2. **Discover** (magnifying glass icon) - Browse by category + map
3. **Cashback** (receipt/card icon) - User's cashback history
4. **Profile** (person icon) - Settings and account

### Pages to Build

#### 1. Home Page (`/`)
- Hero banner with cyan background: "Commencez à gagner aujourd'hui !" with piggy bank illustration
- **Favourites section**: Horizontal scrollable cards
- **New for you section**: Offer cards
- **Trending section**: "View all" link

#### 2. Discover Page (`/discover`)
- Search bar: "Rechercher par récompenses et magasins"
- Filter pills: "Tout le cashback" | "Cashback rapide" | Location icon
- Categories with offers:
  - Mode (Fashion)
  - Alimentation (Food & Drink)
  - Épicerie (Groceries)
- Map view toggle (Store Locator)

#### 3. Merchant Detail Page (`/merchant/[id]`)
- Hero image with merchant logo overlay
- Category label (e.g., "Épicerie")
- Merchant name + Earn percentage box
- Offer description
- Minimum purchase info
- Availability info
- "About" section

#### 4. Cashback Page (`/cashback`)
- Empty state with telescope illustration
- "Pas encore de cashback !"
- "Dépensez pour gagner ! Plus d'achats, plus d'économies."
- CTA button: "Découvrir où dépenser"

#### 5. Profile Page (`/profile`)
- Settings list with chevrons:
  - Notifications
  - E-mail & Communication
  - IBAN
  - À propos de Pluxee
  - Support & FAQ
  - Conditions d'utilisation
  - Politique de confidentialité
  - Exporter vos données
  - Supprimer votre compte
  - Déconnexion

#### 6. Sub-pages
- `/profile/notifications` - Notification preferences
- `/profile/email` - Email settings with form
- `/profile/iban` - Bank account form
- `/discover/map` - Store locator map view

---

## Mock Data - French Merchants

### Categories
```typescript
export const categories = [
  { id: 'groceries', name: 'Épicerie', nameEn: 'Groceries', color: '#00EB5E' },
  { id: 'food-drink', name: 'Alimentation', nameEn: 'Food & Drink', color: '#FF7375' },
  { id: 'fashion', name: 'Mode', nameEn: 'Fashion', color: '#FF7375' },
  { id: 'bakery', name: 'Boulangerie', nameEn: 'Bakery', color: '#FFDC37' },
  { id: 'restaurant', name: 'Restaurant', nameEn: 'Restaurant', color: '#17CCF9' },
];
```

### Merchants
```typescript
export const merchants = [
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
```

### Offers
```typescript
export const offers = [
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
```

---

## Component Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with bottom nav
│   ├── page.tsx             # Home page
│   ├── discover/
│   │   ├── page.tsx         # Discover page
│   │   └── map/
│   │       └── page.tsx     # Map view
│   ├── cashback/
│   │   └── page.tsx         # Cashback history
│   ├── profile/
│   │   ├── page.tsx         # Profile settings
│   │   ├── notifications/
│   │   │   └── page.tsx
│   │   ├── email/
│   │   │   └── page.tsx
│   │   └── iban/
│   │       └── page.tsx
│   └── merchant/
│       └── [id]/
│           └── page.tsx     # Merchant detail
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── TabBar.tsx
│   ├── layout/
│   │   ├── BottomNav.tsx
│   │   ├── Header.tsx
│   │   └── PageContainer.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   └── OfferCard.tsx
│   ├── discover/
│   │   ├── SearchBar.tsx
│   │   ├── FilterPills.tsx
│   │   └── CategorySection.tsx
│   └── merchant/
│       ├── MerchantHero.tsx
│       └── MerchantInfo.tsx
├── data/
│   ├── merchants.ts
│   ├── offers.ts
│   └── categories.ts
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## UI Component Specifications

### BottomNav Component
- Fixed at bottom, white background, subtle top shadow
- 4 tabs: Home, Discover, Cashback, Profile
- Active state: filled icon, deep-blue text, light green (#00EB5E at 10% opacity) background
- Inactive: outline icon, gray text

### OfferCard Component
- Horizontal layout with image on left (square, rounded-lg)
- Merchant logo overlaid on bottom-left of image
- Green vertical bar (4px) on left edge of entire card
- Right side: category label (colored), title (bold), merchant name
- Bottom right: cashback % badge + "Cashback rapide" pill if applicable
- Heart icon top-right for favorites

### HeroBanner Component
- Background: boldly-blue (#17CCF9)
- Text: deep-blue
- Left side: headline + subtitle
- Right side: piggy bank illustration (SVG)
- Chevron on right edge

### CashbackBadge Component
```tsx
// Circle with € icon + percentage
<div className="flex items-center gap-1 text-sm">
  <span className="text-deep-blue">€</span>
  <span className="font-bold">{percent}%</span>
</div>
```

### FastCashbackPill Component
```tsx
// Green pill with X icon
<div className="bg-ultra-green text-deep-blue px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
  <XMarkIcon className="w-3 h-3" />
  Cashback rapide
</div>
```

---

## Styling Guidelines

### Shadows
```css
/* Card shadow */
box-shadow: 0 2px 8px rgba(34, 28, 70, 0.08);

/* Bottom nav shadow */
box-shadow: 0 -2px 10px rgba(34, 28, 70, 0.05);
```

### Border Radius
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px) or `rounded-full` for pills
- Images: `rounded-lg` (8px)
- Input fields: `rounded-lg` (8px)

### Spacing
- Page padding: `px-4` (16px horizontal)
- Section margin: `mt-6` (24px)
- Card padding: `p-4` (16px)
- Gap between cards: `gap-4` (16px)

### Text Sizes
- Page titles: `text-2xl font-bold text-deep-blue`
- Section headers: `text-lg font-semibold text-deep-blue`
- Card titles: `text-base font-bold text-deep-blue`
- Body text: `text-sm text-gray-600`
- Labels/categories: `text-xs font-medium`

---

## Initialize Project Commands

Run these commands in order after opening Codespaces:

```bash
# 1. Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Install additional dependencies
npm install lucide-react

# 3. Start development server
npm run dev
```

---

## Tailwind Configuration

Replace `tailwind.config.ts` with:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#221C46',
        'ultra-green': '#00EB5E',
        'boldly-blue': '#17CCF9',
        'very-yellow': '#FFDC37',
        'confidently-coral': '#FF7375',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## French Copy Reference

### Navigation
- Accueil (Home)
- Découvrir (Discover)
- Cashback
- Profil (Profile)

### Home Page
- "Commencez à gagner aujourd'hui !" - Start earning today!
- "Dépensez pour gagner, plus d'achats, plus d'économies." - Spend to earn, more shopping, more savings.
- "Favoris" - Favourites
- "Nouveau pour vous" - New for you
- "Tendances" - Trending
- "Voir tout" - View all

### Discover Page
- "Rechercher par récompenses et magasins" - Search by rewards and stores
- "Tout le cashback" - All cashback
- "Cashback rapide" - Fast cashback

### Merchant Detail
- "Gagnez" - Earn
- "Achat minimum" - Minimum purchase
- "Disponibilité limitée" - Limited availability
- "Dépend de l'offre du marchand" - Depends on the brand's supply
- "À propos de" - About

### Cashback Page
- "Pas encore de cashback !" - No cashback yet!
- "Dépensez pour gagner ! Plus d'achats, plus d'économies." - Spend to earn! More shopping, more savings.
- "Découvrir où dépenser" - Discover where to spend

### Profile Page
- Notifications - Paramètres
- E-mail & Communication - Paramètres
- IBAN - Paramètres
- À propos de Pluxee
- Support & FAQ - Pluxee
- Conditions d'utilisation - Pluxee
- Politique de confidentialité - Pluxee
- Exporter vos données - Compte
- Supprimer votre compte - Compte
- Déconnexion - Compte

### Buttons
- "Enregistrer" - Save
- "Supprimer" - Remove/Delete
- "Ajouter" - Add

---

## Implementation Priority

### Phase 1: Foundation (Day 1)
1. ✅ Initialize Next.js with Tailwind
2. Configure brand colors
3. Create BottomNav component
4. Create basic layout structure
5. Add data files with merchants

### Phase 2: Core Pages (Day 1-2)
1. Home page with HeroBanner
2. OfferCard component
3. Discover page with categories
4. Merchant detail page
5. Profile page with settings list

### Phase 3: Polish (Day 2)
1. Cashback empty state
2. Profile sub-pages
3. Favorites functionality (local state)
4. Responsive refinements
5. Loading states

### Phase 4: Deploy (Day 2)
1. Connect Railway
2. Deploy
3. Test on mobile

---

## Notes for Claude Code

When building:

1. **Mobile-first**: Design for 375px width viewport
2. **No backend**: All data is in `/src/data/` folder
3. **Images**: Use Unsplash URLs provided in merchant data
4. **Logos**: Create simple colored rectangles or letters as placeholders
5. **Icons**: Use Lucide React icons
6. **French**: All UI text must be in French
7. **Keep simple**: This is a demo - visual accuracy over functionality

Start by reading this file, then initialize the project and build page by page!
