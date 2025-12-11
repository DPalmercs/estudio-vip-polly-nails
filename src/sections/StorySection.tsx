import { painPoints } from '../data/painPoints';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionContainer } from '../components/layout/SectionContainer';
import { PainList } from './components/PainList';
import { PainMessage } from './components/PainMessage';

export const StorySection = () => (
  <SectionContainer backgroundClass="bg-stone-900" className="text-white" maxWidth="medium">
    <SectionHeading
      title="Se você já passou por isso, não está sozinha…"
      align="center"
      className="text-white"
      description="Dor, infiltração e vergonha nunca deveriam fazer parte da sua rotina."
    />

    <PainList pains={painPoints} />
    <PainMessage />
  </SectionContainer>
);
