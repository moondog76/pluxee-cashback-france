import React from 'react';
import { X } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'yellow' | 'coral';
  className?: string;
}

export function Badge({ children, variant = 'green', className = '' }: BadgeProps) {
  const variantStyles = {
    green: 'bg-ultra-green text-deep-blue',
    blue: 'bg-boldly-blue text-white',
    yellow: 'bg-very-yellow text-deep-blue',
    coral: 'bg-confidently-coral text-white',
  };

  return (
    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function CashbackBadge({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-deep-blue font-bold">€</span>
      <span className="font-bold text-deep-blue">{percent}%</span>
    </div>
  );
}

export function FastCashbackPill() {
  return (
    <div className="bg-ultra-green text-deep-blue px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
      <X className="w-3 h-3" />
      Cashback rapide
    </div>
  );
}
