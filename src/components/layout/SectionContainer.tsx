import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionPadding = 'default' | 'compact' | 'relaxed';
type SectionWidth = 'wide' | 'medium' | 'narrow';

const PADDING_CLASS_MAP: Record<SectionPadding, string> = {
  default: 'py-20 px-4',
  compact: 'py-12 px-4',
  relaxed: 'py-24 px-4',
};

const WIDTH_CLASS_MAP: Record<SectionWidth, string> = {
  wide: 'max-w-5xl',
  medium: 'max-w-4xl',
  narrow: 'max-w-3xl',
};

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  backgroundClass?: string;
  maxWidth?: SectionWidth;
  padding?: SectionPadding;
  id?: string;
};

export const SectionContainer = ({
  children,
  className,
  innerClassName,
  backgroundClass = 'bg-white',
  maxWidth = 'wide',
  padding = 'default',
  id,
}: SectionContainerProps) => (
  <section id={id} className={clsx(backgroundClass, PADDING_CLASS_MAP[padding], className)}>
    <div className={clsx('mx-auto', WIDTH_CLASS_MAP[maxWidth], innerClassName)}>{children}</div>
  </section>
);
