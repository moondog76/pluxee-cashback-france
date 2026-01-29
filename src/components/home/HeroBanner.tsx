import { ChevronRight } from 'lucide-react';

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
          <div className="w-20 h-20 bg-very-yellow rounded-full flex items-center justify-center text-4xl">
            🐷
          </div>
          <ChevronRight className="w-6 h-6 text-deep-blue ml-2" />
        </div>
      </div>
    </div>
  );
}
