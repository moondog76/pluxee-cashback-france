'use client';

import { useState } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SearchBar from '@/components/discover/SearchBar';
import FilterPills from '@/components/discover/FilterPills';
import CategorySection from '@/components/discover/CategorySection';
import OfferCard from '@/components/home/OfferCard';
import { categories } from '@/data/categories';
import { merchants } from '@/data/merchants';
import { offers } from '@/data/offers';
import { getClosestLocation } from '@/lib/distance';

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [nearMeActive, setNearMeActive] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

  const handleNearMeClick = () => {
    if (!nearMeActive) {
      // Request user location
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            setNearMeActive(true);
          },
          (error) => {
            console.error('Error getting location:', error);
            alert('Unable to get your location. Please enable location services.');
          }
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    } else {
      setNearMeActive(false);
    }
  };

  let filteredMerchants = merchants.filter((merchant) =>
    merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    merchant.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    merchant.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort by distance if Near Me is active
  if (nearMeActive && userLocation) {
    filteredMerchants = filteredMerchants
      .map((merchant) => {
        const closestLoc = getClosestLocation(
          userLocation.lat,
          userLocation.lon,
          merchant.locations
        );
        return {
          merchant,
          distance: closestLoc?.distance ?? Infinity,
        };
      })
      .sort((a, b) => a.distance - b.distance)
      .map((item) => item.merchant);
  }

  const filteredOffers = offers.filter((offer) => {
    const merchant = merchants.find((m) => m.id === offer.merchantId);
    return merchant && filteredMerchants.includes(merchant);
  });

  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-4">Discover</h1>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterPills nearMeActive={nearMeActive} onNearMeClick={handleNearMeClick} />

        {searchQuery || nearMeActive ? (
          <div>
            {filteredOffers.length > 0 ? (
              <div>
                {nearMeActive && userLocation && !searchQuery && (
                  <p className="text-sm text-gray-600 mb-4">
                    Showing merchants near you
                  </p>
                )}
                <div className="space-y-3">
                  {filteredOffers.map((offer) => (
                    <OfferCard
                      key={offer.id}
                      merchantId={offer.merchantId}
                      title={offer.title}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found</p>
              </div>
            )}
          </div>
        ) : (
          categories.map((category) => (
            <CategorySection
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
            />
          ))
        )}
      </div>
    </PageContainer>
  );
}
