'use client';

import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function EmailPage() {
  const [email, setEmail] = useState('user@pluxee.com');

  return (
    <PageContainer>
      <Header title="Email & Communication" showBack backHref="/profile" />
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 mb-4" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
          <label htmlFor="email" className="block text-sm font-medium text-deep-blue mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ultra-green"
            placeholder="your@email.com"
          />
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Save
        </Button>
      </div>
    </PageContainer>
  );
}
