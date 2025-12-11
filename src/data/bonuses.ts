import { FaBoxOpen, FaMicroscope, FaPercent, FaWhatsapp } from 'react-icons/fa6';
import type { Bonus } from '../types/content';

export const bonuses = [
  {
    id: 1,
    title: '15% OFF na Primeira Sessão',
    description: 'Desconto aplicado diretamente no valor da aplicação ou manutenção.',
    value: 'Economia: R$ 45 - R$ 80',
    highlight: 'Inclui aplicação completa ou manutenção',
    icon: FaPercent,
    borderClass: 'border-yellow-300',
    backgroundClass: 'from-yellow-50 to-amber-50',
  },
  {
    id: 2,
    title: 'Diagnóstico 3D da Lâmina',
    description: 'Análise profissional de espessura, hidratação e histórico de traumas.',
    value: 'Valor: R$ 80 — GRÁTIS',
    highlight: 'Relatório com orientações personalizadas',
    icon: FaMicroscope,
    borderClass: 'border-rose-300',
    backgroundClass: 'from-rose-50 to-pink-50',
  },
  {
    id: 3,
    title: 'Kit Casa Anti-Infiltração',
    description: 'Produtos profissionais para prolongar a durabilidade em casa.',
    value: 'Valor: R$ 45 — GRÁTIS',
    highlight: 'Passo a passo para manutenção diária',
    icon: FaBoxOpen,
    borderClass: 'border-stone-300',
    backgroundClass: 'from-stone-50 to-stone-100',
  },
  {
    id: 4,
    title: 'Suporte WhatsApp 30 Dias',
    description: 'Follow-up direto com Polly + vídeo tutorial personalizado.',
    value: 'Valor: Inestimável — INCLUSO',
    highlight: 'Resposta em até 2 horas úteis',
    icon: FaWhatsapp,
    borderClass: 'border-emerald-300',
    backgroundClass: 'from-green-50 to-emerald-50',
  },
] as const satisfies Bonus[];
