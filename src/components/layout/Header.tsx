import React from 'react';
import { ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showClose?: boolean;
  backHref?: string;
  closeHref?: string;
}

export default function Header({
  title,
  showBack = false,
  showClose = false,
  backHref = '/',
  closeHref = '/'
}: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white z-40 px-4 py-3 flex items-center gap-3">
      {showBack && (
        <Link href={backHref} className="text-deep-blue hover:text-ultra-green transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
      )}
      {showClose && (
        <Link href={closeHref} className="text-deep-blue hover:text-ultra-green transition-colors">
          <X className="w-6 h-6" />
        </Link>
      )}
      {title && <h1 className="text-xl font-bold text-deep-blue">{title}</h1>}
    </header>
  );
}
