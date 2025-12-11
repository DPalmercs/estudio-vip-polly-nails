import { FaClock, FaWhatsapp } from 'react-icons/fa6';
import { CTAButton } from '../components/ui/CTAButton';
import { WHATSAPP_URL } from '../data/constants';
import { offerSummary } from '../data/stats';
import { FadeIn } from '../components/ui/FadeIn';
import { BackgroundGlow } from '../components/ui/BackgroundGlow';
import type { GlowConfig } from '../components/ui/BackgroundGlow';
import type { CountdownState } from '../types/countdown';
import { useMemo } from 'react';
import { FinalTimerCard } from './components/FinalTimerCard';
import { OfferRecapList } from './components/OfferRecapList';

type FinalCTASectionProps = {
  countdown: CountdownState;
};

export const FinalCTASection = ({ countdown }: FinalCTASectionProps) => {
  const { hours, minutes, seconds } = countdown;
  const glows = useMemo<GlowConfig[]>(
    () => [
      { position: 'top-left', size: 'xl', tone: 'yellow-deep', offset: 'spacious' },
      { position: 'bottom-right', size: 'lg', tone: 'rose-deep', offset: 'spacious' },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-black px-4 py-20 text-white">
      <BackgroundGlow glows={glows} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold md:text-5xl">
            ⏰ Última chamada: <span className="text-yellow-400">Restam apenas</span>
          </h2>
        </FadeIn>

        <FinalTimerCard hours={hours} minutes={minutes} seconds={seconds} />
        <OfferRecapList items={offerSummary} />

        <FadeIn className="mt-8">
          <CTAButton href={WHATSAPP_URL} className="inline-flex flex-wrap gap-3 px-12 py-6 text-2xl">
            <FaWhatsapp className="text-3xl" /> SIM, EU QUERO AGORA!
          </CTAButton>
          <p className="mt-4 text-xs text-stone-400">
            <FaClock className="mr-1 inline text-yellow-400" />
            Após o timer expirar, você perde os bônus e entra na lista de espera (próxima vaga: 15 dias)
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
