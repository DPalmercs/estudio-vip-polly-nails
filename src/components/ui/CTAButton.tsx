import type { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  block?: boolean;
};

export const CTAButton = ({
  children,
  className,
  variant = 'primary',
  block = false,
  ...rest
}: CTAButtonProps) => (
  <a
    {...rest}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      'font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl',
      variant === 'primary'
        ? 'cta-pulse bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:shadow-yellow-500/50'
        : 'bg-white/10 text-white border border-white/30 hover:bg-white/20',
      block ? 'w-full py-4 px-6 text-lg' : 'px-10 py-5 text-xl',
      className,
    )}
  >
    {children}
  </a>
);
