import PageContainer from '@/components/layout/PageContainer';
import HeroBanner from '@/components/home/HeroBanner';
import OfferCard from '@/components/home/OfferCard';
import { offers } from '@/data/offers';

export default function HomePage() {
  const featuredOffers = offers.filter((offer) => offer.featured);
  const newOffers = offers.slice(0, 4);
  const trendingOffers = offers.slice(2, 6);

  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-4">Pluxee</h1>

        <HeroBanner />

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3">Favoris</h2>
          <div className="space-y-3">
            {featuredOffers.slice(0, 2).map((offer) => (
              <OfferCard key={offer.id} merchantId={offer.merchantId} title={offer.title} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-deep-blue mb-3">Nouveau pour vous</h2>
          <div className="space-y-3">
            {newOffers.map((offer) => (
              <OfferCard key={offer.id} merchantId={offer.merchantId} title={offer.title} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-deep-blue">Tendances</h2>
            <a href="/discover" className="text-sm text-ultra-green font-medium">
              Voir tout
            </a>
          </div>
          <div className="space-y-3">
            {trendingOffers.map((offer) => (
              <OfferCard key={offer.id} merchantId={offer.merchantId} title={offer.title} />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
