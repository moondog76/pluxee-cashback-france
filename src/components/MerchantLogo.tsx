// src/components/MerchantLogo.tsx
'use client';

import React from 'react';

interface MerchantLogoProps {
  merchantId: string;
  merchantName?: string;
}

export const MerchantLogo: React.FC<MerchantLogoProps> = ({ merchantId, merchantName }) => {

  // Inline SVG logos - no external URLs needed
  const renderLogo = () => {
    switch (merchantId) {
      case 'carrefour':
        return (
          <svg viewBox="0 0 60 40" className="w-full h-full">
            <rect width="60" height="40" fill="white" rx="4"/>
            <path d="M30 5 C15 5 10 20 10 20 C10 20 15 35 30 35 C45 35 50 20 50 20 C50 20 45 5 30 5" fill="#004E9F"/>
            <path d="M30 8 C18 8 14 20 14 20 C14 20 18 32 30 32 C42 32 46 20 46 20 C46 20 42 8 30 8" fill="white"/>
            <path d="M25 15 L25 25 L30 20 Z" fill="#E3051B"/>
            <path d="M35 15 L35 25 L30 20 Z" fill="#004E9F"/>
          </svg>
        );

      case 'monoprix':
        return (
          <svg viewBox="0 0 80 35" className="w-full h-full">
            <rect width="80" height="35" fill="white" rx="4"/>
            <text x="40" y="24" textAnchor="middle" fill="#E4002B" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">MONOPRIX</text>
          </svg>
        );

      case 'picard':
        return (
          <svg viewBox="0 0 70 35" className="w-full h-full">
            <rect width="70" height="35" fill="white" rx="4"/>
            <text x="32" y="24" textAnchor="middle" fill="#003D7C" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Picard</text>
            <text x="62" y="22" fill="#003D7C" fontSize="12">❄</text>
          </svg>
        );

      case 'paul':
        return (
          <svg viewBox="0 0 60 35" className="w-full h-full">
            <rect width="60" height="35" fill="white" rx="4"/>
            <text x="30" y="24" textAnchor="middle" fill="#8B4513" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold">PAUL</text>
          </svg>
        );

      case 'boulangerie-louise':
        return (
          <svg viewBox="0 0 70 40" className="w-full h-full">
            <rect width="70" height="40" fill="#FFD700" rx="4"/>
            <text x="35" y="18" textAnchor="middle" fill="#5D4037" fontFamily="Georgia, serif" fontSize="8" fontWeight="bold">Boulangerie</text>
            <text x="35" y="32" textAnchor="middle" fill="#5D4037" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold">Louise</text>
          </svg>
        );

      case 'flunch':
        return (
          <svg viewBox="0 0 60 35" className="w-full h-full">
            <rect width="60" height="35" fill="white" rx="4"/>
            <text x="30" y="24" textAnchor="middle" fill="#FF6600" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">flunch</text>
          </svg>
        );

      case 'bistro-regent':
        return (
          <svg viewBox="0 0 75 40" className="w-full h-full">
            <rect width="75" height="40" fill="#1C1C3C" rx="4"/>
            <text x="37" y="18" textAnchor="middle" fill="#D4AF37" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold">BISTRO</text>
            <text x="37" y="32" textAnchor="middle" fill="#D4AF37" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold">RÉGENT</text>
          </svg>
        );

      case 'leon':
        return (
          <svg viewBox="0 0 70 40" className="w-full h-full">
            <rect width="70" height="40" fill="#8B0000" rx="4"/>
            <text x="35" y="20" textAnchor="middle" fill="#FFF8DC" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold">Léon</text>
            <text x="35" y="34" textAnchor="middle" fill="#FFF8DC" fontFamily="Georgia, serif" fontSize="7">de Bruxelles</text>
          </svg>
        );

      case 'starbucks':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="19" fill="#00704A"/>
            <circle cx="20" cy="20" r="15" fill="none" stroke="white" strokeWidth="1"/>
            <text x="20" y="18" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="bold">STARBUCKS</text>
            <text x="20" y="26" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="4">COFFEE</text>
          </svg>
        );

      case 'mcdonalds':
        return (
          <svg viewBox="0 0 45 40" className="w-full h-full">
            <rect width="45" height="40" fill="#DA291C" rx="4"/>
            <text x="22" y="32" textAnchor="middle" fill="#FFC72C" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold">M</text>
          </svg>
        );

      case 'auchan':
        return (
          <svg viewBox="0 0 65 35" className="w-full h-full">
            <rect width="65" height="35" fill="white" rx="4"/>
            <text x="32" y="24" textAnchor="middle" fill="#E4002B" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">AUCHAN</text>
          </svg>
        );

      case 'leclerc':
        return (
          <svg viewBox="0 0 70 35" className="w-full h-full">
            <rect width="70" height="35" fill="white" rx="4"/>
            <text x="35" y="24" textAnchor="middle" fill="#004A9C" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold">E.Leclerc</text>
          </svg>
        );

      case 'franprix':
        return (
          <svg viewBox="0 0 65 35" className="w-full h-full">
            <rect width="65" height="35" fill="white" rx="4"/>
            <text x="32" y="24" textAnchor="middle" fill="#E4002B" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">franprix</text>
          </svg>
        );

      case 'buffalo-grill':
        return (
          <svg viewBox="0 0 75 40" className="w-full h-full">
            <rect width="75" height="40" fill="#8B0000" rx="4"/>
            <text x="37" y="18" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold">BUFFALO</text>
            <text x="37" y="32" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold">GRILL</text>
          </svg>
        );

      case 'hippopotamus':
        return (
          <svg viewBox="0 0 80 35" className="w-full h-full">
            <rect width="80" height="35" fill="#006400" rx="4"/>
            <text x="40" y="24" textAnchor="middle" fill="white" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold">Hippopotamus</text>
          </svg>
        );

      case 'del-arte':
        return (
          <svg viewBox="0 0 65 35" className="w-full h-full">
            <rect width="65" height="35" fill="#006847" rx="4"/>
            <text x="32" y="24" textAnchor="middle" fill="white" fontFamily="Georgia, serif" fontSize="12" fontWeight="bold">Del Arte</text>
          </svg>
        );

      case 'courtepaille':
        return (
          <svg viewBox="0 0 80 35" className="w-full h-full">
            <rect width="80" height="35" fill="#D2691E" rx="4"/>
            <text x="40" y="24" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold">Courtepaille</text>
          </svg>
        );

      default:
        // Fallback - show initials
        const name = merchantName || merchantId;
        const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
        return (
          <svg viewBox="0 0 45 35" className="w-full h-full">
            <rect width="45" height="35" fill="#6B7280" rx="4"/>
            <text x="22" y="24" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">{initials}</text>
          </svg>
        );
    }
  };

  return (
    <div className="w-14 h-10 shadow-sm">
      {renderLogo()}
    </div>
  );
};

export default MerchantLogo;
