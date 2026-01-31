'use client';

import { Utensils, Gift } from 'lucide-react';
import Image from 'next/image';
import BottomNav from '@/components/layout/BottomNav';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Deep Blue Header */}
      <header className="bg-deep-blue p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Pluxee X-mark logo */}
          <Image
            src="/X logo.png"
            alt="Pluxee"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-white/70 text-sm">Welcome back</p>
          <h1 className="text-white text-2xl font-bold">Marie</h1>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Your Cards Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-deep-blue mb-4">Your cards</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {/* Meal Card */}
            <div className="bg-ultra-green rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="w-4 h-4 text-deep-blue" />
                <p className="text-deep-blue text-sm">Meal Card</p>
              </div>
              <p className="text-deep-blue text-3xl font-bold">EUR 71.04</p>
            </div>
            {/* Gift Card */}
            <div className="bg-ultra-green rounded-xl p-4 min-w-[280px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <Gift className="w-4 h-4 text-deep-blue" />
                <p className="text-deep-blue text-sm">Gift Card</p>
              </div>
              <p className="text-deep-blue text-3xl font-bold">EUR 24.50</p>
            </div>
          </div>
        </section>

        {/* What's New Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-deep-blue mb-2">What&apos;s new?</h2>
          <p className="text-sm text-gray-600 mb-4">Find the latest information!</p>

          {/* News/Promo Cards - Placeholders */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-boldly-blue rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue mb-1">New Merchants Added!</h3>
                  <p className="text-sm text-gray-600">
                    Discover cashback offers from 12 new partner merchants
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-very-yellow rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue mb-1">Earn Up to 25% Cashback</h3>
                  <p className="text-sm text-gray-600">
                    Check out our highest cashback offers this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
