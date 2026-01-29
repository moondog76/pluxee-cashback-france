export interface Category {
  id: string;
  name: string;
  nameEn: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'groceries', name: 'Épicerie', nameEn: 'Groceries', color: '#00EB5E' },
  { id: 'food-drink', name: 'Alimentation', nameEn: 'Food & Drink', color: '#FF7375' },
  { id: 'fashion', name: 'Mode', nameEn: 'Fashion', color: '#FF7375' },
  { id: 'bakery', name: 'Boulangerie', nameEn: 'Bakery', color: '#FFDC37' },
  { id: 'restaurant', name: 'Restaurant', nameEn: 'Restaurant', color: '#17CCF9' },
];
