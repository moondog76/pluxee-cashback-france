import React from 'react';

interface MerchantLogoProps {
  merchantName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function MerchantLogo({ merchantName, size = 'md', className = '' }: MerchantLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  };

  // Generate initials from merchant name (first 2 letters)
  const initials = merchantName.substring(0, 2).toUpperCase();

  // Generate a consistent color based on merchant name
  const colors = [
    'bg-ultra-green text-deep-blue',
    'bg-boldly-blue text-white',
    'bg-very-yellow text-deep-blue',
    'bg-confidently-coral text-white',
    'bg-deep-blue text-ultra-green',
  ];

  const colorIndex = merchantName.charCodeAt(0) % colors.length;
  const colorClass = colors[colorIndex];

  return (
    <div
      className={`${sizeClasses[size]} ${colorClass} rounded-full flex items-center justify-center font-bold ${className}`}
    >
      {initials}
    </div>
  );
}
