'use client';

import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function IbanPage() {
  const [iban, setIban] = useState('');

  return (
    <PageContainer>
      <Header title="IBAN" showBack backHref="/profile" />
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          Add your IBAN to receive your cashback refunds directly to your bank account.
        </p>

        <div className="bg-white rounded-xl p-4 mb-4" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
          <label htmlFor="iban" className="block text-sm font-medium text-deep-blue mb-2">
            IBAN Number
          </label>
          <input
            id="iban"
            type="text"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ultra-green"
            placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
          />
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Add
        </Button>
      </div>
    </PageContainer>
  );
}
