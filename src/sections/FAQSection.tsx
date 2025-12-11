import { faqs } from '../data/faq';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQItem } from '../components/features/FAQItem';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionContainer } from '../components/layout/SectionContainer';

export const FAQSection = () => (
  <SectionContainer backgroundClass="bg-stone-100" maxWidth="narrow">
    <SectionHeading title="❓ Perguntas frequentes" />
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FadeIn key={faq.id} delay={index * 0.05}>
          <FAQItem item={faq} />
        </FadeIn>
      ))}
    </div>
  </SectionContainer>
);
