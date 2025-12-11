import type { FAQ } from '../types/content';

export const faqs = [
  {
    id: 1,
    question: 'Quanto tempo dura a aplicação?',
    answer:
      'Entre 20 e 30 dias sem infiltração, descamação ou descolamento. Com os cuidados que ensino, você mantém as unhas perfeitas por 1 mês completo.',
  },
  {
    id: 2,
    question: 'O processo dói?',
    answer:
      'Não. Dor não é normal. Se você já sentiu dor em outros lugares, foi erro técnico (lixamento excessivo ou química agressiva). Aqui o processo é 100% indolor.',
  },
  {
    id: 3,
    question: 'E se eu não gostar do resultado?',
    answer:
      'Você tem 30 dias de garantia. Se houver infiltração, descamação ou insatisfação com o acabamento, eu refaço gratuitamente — sem burocracia.',
  },
  {
    id: 4,
    question: 'Posso usar essa oferta na manutenção?',
    answer:
      'Sim! O desconto de 15% + bônus vale tanto para aplicação completa quanto para manutenção. Você escolhe o que precisa agora.',
  },
  {
    id: 5,
    question: 'Como funciona o agendamento?',
    answer:
      'Clique no botão do WhatsApp, envie a mensagem e eu respondo em até 2 horas com o link da agenda para você escolher o melhor horário.',
  },
] as const satisfies FAQ[];
