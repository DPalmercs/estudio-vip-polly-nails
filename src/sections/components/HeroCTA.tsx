import { memo } from 'react';
import { FaShieldHalved, FaWhatsapp } from 'react-icons/fa6';
import { CTAButton } from '../../components/ui/CTAButton';
import { WHATSAPP_URL, GUARANTEE_COPY } from '../../data/constants';
import { FadeIn } from '../../components/ui/FadeIn';

export const HeroCTA = memo(() => (
  <FadeIn className="mt-10 w-full">
    <CTAButton href={WHATSAPP_URL} className="mx-auto max-w-3xl">
      <FaWhatsapp className="text-2xl" />
      GARANTIR MINHA SESSÃO COM 15% OFF
    </CTAButton>
    <p className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-600">
      <FaShieldHalved className="text-green-600" /> {GUARANTEE_COPY}
    </p>
  </FadeIn>
));
