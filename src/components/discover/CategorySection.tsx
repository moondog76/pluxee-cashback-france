import Link from 'next/link';
import { merchants } from '@/data/merchants';
import { CashbackBadge, FastCashbackPill } from '@/components/ui/Badge';
import Image from 'next/image';

interface CategorySectionProps {
  categoryId: string;
  categoryName: string;
}

export default function CategorySection({ categoryId, categoryName }: CategorySectionProps) {
  const categoryMerchants = merchants.filter((m) => m.category === categoryId).slice(0, 3);

  if (categoryMerchants.length === 0) return null;

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-deep-blue mb-3">{categoryName}</h3>
      <div className="space-y-3">
        {categoryMerchants.map((merchant) => (
          <Link key={merchant.id} href={`/merchant/${merchant.id}`}>
            <div
              className="bg-white rounded-xl overflow-hidden relative"
              style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-ultra-green" />
              <div className="flex p-3 gap-3">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={merchant.heroImage}
                    alt={merchant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-deep-blue mb-1">{merchant.name}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">{merchant.description}</p>
                  <div className="flex items-center gap-2">
                    <CashbackBadge percent={merchant.cashbackPercent} />
                    {merchant.fastCashback && <FastCashbackPill />}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
