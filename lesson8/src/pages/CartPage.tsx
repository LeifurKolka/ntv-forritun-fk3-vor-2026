import { Cart } from '@/features/cart';
import { useCart } from '@/features/cart/context/CartContext';

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
