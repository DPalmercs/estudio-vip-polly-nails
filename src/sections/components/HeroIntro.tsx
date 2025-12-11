import { memo } from 'react';
import { FaGift } from 'react-icons/fa6';
import { FadeIn } from '../../components/ui/FadeIn';

export const HeroIntro = memo(() => (
  <FadeIn className="flex flex-col items-center">
    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
      <FaGift /> Presente Exclusivo Desbloqueado
    </div>
    <h1 className="text-4xl font-bold text-stone-900 md:text-6xl">
      🎁 Bem-vinda ao{' '}
      <span className="bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent">Studio VIP</span>
    </h1>
    <p className="mt-4 text-lg text-stone-700 md:text-2xl">
      Você ganhou <strong className="text-rose-600">15% OFF + 3 bônus</strong> na sua primeira sessão com Polly Caixeta —
      mas essa oferta expira em:
    </p>
  </FadeIn>
));
