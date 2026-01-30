'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
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
          </div>
        </div>
      </Link>
    </div>
  );
}
