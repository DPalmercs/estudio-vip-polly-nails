import { memo } from 'react';
import type { Stat } from '../../types/content';
import { FadeIn } from '../../components/ui/FadeIn';

type HeroStatsProps = {
  stats: Stat[];
};

export const HeroStats = memo(({ stats }: HeroStatsProps) => (
  <FadeIn className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.id} className="flex flex-col items-center rounded-xl bg-white/80 p-4 text-center shadow backdrop-blur">
        <p className={`text-3xl font-bold ${stat.accentClass}`}>{stat.value}</p>
        <p className="text-[11px] uppercase tracking-[0.4em] text-stone-600">{stat.label}</p>
      </div>
    ))}
  </FadeIn>
));
