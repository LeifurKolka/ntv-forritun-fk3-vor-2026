import { CartItemRow } from './components/CartItemRow';
import { CartSummary } from './components/CartSummary';
import type { CartItem } from './types';

type CartProps = {
  items: CartItem[];
  onQuantityChange?: (productId: string, quantity: number) => void;
  onRemove?: (productId: string) => void;
};

export function Cart({ items, onQuantityChange, onRemove }: CartProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">Cart</h2>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.product.id}>
                <CartItemRow
                  item={item}
                  onQuantityChange={onQuantityChange}
                  onRemove={onRemove}
                />
              </li>
            ))}
          </ul>
          <aside>
            <CartSummary items={items} />
          </aside>
        </div>
      )}
    </section>
  );
}
