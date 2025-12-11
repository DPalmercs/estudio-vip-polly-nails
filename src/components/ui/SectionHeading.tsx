import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export const SectionHeading = ({ eyebrow, title, description, align = 'center', className }: SectionHeadingProps) => (
  <div className={clsx('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">{eyebrow}</p>}
    <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">{title}</h2>
    {description && <p className="mt-3 text-lg text-stone-600">{description}</p>}
  </div>
);
