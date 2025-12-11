import clsx from 'clsx';

type GlowPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type GlowSize = 'md' | 'lg' | 'xl';
type GlowTone = 'yellow-soft' | 'yellow-deep' | 'rose-soft' | 'rose-deep';
type GlowOffset = 'tight' | 'spacious';

export type GlowConfig = {
  position: GlowPosition;
  size?: GlowSize;
  tone: GlowTone;
  offset?: GlowOffset;
};

type BackgroundGlowProps = {
  glows: GlowConfig[];
  className?: string;
};

const SIZE_CLASS_MAP: Record<GlowSize, string> = {
  md: 'h-64 w-64',
  lg: 'h-80 w-80',
  xl: 'h-96 w-96',
};

const TONE_CLASS_MAP: Record<GlowTone, string> = {
  'yellow-soft': 'bg-yellow-400',
  'yellow-deep': 'bg-yellow-600',
  'rose-soft': 'bg-rose-300',
  'rose-deep': 'bg-rose-600',
};

const OFFSET_VALUE_MAP: Record<GlowOffset, string> = {
  tight: '10',
  spacious: '20',
};

const buildPositionClasses = (position: GlowPosition, offset: GlowOffset) => {
  const value = OFFSET_VALUE_MAP[offset];
  switch (position) {
    case 'top-left':
      return `top-${value} left-${value}`;
    case 'top-right':
      return `top-${value} right-${value}`;
    case 'bottom-left':
      return `bottom-${value} left-${value}`;
    case 'bottom-right':
    default:
      return `bottom-${value} right-${value}`;
  }
};

export const BackgroundGlow = ({ glows, className }: BackgroundGlowProps) => (
  <div className={clsx('pointer-events-none absolute inset-0 opacity-10', className)}>
    {glows.map((glow, index) => {
      const sizeClass = SIZE_CLASS_MAP[glow.size ?? 'md'];
      const toneClass = TONE_CLASS_MAP[glow.tone];
      const positionClass = buildPositionClasses(glow.position, glow.offset ?? 'tight');
      return (
        <div key={index} className={clsx('absolute rounded-full blur-3xl', sizeClass, toneClass, positionClass)} />
      );
    })}
  </div>
);
