'use client';

import React from 'react';

interface MerchantLogoProps {
  merchantId: string;
  merchantName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Brand colors and styling for each merchant
const brandStyles: Record<string, { text: string; bgColor: string; textColor: string }> = {
  // Groceries
  'carrefour': { text: 'C', bgColor: '#004E9A', textColor: '#FFFFFF' },
  'monoprix': { text: 'M', bgColor: '#E4002B', textColor: '#FFFFFF' },
  'auchan': { text: 'A', bgColor: '#E30613', textColor: '#FFFFFF' },
  'leclerc': { text: 'E', bgColor: '#0066B2', textColor: '#FFFFFF' },
  'picard': { text: 'P', bgColor: '#00A3E0', textColor: '#FFFFFF' },
  'franprix': { text: 'F', bgColor: '#E30613', textColor: '#FFFFFF' },

  // Bakery
  'paul': { text: 'P', bgColor: '#1A1A1A', textColor: '#C9A962' },
  'boulangerie-louise': { text: 'BL', bgColor: '#8B4513', textColor: '#FFFFFF' },

  // Restaurants
  'flunch': { text: 'F', bgColor: '#E94E1B', textColor: '#FFFFFF' },
  'bistro-regent': { text: 'BR', bgColor: '#1E3A5F', textColor: '#FFFFFF' },
  'leon': { text: 'L', bgColor: '#D4AF37', textColor: '#1A1A1A' },
  'buffalo-grill': { text: 'BG', bgColor: '#8B0000', textColor: '#FFFFFF' },
  'hippopotamus': { text: 'H', bgColor: '#006400', textColor: '#FFFFFF' },
  'del-arte': { text: 'DA', bgColor: '#006847', textColor: '#FFFFFF' },
  'courtepaille': { text: 'CP', bgColor: '#D2691E', textColor: '#FFFFFF' },
  'mcdonalds': { text: 'M', bgColor: '#FFC72C', textColor: '#DA291C' },

  // Cafes
  'starbucks': { text: 'S', bgColor: '#00704A', textColor: '#FFFFFF' },
};

export default function MerchantLogo({
  merchantId,
  merchantName,
  size = 'md',
  className = ''
}: MerchantLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  const brandStyle = brandStyles[merchantId];

  if (brandStyle) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold ${textSizeClasses[size]} ${className}`}
        style={{ backgroundColor: brandStyle.bgColor, color: brandStyle.textColor }}
      >
        {brandStyle.text}
      </div>
    );
  }

  // Fallback: Generate initials from merchant name
  const initials = merchantName.substring(0, 2).toUpperCase();

  // Generate a consistent color based on merchant name
  const colors = [
    { bg: '#00EB5E', text: '#221C46' }, // ultra-green
    { bg: '#17CCF9', text: '#FFFFFF' }, // boldly-blue
    { bg: '#FFDC37', text: '#221C46' }, // very-yellow
    { bg: '#FF7375', text: '#FFFFFF' }, // confidently-coral
    { bg: '#221C46', text: '#00EB5E' }, // deep-blue
  ];

  const colorIndex = merchantName.charCodeAt(0) % colors.length;
  const color = colors[colorIndex];

  return (
    <div
      className={`${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold ${textSizeClasses[size]} ${className}`}
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {initials}
    </div>
  );
}
