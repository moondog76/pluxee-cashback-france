'use client';

import { X, Bell, CreditCard, Shield, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CashbackSettingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <h1 className="text-xl font-bold text-deep-blue">Cashback Settings</h1>
        <button onClick={() => router.push('/home')}>
          <X className="w-6 h-6 text-deep-blue" />
        </button>
      </header>

      <div className="p-4 space-y-4">
        {/* Notifications */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-boldly-blue/10 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5 text-boldly-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue">Notifications</h3>
                <p className="text-sm text-gray-500">Manage cashback alerts</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ultra-green/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-ultra-green" />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue">Payment Methods</h3>
                <p className="text-sm text-gray-500">Link your cards</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-very-yellow/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-very-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-deep-blue">Privacy</h3>
                <p className="text-sm text-gray-500">Data and permissions</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
