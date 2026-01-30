'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Menu, MapPin, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import HeroBanner from '@/components/home/HeroBanner';
import HorizontalOfferCard from '@/components/home/HorizontalOfferCard';
import { offers } from '@/data/offers';

export default function CashbackHomePage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleToggleFavorite = (merchantId: string) => {
    const newFavorites = favorites.includes(merchantId)
      ? favorites.filter((id) => id !== merchantId)
      : [...favorites, merchantId];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const favoriteOffers = offers.filter((offer) => favorites.includes(offer.merchantId));

  // Top Brands: Carrefour, Monoprix, Auchan, Leclerc, Fnac, Decathlon
  const topBrandIds = ['carrefour', 'monoprix', 'auchan', 'leclerc', 'fnac', 'decathlon'];
  const topBrandOffers = offers.filter((offer) => topBrandIds.includes(offer.merchantId));

  // Time for Lunch: PAUL, Flunch, Bistro Régent, McDonald's, Starbucks, Boulangerie Louise
  const lunchIds = ['paul', 'flunch', 'bistro-regent', 'mcdonalds', 'starbucks', 'louise'];
  const lunchOffers = offers.filter((offer) => lunchIds.includes(offer.merchantId));

  // Online: Sephora, Zara, H&M, Fnac, Decathlon
  const onlineIds = ['sephora', 'zara', 'hm', 'fnac', 'decathlon'];
  const onlineOffers = offers.filter((offer) => onlineIds.includes(offer.merchantId));

  // Trending: mix of all merchants
  const trendingOffers = offers.slice(5, 15);

  return (
    <PageContainer>
      <div className="pb-4">
        {/* Header with Back Button and Hamburger Menu */}
        <header className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/')}>
              <ArrowLeft className="w-6 h-6 text-deep-blue" />
            </button>
            <h1 className="text-xl font-bold text-deep-blue">Cashback</h1>
          </div>

          {/* Hamburger Menu */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6 text-deep-blue" />
            </button>

            {menuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Menu dropdown */}
                <div className="absolute right-0 top-10 bg-white rounded-xl shadow-lg border z-50 min-w-[200px] py-2">
                  <button
                    onClick={() => {
                      router.push('/discover');
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50"
                  >
                    <MapPin className="w-5 h-5 text-ultra-green" />
                    <span className="text-deep-blue font-medium">Store Finder</span>
                  </button>
                  <button
                    onClick={() => {
                      router.push('/cashback');
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50"
                  >
                    <Wallet className="w-5 h-5 text-ultra-green" />
                    <span className="text-deep-blue font-medium">My Cashback</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </header>

        <div className="px-4">
          <HeroBanner />
        </div>

        {/* Favorites - only show if user has favorites */}
        {favoriteOffers.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
              Favorites <span className="text-gray-500">({favoriteOffers.length})</span>
            </h2>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
              {favoriteOffers.map((offer) => (
                <HorizontalOfferCard
                  key={offer.id}
                  merchantId={offer.merchantId}
                  title={offer.title}
                  isFavorite={true}
                  onToggleFavorite={() => handleToggleFavorite(offer.merchantId)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Top Brands */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
            Top Brands <span className="text-gray-500">({topBrandOffers.length})</span>
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {topBrandOffers.map((offer) => (
              <HorizontalOfferCard
                key={offer.id}
                merchantId={offer.merchantId}
                title={offer.title}
                isFavorite={favorites.includes(offer.merchantId)}
                onToggleFavorite={() => handleToggleFavorite(offer.merchantId)}
              />
            ))}
          </div>
        </section>

        {/* Time for Lunch */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
            Time for Lunch <span className="text-gray-500">({lunchOffers.length})</span>
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {lunchOffers.map((offer) => (
              <HorizontalOfferCard
                key={offer.id}
                merchantId={offer.merchantId}
                title={offer.title}
                isFavorite={favorites.includes(offer.merchantId)}
                onToggleFavorite={() => handleToggleFavorite(offer.merchantId)}
              />
            ))}
          </div>
        </section>

        {/* Online */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
            Online <span className="text-gray-500">({onlineOffers.length})</span>
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {onlineOffers.map((offer) => (
              <HorizontalOfferCard
                key={offer.id}
                merchantId={offer.merchantId}
                title={offer.title}
                isFavorite={favorites.includes(offer.merchantId)}
                onToggleFavorite={() => handleToggleFavorite(offer.merchantId)}
              />
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3 px-4">
            <h2 className="text-lg font-semibold text-deep-blue">
              Trending <span className="text-gray-500">({trendingOffers.length})</span>
            </h2>
            <a href="/discover" className="text-sm text-ultra-green font-medium">
              View All
            </a>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {trendingOffers.map((offer) => (
              <HorizontalOfferCard
                key={offer.id}
                merchantId={offer.merchantId}
                title={offer.title}
                isFavorite={favorites.includes(offer.merchantId)}
                onToggleFavorite={() => handleToggleFavorite(offer.merchantId)}
              />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
