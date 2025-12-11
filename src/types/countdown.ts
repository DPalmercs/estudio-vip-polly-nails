export type CountdownState = {
  hours: number;
  minutes: number;
  seconds: number;
  timeLeft: number | null;
  isExpired: boolean;
};
