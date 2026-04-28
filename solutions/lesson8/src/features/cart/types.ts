import type { Product } from '@/features/products/types';

export type CartItem = {
  product: Product;
  quantity: number;
};
