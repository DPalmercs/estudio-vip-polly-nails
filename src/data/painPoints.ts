import { FaFire, FaHand, FaHeartCrack } from 'react-icons/fa6';
import type { PainPoint } from '../types/content';

export const painPoints = [
  {
    id: 1,
    title: 'Infiltração verde ou amarela em 3 dias',
    description:
      'Você sai do salão com unhas impecáveis e, dias depois, aquela mancha vergonhosa aparece. O problema nunca foi você, e sim a técnica errada.',
    icon: FaHeartCrack,
    borderClass: 'border-red-500',
  },
  {
    id: 2,
    title: 'Dor, queimação e sensibilidade extrema',
    description:
      'Lavar louça vira tortura e o banho arde. Se alguém disse que “é normal”, mentiu. Procedimentos corretos são 100% indolores.',
    icon: FaFire,
    borderClass: 'border-orange-500',
  },
  {
    id: 3,
    title: 'Unhas “bolachudas” que atrapalham tudo',
    description:
      'Você queria elegância, mas ficou com garras desproporcionais. O teclado incomoda, a bolsa prende, e a confiança some em reuniões.',
    icon: FaHand,
    borderClass: 'border-yellow-500',
  },
] as const satisfies PainPoint[];
