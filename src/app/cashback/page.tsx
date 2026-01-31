'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import { mockCashbackHistory } from '@/data/cashbackHistory';
import { merchants } from '@/data/merchants';

export default function CashbackPage() {
  const router = useRouter();
  const totalPaid = mockCashbackHistory
    .filter((t) => t.status === 'paid')
    .reduce((sum, t) => sum + t.cashbackAmount, 0);

  const totalPending = mockCashbackHistory
    .filter((t) => t.status === 'pending' || t.status === 'processing')
    .reduce((sum, t) => sum + t.cashbackAmount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-ultra-green text-deep-blue';
      case 'processing':
        return 'bg-very-yellow text-deep-blue';
      case 'pending':
        return 'bg-gray-200 text-gray-600';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <PageContainer>
      {/* Header with X close button */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <h1 className="text-xl font-bold text-deep-blue">My Cashback</h1>
        <button onClick={() => router.push('/home')}>
          <X className="w-6 h-6 text-deep-blue" />
        </button>
      </header>

      <div className="p-4">

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-ultra-green/10 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Total Earned</p>
            <p className="text-2xl font-bold text-deep-blue">€{totalPaid.toFixed(2)}</p>
          </div>
          <div className="bg-very-yellow/20 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-2xl font-bold text-deep-blue">€{totalPending.toFixed(2)}</p>
          </div>
        </div>

        {/* Transaction History */}
        <h2 className="text-lg font-semibold text-deep-blue mb-3">Transaction History</h2>
        <div className="space-y-3">
          {mockCashbackHistory.map((transaction) => {
            const merchant = merchants.find((m) => m.id === transaction.merchantId);
            if (!merchant) return null;

            return (
              <div
                key={transaction.id}
                className="bg-white rounded-xl p-4"
                style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-deep-blue">
                        {merchant.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-deep-blue">{merchant.name}</h3>
                      <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Purchase: €{transaction.purchaseAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-ultra-green">
                      +€{transaction.cashbackAmount.toFixed(2)}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
