import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="bg-boldly-blue rounded-xl p-6 mb-6 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-deep-blue mb-2">
            Start Earning Today!
          </h2>
          <p className="text-deep-blue text-sm">
            Spend to earn, more shopping, more savings.
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/icons/cashback-hero.svg" alt="Cashback" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
