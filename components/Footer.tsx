
import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS, CLINIC_NAME, PHONE, WHATSAPP_NUMBER, INSTAGRAM, DOCTOR_NAME } from '../constants';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const year = new Date().getFullYear();
  const isRtl = currentLang === 'AR';

  return (
    <footer className={`bg-white border-t border-slate-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 ${isRtl ? 'direction-rtl' : ''}`}>
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <Link to="/" className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <span className="text-2xl font-serif font-bold tracking-tight text-teal-800 leading-tight">
                Dr. Sabrine Chtouki
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mt-1">
                Cabinet Dentaire
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              {t.aboutContent.substring(0, 100)}...
            </p>
            <div className={`flex items-center space-x-4 ${isRtl ? 'space-x-reverse justify-end' : ''}`}>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-50 hover:text-pink-600 transition-all">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-50 hover:text-green-600 transition-all">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase tracking-widest text-[10px]">{t.home}</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-bold">{t.home}</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-bold">{t.about}</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-bold">{t.contact}</Link></li>
              <li><Link to="/contact" className="text-teal-600 font-black text-sm">{t.appointment}</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Info */}
          <div>
            <h4 className="text-slate-900 font-black mb-8 uppercase tracking-widest text-[10px]">{t.workingHours}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex justify-between">
                <span className="font-bold">Lun - Ven:</span>
                <span className="font-black text-slate-700 tracking-tighter">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Samedi:</span>
                <span className="font-black text-slate-700 tracking-tighter">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-bold">Dimanche:</span>
                <span className="text-red-500 font-black">{t.statusClosed}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-slate-900 font-black mb-2 uppercase tracking-widest text-[10px]">Contact</h4>
            <div className="space-y-4">
              <a href={`tel:${PHONE}`} className={`flex items-start group ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all ${isRtl ? 'ml-3' : 'mr-3'}`}>
                  <i className="fa-solid fa-phone text-xs"></i>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Téléphone</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight">{PHONE}</p>
                </div>
              </a>
              <div className={`flex items-start group ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 ${isRtl ? 'ml-3' : 'mr-3'}`}>
                  <i className="fa-solid fa-location-dot text-xs"></i>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Adresse</p>
                  <p className="text-sm font-bold text-slate-500 leading-relaxed">Residence Al Mansour, Bd Zerktouni, Casablanca</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <div className={isRtl ? 'order-2' : ''}>
            © {year} {CLINIC_NAME} - {t.footerRights}
          </div>
          <div className={`flex items-center ${isRtl ? 'order-1' : ''}`}>
             <span className="opacity-50">Handcrafted with</span> 
             <i className="fa-solid fa-heart text-red-500 mx-2 animate-pulse"></i> 
             <span className="opacity-50">for Dr. Sabrine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
