import { FaClock, FaInstagram } from 'react-icons/fa6';
import { INSTAGRAM_URL } from '../../data/constants';
import { CTAButton } from '../ui/CTAButton';
import { GlassCard } from '../ui/GlassCard';

export const OfferExpired = () => (
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-900 to-black px-4">
    <GlassCard className="relative mx-auto w-full max-w-2xl text-center text-white" paddingClass="p-10">
      <FaClock className="mx-auto mb-6 text-6xl text-yellow-500" />
      <h1 className="text-4xl font-bold">Oferta Expirada</h1>
      <p className="mt-4 text-lg text-stone-200">
        O tempo para aproveitar os <strong className="text-yellow-300">15% OFF + bônus</strong> terminou. Mas você ainda pode agendar normalmente.
      </p>
      <div className="mt-6 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-4 text-yellow-200">
        <p className="font-semibold">Clique abaixo para falar comigo pelo Instagram.</p>
      </div>
      <CTAButton href={INSTAGRAM_URL} className="mt-8 inline-flex gap-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
        <FaInstagram className="text-2xl" />
        Agendar via Instagram
      </CTAButton>
    </GlassCard>
  </div>
);
