import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-4 ${className}`}
      style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}
    >
      {children}
    </div>
  );
}
