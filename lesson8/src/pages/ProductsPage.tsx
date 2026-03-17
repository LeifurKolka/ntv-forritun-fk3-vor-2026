import { Products } from '@/features/products';
import { useCart } from '@/features/cart/context/CartContext';

export function ProductsPage() {
  const { addToCart } = useCart();
  return <Products onAddToCart={addToCart} />;
}
