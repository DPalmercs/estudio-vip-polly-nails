import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  paddingClass?: string;
};

export const GlassCard = ({ children, className, paddingClass = 'p-6', ...rest }: GlassCardProps) => (
  <div
    {...rest}
    className={clsx('rounded-2xl border border-white/20 bg-white/10 backdrop-blur', paddingClass, className)}
  >
    {children}
  </div>
);
