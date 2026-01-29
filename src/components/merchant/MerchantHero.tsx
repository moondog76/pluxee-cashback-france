import Image from 'next/image';
import { Merchant } from '@/data/merchants';

interface MerchantHeroProps {
  merchant: Merchant;
}

export default function MerchantHero({ merchant }: MerchantHeroProps) {
  return (
    <div className="relative w-full h-48 mb-4">
      <Image
        src={merchant.heroImage}
        alt={merchant.name}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
        <div className="text-2xl font-bold">{merchant.name.substring(0, 1)}</div>
      </div>
    </div>
  );
}
