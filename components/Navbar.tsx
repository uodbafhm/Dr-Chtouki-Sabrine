
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { TRANSLATIONS, PHONE, INSTAGRAM } from '../constants';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLangChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'FR', label: 'FR', flag: '🇫🇷' },
    { code: 'AR', label: 'AR', flag: '🇲🇦' },
    { code: 'EN', label: 'EN', flag: '🇬🇧' },
    { code: 'ES', label: 'ES', flag: '🇪🇸' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const isRtl = currentLang === 'AR';

  useEffect(() => {
    if (isMenuOpen || isLangOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen, isLangOpen]);

  const menuVariants = {
    closed: { x: '100%', opacity: 0 },
    opened: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30, 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 }
  };

  const currentLangObj = languages.find(l => l.code === currentLang);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] glass shadow-sm h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className={`flex justify-between h-full items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Logo Section */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
              <span className="text-xl font-serif font-bold tracking-tight text-teal-800 leading-tight">
                Dr. Sabrine Chtouki
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Cabinet Dentaire
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center space-x-8 ${isRtl ? 'space-x-reverse' : ''}`}>
              {[
                { path: '/', label: t.home },
                { path: '/about', label: t.about },
                { path: '/contact', label: t.contact }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-teal-600 relative py-1 ${
                    isActive(link.path) ? 'text-teal-700' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                    />
                  )}
                </Link>
              ))}

              <button
                onClick={() => setIsLangOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-100 bg-teal-50/30 hover:bg-teal-50 transition-all text-slate-700 text-sm font-bold"
              >
                <span className="text-base">{currentLangObj?.flag}</span>
                <span className="tracking-widest">{currentLangObj?.label}</span>
              </button>

              <Link
                to="/contact"
                className="px-6 py-3 bg-teal-600 text-white text-sm font-bold rounded-full hover:bg-teal-700 transition-all shadow-lg"
              >
                {t.appointment}
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-12 h-12 flex items-center justify-center text-slate-800 bg-slate-50 rounded-2xl active:scale-90 transition-transform"
              >
                <i className="fa-solid fa-bars-staggered text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-white flex flex-col md:hidden"
          >
            {/* Menu Header */}
            <div className={`px-6 h-20 flex justify-between items-center border-b border-slate-100 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                <span className="text-xl font-serif font-bold text-teal-800">Dr. Sabrine Chtouki</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cabinet Dentaire</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="w-12 h-12 flex items-center justify-center text-slate-800 text-2xl bg-slate-100 rounded-2xl active:scale-90 transition-transform"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-grow flex flex-col justify-center px-8 py-10 space-y-8 overflow-y-auto">
              {[
                { path: '/', label: t.home },
                { path: '/about', label: t.about },
                { path: '/contact', label: t.contact }
              ].map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-5xl font-serif font-bold transition-all tracking-tight ${
                      isActive(link.path) ? 'text-teal-600' : 'text-slate-900'
                    } ${isRtl ? 'text-right' : 'text-left'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-6">
                 <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-6 bg-teal-600 text-white text-center text-xl font-bold rounded-3xl shadow-xl shadow-teal-100"
                >
                  {t.appointment}
                </Link>
              </motion.div>
            </div>

            {/* Footer with Contact/Language */}
            <div className={`p-8 bg-slate-50 border-t border-slate-100 ${isRtl ? 'text-right' : 'text-left'}`}>
               <div className="mb-8">
                  <button 
                    onClick={() => { setIsLangOpen(true); setIsMenuOpen(false); }}
                    className="w-full py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center shadow-sm"
                  >
                    <span className="text-xl mr-2">{currentLangObj?.flag}</span>
                    <span className="tracking-widest">{currentLangObj?.label}</span>
                  </button>
               </div>
               <div className={`flex justify-center space-x-6 ${isRtl ? 'space-x-reverse' : ''}`}>
                  <a href={`tel:${PHONE}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 text-xl shadow-sm">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  <a href="https://wa.me/0666427742" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-500 text-xl shadow-sm">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href={INSTAGRAM} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pink-500 text-xl shadow-sm">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Bottom Sheet Overlay */}
      <AnimatePresence>
        {isLangOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsLangOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[120] bg-white rounded-t-[3rem] p-10 pb-16 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center font-serif tracking-tight">Select Language</h3>
              <div className="grid grid-cols-2 gap-4">
                 {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLangChange(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-3 px-4 py-5 rounded-2xl border-2 transition-all ${
                      currentLang === lang.code ? 'bg-teal-600 border-teal-600 text-white shadow-lg' : 'bg-slate-50 border-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-lg font-bold tracking-widest">{lang.label}</span>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setIsLangOpen(false)}
                className="mt-8 w-full text-slate-400 font-bold text-sm uppercase tracking-widest"
              >
                Annuler
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
