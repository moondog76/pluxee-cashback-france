'use client';

import dynamic from 'next/dynamic';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';

const MapView = dynamic(() => import('@/components/map/MapView'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-120px)] flex items-center justify-center bg-gray-100">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

export default function MapPage() {
  return (
    <PageContainer>
      <Header showBack backHref="/discover" title="Nearby Merchants" />
      <MapView />
    </PageContainer>
  );
}
