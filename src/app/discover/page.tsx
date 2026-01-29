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

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMerchants = merchants.filter((merchant) =>
    merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    merchant.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    merchant.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOffers = offers.filter((offer) => {
    const merchant = merchants.find((m) => m.id === offer.merchantId);
    return merchant && filteredMerchants.includes(merchant);
  });

  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-4">Discover</h1>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterPills />

        {searchQuery ? (
          <div>
            {filteredOffers.length > 0 ? (
              <div className="space-y-3">
                {filteredOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    merchantId={offer.merchantId}
                    title={offer.title}
                  />
                ))}
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
