import { useCallback, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import type { FAQ } from '../../types/content';

type FAQItemProps = {
  item: FAQ;
};

export const FAQItem = ({ item }: FAQItemProps) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={toggle}
        type="button"
        aria-expanded={open}
        aria-controls={`faq-panel-${item.id}`}
        id={`faq-trigger-${item.id}`}
      >
        <h3 className="text-lg font-bold text-stone-900">{item.question}</h3>
        <FaChevronDown
          className="text-stone-500 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </button>
      <div
        id={`faq-panel-${item.id}`}
        className={`faq-answer mt-4 text-stone-600 ${open ? 'open' : ''}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};
