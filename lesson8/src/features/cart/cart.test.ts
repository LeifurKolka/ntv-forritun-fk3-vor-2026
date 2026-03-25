import { renderHook, act } from '@testing-library/react';
import { CartProvider } from './context/CartContext.tsx';
import { useCart } from './context/useCart';
import type { Product } from '@/features/products/types';

const mockProduct: Product = { id: "1", name: "test", price: 10};

test('Add Product to set quantity 2', () => {
    const { result } = renderHook(() => useCart(),{
        wrapper: CartProvider,
    });
    act(() => {
        result.current.addToCart(mockProduct);
    })

    expect(result.current.items[0].quantity).toBe(2);
})
test('Add Product to set quantity 1', () => {
    const { result } = renderHook(() => useCart(),{
        wrapper: CartProvider,
    });
    act(() => {
        result.current.addToCart(mockProduct);
    })

    expect(result.current.items[0].quantity).toBe(1);
})