import { Merchant } from '@/data/merchants';
import { categories } from '@/data/categories';
import Button from '@/components/ui/Button';

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
    </div>
  );
}
