import type { Testimonial } from '../types/content';

export const testimonials = [
  {
    id: 1,
    name: 'Lívia Andrade',
    role: 'Sócia e mãe, 33 anos',
    quote:
      'Cheguei com infiltração e trauma de outra profissional. Saí chorando de emoção. Minhas unhas cresceram fortes e naturais.',
    initials: 'L',
  },
  {
    id: 2,
    name: 'Bárbara P.',
    role: 'Empresária, 29 anos',
    quote:
      'Nunca tive atendimento tão completo. Polly explicou cada etapa e me mandou um vídeo com cuidados personalizados.',
    initials: 'B',
  },
  {
    id: 3,
    name: 'Camila R.',
    role: 'Arquiteta, 41 anos',
    quote:
      'Primeira profissional que me mostrou a autoclave e explicou química. Minhas unhas nunca ficaram tão naturais e resistentes.',
    initials: 'C',
  },
] as const satisfies Testimonial[];
