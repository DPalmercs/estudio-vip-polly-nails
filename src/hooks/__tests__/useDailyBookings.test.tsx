import { renderHook } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { useDailyBookings } from '../useDailyBookings';

const DAILY_BOOKINGS_KEY = 'polly_daily_bookings';
const DAILY_BOOKINGS_DATE_KEY = 'polly_daily_bookings_date';

describe('useDailyBookings', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    localStorage.clear();
  });

  test('returns deterministic value for the same day', () => {
    vi.setSystemTime(new Date('2025-01-01T12:00:00Z'));
    const { result, rerender } = renderHook(() => useDailyBookings());
    const firstValue = result.current;
    rerender();
    expect(result.current).toBe(firstValue);
  });

  test('updates storage metadata on a different day', () => {
    vi.setSystemTime(new Date('2025-01-01T12:00:00Z'));
    const { result, unmount } = renderHook(() => useDailyBookings());
    const firstValue = result.current;
    vi.setSystemTime(new Date('2025-01-02T12:00:00Z'));
    localStorage.removeItem(DAILY_BOOKINGS_KEY);
    localStorage.removeItem(DAILY_BOOKINGS_DATE_KEY);
    unmount();
    const { result: nextResult } = renderHook(() => useDailyBookings());
    expect(localStorage.getItem(DAILY_BOOKINGS_DATE_KEY)).toBe('2025-01-02');
    expect(nextResult.current).toBeGreaterThanOrEqual(9);
    expect(nextResult.current).toBeLessThanOrEqual(16);
    // Mesmo que por acaso gere o mesmo número, a data precisa refletir o novo dia.
  });
});
