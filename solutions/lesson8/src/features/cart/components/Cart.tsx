import { useCartStore } from '@/shared/store/appStore';
import { CartItemRow } from './CartItemRow';
import { CartSummary } from './CartSummary';

export function Cart() {
  const { items } = useCartStore();
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
                <CartItemRow item={item} />
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
