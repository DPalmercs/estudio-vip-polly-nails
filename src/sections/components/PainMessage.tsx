import { memo } from 'react';
import { FadeIn } from '../../components/ui/FadeIn';

export const PainMessage = memo(() => (
  <FadeIn className="mt-10 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-6 text-center">
    <p className="text-xl text-yellow-200">
      <strong className="font-bold text-yellow-300">A verdade?</strong> O problema nunca foi você. Foi a técnica errada.
    </p>
    <p className="mt-3 text-stone-300">
      Por isso criei o <strong className="text-white">Método Arquitetura Inteligente®</strong> para que você nunca mais passe por isso.
    </p>
  </FadeIn>
));
