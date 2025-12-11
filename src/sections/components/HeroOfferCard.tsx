import { memo } from 'react';
import { FadeIn } from '../../components/ui/FadeIn';
import { TimerDisplay } from '../../components/features/TimerDisplay';
import { TrustBadge } from '../../components/features/TrustBadge';

type HeroOfferCardProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const HeroOfferCard = memo(({ hours, minutes, seconds }: HeroOfferCardProps) => (
  <FadeIn className="mt-8 w-full max-w-md rounded-2xl border-4 border-yellow-500 bg-white p-6 shadow-2xl">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-stone-500">⏰ Oferta expira em</p>
    <TimerDisplay hours={hours} minutes={minutes} seconds={seconds} />
    <div className="mt-6 flex justify-center">
      <TrustBadge />
    </div>
  </FadeIn>
));
