import { add } from '@/lib/math';

describe('add function', () => {
  it('returns the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
