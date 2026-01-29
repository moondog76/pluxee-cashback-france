import PageContainer from '@/components/layout/PageContainer';
import SearchBar from '@/components/discover/SearchBar';
import FilterPills from '@/components/discover/FilterPills';
import CategorySection from '@/components/discover/CategorySection';
import { categories } from '@/data/categories';

export default function DiscoverPage() {
  return (
    <PageContainer>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-deep-blue mb-4">Découvrir</h1>

        <SearchBar />
        <FilterPills />

        {categories.map((category) => (
          <CategorySection
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
          />
        ))}
      </div>
    </PageContainer>
  );
}
