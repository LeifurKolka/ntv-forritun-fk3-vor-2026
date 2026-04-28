import { ProductList } from './ProductList';
import type { Product } from '../types';

const DEFAULT_PRODUCTS: Product[] = [
  { id: '1', name: 'Product One', price: 1990, description: 'A first product' },
  {
    id: '2',
    name: 'Product Two',
    price: 2990,
    description: 'A second product',
  },
  {
    id: '3',
    name: 'Product Three',
    price: 3990,
    description: 'A third product',
  },
];

export function Products() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Products</h2>
      <ProductList products={DEFAULT_PRODUCTS} />
    </section>
  );
}
