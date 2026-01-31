'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import { merchants } from '@/data/merchants';
import { categories } from '@/data/categories';
import MerchantLogo from '@/components/MerchantLogo';

interface HorizontalOfferCardProps {
  merchantId: string;
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

// Convert lat/lng to tile coordinates for OpenStreetMap
function latLngToTile(lat: number, lng: number, zoom: number) {
  const x = Math.floor(((lng + 180) / 360) * Math.pow(2, zoom));
  const y = Math.floor(
    ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
      Math.pow(2, zoom)
  );
  return { x, y };
}

export default function HorizontalOfferCard({
  merchantId,
  title,
  isFavorite,
  onToggleFavorite
}: HorizontalOfferCardProps) {
  const merchant = merchants.find((m) => m.id === merchantId);
  const category = categories.find((c) => c.id === merchant?.category);

  if (!merchant || !category) return null;

  // Get first location for map
  const firstLocation = merchant.locations[0];
  const zoom = 15;
  const tile = latLngToTile(firstLocation.lat, firstLocation.lng, zoom);
  const mapTileUrl = `https://tile.openstreetmap.org/${zoom}/${tile.x}/${tile.y}.png`;

  return (
    <div className="w-64 flex-shrink-0">
      <Link href={`/merchant/${merchant.id}`}>
        <div className="bg-white rounded-xl overflow-hidden relative" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-ultra-green" />

          {/* Heart icon */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite();
            }}
            className="absolute top-2 right-2 z-10 text-white hover:text-confidently-coral transition-colors bg-black/20 rounded-full p-1.5"
          >
            <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>

          {/* Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={merchant.heroImage}
              alt={merchant.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <MerchantLogo
                merchantId={merchant.id}
                merchantName={merchant.name}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-3">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded inline-block mb-2"
              style={{ backgroundColor: category.color, color: '#fff' }}
            >
              {category.name}
            </span>

            <h3 className="font-bold text-deep-blue text-sm mb-2">{merchant.name}</h3>

            <div className="flex items-center justify-between">
              {/* Green Cashback Badge - matching detail page style */}
              <div className="bg-ultra-green rounded-lg px-3 py-1.5 text-center">
                <div className="text-[10px] text-deep-blue font-medium">Earn</div>
                <div className="text-lg font-bold text-deep-blue leading-tight">{merchant.cashbackPercent}%</div>
              </div>

              {/* Minimum purchase condition */}
              <p className="text-xs text-gray-500">
                Shop from €{merchant.minPurchase}
              </p>
            </div>
          </div>

          {/* Mini Map Preview with real OSM tiles */}
          <div className="relative h-20 bg-gray-100 overflow-hidden rounded-b-xl">
            {/* Real map tile from OpenStreetMap */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mapTileUrl}
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Location pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-ultra-green rounded-full p-1.5 shadow-md">
                <MapPin className="w-4 h-4 text-deep-blue" fill="#00EB5E" />
              </div>
            </div>
            {/* Location count indicator */}
            <div className="absolute bottom-1 right-2 bg-white/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] text-gray-600">{merchant.locations.length} location{merchant.locations.length > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
