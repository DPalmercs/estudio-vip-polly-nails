import clsx from 'clsx';

type TimerDisplayProps = {
  hours: number;
  minutes: number;
  seconds: number;
  variant?: 'primary' | 'secondary';
};

const format = (value: number) => value.toString().padStart(2, '0');

export const TimerDisplay = ({ hours, minutes, seconds, variant = 'primary' }: TimerDisplayProps) => {
  const items = [
    { label: 'Horas', value: format(hours) },
    { label: 'Min', value: format(minutes) },
    { label: 'Seg', value: format(seconds) },
  ];

  const baseDigitClass =
    variant === 'primary'
      ? 'bg-gradient-to-br from-yellow-500 to-amber-600'
      : 'bg-gradient-to-br from-yellow-500/80 to-amber-600/80';

  return (
    <div className="flex items-center justify-center gap-3" role="timer" aria-live="polite" aria-atomic="true">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center text-center">
            <div className={clsx('timer-digit h-16 w-16 md:h-20 md:w-20', baseDigitClass)}>{item.value}</div>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-stone-500">{item.label}</p>
          </div>
          {index < items.length - 1 && (
            <div className="text-3xl font-bold text-stone-400" aria-hidden="true">
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
