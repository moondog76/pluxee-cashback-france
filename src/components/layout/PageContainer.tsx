import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen pb-20 ${className}`}>
      <div className="max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
