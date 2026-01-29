'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { merchants } from '@/data/merchants';
import { categories } from '@/data/categories';
import { CashbackBadge } from '@/components/ui/Badge';
import { useState } from 'react';

interface OfferCardProps {
  merchantId: string;
  title: string;
}

export default function OfferCard({ merchantId, title }: OfferCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const merchant = merchants.find((m) => m.id === merchantId);
  const category = categories.find((c) => c.id === merchant?.category);

  if (!merchant || !category) return null;

  return (
    <Link href={`/merchant/${merchant.id}`}>
      <div className="bg-white rounded-xl overflow-hidden relative mb-4" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-ultra-green" />

        <div className="flex p-3 gap-3">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={merchant.heroImage}
              alt={merchant.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1 left-1 w-8 h-8 bg-white rounded flex items-center justify-center text-xs font-bold">
              {merchant.name.substring(0, 1)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <span
                className="text-xs font-medium px-2 py-0.5 rounded"
                style={{ backgroundColor: category.color, color: '#fff' }}
              >
                {category.name}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFavorite(!isFavorite);
                }}
                className="text-gray-400 hover:text-confidently-coral transition-colors"
              >
                <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>

            <h3 className="font-bold text-deep-blue text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-600 mb-2">{merchant.name}</p>

            <div className="flex items-center gap-2">
              <CashbackBadge percent={merchant.cashbackPercent} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
