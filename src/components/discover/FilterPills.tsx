'use client';

import { MapPin, Map } from 'lucide-react';
import Link from 'next/link';

interface FilterPillsProps {
  nearMeActive: boolean;
  onNearMeClick: () => void;
}

export default function FilterPills({ nearMeActive, onNearMeClick }: FilterPillsProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={onNearMeClick}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors ${
          nearMeActive
            ? 'bg-ultra-green text-deep-blue'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <MapPin className="w-4 h-4" />
        Near Me
      </button>
      <Link href="/map">
        <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
          <Map className="w-4 h-4" />
          Map View
        </button>
      </Link>
    </div>
  );
}
