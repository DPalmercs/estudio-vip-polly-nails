import { FaWhatsapp } from 'react-icons/fa6';
import clsx from 'clsx';
import { useStickyCTA } from '../../hooks/useStickyCTA';
import { WHATSAPP_URL } from '../../data/constants';

export const StickyCTA = () => {
  const visible = useStickyCTA();

  return (
    <div className={clsx('sticky-cta bg-gradient-to-r from-yellow-500 to-amber-600 px-4 py-3 md:hidden', { visible })}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full text-lg font-bold text-white"
      >
        <FaWhatsapp className="text-xl" /> GARANTIR 15% OFF
      </a>
    </div>
  );
};
