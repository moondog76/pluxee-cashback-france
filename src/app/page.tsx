'use client';

import Link from 'next/link';
import { ChevronRight, X, Utensils, Gift } from 'lucide-react';
import BottomNav from '@/components/layout/BottomNav';
import HorizontalOfferCard from '@/components/home/HorizontalOfferCard';
import { offers } from '@/data/offers';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
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

  // Featured cashback offers for dashboard
  const featuredOffers = offers.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Deep Blue Header */}
      <header className="bg-deep-blue p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Pluxee X-mark logo */}
          <div className="bg-ultra-green rounded-full w-10 h-10 flex items-center justify-center">
            <X className="w-6 h-6 text-deep-blue" />
          </div>
        </div>
        <div>
          <p className="text-white/70 text-sm">Welcome back</p>
          <h1 className="text-white text-2xl font-bold">Marie</h1>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Your Cards Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-deep-blue mb-4">Your cards</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {/* Meal Card */}
            <div className="bg-ultra-green rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="w-4 h-4 text-deep-blue" />
                <p className="text-deep-blue text-sm">Meal Card</p>
              </div>
              <p className="text-deep-blue text-3xl font-bold">EUR 71.04</p>
            </div>
            {/* Gift Card */}
            <div className="bg-ultra-green rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <Gift className="w-4 h-4 text-deep-blue" />
                <p className="text-deep-blue text-sm">Gift Card</p>
              </div>
              <p className="text-deep-blue text-3xl font-bold">EUR 24.50</p>
            </div>
          </div>
        </section>

        {/* Cashback Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-deep-blue">Cashback</h2>
            <Link href="/home" className="text-sm text-ultra-green font-medium flex items-center gap-1">
              See all
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Find the latest cashback offers from your favorite merchants
          </p>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {featuredOffers.map((offer) => (
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

        {/* What's New Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-deep-blue mb-2">What&apos;s new?</h2>
          <p className="text-sm text-gray-600 mb-4">Find the latest information!</p>

          {/* News/Promo Cards - Placeholders */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-boldly-blue rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue mb-1">New Merchants Added!</h3>
                  <p className="text-sm text-gray-600">
                    Discover cashback offers from 12 new partner merchants
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-very-yellow rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue mb-1">Earn Up to 25% Cashback</h3>
                  <p className="text-sm text-gray-600">
                    Check out our highest cashback offers this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
