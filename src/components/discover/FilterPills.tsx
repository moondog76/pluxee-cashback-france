'use client';

import { MapPin } from 'lucide-react';
import { useState } from 'react';

export default function FilterPills() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      <button
        onClick={() => setActiveFilter('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
          activeFilter === 'all'
            ? 'bg-ultra-green text-deep-blue'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All Cashback
      </button>
      <button
        onClick={() => setActiveFilter('fast')}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
          activeFilter === 'fast'
            ? 'bg-ultra-green text-deep-blue'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Fast Cashback
      </button>
      <button
        onClick={() => setActiveFilter('location')}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors ${
          activeFilter === 'location'
            ? 'bg-ultra-green text-deep-blue'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <MapPin className="w-4 h-4" />
        Near Me
      </button>
    </div>
  );
}
