import { FaAward, FaCircleCheck } from 'react-icons/fa6';
import PollyHero from '../assets/images/polly-hero.webp';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionContainer } from '../components/layout/SectionContainer';

const achievements = [
  'Especialista em fibra e molde F1',
  'Protocolos hospitalares de biossegurança',
  'Criadora do método Arquitetura Inteligente®',
  '1.200+ procedimentos sem intercorrências',
];

export const AboutSection = () => (
  <SectionContainer
    backgroundClass="bg-gradient-to-br from-amber-50 to-rose-50"
    innerClassName="rounded-3xl bg-white shadow-2xl"
  >
    <div className="grid items-stretch md:grid-cols-2">
      <FadeIn className="relative h-full">
        <div className="relative h-full w-full overflow-hidden">
          <img src={PollyHero} alt="Polly Caixeta" className="h-full w-full object-cover" width={640} height={853} loading="lazy" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 font-bold text-white">
            <FaAward /> 7+ anos
          </div>
        </div>
      </FadeIn>
      <FadeIn className="p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-stone-500">Quem é a Polly?</p>
        <h2 className="mt-4 text-3xl font-bold text-stone-900">Oi, eu sou a Polly 👋</h2>
        <p className="mt-4 text-stone-700">
          Fundadora do <strong>Studio VIP Nails</strong> em Uberlândia-MG. Há mais de 7 anos, resgato unhas traumatizadas por técnicas erradas.
        </p>
        <p className="mt-4 text-stone-700">
          Sou pioneira em usar <strong>protocolos hospitalares de biossegurança</strong> aplicados à estética das mãos e criadora do método{' '}
          <strong>Arquitetura Inteligente</strong>.
        </p>
        <div className="mt-6 space-y-3">
          {achievements.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05} className="flex items-center gap-3 text-stone-700">
              <FaCircleCheck className="text-green-600" />
              <span>{item}</span>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  </SectionContainer>
);
