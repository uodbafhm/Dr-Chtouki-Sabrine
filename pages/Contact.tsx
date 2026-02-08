
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSLATIONS, PHONE, SERVICES, MAPS_URL } from '../constants';
import { Language } from '../types';

interface ContactProps {
  currentLang: Language;
}

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'AR';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const hours = [
    { day: "Lundi", time: "09:00–17:00" },
    { day: "Mardi", time: "09:00–17:00" },
    { day: "Mercredi", time: "09:00–17:00" },
    { day: "Jeudi", time: "09:00–17:00" },
    { day: "Vendredi", time: "09:00–17:00" },
    { day: "Samedi", time: "09:00–13:00" },
    { day: "Dimanche", time: "Fermé" },
  ];

  return (
    <div className={`pt-32 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl mb-16 ${isRtl ? 'ml-auto' : ''}`}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 leading-tight">
            {t.appointment}
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-bold">
            {currentLang === 'AR' 
              ? "يرجى ملء الاستمارة أدناه لطلب موعد. سيتصل بك فريقنا في أقرب وقت ممكن لتأكيد الموعد."
              : "Remplissez le formulaire ci-dessous pour demander un rendez-vous. Notre équipe vous contactera dans les plus brefs délais pour confirmer l'heure."
            }
          </p>
        </motion.div>

        {/* Fixing the Decalage: Using items-stretch to ensure cards have the same height */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-24">
          
          {/* Working Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[3rem] shadow-xl border-teal-50 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-black text-teal-800 mb-8 flex items-center">
                <i className={`fa-solid fa-clock ${isRtl ? 'ml-3' : 'mr-3'} text-teal-500`}></i> {t.workingHours}
              </h3>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className={`flex justify-between items-center py-3 border-b border-slate-100 last:border-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="font-bold text-slate-700">{h.day}</span>
                    <span className={`text-sm tracking-tight ${h.time === 'Fermé' ? 'text-red-500 font-black' : 'text-slate-500 font-bold'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 space-y-6">
              <a href={`tel:${PHONE}`} className={`flex items-center group p-4 rounded-2xl hover:bg-teal-50/50 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className={`w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all ${isRtl ? 'ml-4' : 'mr-4'}`}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest mb-0.5">Appelez-nous</p>
                  <p className="font-black text-slate-800 text-lg tracking-tight">{PHONE}</p>
                </div>
              </a>
              <a href="mailto:sabrinechtouki@gmail.com" className={`flex items-center group p-4 rounded-2xl hover:bg-teal-50/50 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className={`w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all ${isRtl ? 'ml-4' : 'mr-4'}`}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black text-slate-400 tracking-widest mb-0.5">E-mail</p>
                  <p className="font-black text-slate-800 text-lg tracking-tight">sabrinechtouki@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-50 flex flex-col"
          >
            <AnimatePresence mode='wait'>
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 flex flex-col h-full"
                >
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t.formName}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={isRtl ? "اسمك الكامل" : "Votre nom"} 
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-50 transition-all outline-none font-bold ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={isRtl ? 'text-right' : 'text-left'}>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t.formPhone}</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="06..." 
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-50 transition-all outline-none font-bold ${isRtl ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                    <div className={isRtl ? 'text-right' : 'text-left'}>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t.formEmail}</label>
                      <input 
                        type="email" 
                        placeholder="email@..." 
                        className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-50 transition-all outline-none font-bold ${isRtl ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t.formService}</label>
                    <div className="relative">
                      <select className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-50 transition-all outline-none appearance-none font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{s.translations[currentLang].title}</option>)}
                        <option value="other">{isRtl ? "استشارة أخرى" : "Autre consultation"}</option>
                      </select>
                      <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-6' : 'right-6'} pointer-events-none text-slate-400`}>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t.formMessage}</label>
                    <textarea 
                      rows={3}
                      placeholder={isRtl ? "كيف يمكننا مساعدتك؟" : "Comment pouvons-nous vous aider ?"} 
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-50 transition-all outline-none resize-none font-bold ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="mt-auto pt-6">
                    <button 
                      type="submit"
                      className="w-full py-5 bg-teal-600 text-white font-black rounded-2xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 transform active:scale-95 text-lg uppercase tracking-widest"
                    >
                      {t.formSubmit}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center my-auto"
                >
                  <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner shadow-teal-200/50">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">{isRtl ? "تم إرسال الطلب!" : "Demande Envoyée !"}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs mx-auto font-bold">
                    {t.successMsg}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-teal-600 font-black hover:underline uppercase text-xs tracking-widest"
                  >
                    {t.backToForm}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl -mr-16 -mt-16" />
          </motion.div>
        </div>
      </div>

      {/* TRULY WIDE MAP SECTION (BREAKING CONTAINER) */}
      <section className="relative h-[600px] w-full mt-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fafbfd] to-transparent z-10 pointer-events-none" />
        <iframe 
          src={MAPS_URL}
          className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-1000"
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        
        {/* Map Overlay Button */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
           <a 
             href="https://maps.app.goo.gl/yB5N1VQivcoRRVXh8" 
             target="_blank" 
             rel="noreferrer"
             className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
           >
             <i className="fa-brands fa-google text-teal-400"></i>
             <span className="text-sm uppercase tracking-widest">{t.mapsCTA}</span>
           </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
