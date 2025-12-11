import { memo } from 'react';
import { GlassCard } from '../../components/ui/GlassCard';
import { TimerDisplay } from '../../components/features/TimerDisplay';
import { FadeIn } from '../../components/ui/FadeIn';

type FinalTimerCardProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const FinalTimerCard = memo(({ hours, minutes, seconds }: FinalTimerCardProps) => (
  <FadeIn className="mx-auto mt-8 inline-block">
    <GlassCard className="inline-block" paddingClass="p-6">
      <TimerDisplay hours={hours} minutes={minutes} seconds={seconds} variant="secondary" />
    </GlassCard>
  </FadeIn>
));
