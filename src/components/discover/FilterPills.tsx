'use client';

import { MapPin } from 'lucide-react';

export default function FilterPills() {
  return (
    <div className="flex gap-2 mb-6">
      <button
        className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
      >
        <MapPin className="w-4 h-4" />
        Near Me
      </button>
    </div>
  );
}
