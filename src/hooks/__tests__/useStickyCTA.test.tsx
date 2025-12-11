import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { useStickyCTA } from '../useStickyCTA';

describe('useStickyCTA', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  test('returns false when scroll is below threshold', () => {
    const { result } = renderHook(() => useStickyCTA());
    expect(result.current).toBe(false);
  });

  test('becomes visible after scrolling beyond threshold', () => {
    const { result } = renderHook(() => useStickyCTA());
    act(() => {
      window.scrollY = 1000;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });
});
