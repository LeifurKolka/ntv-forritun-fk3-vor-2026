import { ProductCard } from './ProductCard';
import type { Product } from '../types';

type ProductListProps = {
  products: Product[];
  onAddToCart?: (product: Product) => void;
};

export function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </li>
      ))}
    </ul>
  );
}
