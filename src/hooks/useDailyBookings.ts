import { useEffect, useState } from 'react';

const DAILY_BOOKINGS_KEY = 'polly_daily_bookings';
const DAILY_BOOKINGS_DATE_KEY = 'polly_daily_bookings_date';

const getRandomBookings = () => Math.floor(Math.random() * 8) + 9; // 9 to 16

export const useDailyBookings = () => {
  const [bookings, setBookings] = useState(12);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedDate = localStorage.getItem(DAILY_BOOKINGS_DATE_KEY);
      const savedCount = Number(localStorage.getItem(DAILY_BOOKINGS_KEY));
      const today = new Date().toISOString().split('T')[0];

      if (savedDate === today && !Number.isNaN(savedCount) && savedCount > 8) {
        setBookings(savedCount);
        return;
      }

      const newCount = getRandomBookings();
      localStorage.setItem(DAILY_BOOKINGS_KEY, newCount.toString());
      localStorage.setItem(DAILY_BOOKINGS_DATE_KEY, today);
      setBookings(newCount);
    } catch {
      setBookings(getRandomBookings());
    }
  }, []);

  return bookings;
};
