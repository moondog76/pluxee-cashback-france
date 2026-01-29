'use client';

import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import { useState } from 'react';

export default function NotificationsPage() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [offerAlerts, setOfferAlerts] = useState(true);

  return (
    <PageContainer>
      <Header title="Notifications" showBack backHref="/profile" />
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-xl" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
            <div>
              <h3 className="font-semibold text-deep-blue">Notifications push</h3>
              <p className="text-sm text-gray-600">Recevoir des notifications sur votre appareil</p>
            </div>
            <button
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                pushNotifications ? 'bg-ultra-green' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  pushNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-xl" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
            <div>
              <h3 className="font-semibold text-deep-blue">Notifications e-mail</h3>
              <p className="text-sm text-gray-600">Recevoir des e-mails de Pluxee</p>
            </div>
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                emailNotifications ? 'bg-ultra-green' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white rounded-xl" style={{ boxShadow: '0 2px 8px rgba(34, 28, 70, 0.08)' }}>
            <div>
              <h3 className="font-semibold text-deep-blue">Alertes d&apos;offres</h3>
              <p className="text-sm text-gray-600">Nouveaux marchands et offres spéciales</p>
            </div>
            <button
              onClick={() => setOfferAlerts(!offerAlerts)}
              className={`w-12 h-6 rounded-full transition-colors ${
                offerAlerts ? 'bg-ultra-green' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  offerAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
