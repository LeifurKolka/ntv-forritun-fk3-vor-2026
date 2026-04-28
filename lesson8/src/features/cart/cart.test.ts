import { renderHook, act } from '@testing-library/react';
import { CartProvider } from './context/CartContext.tsx';
import { useCart } from './context/useCart';
import type { Product } from '@/features/products/types';

const mockProduct: Product = { id: '1', name: 'test', price: 10 };
function setup() {
  return renderHook(() => useCart(), { wrapper: CartProvider });
}
test('Add Product to set quantity 2', () => {
  const { result } = renderHook(() => useCart(), {
    wrapper: CartProvider,
  });
  act(() => {
    result.current.addToCart(mockProduct);
    result.current.addToCart(mockProduct);
  });

  expect(result.current.items[0].quantity).toBe(2);
});

test('Add Product to set quantity 1', () => {
  const { result } = renderHook(() => useCart(), {
    wrapper: CartProvider,
  });
  act(() => {
    result.current.addToCart(mockProduct);
  });

  expect(result.current.items[0].quantity).toBe(1);
});


test('Remove one product from the cart', () => {
  const { result } = renderHook(() => useCart(), {
    wrapper: CartProvider,
  });
  act(() => {
    result.current.addToCart(mockProduct);
  });

  expect(result.current.items[0].quantity).toBe(1);
  act(() => {
    result.current.removeItem(mockProduct.id);
  })
    expect(result.current.items.length).toBe(0);
});
test('cart total calculates correctly', () => {
  const product2 = { id: '2', name: 'Another Product', price: 5, image: '' };
  const { result } = setup();

  act(() => { result.current.addToCart(mockProduct); }); // price 10, qty 1
  act(() => { result.current.addToCart(product2); });    // price 5, qty 1
  act(() => { result.current.addToCart(mockProduct); }); // price 10, qty 2

  const total = result.current.items.reduce(
    (sum: number, item: { product: { price: number; }; quantity: number; }) => sum + item.product.price * item.quantity, 0
  );

  expect(total).toBe(25); // 10*2 + 5*1
});
