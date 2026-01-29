import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CashbackPage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-8">Cashback</h1>

        <div className="flex flex-col items-center justify-center mt-20">
          <div className="text-8xl mb-6">🔭</div>

          <h2 className="text-xl font-bold text-deep-blue mb-3">
            No cashback yet!
          </h2>

          <p className="text-center text-gray-600 mb-8 max-w-sm">
            Spend to earn! More shopping, more savings.
          </p>

          <Link href="/discover">
            <Button variant="primary" size="lg">
              Discover Where to Spend
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
