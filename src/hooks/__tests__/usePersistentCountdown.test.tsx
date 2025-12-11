import { renderHook, act } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { usePersistentCountdown } from '../usePersistentCountdown';

const STORAGE_KEY = 'polly_timer_start';
const EXPIRED_KEY = 'polly_offer_expired';

const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = '';
};

describe('usePersistentCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    clearStorage();
  });

  afterEach(() => {
    vi.useRealTimers();
    clearStorage();
  });

  test('starts countdown with 2 hours and decrements over time', () => {
    const { result } = renderHook(() => usePersistentCountdown());
    expect(result.current.timeLeft).toBe(2 * 60 * 60);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(result.current.timeLeft).toBe(2 * 60 * 60 - 5);
    expect(result.current.isExpired).toBe(false);
  });

  test('returns expired state when storage marks offer as expired', () => {
    localStorage.setItem(EXPIRED_KEY, 'true');
    const { result } = renderHook(() => usePersistentCountdown());
    expect(result.current.isExpired).toBe(true);
    expect(result.current.timeLeft).toBeNull();
  });

  test('marks expired when previously saved timer already elapsed', () => {
    const pastStart = Date.now() - 3 * 60 * 60 * 1000; // 3 hours ago
    localStorage.setItem(STORAGE_KEY, pastStart.toString());
    const { result } = renderHook(() => usePersistentCountdown());
    expect(result.current.isExpired).toBe(true);
    expect(localStorage.getItem(EXPIRED_KEY)).toBe('true');
  });
});
