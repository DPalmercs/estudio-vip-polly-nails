import { memo } from 'react';
import type { Testimonial } from '../../types/content';
import { FaStar } from 'react-icons/fa6';

type TestimonialCardProps = {
  testimonial: Testimonial;
  delay?: number;
};

export const TestimonialCard = memo(({ testimonial, delay = 0 }: TestimonialCardProps) => (
  <div
    className="testimonial-card rounded-2xl bg-stone-50 p-6 shadow-lg transition-all"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-stone-500 to-stone-700 text-xl font-bold text-white">
        {testimonial.initials}
      </div>
      <div>
        <p className="font-bold text-stone-900">{testimonial.name}</p>
        <p className="text-xs text-stone-500">{testimonial.role}</p>
      </div>
    </div>
    <div className="mb-3 flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
    <p className="text-stone-700 italic">"{testimonial.quote}"</p>
  </div>
));
