'use client';

import React, { useState } from 'react';

interface MerchantLogoProps {
  merchantId: string;
  merchantName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Logo URLs from Wikimedia Commons (public domain / free license)
// Using PNG versions where available for better compatibility
const logoUrls: Record<string, string> = {
  'carrefour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/200px-Carrefour_logo.svg.png',
  'monoprix': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Monoprix_logo_2013.png/200px-Monoprix_logo_2013.png',
  'picard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Picard_Surgel%C3%A9s_logo.svg/200px-Picard_Surgel%C3%A9s_logo.svg.png',
  'paul': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Paul_%28restaurant%29_logo.svg/200px-Paul_%28restaurant%29_logo.svg.png',
  'flunch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Flunch_logo.svg/200px-Flunch_logo.svg.png',
  'starbucks': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/200px-Starbucks_Corporation_Logo_2011.svg.png',
  'mcdonalds': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png',
  'auchan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Auchan_%28logo%29.svg/200px-Auchan_%28logo%29.svg.png',
  'leclerc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_E.Leclerc_Sans_le_texte.svg/200px-Logo_E.Leclerc_Sans_le_texte.svg.png',
  'franprix': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Franprix_logo_2013.png/200px-Franprix_logo_2013.png',
  'buffalo-grill': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Buffalo_Grill_logo.svg/200px-Buffalo_Grill_logo.svg.png',
  'hippopotamus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Logo_Hippopotamus.svg/200px-Logo_Hippopotamus.svg.png',
};

// Text-based logos with brand colors for merchants without public logo URLs
const textLogos: Record<string, { text: string; bgColor: string; textColor: string }> = {
  'boulangerie-louise': { text: 'BL', bgColor: '#8B4513', textColor: '#FFFFFF' },
  'bistro-regent': { text: 'BR', bgColor: '#1E3A5F', textColor: '#FFFFFF' },
  'leon': { text: 'LB', bgColor: '#D4AF37', textColor: '#1A1A1A' },
  'del-arte': { text: 'DA', bgColor: '#006847', textColor: '#FFFFFF' },
  'courtepaille': { text: 'CP', bgColor: '#8B0000', textColor: '#FFFFFF' },
};

export default function MerchantLogo({
  merchantId,
  merchantName,
  size = 'md',
  className = ''
}: MerchantLogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const logoUrl = logoUrls[merchantId];
  const textLogo = textLogos[merchantId];

  // If we have a logo URL and no error, show the image
  if (logoUrl && !imageError) {
    return (
      <div className={`${sizeClasses[size]} relative rounded-lg overflow-hidden bg-white flex items-center justify-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt={`${merchantName} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // If we have a text-based logo config, use it
  if (textLogo) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold ${textSizeClasses[size]} ${className}`}
        style={{ backgroundColor: textLogo.bgColor, color: textLogo.textColor }}
      >
        {textLogo.text}
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
