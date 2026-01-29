import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
}

export default function Header({ title, showBack = false, backHref = '/' }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white z-40 px-4 py-3 flex items-center gap-3">
      {showBack && (
        <Link href={backHref} className="text-deep-blue">
          <ChevronLeft className="w-6 h-6" />
        </Link>
      )}
      {title && <h1 className="text-xl font-bold text-deep-blue">{title}</h1>}
    </header>
  );
}
