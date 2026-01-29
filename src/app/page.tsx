'use client';

import { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import HeroBanner from '@/components/home/HeroBanner';
import HorizontalOfferCard from '@/components/home/HorizontalOfferCard';
import { offers } from '@/data/offers';

export default function HomePage() {
  const [favorites, setFavorites] = useState<string[]>([]);

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
  const newOffers = offers.slice(0, 10);
  const trendingOffers = offers.slice(5, 15);

  return (
    <PageContainer>
      <div className="pb-4">
        <div className="px-4">
          <h1 className="text-2xl font-bold text-deep-blue mb-4">Pluxee</h1>
          <HeroBanner />
        </div>

        {favoriteOffers.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
              Favorites ({favoriteOffers.length})
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

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3 px-4">
            New For You ({newOffers.length})
          </h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
            {newOffers.map((offer) => (
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

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3 px-4">
            <h2 className="text-lg font-semibold text-deep-blue">
              Trending ({trendingOffers.length})
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
