'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Receipt, User } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/cashback', label: 'Cashback', icon: Receipt },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white z-50"
      style={{ boxShadow: '0 -2px 10px rgba(34, 28, 70, 0.05)' }}
    >
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-deep-blue' : 'text-gray-400'
              }`}
            >
              <div
                className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg ${
                  isActive ? 'bg-ultra-green/10' : ''
                }`}
              >
                <Icon className="w-6 h-6" fill={isActive ? 'currentColor' : 'none'} />
                <span className="text-xs mt-1 font-medium">{label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
