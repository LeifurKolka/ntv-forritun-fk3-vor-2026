import { Cart } from '@/features/cart';
import { useCart } from '@/features/cart/context/useCart';

export function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();
  return (
    <Cart
      items={items}
      onQuantityChange={updateQuantity}
      onRemove={removeItem}
    />
  );
}
