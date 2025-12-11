import { memo } from 'react';
import { FadeIn } from '../../components/ui/FadeIn';
import type { PainPoint } from '../../types/content';

type PainListProps = {
  pains: readonly PainPoint[];
};

export const PainList = memo(({ pains }: PainListProps) => (
  <div className="space-y-6">
    {pains.map((pain, index) => (
      <FadeIn key={pain.id} className={`rounded-2xl border-l-4 ${pain.borderClass} bg-stone-800 p-6`} delay={index * 0.1}>
        <div className="flex items-start gap-4">
          <pain.icon className="mt-1 text-3xl" />
          <div>
            <h3 className="text-xl font-bold">{pain.title}</h3>
            <p className="mt-2 text-stone-300">{pain.description}</p>
          </div>
        </div>
      </FadeIn>
    ))}
  </div>
));
