import { heroStats } from '../data/stats';
import { useMemo } from 'react';
import { BackgroundGlow } from '../components/ui/BackgroundGlow';
import type { GlowConfig } from '../components/ui/BackgroundGlow';
import type { CountdownState } from '../types/countdown';
import { HeroIntro } from './components/HeroIntro';
import { HeroOfferCard } from './components/HeroOfferCard';
import { HeroCTA } from './components/HeroCTA';
import { HeroStats as HeroStatsGrid } from './components/HeroStats';

type HeroSectionProps = {
  countdown: CountdownState;
};

export const HeroSection = ({ countdown }: HeroSectionProps) => {
  const { hours, minutes, seconds } = countdown;
  const stats = useMemo(() => heroStats, []);
  const glowConfig = useMemo<GlowConfig[]>(
    () => [
      { position: 'top-left', size: 'md', tone: 'yellow-soft' },
      { position: 'bottom-right', size: 'lg', tone: 'rose-soft' },
    ],
    [],
  );

  return (
    <header className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 px-4 pb-16 pt-24">
      <BackgroundGlow glows={glowConfig} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <HeroIntro />
        <HeroOfferCard hours={hours} minutes={minutes} seconds={seconds} />
        <HeroCTA />
        <HeroStatsGrid stats={stats} />
      </div>
    </header>
  );
};
