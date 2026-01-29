'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { merchants } from '@/data/merchants';
import { categories } from '@/data/categories';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Fix for default marker icon in Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [center, setCenter] = useState<[number, number]>([48.8566, 2.3522]); // Default to Paris

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          setCenter(coords);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Keep default center (Paris)
        }
      );
    }
  }, []);

  // Create a list of all merchant locations
  const allLocations = merchants.flatMap((merchant) =>
    merchant.locations.map((location) => ({
      merchant,
      location,
    }))
  );

  return (
    <div className="w-full h-[calc(100vh-120px)]">
      <MapContainer
        center={center}
        zoom={userLocation ? 13 : 11}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User location marker */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.divIcon({
              className: 'custom-user-marker',
              html: '<div style="width: 16px; height: 16px; background: #17CCF9; border: 3px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
              iconSize: [16, 16],
              iconAnchor: [8, 8],
            })}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold text-deep-blue">Your Location</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Merchant location markers */}
        {allLocations.map((item, index) => {
          const category = categories.find((c) => c.id === item.merchant.category);

          return (
            <Marker
              key={`${item.merchant.id}-${index}`}
              position={[item.location.lat, item.location.lng]}
              icon={icon}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <Link href={`/merchant/${item.merchant.id}`}>
                    <h3 className="font-bold text-deep-blue mb-1 hover:text-ultra-green">
                      {item.merchant.name}
                    </h3>
                  </Link>
                  {category && (
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded inline-block mb-2"
                      style={{ backgroundColor: category.color, color: '#fff' }}
                    >
                      {category.name}
                    </span>
                  )}
                  <p className="text-sm text-gray-600 mb-2">
                    {item.location.address}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-ultra-green rounded px-2 py-1">
                      <span className="text-xs font-bold text-deep-blue">
                        {item.merchant.cashbackPercent}% cashback
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${item.location.lat},${item.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-ultra-green hover:text-boldly-blue font-medium"
                  >
                    Get Directions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
