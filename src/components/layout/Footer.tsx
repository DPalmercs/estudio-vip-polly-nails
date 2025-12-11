import { FaInstagram } from 'react-icons/fa6';
import { INSTAGRAM_URL, STUDIO_INFO } from '../../data/constants';

export const Footer = () => (
  <footer className="bg-stone-950 px-4 py-8 text-stone-400">
    <div className="mx-auto max-w-4xl text-center">
      <p>&copy; {new Date().getFullYear()} Studio VIP - {STUDIO_INFO.owner}</p>
      <p className="mt-2 text-xs">
        📍 {STUDIO_INFO.city} | 📱 WhatsApp: {STUDIO_INFO.phone}
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-2 text-xs text-stone-300 hover:text-yellow-500"
      >
        <FaInstagram /> @pollycaixeta.nails
      </a>
    </div>
  </footer>
);
