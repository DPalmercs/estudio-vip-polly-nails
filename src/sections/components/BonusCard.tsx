import { memo } from 'react';
import type { Bonus } from '../../types/content';
import { FadeIn } from '../../components/ui/FadeIn';

type BonusCardProps = {
  bonus: Bonus;
  delay: number;
};

export const BonusCard = memo(({ bonus, delay }: BonusCardProps) => (
  <FadeIn
    className={`rounded-2xl border-2 ${bonus.borderClass} bg-gradient-to-br ${bonus.backgroundClass} p-6 shadow-lg`}
    delay={delay}
  >
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-stone-900 text-white">
        <bonus.icon className="text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-stone-900">{bonus.title}</h3>
        <p className="mt-2 text-stone-700">{bonus.description}</p>
        <p className="mt-2 text-sm font-semibold text-stone-700">{bonus.value}</p>
        <p className="text-xs uppercase tracking-wide text-stone-500">{bonus.highlight}</p>
      </div>
    </div>
  </FadeIn>
));
