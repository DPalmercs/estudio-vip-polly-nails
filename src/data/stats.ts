import type { OfferSummary, Stat } from '../types/content';
import { FaCircleCheck, FaShieldHalved, FaWhatsapp } from 'react-icons/fa6';

export const heroStats = [
  {
    id: 1,
    value: '+7',
    label: 'Anos',
    accentClass: 'text-yellow-600',
  },
  {
    id: 2,
    value: '+719',
    label: 'Seguidoras',
    accentClass: 'text-rose-600',
  },
  {
    id: 3,
    value: '+1.200',
    label: 'Procedimentos',
    accentClass: 'text-stone-800',
  },
] as const satisfies Stat[];

export const offerSummary = [
  {
    id: 1,
    label: '15% OFF na primeira sessão',
    icon: FaCircleCheck,
  },
  {
    id: 2,
    label: 'Diagnóstico 3D (R$ 80) grátis',
    icon: FaCircleCheck,
  },
  {
    id: 3,
    label: 'Guia Blindagem (R$ 45) grátis',
    icon: FaCircleCheck,
  },
  {
    id: 4,
    label: 'Suporte WhatsApp 30 dias incluso',
    icon: FaWhatsapp,
  },
  {
    id: 5,
    label: 'Garantia de 30 dias ou refaz grátis',
    icon: FaShieldHalved,
  },
] as const satisfies OfferSummary[];
