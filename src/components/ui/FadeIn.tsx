import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export const FadeIn = ({ className, children, delay = 0, style, ...rest }: FadeInProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const inlineStyle: CSSProperties = {
    ...style,
    transitionDelay: `${delay}s`,
  };

  return (
    <div ref={ref} className={clsx('fade-in-up', { 'is-visible': isVisible }, className)} {...rest} style={inlineStyle}>
      {children}
    </div>
  );
};
