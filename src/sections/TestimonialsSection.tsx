import { testimonials } from '../data/testimonials';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TestimonialCard } from '../components/features/TestimonialCard';
import { SectionContainer } from '../components/layout/SectionContainer';

export const TestimonialsSection = () => (
  <SectionContainer>
    <SectionHeading
      title="✨ Mulheres que já viveram a experiência VIP"
      description="Resultado natural, resistente e sem dor. Leia o que elas dizem."
    />
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <FadeIn key={testimonial.id} delay={index * 0.1}>
          <TestimonialCard testimonial={testimonial} delay={index * 0.1} />
        </FadeIn>
      ))}
    </div>
  </SectionContainer>
);
