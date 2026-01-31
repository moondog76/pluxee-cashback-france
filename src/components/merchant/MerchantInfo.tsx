'use client';

import { Merchant } from '@/data/merchants';
import { categories } from '@/data/categories';
import { MapPin, Navigation } from 'lucide-react';

// Convert lat/lng to tile coordinates for OpenStreetMap
function latLngToTile(lat: number, lng: number, zoom: number) {
  const x = Math.floor(((lng + 180) / 360) * Math.pow(2, zoom));
  const y = Math.floor(
    ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
      Math.pow(2, zoom)
  );
  return { x, y };
}

interface MerchantInfoProps {
  merchant: Merchant;
}

export default function MerchantInfo({ merchant }: MerchantInfoProps) {
  const category = categories.find((c) => c.id === merchant.category);

  return (
    <div className="px-4">
      <div className="mb-4">
        {category && (
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ backgroundColor: category.color, color: '#fff' }}
          >
            {category.name}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between mb-4">
        <h1 className="text-2xl font-bold text-deep-blue">{merchant.name}</h1>
        <div className="bg-ultra-green rounded-lg px-4 py-3 text-center ml-4">
          <div className="text-xs text-deep-blue font-medium">Earn</div>
          <div className="text-2xl font-bold text-deep-blue">{merchant.cashbackPercent}%</div>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{merchant.description}</p>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2 mb-3">
          <span className="text-sm font-medium text-deep-blue">Minimum purchase:</span>
          <span className="text-sm text-gray-600">
            {merchant.minPurchase} {merchant.currency}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-sm font-medium text-deep-blue">Availability:</span>
          <span className="text-sm text-gray-600">{merchant.availability}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-deep-blue mb-3">About {merchant.name}</h2>
        <p className="text-gray-700">{merchant.about}</p>
      </div>

      {/* Location Map */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-deep-blue mb-3">
          <MapPin className="w-5 h-5 inline-block mr-2 text-ultra-green" />
          Find a store
        </h2>

        {/* Map with first location */}
        {merchant.locations.length > 0 && (
          <>
            <div className="relative h-48 bg-gray-100 overflow-hidden rounded-xl mb-3">
              {/* Real map tile from OpenStreetMap */}
              {(() => {
                const loc = merchant.locations[0];
                const zoom = 15;
                const tile = latLngToTile(loc.lat, loc.lng, zoom);
                const mapUrl = `https://tile.openstreetmap.org/${zoom}/${tile.x}/${tile.y}.png`;
                return (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={mapUrl}
                    alt="Store location"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                );
              })()}
              {/* Location pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-ultra-green rounded-full p-2 shadow-lg">
                  <MapPin className="w-6 h-6 text-deep-blue" fill="#00EB5E" />
                </div>
              </div>
            </div>

            {/* Location details */}
            <div className="space-y-2">
              {merchant.locations.slice(0, 3).map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-ultra-green/20 rounded-full p-2">
                      <MapPin className="w-4 h-4 text-deep-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-deep-blue">{location.address}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`, '_blank')}
                    className="bg-deep-blue text-white rounded-full p-2 hover:bg-opacity-90 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {merchant.locations.length > 3 && (
                <p className="text-sm text-gray-500 text-center py-2">
                  +{merchant.locations.length - 3} more locations
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
