import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import MerchantHero from '@/components/merchant/MerchantHero';
import MerchantInfo from '@/components/merchant/MerchantInfo';
import { merchants } from '@/data/merchants';

export default async function MerchantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const merchant = merchants.find((m) => m.id === id);

  if (!merchant) {
    notFound();
  }

  return (
    <PageContainer>
      <Header showBack backHref="/" />
      <MerchantHero merchant={merchant} />
      <MerchantInfo merchant={merchant} />
    </PageContainer>
  );
}
