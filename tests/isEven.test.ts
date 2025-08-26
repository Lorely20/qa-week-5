import { describe, it, expect } from 'vitest';
import { isEven } from '../src/isEven';

describe('isEven()', () => {
  it('devuelve true para números pares', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('devuelve false para números impares', () => {
    expect(isEven(5)).toBe(false);
  });
});