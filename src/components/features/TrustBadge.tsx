import { FaUsers } from 'react-icons/fa6';
import { useDailyBookings } from '../../hooks/useDailyBookings';

export const TrustBadge = () => {
  const bookings = useDailyBookings();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-4 py-2 text-sm text-emerald-700 font-semibold">
      <FaUsers />
      <span>{bookings} mulheres já agendaram hoje</span>
    </div>
  );
};
