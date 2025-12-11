import { useEffect, useRef, useState } from 'react';

const TIMER_DURATION = 2 * 60 * 60; // 2 hours
const STORAGE_KEY = 'polly_timer_start';
const EXPIRED_KEY = 'polly_offer_expired';
const EXPIRED_SESSION_KEY = 'polly_offer_expired_session';
const EXPIRED_COOKIE = 'polly_offer_expired_cookie';

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

const safeStorage = <T extends 'localStorage' | 'sessionStorage'>(type: T) => {
  if (typeof window === 'undefined') return null;
  try {
    return window[type];
  } catch {
    return null;
  }
};

const hasExpiredCookie = () => {
  if (typeof document === 'undefined') return false;
  return document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie.startsWith(`${EXPIRED_COOKIE}=true`));
};

const setExpiredCookie = () => {
  if (typeof document === 'undefined') return;
  document.cookie = `${EXPIRED_COOKIE}=true; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
};

const isOfferExpired = () => {
  const localStorage = safeStorage('localStorage');
  const sessionStorage = safeStorage('sessionStorage');

  if (localStorage?.getItem(EXPIRED_KEY) === 'true') return true;
  if (sessionStorage?.getItem(EXPIRED_SESSION_KEY) === 'true') return true;
  return hasExpiredCookie();
};

const markOfferExpired = () => {
  const localStorage = safeStorage('localStorage');
  const sessionStorage = safeStorage('sessionStorage');

  localStorage?.setItem(EXPIRED_KEY, 'true');
  localStorage?.removeItem(STORAGE_KEY);
  sessionStorage?.setItem(EXPIRED_SESSION_KEY, 'true');
  setExpiredCookie();
};

const startTimer = () => {
  const localStorage = safeStorage('localStorage');
  if (!localStorage || isOfferExpired()) return null;

  const now = Date.now();
  localStorage.setItem(STORAGE_KEY, now.toString());
  localStorage.removeItem(EXPIRED_KEY);
  return TIMER_DURATION;
};

const getRemainingTime = () => {
  const localStorage = safeStorage('localStorage');
  if (!localStorage) return null;

  const savedStart = localStorage.getItem(STORAGE_KEY);
  if (!savedStart) return null;

  const elapsed = Math.floor((Date.now() - Number(savedStart)) / 1000);
  const remaining = TIMER_DURATION - elapsed;
  if (remaining <= 0) {
    markOfferExpired();
    return null;
  }

  return remaining;
};

export type UsePersistentCountdownResult = {
  hours: number;
  minutes: number;
  seconds: number;
  timeLeft: number | null;
  isExpired: boolean;
};

export const usePersistentCountdown = (): UsePersistentCountdownResult => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (isOfferExpired()) {
      setIsExpired(true);
      setTimeLeft(null);
      return undefined;
    }

    let remaining = getRemainingTime();
    if (remaining === null) {
      remaining = startTimer();
    }

    if (remaining === null) {
      setIsExpired(true);
      return undefined;
    }

    setTimeLeft(remaining);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null) return prev;
        if (prev <= 1) {
          if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
          }
          markOfferExpired();
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const hours = timeLeft !== null ? Math.floor(timeLeft / 3600) : 0;
  const minutes = timeLeft !== null ? Math.floor((timeLeft % 3600) / 60) : 0;
  const seconds = timeLeft !== null ? timeLeft % 60 : 0;

  return {
    hours,
    minutes,
    seconds,
    timeLeft,
    isExpired,
  };
};
