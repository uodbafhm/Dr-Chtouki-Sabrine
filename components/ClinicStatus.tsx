
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ClinicStatusProps {
  currentLang: Language;
}

const ClinicStatus: React.FC<ClinicStatusProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // Mon-Fri: 9:00 - 17:00 (540 - 1020 mins)
      const isWeekday = day >= 1 && day <= 5;
      const weekdayOpen = 540;
      const weekdayClose = 1020;

      // Sat: 9:00 - 13:00 (540 - 780 mins)
      const isSaturday = day === 6;
      const saturdayOpen = 540;
      const saturdayClose = 780;

      if (isWeekday) {
        setIsOpen(currentTimeInMinutes >= weekdayOpen && currentTimeInMinutes < weekdayClose);
      } else if (isSaturday) {
        setIsOpen(currentTimeInMinutes >= saturdayOpen && currentTimeInMinutes < saturdayClose);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700 animate-pulse'}`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
      {isOpen ? t.statusOpen : t.statusClosed}
    </div>
  );
};

export default ClinicStatus;
