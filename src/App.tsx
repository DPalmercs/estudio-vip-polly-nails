import { HeroSection } from './sections/HeroSection';
import { BonusesSection } from './sections/BonusesSection';
import { StorySection } from './sections/StorySection';
import { AboutSection } from './sections/AboutSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { StickyCTA } from './components/features/StickyCTA';
import { Footer } from './components/layout/Footer';
import { usePersistentCountdown } from './hooks/usePersistentCountdown';
import { OfferExpired } from './components/features/OfferExpired';

const App = () => {
  const countdown = usePersistentCountdown();

  if (countdown.isExpired) {
    return <OfferExpired />;
  }

  return (
    <div className="bg-stone-50 text-stone-900">
      <HeroSection countdown={countdown} />
      <BonusesSection />
      <StorySection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection countdown={countdown} />
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default App;
