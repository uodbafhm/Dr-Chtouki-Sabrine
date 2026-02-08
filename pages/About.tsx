
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS, DOCTOR_NAME, INSTAGRAM, PHONE } from '../constants';
import { Language } from '../types';

interface AboutProps {
  currentLang: Language;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'AR';

  return (
    <div className={`pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className={`grid lg:grid-cols-2 gap-20 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 rounded-full border-[15px] border-teal-50 animate-pulse" />
            <div className="absolute inset-6 rounded-full overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(13,148,136,0.3)]">
              <img 
                src="https://i.postimg.cc/Y9WbNnrS/imgi-33-551376620-1531516427841415-6206314990620653415-n.jpg" 
                alt={DOCTOR_NAME} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className={`absolute -bottom-4 ${isRtl ? '-left-4' : '-right-4'} glass p-8 rounded-[2.5rem] shadow-2xl border-teal-100`}
            >
              <div className="text-5xl font-black text-teal-600 mb-1">10+</div>
              <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">{t.experienceYear}</div>
            </motion.div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={`flex items-center space-x-3 ${isRtl ? 'flex-row-reverse space-x-reverse' : ''} mb-6`}>
             <div className="w-10 h-0.5 bg-teal-500" />
             <span className="text-teal-600 font-black uppercase tracking-[0.3em] text-xs">{t.about}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-10">
            {t.doctorName}
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-bold">
            {t.aboutContent}
          </p>
          
          <div className={`grid grid-cols-2 gap-12 mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div>
              <h4 className="text-xl font-black text-teal-800 mb-6 flex items-center">
                 <i className={`fa-solid fa-stethoscope ${isRtl ? 'ml-3' : 'mr-3'} text-teal-500`}></i> {t.specialties}
              </h4>
              <ul className="text-slate-600 space-y-4 font-bold">
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-teal-400 text-[8px] mr-3"></i> Chirurgie Dentaire</li>
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-teal-400 text-[8px] mr-3"></i> Orthodontie Esthétique</li>
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-teal-400 text-[8px] mr-3"></i> Implantologie</li>
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-teal-400 text-[8px] mr-3"></i> Blanchiment Laser</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black text-teal-800 mb-6 flex items-center">
                 <i className={`fa-solid fa-graduation-cap ${isRtl ? 'ml-3' : 'mr-3'} text-teal-500`}></i> {t.diplomas}
              </h4>
              <ul className="text-slate-600 space-y-4 font-bold">
                <li className="flex items-center"><i className="fa-solid fa-award text-teal-400 text-[8px] mr-3"></i> Doctorat Médecine Dentaire</li>
                <li className="flex items-center"><i className="fa-solid fa-award text-teal-400 text-[8px] mr-3"></i> Master en Orthodontية</li>
                <li className="flex items-center"><i className="fa-solid fa-award text-teal-400 text-[8px] mr-3"></i> Certificat Implantologie</li>
              </ul>
            </div>
          </div>

          <div className={`flex flex-wrap gap-6 ${isRtl ? 'justify-end' : ''}`}>
             <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95"
            >
              <i className="fa-brands fa-instagram mr-3"></i> Instagram
            </a>
            <a
              href={`https://wa.me/${PHONE.replace(/\s/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-8 py-4 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 transition-all shadow-xl active:scale-95"
            >
              <i className="fa-brands fa-whatsapp mr-3"></i> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <section className="mt-40 grid md:grid-cols-3 gap-10">
        {[
          { icon: "fa-shield-halved", title: "Hygiène & Sécurité", text: "Protocoles de stérilisation rigoureux certifiés pour votre sécurité." },
          { icon: "fa-microchip", title: "Technologie 3D", text: "Utilisation de scanners intra-oraux et radiographie numérique." },
          { icon: "fa-wand-magic-sparkles", title: "Sourire Sur-Mesure", text: "Chaque plan de traitement est unique et adapté à votre morphologie." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem] border-teal-50 flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-20 h-20 rounded-3xl bg-teal-50 flex items-center justify-center text-teal-600 text-3xl mb-8">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-bold">{item.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;
