import PageContainer from '@/components/layout/PageContainer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const settingsGroups = [
  {
    title: 'Paramètres',
    items: [
      { label: 'Notifications', href: '/profile/notifications' },
      { label: 'E-mail & Communication', href: '/profile/email' },
      { label: 'IBAN', href: '/profile/iban' },
    ],
  },
  {
    title: 'Pluxee',
    items: [
      { label: 'À propos de Pluxee', href: '#' },
      { label: 'Support & FAQ', href: '#' },
      { label: 'Conditions d\'utilisation', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
    ],
  },
  {
    title: 'Compte',
    items: [
      { label: 'Exporter vos données', href: '#' },
      { label: 'Supprimer votre compte', href: '#', danger: true },
      { label: 'Déconnexion', href: '#' },
    ],
  },
];

export default function ProfilePage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-6">Profil</h1>

        <div className="bg-ultra-green/10 rounded-xl p-4 mb-6 text-center">
          <div className="w-20 h-20 bg-ultra-green rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-deep-blue">
            U
          </div>
          <h2 className="text-lg font-semibold text-deep-blue">Utilisateur</h2>
          <p className="text-sm text-gray-600">user@pluxee.fr</p>
        </div>

        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              {group.title}
            </h3>
            <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
              {group.items.map((item, itemIndex) => (
                <Link key={itemIndex} href={item.href}>
                  <div
                    className={`flex items-center justify-between p-4 ${
                      itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                    } hover:bg-gray-50 transition-colors`}
                  >
                    <span className={`${item.danger ? 'text-confidently-coral' : 'text-deep-blue'}`}>
                      {item.label}
                    </span>
                    <ChevronRight className={`w-5 h-5 ${item.danger ? 'text-confidently-coral' : 'text-gray-400'}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
