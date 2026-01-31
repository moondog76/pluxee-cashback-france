import Image from 'next/image';
import { Merchant } from '@/data/merchants';
import MerchantLogo from '@/components/MerchantLogo';

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
      <div className="absolute bottom-4 left-4">
        <MerchantLogo
          merchantId={merchant.id}
          merchantName={merchant.name}
        />
      </div>
    </div>
  );
}
