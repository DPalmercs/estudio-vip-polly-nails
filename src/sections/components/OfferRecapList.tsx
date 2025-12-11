import { memo } from 'react';
import type { OfferSummary } from '../../types/content';
import { GlassCard } from '../../components/ui/GlassCard';
import { FadeIn } from '../../components/ui/FadeIn';

type OfferRecapListProps = {
  items: readonly OfferSummary[];
};

export const OfferRecapList = memo(({ items }: OfferRecapListProps) => (
  <FadeIn className="mt-10">
    <GlassCard className="text-left md:text-center" paddingClass="p-8">
      <h3 className="text-2xl font-bold">🎁 Recapitulando seu presente:</h3>
      <ul className="mt-6 space-y-4 text-left">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3 text-lg text-stone-100">
            <item.icon className="text-green-400" />
            {item.label}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xl font-semibold text-yellow-300">Valor total: R$ 205 em bônus</p>
    </GlassCard>
  </FadeIn>
));
