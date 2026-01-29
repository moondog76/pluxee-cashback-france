export interface CashbackTransaction {
  id: number;
  merchantId: string;
  date: string;
  purchaseAmount: number;
  cashbackPercent: number;
  cashbackAmount: number;
  status: 'pending' | 'processing' | 'paid';
}

export const mockCashbackHistory: CashbackTransaction[] = [
  {
    id: 1,
    merchantId: 'carrefour',
    date: '2026-01-28',
    purchaseAmount: 87.50,
    cashbackPercent: 8,
    cashbackAmount: 7.00,
    status: 'paid'
  },
  {
    id: 2,
    merchantId: 'paul',
    date: '2026-01-25',
    purchaseAmount: 12.80,
    cashbackPercent: 15,
    cashbackAmount: 1.92,
    status: 'paid'
  },
  {
    id: 3,
    merchantId: 'monoprix',
    date: '2026-01-20',
    purchaseAmount: 156.30,
    cashbackPercent: 12,
    cashbackAmount: 18.76,
    status: 'processing'
  },
  {
    id: 4,
    merchantId: 'flunch',
    date: '2026-01-15',
    purchaseAmount: 45.00,
    cashbackPercent: 25,
    cashbackAmount: 11.25,
    status: 'pending'
  },
  {
    id: 5,
    merchantId: 'starbucks',
    date: '2026-01-12',
    purchaseAmount: 8.50,
    cashbackPercent: 18,
    cashbackAmount: 1.53,
    status: 'paid'
  },
  {
    id: 6,
    merchantId: 'zara',
    date: '2026-01-10',
    purchaseAmount: 125.00,
    cashbackPercent: 14,
    cashbackAmount: 17.50,
    status: 'paid'
  },
  {
    id: 7,
    merchantId: 'decathlon',
    date: '2026-01-08',
    purchaseAmount: 89.90,
    cashbackPercent: 12,
    cashbackAmount: 10.79,
    status: 'paid'
  },
  {
    id: 8,
    merchantId: 'sephora',
    date: '2026-01-05',
    purchaseAmount: 65.30,
    cashbackPercent: 15,
    cashbackAmount: 9.80,
    status: 'paid'
  },
  {
    id: 9,
    merchantId: 'bistro-regent',
    date: '2026-01-02',
    purchaseAmount: 52.00,
    cashbackPercent: 20,
    cashbackAmount: 10.40,
    status: 'paid'
  },
  {
    id: 10,
    merchantId: 'mcdonalds',
    date: '2025-12-30',
    purchaseAmount: 15.50,
    cashbackPercent: 20,
    cashbackAmount: 3.10,
    status: 'paid'
  },
];
