'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import { merchants } from '@/data/merchants';
import { categories } from '@/data/categories';
import { CashbackBadge } from '@/components/ui/Badge';
import MerchantLogo from '@/components/MerchantLogo';

interface HorizontalOfferCardProps {
  merchantId: string;
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
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
              <CashbackBadge percent={merchant.cashbackPercent} />
            </div>

            {/* Minimum purchase condition */}
            <p className="text-xs text-gray-500 mt-1">
              Shop from €{merchant.minPurchase}
            </p>
          </div>

          {/* Mini Map Preview */}
          <div className="relative h-16 bg-gray-100 overflow-hidden rounded-b-xl">
            {/* Map background pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 50" preserveAspectRatio="none">
              <pattern id={`grid-${merchant.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#9CA3AF" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="50" fill={`url(#grid-${merchant.id})`}/>
              {/* Roads */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#D1D5DB" strokeWidth="2"/>
              <line x1="50" y1="0" x2="50" y2="50" stroke="#D1D5DB" strokeWidth="2"/>
              <line x1="20" y1="0" x2="80" y2="50" stroke="#E5E7EB" strokeWidth="1"/>
            </svg>
            {/* Location pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-ultra-green rounded-full p-1.5 shadow-md">
                <MapPin className="w-4 h-4 text-deep-blue" fill="#00EB5E" />
              </div>
            </div>
            {/* Distance indicator */}
            <div className="absolute bottom-1 right-2 bg-white/90 rounded px-1.5 py-0.5">
              <span className="text-[10px] text-gray-600">{merchant.locations.length} location{merchant.locations.length > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
