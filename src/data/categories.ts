export interface Category {
  id: string;
  name: string;
  nameEn: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'groceries', name: 'Groceries', nameEn: 'Groceries', color: '#00EB5E' },
  { id: 'food-drink', name: 'Food & Drink', nameEn: 'Food & Drink', color: '#FF7375' },
  { id: 'fashion', name: 'Fashion', nameEn: 'Fashion', color: '#FF7375' },
  { id: 'bakery', name: 'Bakery', nameEn: 'Bakery', color: '#FFDC37' },
  { id: 'restaurant', name: 'Restaurant', nameEn: 'Restaurant', color: '#17CCF9' },
  { id: 'cafe', name: 'Café', nameEn: 'Café', color: '#FFDC37' },
];
