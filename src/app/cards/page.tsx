import BottomNav from '@/components/layout/BottomNav';

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-deep-blue mb-4">Cards</h1>
        <p className="text-gray-600">Your Pluxee cards will appear here.</p>
      </div>
      <BottomNav />
    </div>
  );
}
