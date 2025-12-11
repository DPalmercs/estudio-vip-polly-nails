import { bonuses } from '../data/bonuses';
import { CTAButton } from '../components/ui/CTAButton';
import { WHATSAPP_URL } from '../data/constants';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionContainer } from '../components/layout/SectionContainer';
import { BonusCard } from './components/BonusCard';

export const BonusesSection = () => (
  <SectionContainer>
    <SectionHeading
      title="🎁 O que você ganha nesta oferta"
      description={
        <>
          Valor total dos bônus: <span className="text-rose-600 font-bold text-xl">R$ 205</span>
        </>
      }
    />

    <div className="grid gap-6 md:grid-cols-2">
      {bonuses.map((bonus, index) => (
        <BonusCard key={bonus.id} bonus={bonus} delay={index * 0.1} />
      ))}
    </div>

    <div className="mt-10 text-center">
      <CTAButton href={WHATSAPP_URL}>
        <span role="img" aria-label="Whatsapp">
          💬
        </span>
        SIM, EU QUERO TODOS OS BÔNUS!
      </CTAButton>
    </div>
  </SectionContainer>
);
