'use client';

import { MapPin, Map, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface FilterPillsProps {
  nearMeActive: boolean;
  isLoading?: boolean;
  onNearMeClick: () => void;
}

export default function FilterPills({ nearMeActive, isLoading = false, onNearMeClick }: FilterPillsProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={onNearMeClick}
        disabled={isLoading}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors ${
          nearMeActive
            ? 'bg-ultra-green text-deep-blue'
            : isLoading
            ? 'bg-gray-200 text-gray-500 cursor-wait'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Getting location...
          </>
        ) : (
          <>
            <MapPin className="w-4 h-4" />
            Near Me
          </>
        )}
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
